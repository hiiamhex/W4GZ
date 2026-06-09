import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Markdown from "@/components/ui/Markdown";

export const metadata = buildMetadata({
  title: "Điều khoản Sử dụng",
  description: "Điều khoản sử dụng trang và các chương trình của W4GZ.",
  path: "/terms",
});

// Founder's draft (docs/terms.md) — rendered as a simple text page; [placeholders] kept.
const source = readFileSync(join(process.cwd(), "docs/terms.md"), "utf8");

export default function TermsPage() {
  return (
    <Container className="py-16 lg:py-24">
      <Markdown source={source} />
    </Container>
  );
}
