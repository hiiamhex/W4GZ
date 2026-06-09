import type { Metadata } from "next";
import { graduationForm } from "@/content/graduation";
import FormRunner from "@/components/forms/FormRunner";

export const metadata: Metadata = {
  title: "Nộp bài tốt nghiệp",
  description: "Nộp bài tốt nghiệp W4GZ Introduction — bước cuối để trở thành một W.",
  alternates: { canonical: "/nop-bai-tot-nghiep" },
  // A post-course gate, not a public landing page.
  robots: { index: false, follow: false },
};

export default function GraduationPage() {
  return <FormRunner spec={graduationForm} endpoint="/api/graduation" />;
}
