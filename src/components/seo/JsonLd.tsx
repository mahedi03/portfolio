/**
 * Renders a JSON-LD structured data <script> tag.
 * Server Component — no client JS shipped.
 *
 * Usage:
 *   <JsonLd data={personSchema()} />
 *   <JsonLd data={[personSchema(), organizationSchema()]} /> // multiple schemas
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
