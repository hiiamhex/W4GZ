import type { Page } from "./model";
import type { PersonCardData } from "@/components/ui/PersonCard";

/** Chapter VI · People — softer Hall of Fame (Master Spec Trang VI). Law III:
 *  sketch portraits + single-initial aliases + cohort only. Never names/photos. */

const PORTRAIT = "chân dung kí họa — mực, nét thưa";
const PENDING = "[ chân dung — đang cập nhật ]";

export const hero = {
  label: "The People",
  heading: "Những người đã cầm lấy cây bút.",
  sub: "Một sự tôn vinh giữ ở tông trầm — qua tác phẩm, qua cột mốc, qua bí danh.",
};

/** W-identity bloom hero (brief Update 7) — the W monogram ringed by the W-words. */
export const wHero = {
  kicker: "Bản sắc · W4GZ",
  headParts: ["Mỗi người là một ", "W", "."],
  leads: [
    "Mỗi người trong cộng đồng W4GZ đều có thể tự gọi mình là một W.",
    "Họ tự chọn W của mình đại diện cho điều gì. Người dệt kí ức, người viết, người chứng thực, người dẫn đường... một người biết viết luôn có thể mang theo nhiều vai trò",
  ],
};

/** The roles a W can take — all begin with W; orbit the monogram (extend freely). */
export const wWords = [
  "Weaver", "Writer", "Watcher", "Welder", "Win", "Wright", "Whisperer", "Witness",
  "Walker", "Wonderer", "Wisdom-keeper", "Web-keeper", "What", "Wordsmith", "Wanderer",
  "Waveform", "Welcomer", "Window", "Wayfinder", "Who", "When", "Would", "Where", "Why",
  "Within", "Weird",
];

export const anonymity = {
  label: "Những W được vinh danh bởi các W khác",
  heading: "W-Award: Top 36 W được lựa chọn hàng năm bởi cộng đồng",
  body: "Chúng tôi tin rằng những người cần được giúp đỡ phải kêu gọi sự giúp đỡ và những người cần được tuyên dương phải được người khác lên tiếng tuyên dương!",
};

export const portraits: PersonCardData[] = [
  {
    initial: "M.",
    cohort: "Khóa 12",
    line: "Full marathon đầu tiên ở tuổi ba mươi tư.",
    sketchCaption: PORTRAIT,
  },
  { initial: "H.", cohort: "Khóa 9", line: "…", isQuote: true, sketchCaption: PORTRAIT },
  {
    initial: "L.",
    cohort: "Khóa 7",
    line: "Từ người chưa từng viết, thành người viết đều mỗi tuần.",
    sketchCaption: PORTRAIT,
  },
  { initial: "?", cohort: "Khóa __", line: "Cột mốc — đang cập nhật", sketchCaption: PENDING },
  { initial: "?", cohort: "Khóa __", line: "Cột mốc — đang cập nhật", sketchCaption: PENDING },
  { initial: "?", cohort: "Khóa __", line: "Cột mốc — đang cập nhật", sketchCaption: PENDING },
];

export const portraitsLabel = "Những chân dung";
export const portraitsNote =
  "Cần dữ liệu thật đã ẩn danh: 6–9 bí danh + cột mốc/câu, kèm kí họa.";

export const builders = {
  label: "Những người dựng hệ",
  body: "Phía sau các dự án và nhánh là những W dẫn dắt — gồm W4GZ Media, tiếng nói đưa W4GZ ra ngoài. Họ cũng ẩn danh theo cùng nguyên tắc.",
};

export const transition = {
  text: "Trang tiếp theo của cộng đồng này có thể mang tên bạn.",
  href: "/join",
};

export const people: Page = {
  route: "/people",
  chapter: "VI",
  title: "W",
  description:
    "W — mỗi người trong cộng đồng W4GZ là một W. Bên dưới, một sự tôn vinh ở tông trầm: chân dung kí họa, bí danh, cột mốc (Law III: ẩn danh tuyệt đối).",
  sectors: [],
};
