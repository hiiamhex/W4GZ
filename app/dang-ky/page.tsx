import { buildMetadata } from "@/lib/seo";
import { applyForm } from "@/content/apply";
import FormRunner from "@/components/forms/FormRunner";
import ApplyOutcome from "@/components/forms/ApplyOutcome";

export const metadata = buildMetadata({
  title: "Đăng ký",
  description:
    "Trở thành một W — đăng ký gia nhập cộng đồng viết W4GZ. Một mẫu nhẹ nhàng; chúng tôi đọc từng đơn bằng sự chú tâm.",
  path: "/dang-ky",
});

export default function ApplyPage() {
  // After submit, choose a route (Introduction / Advanced) — see ApplyOutcome.
  return <FormRunner spec={applyForm} endpoint="/api/apply" renderDone={<ApplyOutcome />} />;
}
