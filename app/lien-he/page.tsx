import { buildMetadata } from "@/lib/seo";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = buildMetadata({
  title: "Liên hệ",
  description:
    "Liên hệ với W4GZ — Investor / Media hoặc Supporter. Mỗi tin nhắn đều được đọc bằng sự chú tâm.",
  path: "/lien-he",
});

export default function ContactPage() {
  return <ContactForm />;
}
