import { handleSubmission } from "@/lib/forms/handler";
import { applyForm } from "@/content/apply";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function POST(req: Request) {
  return handleSubmission(req, applyForm);
}
