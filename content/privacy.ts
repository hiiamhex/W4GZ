import { CONTACT_EMAIL } from "@/lib/config";

/** Privacy page (brief Update 8) — concrete, matching how the forms actually work. */
export const privacy = {
  label: "Quyền riêng tư",
  heading: "Dữ liệu của bạn được giữ gìn.",
  lead: "W4GZ thu thập đúng những gì cần để đọc đơn và bài của bạn một cách chu đáo — không hơn. Dữ liệu thuộc về W4GZ, lưu trên hạ tầng của chính chúng tôi, và không bao giờ bán hay chia sẻ cho bên thứ ba.",
  updated: "Cập nhật: 2026",
  contact: CONTACT_EMAIL,
  sections: [
    {
      h: "Chúng tôi thu thập gì",
      p: [
        "Khi bạn đăng ký: tên hoặc cách bạn muốn được gọi, email, và những điều bạn tự nguyện chia sẻ (thành phố, nhóm tuổi, công việc, vì sao viết quan trọng với bạn, một đoạn về bản thân, một câu chuyện ngắn). Mọi mục có gắn “(tuỳ bạn)” đều không bắt buộc.",
        "Khi bạn nộp bài tốt nghiệp: tên, email, khóa học, bài viết của bạn và đôi lời phản tư sau khi viết.",
      ],
    },
    {
      h: "Vì sao",
      p: [
        "Chỉ để xét đơn / xét tốt nghiệp và để hồi âm bạn theo đợt mỗi quý. Không dùng cho quảng cáo, không hồ sơ hóa, không chấm điểm tự động.",
      ],
    },
    {
      h: "Lưu ở đâu, an toàn thế nào",
      p: [
        "Bài và đơn được gửi thẳng tới máy chủ của W4GZ rồi lưu trong cơ sở dữ liệu của riêng chúng tôi — không qua một dịch vụ biểu mẫu bên thứ ba. Mã hóa khi truyền (TLS) và khi lưu; phần văn bản tự do có thể được mã hóa thêm ở tầng ứng dụng. Quyền đọc giới hạn trong nhóm phụ trách xét duyệt.",
        "Để chống spam, trang biểu mẫu dùng một thử thách nhẹ, thân thiện với quyền riêng tư (Cloudflare Turnstile) — không phải công cụ theo dõi.",
      ],
    },
    {
      h: "Giữ trong bao lâu",
      p: [
        "Chúng tôi chỉ giữ dữ liệu trong thời gian cần cho việc xét và cho mối quan hệ của bạn với cộng đồng. Bạn có thể yêu cầu xóa bất cứ lúc nào.",
      ],
    },
    {
      h: "Quyền của bạn",
      p: [
        "Bạn có thể yêu cầu xem lại, sửa, hoặc xóa dữ liệu của mình — chỉ cần nhắn cho chúng tôi. Chúng tôi sẽ xác nhận và thực hiện trong thời gian hợp lý.",
      ],
    },
    {
      h: "Không theo dõi bên thứ ba",
      p: [
        "Các trang biểu mẫu không gắn trình theo dõi quảng cáo hay phân tích của bên thứ ba. Ghi log ở mức tối thiểu, và địa chỉ IP chỉ được lưu ở dạng băm (hash) để chống lạm dụng — không lưu IP thật.",
      ],
    },
  ],
};
