/**
 * Contact us (Patch E) — two audiences → a short 4-field form → a warm
 * confirmation in W4GZ's voice → home. Copy from prototypes/contact.html.
 */
export const contact = {
  kicker: "Liên hệ với W4GZ",
  motto: "Creates narratives worth living.",
  lead: "Bạn muốn nói chuyện với W4GZ? Cho chúng tôi biết bạn đến từ đâu — để chúng tôi trả lời đúng tinh thần của bạn.",
  audiences: [
    {
      id: "Investor / Media",
      label: "Tổ chức",
      title: "Investor / Media",
      desc: "Nhà đầu tư, đối tác, hoặc báo chí muốn tìm hiểu và đồng hành cùng W4GZ ở tầm tổ chức.",
      go: "Tôi thuộc nhóm này →",
    },
    {
      id: "Supporter",
      label: "Cá nhân",
      title: "Supporter",
      desc: "Bạn yêu điều W4GZ đang làm và muốn ủng hộ, góp sức, hay đơn giản là kết nối.",
      go: "Tôi thuộc nhóm này →",
    },
  ],
  formHeading: "Gửi đôi lời cho chúng tôi.",
  fields: {
    name: { label: "Họ và tên", placeholder: "Tên của bạn", err: "Cho chúng tôi biết tên bạn nhé." },
    email: { label: "Email", placeholder: "ban@email.com", err: "Một email hợp lệ để chúng tôi hồi âm." },
    org: { label: "Đơn vị công tác & chức vụ", placeholder: "Ví dụ: Quỹ ABC · Nhà báo · Sinh viên…" },
    message: { label: "Thông điệp của bạn", placeholder: "Bạn muốn nói gì với W4GZ?", err: "Viết cho chúng tôi vài dòng nhé." },
  },
  back: "← Quay lại",
  send: "Gửi",
  confirm: {
    mark: "W.",
    heading: "Cảm ơn bạn đã ngỏ lời.",
    body: "Mỗi tin nhắn gửi tới W4GZ đều được đọc, bằng sự chú tâm. Chúng tôi sẽ hồi âm cho bạn sớm, nếu chúng ta có cùng câu chuyện đáng sống.",
    home: "Về trang chủ",
    homeHref: "/",
  },
};
