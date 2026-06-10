import type { FormSpec } from "@/lib/forms/schema";

/**
 * Graduation-essay submission (brief Update 8) — route /nop-bai-tot-nghiep. After
 * the easy-enroll Introduction course (Route A), the real learner data + the
 * essay are collected here. Single page, gentle. Copy verbatim from
 * prototypes/graduation.html.
 */
export const graduationForm: FormSpec = {
  kind: "graduation",
  layout: "single",
  intro: {
    kicker: "Bước cuối · Trở thành một W",
    heading: "Nộp bài tốt nghiệp của bạn.",
    lead: "Bạn đã đi hết W4GZ Introduction. Đây là nơi bạn đặt xuống thứ mình đã viết. Chúng tôi sẽ đọc, và hồi âm theo đợt xét mỗi quý — hãy thong thả.",
  },
  steps: [
    {
      heading: "Để chúng tôi tìm được bạn",
      note: "Cần khớp với thông tin bạn đã điền khi tham gia khóa học.",
      fields: [
        {
          id: "name",
          label: "Tên bạn",
          type: "text",
          required: true,
          placeholder: "Tên bạn dùng khi học",
          errorMsg: "Cho chúng tôi tên của bạn nhé.",
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "ban@email.com",
          errorMsg: "Một email hợp lệ giúp chúng tôi quay lại với bạn.",
        },
        {
          id: "cohort",
          label: "Bạn học khóa đợt nào?",
          type: "text",
          optional: true,
          optionalLabel: "(nếu bạn nhớ)",
          placeholder: "Ví dụ: Đợt mùa xuân 2026",
        },
      ],
    },
    {
      heading: "Bài tốt nghiệp",
      note: "Đặt tựa đề nếu bạn muốn, rồi dán bài viết của bạn vào. Cứ để nó là chính nó.",
      fields: [
        {
          id: "title",
          label: "Tựa bài",
          type: "text",
          optional: true,
          placeholder: "Một cái tên cho điều bạn viết",
        },
        {
          id: "essay",
          label: "Bài viết của bạn",
          type: "textarea",
          required: true,
          rows: 14,
          wordCount: true,
          placeholder: "Dán hoặc viết bài của bạn ở đây…",
          errorMsg: "Đây là phần quan trọng nhất — hãy đặt bài của bạn vào đây.",
        },
      ],
    },
    {
      heading: "Đôi lời sau khi viết",
      note: "Nhẹ thôi — để chúng tôi đọc bài bạn bằng đúng tinh thần bạn viết nó.",
      fields: [
        {
          id: "reflect_about",
          label: "Bài này nói về điều gì ở bạn?",
          type: "textarea",
          required: true,
          rows: 3,
          placeholder: "Vài câu…",
          errorMsg: "Một hai câu thôi cũng được nhé.",
        },
        {
          id: "reflect_self",
          label: "Bạn nhận ra điều gì về chính mình khi viết nó?",
          type: "textarea",
          optional: true,
          rows: 3,
          placeholder: "Nếu có điều gì hiện lên…",
        },
        {
          id: "next",
          label: "Sau khi vào W4GZ, bạn muốn viết tiếp về điều gì?",
          type: "text",
          optional: true,
          placeholder: "Một chủ đề, một dự định…",
        },
      ],
    },
  ],
  consent: {
    label:
      "Mình đồng ý để W4GZ đọc và lưu giữ bài này cùng đôi lời trên một cách an toàn, chỉ phục vụ việc xét tốt nghiệp. Dữ liệu thuộc về W4GZ.",
    errorMsg: "Cần đồng ý điều này để chúng tôi tiếp nhận bài nhé.",
  },
  confirm: {
    mark: "W.",
    heading: "Bài của bạn đã tới tay chúng tôi.",
    lines: [
      "Cảm ơn vì đã đi đến đây. Chúng tôi sẽ đọc bằng sự chú tâm và hồi âm theo đợt xét mỗi quý.",
    ],
  },
};
