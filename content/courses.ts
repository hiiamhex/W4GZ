import type { Page } from "./model";
import type { SpecRow, Cta } from "./types";

/** Chapter III · Courses (Master Spec PART 5 · Trang III). */

export const hero = {
  label: "The Practice",
  heading: "Viết không đợi cảm hứng. Viết là một kỉ luật có thể học.",
  sub: "Để bước vào W4GZ, tất cả phải đi qua khóa học viết nền tảng: một ngôn ngữ chung, một bộ nguyên tắc chung, một hiểu biết chung về thực hành sáng tạo có kỉ luật.",
};

export const pillars: {
  index: string;
  nameEn: string;
  nameVi: string;
  line: string;
}[] = [
  {
    index: "01",
    nameEn: "Narrative Structure",
    nameVi: "Cấu trúc tự sự",
    line: "Áp trật tự tự sự lên hỗn mang để nghĩa hiện ra.",
  },
  {
    index: "02",
    nameEn: "Honesty",
    nameVi: "Sự trung thực",
    line: "Lời nguy hiểm nhất là lời ta tự dối mình.",
  },
  {
    index: "03",
    nameEn: "Conciseness",
    nameVi: "Sự cô đọng",
    line: "Cắt gọn chính mình là một dạng trưởng thành.",
  },
  {
    index: "04",
    nameEn: "Referencing",
    nameVi: "Luôn tham chiếu",
    line: "Độc đáo đến từ tiếp thu, không từ bịa đặt.",
  },
  {
    index: "05",
    nameEn: "Loop",
    nameVi: "Tái tạo",
    line: "Làm một lần là thử nghiệm; lặp lại đều đặn mới là thành tựu.",
  },
  {
    index: "06",
    nameEn: "Specificity & the Right Term",
    nameVi: "Cụ thể và chính xác",
    line: "Ý nghĩ vượt trội đến từ tinh lọc.",
  },
];

export const cohort = {
  label: "Vì sao W4GZ dạy theo cohort",
  lead: "Một khóa online dạy bạn kiến thức. Một cohort rèn bạn thành tác giả.",
  body: "Tiến bộ trong viết lách đến từ ma sát: cần có người đọc và góp ý; cần một nhịp chung giữ bạn không bỏ cuộc; cần những người cùng vật lộn để bạn có chỗ phản tư. Đó là lý do W4GZ dạy theo cohort và cộng đồng.",
};

export const gate = {
  label: "Cổng duy nhất vào W4GZ",
  lead: "Một cổng. Luôn luôn.",
  body: "Để trở thành một phần của W4GZ, bắt buộc đi qua khóa học viết. Đây là cổng duy nhất, và sẽ luôn như vậy — để W4GZ là cộng đồng của những người biết viết.",
  paths: [
    {
      label: "Lối A — W4GZ Introduction + bài luận tốt nghiệp",
      body: "Hoàn tất khóa Introduction và nộp bài luận tốt nghiệp; được duyệt theo kì onboarding của cộng đồng.",
    },
    {
      label: "Lối B — W4GZ Advanced",
      body: "Hoàn tất khóa Advanced. Ra mắt tác phẩm của bạn.",
    },
  ],
  closing:
    "Cộng đồng onboarding theo quý — bốn kì mỗi năm. Ngoài hai lối trên, không có đường nào khác vào W4GZ.",
  note: "Đang cập nhật: lịch bốn kì onboarding/năm; tiêu chí bài luận tốt nghiệp; cơ chế xét duyệt Advanced.",
};

export const tracksLabel = "Hai lối qua cổng";

export const tracks: {
  tone: "light" | "dark";
  status: string;
  title: string;
  positioning: string;
  specHead: { label: string; value: string };
  spec: SpecRow[];
  cta: Cta & { variant?: "filled" | "outline" | "inverse" };
}[] = [
  {
    tone: "light",
    status: "Online · Self-paced",
    title: "W4GZ Introduction",
    positioning:
      "Khóa nền tảng. Hơn 15 khóa, cho hơn 500 học viên, nay đóng gói thành chương trình online tự học chủ động.",
    specHead: { label: "Thông số", value: "Introduction" },
    spec: [
      { label: "Hình thức", value: "100% online, tự học" },
      { label: "Đối tượng", value: "Người mới → trung cấp" },
      { label: "Ngôn ngữ", value: "Tiếng Việt" },
      { label: "Truy cập", value: "Trọn đời" },
      { label: "Tốt nghiệp", value: "Bài luận tốt nghiệp (bắt buộc)" },
      {
        label: "Vai trò",
        value: "Lối A vào cộng đồng — duyệt theo kì onboarding mỗi quý",
      },
    ],
    cta: { label: "Đăng ký", href: "/dang-ky", variant: "filled" },
  },
  {
    tone: "dark",
    status: "Offline · HCMC · Mở theo đợt",
    title: "W4GZ Advanced",
    positioning:
      "Chuyên sâu, trực tiếp, số chỗ giới hạn — cho người viết sẵn sàng xuất bản.",
    specHead: { label: "Thông số", value: "Advanced" },
    spec: [
      { label: "Hình thức", value: "Offline tại HCMC" },
      { label: "Nhịp", value: "Hàng tuần, theo cohort" },
      { label: "Đối tượng", value: "Đã có nền tảng" },
      { label: "Tuyển sinh", value: "Xét đơn" },
      { label: "Vai trò", value: "Lối B vào cộng đồng" },
    ],
    cta: {
      label: "Đăng ký",
      href: "/dang-ky",
      variant: "inverse",
    },
  },
];
export const tracksNote =
  "Đang cập nhật: thời lượng, học phí, lịch khai giảng, cách nộp đơn Advanced.";

export const testimonialsLabel = "Từ người đã viết";
export const testimonials = [
  { quote: "…", attribution: "Học viên · Khóa __ · Online" },
  { quote: "…", attribution: "Học viên · Khóa __ · Online" },
  { quote: "…", attribution: "Học viên · Khóa __ · Online" },
];
export const testimonialsNote =
  "Trích dẫn thật, đã ẩn danh hóa, từ 3 học viên — đang thu thập.";

export const transition = {
  text: "Học là bước đầu — vì sao một mình là không đủ.",
  href: "/community",
};

export const courses: Page = {
  route: "/courses",
  chapter: "III",
  title: "Courses",
  description:
    "The Practice — viết là một kỉ luật có thể học. Cổng duy nhất vào W4GZ: Introduction + bài luận tốt nghiệp, hoặc Advanced.",
  sectors: [],
};
