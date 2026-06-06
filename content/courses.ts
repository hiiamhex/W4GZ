import type { Localized } from "@/lib/i18n";
import type { SpecRow, Cta } from "./types";

export interface Pillar {
  index: string;
  nameEn: string;
  nameVi: string;
  line: string;
}

export interface CourseTrack {
  tone: "light" | "dark";
  status: string;
  title: string;
  positioning: string;
  specHead: { label: string; value: string };
  spec: SpecRow[];
  cta: Cta & { variant?: "filled" | "outline" | "inverse" };
}

export interface Testimonial {
  quote: string;
  attribution: string;
}

export interface CoursesContent {
  hero: { label: string; headline: string; subhead: string };
  pillarsLabel: string;
  pillars: Pillar[];
  pathsLabel: string;
  tracks: CourseTrack[];
  /** Placeholder surfacing the III.3 NOTE (tuition/duration/schedule/apply). */
  pathsNote: string;
  testimonialsLabel: string;
  testimonials: Testimonial[];
  /** Placeholder surfacing the III.4 NOTE (3 anonymized testimonials). */
  testimonialsNote: string;
  transition: { text: string; href: string };
}

/** Chapter III · Courses — "The Practice" (brief 5, Trang III). */
export const courses: Localized<CoursesContent> = {
  vi: {
    hero: {
      label: "The Practice",
      headline: "Viết không đợi cảm hứng. Viết là một kỉ luật có thể học.",
      subhead:
        "Không ai bước vào W4GZ mà không đi qua khóa nền. Đây không phải rào chắn — đây là việc đặt móng: một ngôn ngữ chung, một bộ nguyên tắc chung, một hiểu biết chung về thế nào là thực hành sáng tạo có kỉ luật.",
    },
    pillarsLabel: "Sáu trụ cột",
    pillars: [
      {
        index: "01",
        nameEn: "Narrative Structure",
        nameVi: "Cấu trúc tự sự",
        line: "Áp trật tự tự sự lên hỗn mang để nghĩa hiện ra. Người viết dựng, không phản ứng.",
      },
      {
        index: "02",
        nameEn: "Honesty",
        nameVi: "Sự trung thực",
        line: "Lời nguy hiểm nhất là lời ta tự dối mình. Viết thật trước khi viết hay.",
      },
      {
        index: "03",
        nameEn: "Conciseness",
        nameVi: "Sự cô đọng",
        line: "Cắt gọn chính mình là một dạng trưởng thành. Cắt để buộc mình sáng rõ.",
      },
      {
        index: "04",
        nameEn: "Referencing",
        nameVi: "Sự dẫn chiếu",
        line: "Đừng ngồi một mình nghĩ lại từ đầu. Độc đáo đến từ tổng hợp, không từ cô lập.",
      },
      {
        index: "05",
        nameEn: "Loop",
        nameVi: "Vòng lặp",
        line: "Làm một lần là thử nghiệm. Thành tựu là khả năng lặp đều và giữ nhịp.",
      },
      {
        index: "06",
        nameEn: "Specificity & the Right Term",
        nameVi: "Sự cụ thể và chữ đúng",
        line: "Tìm được đúng chữ là hoàn tất ý nghĩ. Ai chưa gọi tên chính xác một vật thì chưa hiểu nó.",
      },
    ],
    pathsLabel: "Hai con đường",
    tracks: [
      {
        tone: "light",
        status: "Online · Self-paced",
        title: "W4GZ Introduction",
        positioning:
          "Nền tảng. Hơn 10 khóa đã dạy, nay đóng gói thành chương trình online tự học hoàn toàn.",
        specHead: { label: "Thông số", value: "Introduction" },
        spec: [
          { label: "Hình thức", value: "100% online, tự học theo nhịp riêng" },
          { label: "Đối tượng", value: "Người mới đến trình trung cấp" },
          { label: "Ngôn ngữ", value: "Tiếng Việt" },
          { label: "Truy cập", value: "Trọn đời, theo nhịp riêng" },
        ],
        cta: { label: "Enroll online", href: "/join#enroll", variant: "filled" },
      },
      {
        tone: "dark",
        status: "Offline · HCMC · Sắp mở",
        title: "W4GZ Advanced",
        positioning:
          "Chuyên sâu. Trực tiếp. Số chỗ giới hạn. Dành cho người viết sẵn sàng đi xa hơn trang giấy.",
        specHead: { label: "Thông số", value: "Advanced" },
        spec: [
          { label: "Hình thức", value: "Offline tại Hồ Chí Minh" },
          { label: "Nhịp", value: "Hằng tuần, theo cohort" },
          { label: "Đối tượng", value: "Người viết đã có nền tảng" },
          { label: "Tuyển sinh", value: "Giới hạn — xét đơn đăng ký" },
        ],
        cta: {
          label: "Apply for Advanced",
          href: "/join#enroll",
          variant: "inverse",
        },
      },
    ],
    pathsNote:
      "Đang cập nhật: học phí, thời lượng cụ thể, lịch khai giảng, và hình thức nộp đơn Advanced.",
    testimonialsLabel: "Từ người đã viết",
    testimonials: [
      { quote: "…", attribution: "Học viên · Khóa __ · Online" },
      { quote: "…", attribution: "Học viên · Khóa __ · Online" },
      { quote: "…", attribution: "Học viên · Khóa __ · Online" },
    ],
    testimonialsNote:
      "Trích dẫn thật, đã ẩn danh hóa, từ 3 học viên — đang thu thập.",
    transition: {
      text: "Học là bước đầu — đời sống quanh việc viết mới là phần lớn.",
      href: "/community",
    },
  },
};
