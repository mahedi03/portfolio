import { NextResponse } from "next/server";

const githubApi = "https://api.github.com";
const postsPath = "src/data/generated-posts.json";

function authorized(request: Request) {
  const secret = process.env.AUTOBLOG_WEBHOOK_SECRET;
  if (!secret) return false;
  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  return bearer === secret || request.headers.get("x-autoblog-secret") === secret;
}

function htmlToText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi, "\n\n## $1\n\n")
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1")
    .replace(/<\/(p|div|blockquote|ul|ol)>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function toPost(payload: Record<string, unknown>) {
  const title = String(payload.seo_title || payload.title || "").trim();
  const slug = String(payload.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-")).replace(/^-|-$/g, "");
  const description = String(payload.meta_description || payload.excerpt || "").trim();
  const html = String(payload.content_html || payload.content || "");
  const tags = Array.isArray(payload.suggested_tags) ? payload.suggested_tags.map(String) : [];
  const content = htmlToText(html);
  if (!title || !content) throw new Error("seo_title and content_html are required");

  return {
    slug, title, excerpt: description || content.slice(0, 155), content,
    coverImage: "/blog/placeholder-cover-1.jpg", category: tags[0] || "SEO", tags,
    author: { name: "Mahedi Hasan", avatar: "/authors/placeholder-avatar.jpg", bio: "SEO and digital marketing specialist." },
    publishedAt: new Date().toISOString().slice(0, 10),
    readingTime: Math.max(1, Math.ceil(content.split(/\s+/).length / 200)), featured: false,
    relatedPosts: [], metaTitle: title.slice(0, 60), metaDescription: description || content.slice(0, 155),
  };
}

export async function POST(request: Request) {
  if (!authorized(request)) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY || "mahedi03/portfolio";
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token) return NextResponse.json({ success: false, message: "GITHUB_TOKEN is not configured" }, { status: 500 });

  try {
    const post = toPost(await request.json());
    const headers = { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "X-GitHub-Api-Version": "2022-11-28" };
    const url = `${githubApi}/repos/${repository}/contents/${postsPath}`;
    const existingResponse = await fetch(`${url}?ref=${branch}`, { headers, cache: "no-store" });
    if (!existingResponse.ok) throw new Error(`GitHub read failed (${existingResponse.status})`);
    const existing = await existingResponse.json();
    const current = JSON.parse(Buffer.from(existing.content.replace(/\s/g, ""), "base64").toString("utf8"));
    const next = [...current.filter((item: { slug?: string }) => item.slug !== post.slug), post];
    const updateResponse = await fetch(url, { method: "PUT", headers: { ...headers, "Content-Type": "application/json" }, body: JSON.stringify({ message: `Add Autoblog post: ${post.title}`, content: Buffer.from(`${JSON.stringify(next, null, 2)}\n`).toString("base64"), sha: existing.sha, branch }) });
    if (!updateResponse.ok) throw new Error(`GitHub write failed (${updateResponse.status})`);
    return NextResponse.json({ success: true, slug: post.slug, message: "Post accepted and deployment triggered" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error instanceof Error ? error.message : "Invalid payload" }, { status: 400 });
  }
}

export async function HEAD() { return new Response(null, { status: 200 }); }
