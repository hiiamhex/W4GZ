import type { Localized } from "@/lib/i18n";
import type { Quote } from "./types";
import type { PersonCardData } from "@/components/ui/PersonCard";

export interface PeopleContent {
  hero: { label: string; headline: string; subhead: string };
  anonymity: { label: string; heading: string; body: string };
  portraitsLabel: string;
  people: PersonCardData[];
  peopleNote: string;
  parity: { caption: string; classic: Quote; member: Quote };
  transition: { text: string; href: string };
}

const PORTRAIT_SKETCH = "chân dung kí họa — mực, nét thưa, không tô bóng nặng";
const PORTRAIT_PENDING = "[ chân dung — đang cập nhật ]";

/** Chapter VI · People — softer Hall of Fame (brief 5, Trang VI). Law III:
 *  sketch portraits + single-initial aliases + cohort only. Never names/photos. */
export const people: Localized<PeopleContent> = {
  vi: {
    hero: {
      label: "The People",
      headline: "Những người đã cầm lấy cây bút.",
      subhead: "Một sự tôn vinh, giữ ở tông trầm — qua tác phẩm, qua cột mốc, qua bí danh.",
    },
    anonymity: {
      label: "Về sự ẩn danh",
      heading: "Vì sao bạn thấy kí họa, không phải ảnh",
      body: "Trong W4GZ, bảo vệ sự riêng tư là một luật. Sau khóa học, thành viên giữ ẩn danh. Đây là lý do trang này tôn vinh bằng chân dung vẽ và bằng bí danh — sự kín đáo ấy là một phần đạo đức của cộng đồng, không phải một giới hạn kĩ thuật.",
    },
    portraitsLabel: "Những chân dung",
    people: [
      {
        initial: "M.",
        cohort: "Khóa 12",
        line: "Full marathon đầu tiên ở tuổi ba mươi tư.",
        sketchCaption: PORTRAIT_SKETCH,
      },
      {
        initial: "H.",
        cohort: "Khóa 9",
        line: "…",
        isQuote: true,
        sketchCaption: PORTRAIT_SKETCH,
      },
      {
        initial: "L.",
        cohort: "Khóa 7",
        line: "Từ người chưa từng viết, thành người viết đều mỗi tuần.",
        sketchCaption: PORTRAIT_SKETCH,
      },
      {
        initial: "?",
        cohort: "Khóa __",
        line: "Cột mốc — đang cập nhật",
        sketchCaption: PORTRAIT_PENDING,
      },
      {
        initial: "?",
        cohort: "Khóa __",
        line: "Cột mốc — đang cập nhật",
        sketchCaption: PORTRAIT_PENDING,
      },
      {
        initial: "?",
        cohort: "Khóa __",
        line: "Cột mốc — đang cập nhật",
        sketchCaption: PORTRAIT_PENDING,
      },
    ],
    peopleNote:
      "Cần dữ liệu thật đã ẩn danh: bí danh + một cột mốc/câu cho mỗi người, và kí họa tương ứng (đề xuất 6–9 người).",
    parity: {
      caption: "Một câu của Wittgenstein. Một câu của thành viên Khóa __. Cùng một khổ chữ.",
      classic: {
        original: "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.",
        lang: "de",
        translation: "Giới hạn ngôn ngữ của tôi là giới hạn thế giới của tôi.",
        attribution: "Ludwig Wittgenstein, Tractatus",
      },
      member: {
        original: "…",
        translation: "",
        attribution: "Thành viên · Khóa __",
      },
    },
    transition: {
      text: "Trang tiếp theo của cộng đồng này có thể mang tên bạn.",
      href: "/join",
    },
  },
};
