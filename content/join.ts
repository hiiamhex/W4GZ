import type { Page } from "./model";

/** Chapter VII · Join — The Covenant (Master Spec Trang VII). One gate, two paths. */

export const hero = {
  label: "The Covenant",
  heading: "Trang đầu tiên của bạn.",
  sub: "Chọn tham gia W4GZ là chọn theo đuổi các chuẩn mực — một lời tuyên với chính mình, có cộng đồng làm chứng.",
};

export const covenant = {
  label: "Lời tuyên",
  lines: [
    "Tôi hiểu W4GZ là một tiêu chuẩn tôi gìn giữ, không phải một nhóm tôi gia nhập.",
    "Tôi viết với sự trung thực và hướng tới sự lành nghề. Tôi nhận phản hồi mà không phòng thủ. Và khi tôi phản hồi, tôi luôn cụ thể, chú tâm, hướng vào trang viết. Tôi chọn sự đều đặn và tái lặp thay vì những đợt bùng cháy rồi tắt.",
    "Tôi không xem mình là người thụ động trước thời đại. Tôi giành lại quyền kể câu chuyện của mình, và góp phần dựng những câu chuyện đáng sống cho những người quanh tôi.",
  ],
};

export const gateLabel = "Một cổng, hai lối qua";

export const paths: {
  id: string;
  label: string;
  body: string;
  ctaLabel: string;
}[] = [
  {
    id: "enroll",
    label: "Lối A — Introduction + bài luận tốt nghiệp",
    body: "Hoàn tất Introduction online và nộp bài luận tốt nghiệp; được duyệt theo kì onboarding của cộng đồng — bốn kì mỗi năm.",
    ctaLabel: "Enroll Introduction",
  },
  {
    id: "apply",
    label: "Lối B — Advanced",
    body: "Hoàn tất W4GZ Advanced tại HCMC (xét đơn).",
    ctaLabel: "Apply for Advanced",
  },
];

export const gateClosing =
  "Hai lối đều đi qua một cổng duy nhất: viết. Đó là cách W4GZ giữ mình là cộng đồng của những người biết viết.";

export const closing = {
  motto: "Creates narratives worth living.",
  intent:
    "Does this make us better writers, and more complete human beings — together?",
};

export const join: Page = {
  route: "/join",
  chapter: "VII",
  title: "Join",
  description:
    "The Covenant — trang đầu tiên của bạn. Một cổng, hai lối qua: Introduction + bài luận tốt nghiệp, hoặc Advanced.",
  sectors: [],
};
