import { handleSubmission } from "@/lib/forms/handler";
import { graduationForm } from "@/content/graduation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function POST(req: Request) {
  return handleSubmission(req, graduationForm);
}
