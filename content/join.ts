import type { Localized } from "@/lib/i18n";
import type { SubmitKind } from "@/lib/submit";

export interface JoinDoor {
  id: string;
  heading: string;
  body: string;
  ctaLabel: string;
  kind: SubmitKind;
  placeholder: string;
  success: string;
}

export interface JoinContent {
  hero: { label: string; headline: string; subhead: string };
  covenant: { label: string; lines: string[]; note: string };
  doorsLabel: string;
  doors: JoinDoor[];
  closing: { motto: string; intent: string };
}

/** Chapter VII · Join — "The Covenant" (brief 5, Trang VII). Closes the arc. */
export const join: Localized<JoinContent> = {
  vi: {
    hero: {
      label: "The Covenant",
      headline: "Trang đầu tiên của bạn.",
      subhead:
        "Tham gia W4GZ không phải mua một dịch vụ. Đó là nhận một chuẩn mực vào trong mình — một lời tuyên với chính mình, có cộng đồng làm chứng.",
    },
    covenant: {
      label: "Lời tuyên",
      lines: [
        "Tôi hiểu W4GZ là một chuẩn tôi gìn giữ, không phải một nhóm tôi gia nhập.",
        "Tôi viết với sự trung thực và công bố với tay nghề. Tôi chỉ chia sẻ điều tôi thật sự đã ngẫm, và chỉ dựng điều tôi đủ sức giữ một cách nghiêm túc.",
        "Tôi nhận phản hồi mà không phòng thủ, và đưa phản hồi cụ thể, hướng vào trang viết. Tôi chọn nhịp đều thay vì những đợt bùng cháy rồi tắt.",
        "Tôi hiểu cộng đồng này là kỉ luật đầu tiên trong một kiến trúc lớn hơn — và khi giữ chuẩn ở đây, tôi đang đặt nền cho mọi thứ tiếp theo.",
      ],
      note: "Bản Covenant gốc trong Manifesto dài hơn — xác nhận có muốn dùng nguyên văn đầy đủ ở đâu đó.",
    },
    doorsLabel: "Hai cánh cửa",
    doors: [
      {
        id: "enroll",
        heading: "Học viết",
        body: "Bắt đầu với Introduction online, hoặc nộp đơn cho Advanced tại HCMC.",
        ctaLabel: "Enroll / Apply",
        kind: "enroll",
        placeholder: "email của bạn",
        success: "Đã ghi nhận — chúng tôi sẽ liên hệ về khóa học.",
      },
      {
        id: "community",
        heading: "Vào cộng đồng",
        body: "Bước vào đời sống quanh việc viết — Hub, các nhánh, và những người đang viết bên nhau.",
        ctaLabel: "Join the community",
        kind: "subscribe",
        placeholder: "email của bạn",
        success: "Chào mừng — chúng tôi sẽ gửi lời mời vào cộng đồng.",
      },
    ],
    closing: {
      motto: "Creates narratives worth living.",
      intent:
        "Does this make us better writers, and more complete human beings — together?",
    },
  },
};
