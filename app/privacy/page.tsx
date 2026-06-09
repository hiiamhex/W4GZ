import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Markdown from "@/components/ui/Markdown";

export const metadata = buildMetadata({
  title: "Quyền riêng tư",
  description:
    "Tuyên bố quyền riêng tư của W4GZ — thu thập ít nhất có thể, giữ an toàn, và minh bạch về cách dùng dữ liệu.",
  path: "/privacy",
});

// Founder's draft (docs/privacy.md) — rendered as a simple text page; [placeholders] kept.
const source = readFileSync(join(process.cwd(), "docs/privacy.md"), "utf8");

export default function PrivacyPage() {
  return (
    <Container className="py-16 lg:py-24">
      <Markdown source={source} />
    </Container>
  );
}
