import type { FormSpec } from "@/lib/forms/schema";

/**
 * Application form (brief Update 8) — the selective gate, the primary CTA target
 * (/dang-ky). Multi-step + gentle: demographics → needs → about-you → a short
 * story → review + consent. Copy is verbatim from prototypes/apply.html — every
 * question is an invitation, never an interrogation.
 */
export const applyForm: FormSpec = {
  kind: "apply",
  layout: "stepper",
  intro: {
    kicker: "Đăng ký · Trở thành một W",
    heading: "Hãy kể cho chúng tôi nghe về bạn.",
    lead: "Chúng tôi đọc từng đơn, bằng sự chú tâm. Không có câu trả lời đúng hay sai ở đây — chỉ có giọng của chính bạn. Cứ thong thả.",
  },
  steps: [
    {
      heading: "Để chúng tôi biết bạn một chút",
      note: "Vài điều cơ bản thôi, để chúng tôi gọi đúng tên và hồi âm đúng chỗ.",
      fields: [
        {
          id: "name",
          label: "Chúng tôi nên gọi bạn là gì?",
          type: "text",
          required: true,
          placeholder: "Tên hoặc cách bạn muốn được gọi",
          errorMsg: "Cho chúng tôi một cái tên để xưng hô nhé.",
        },
        {
          id: "email",
          label: "Email để chúng tôi hồi âm",
          type: "email",
          required: true,
          placeholder: "ban@email.com",
          errorMsg: "Một email hợp lệ giúp chúng tôi quay lại với bạn.",
        },
        {
          id: "city",
          label: "Bạn đang sống ở thành phố nào?",
          type: "text",
          placeholder: "Ví dụ: TP. Hồ Chí Minh",
          hint: "Hỏi để biết khi nào có buổi gặp gần bạn — hoàn toàn tuỳ bạn chia sẻ.",
        },
        {
          id: "age",
          label: "Bạn thuộc nhóm tuổi nào?",
          type: "select",
          optional: true,
          options: ["Dưới 18", "18–22", "23–27", "28–34", "35 trở lên", "Mình không muốn nói"],
        },
        {
          id: "work",
          label: "Bạn đang làm trong lĩnh vực nào, hoặc giữ vai trò gì?",
          type: "text",
          placeholder:
            "Ví dụ: sinh viên Báo chí · luật sư · product manager · giáo viên · freelancer viết lách…",
          hint: "Chúng tôi hỏi điều này chỉ để đón bạn vào đúng nhịp và kết nối bạn với những người hợp gu trong cộng đồng — không phải để đánh giá. Cứ trả lời thoải mái, ngắn gọn cũng được.",
        },
      ],
    },
    {
      heading: "Điều đưa bạn tới đây",
      note: "Không cần hoa mỹ. Cứ thành thật là đủ.",
      fields: [
        {
          id: "why",
          label: "Vì sao viết lại quan trọng với bạn, ngay lúc này?",
          type: "textarea",
          required: true,
          placeholder: "Vài câu thôi…",
          errorMsg: "Chia sẻ giúp chúng tôi một chút nhé — ngắn cũng được.",
        },
        {
          id: "hopes",
          label: "Bạn mong điều gì khi đến với W4GZ?",
          type: "chips",
          optional: true,
          optionalLabel: "(chọn bao nhiêu tuỳ bạn)",
          options: [
            "Viết tốt hơn",
            "Tư duy rõ ràng hơn",
            "Tìm một cộng đồng",
            "Kể được câu chuyện của mình",
            "Sống có chủ đích hơn",
            "Điều khác",
          ],
        },
        {
          id: "level",
          label: "Bạn đang ở đâu trên hành trình viết?",
          type: "select",
          required: true,
          options: [
            "Mình mới bắt đầu",
            "Mình viết thỉnh thoảng",
            "Mình viết khá đều",
            "Viết là việc/nghề của mình",
          ],
          errorMsg: "Chọn một mốc gần bạn nhất nhé.",
        },
        {
          id: "heard",
          label: "Bạn biết tới W4GZ qua đâu?",
          type: "text",
          optional: true,
          placeholder: "Một người bạn, một bài viết, mạng xã hội…",
        },
      ],
    },
    {
      heading: "Một chút về bạn",
      note: "Bằng giọng của chính bạn. Đây không phải bài kiểm tra — chúng tôi đọc để hiểu, không để chấm.",
      fields: [
        {
          id: "about",
          label: "Bạn là ai, nếu kể bằng vài dòng?",
          type: "textarea",
          required: true,
          rows: 7,
          placeholder:
            "Điều gì làm nên bạn lúc này — một mối bận tâm, một niềm vui, một câu hỏi bạn đang mang theo…",
          hint: "Khoảng 100–200 từ là vừa, nhưng cứ viết theo cách bạn thấy thoải mái.",
          errorMsg: "Chúng tôi rất muốn nghe — vài dòng thôi cũng được.",
        },
      ],
    },
    {
      heading: "Kể một câu chuyện ngắn",
      note: "Bất kỳ điều gì thật với bạn: một khoảnh khắc, một thay đổi, một điều bạn từng tin rồi thôi không tin nữa. Chúng tôi không chấm văn phong — chúng tôi đọc để gặp bạn.",
      fields: [
        {
          id: "story",
          label: "Câu chuyện của bạn",
          type: "textarea",
          required: true,
          rows: 9,
          placeholder: "Bắt đầu từ chỗ nào bạn muốn…",
          hint: "Vài đoạn là đủ. Không cần mở bài kết bài — chỉ cần thật.",
          errorMsg: "Một câu chuyện ngắn thôi cũng được — chúng tôi đang lắng nghe.",
        },
      ],
    },
    {
      heading: "Xem lại và gửi",
      note: "Đọc lại nếu bạn muốn. Bạn luôn có thể quay lại sửa.",
      review: true,
      fields: [],
    },
  ],
  consent: {
    label:
      "Mình đã đọc và đồng ý với cách W4GZ giữ gìn dữ liệu của mình. Dữ liệu này thuộc về W4GZ, được lưu an toàn và chỉ dùng để xét đơn.",
    errorMsg: "Cần đồng ý điều này để chúng tôi tiếp nhận đơn nhé.",
  },
  confirm: {
    mark: "W.",
    heading: "Cảm ơn bạn đã kể.",
    lines: [
      "Chúng tôi đọc mọi đơn, bằng sự chú tâm, và sẽ hồi âm theo đợt xét mỗi quý. Hãy để mắt tới hộp thư của bạn.",
    ],
  },
};

