import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <Container className="max-w-lg text-center">
        <p className="font-display text-7xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-display font-bold">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            Back to Home <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
