import { buildMetadata } from "@/lib/seo";
import { applyForm } from "@/content/apply";
import FormRunner from "@/components/forms/FormRunner";

export const metadata = buildMetadata({
  title: "Đăng ký",
  description:
    "Trở thành một W — đăng ký gia nhập cộng đồng viết W4GZ. Một mẫu nhẹ nhàng; chúng tôi đọc từng đơn bằng sự chú tâm.",
  path: "/dang-ky",
});

export default function ApplyPage() {
  return <FormRunner spec={applyForm} endpoint="/api/apply" />;
}