/**
 * Post-submit flow (Patch 3): after the application POSTs, the user chooses a
 * route, then sees a route-specific outcome. The course-host link and the QR are
 * placeholders to be wired later. Copy from prototypes/apply.html.
 */
export const applyOutcome = {
  choice: {
    mark: "W.",
    heading: "Cảm ơn bạn đã kể.",
    note: "Giờ, chọn lối bạn muốn bước vào W4GZ.",
    options: [
      {
        id: "intro" as const,
        title: "W4GZ Introduction",
        desc: "Khóa học online, tự học theo nhịp của bạn. Có thể bắt đầu ngay hôm nay.",
        go: "Chọn lối này →",
      },
      {
        id: "advanced" as const,
        title: "W4GZ Advanced",
        desc: "Lớp offline tại TP.HCM, nhóm nhỏ. Giữ chỗ bằng một khoản cọc.",
        go: "Chọn lối này →",
      },
    ],
  },
  intro: {
    mark: "W.",
    heading: "Chào mừng tới W4GZ Introduction.",
    note: "Bạn sẽ học trên nền tảng khóa học của chúng tôi. Nhấn để tới đó và bắt đầu.",
    // Placeholder — wire the real course-host URL later.
    placeholder: "Tới nền tảng học · đang cập nhật",
    emailNote: "Chúng tôi cũng sẽ gửi đường dẫn vào khóa học qua email cho bạn.",
    back: "← Quay lại lựa chọn",
  },
  advanced: {
    mark: "W.",
    heading: "W4GZ Advanced",
    note: "Lớp chuyên sâu gần nhất, và nơi bạn giữ chỗ.",
    // Cohort details are placeholders for now.
    cohort: [
      { k: "Khóa gần nhất", v: "đang cập nhật" },
      { k: "Thời gian", v: "đang cập nhật" },
      { k: "Địa điểm", v: "TP. Hồ Chí Minh" },
      { k: "Quy mô", v: "nhóm nhỏ" },
    ],
    payPre: "Để giữ chỗ, chuyển khoản ",
    payStrong: "cọc 50% học phí",
    payPost: " qua mã QR bên dưới. Phần còn lại đóng khi nhập học.",
    // Placeholder — add the real transfer QR later.
    qrLabel: "Mã QR thanh toán",
    qrSub: "đang cập nhật",
    transferNote:
      "Nội dung chuyển khoản: tên + email bạn vừa điền. Cần hỗ trợ gì, cứ trả lời email xác nhận của chúng tôi.",
    paid: "Tôi đã thanh toán",
    back: "← Quay lại lựa chọn",
  },
  confirm: {
    mark: "W.",
    heading: "Cảm ơn bạn. Chúng tôi đã nhận được.",
    notePre:
      "Một chỗ trong W4GZ Advanced đang được giữ cho bạn. Chúng tôi sẽ kiểm tra khoản chuyển và gửi thông tin nhập học cụ thể qua email ",
    noteStrong: "trong vòng 48 giờ",
    notePost: ".",
    small:
      "Nếu sau 48 giờ vẫn chưa thấy email, hãy ngó qua hộp thư spam hoặc trả lời email này để chúng tôi hỗ trợ.",
    homeLabel: "Về trang chủ",
    homeHref: "/",
    readLabel: "Đọc The Power of Narrative",
    readHref: "/power-of-narrative",
  },
};
