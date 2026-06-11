import type { Page } from "./model";

/** Chapter V · Ecosystem — The -4GZ Ecosystem (Master Spec Trang V). */

export const hero = {
  label: "The -4GZ Ecosystem",
  heading: "Viết là gốc. Mọi thứ khác mọc lên từ đó.",
  sub: "“-4GZ” là một protocol, cho thế hệ này, do thế hệ này xây dựng, theo một chuẩn mà chính thế hệ này định nghĩa và bảo vệ.",
};

export const richness = {
  label: "Sự giàu có chính là bằng chứng",
  body: "Bề rộng và chiều sâu của các hoạt động -4GZ là minh chứng sống cho sức mạnh của cộng đồng đã được nói tới: một cộng đồng các W viết khỏe thì sinh ra đời sống văn hóa phong phú quanh nó. Tinh thần các nhánh: thân mật, chú trọng giao tiếp, tăng vốn văn hóa và kết nối, lành mạnh và văn minh, đề cao kiến thức và sự lành nghề.",
};

/** An Ecosystem card: base (kind + name) + a hover/tap banner (image + desc). */
export interface EcoCardItem {
  kind: string;
  name: string;
  /** Banner image placeholder mark (initial / symbol). */
  mark: string;
  desc: string;
}

/** The -4GZ verticals (use exactly; never an investing-related vertical). */
export const verticals: EcoCardItem[] = [
  { kind: "Nhánh", name: "storytelling4genz · poetry4genz", mark: "S", desc: "Kể chuyện trên sân khấu; đọc và làm thơ." },
  { kind: "Nhánh", name: "english4genz · japanese4genz · chinese4genz", mark: "E", desc: "Học và dùng các thứ tiếng — mỗi ngôn ngữ là một thế giới." },
  { kind: "Nhánh", name: "workshop4genz · logic4genz", mark: "W", desc: "Thực hành chuyên đề do các W leaders dẫn dắt; rèn lập luận mạch lạc." },
  { kind: "Nhánh", name: "drawing4genz · chess4genz · gaming4genz", mark: "D", desc: "Vẽ, cờ, game — mài giác quan, tư duy và sự nhập cuộc." },
  { kind: "Nhánh", name: "weekend4genz", mark: "W", desc: "Thể thao nói chung — running, trekking, hiking; thân thể là nền của trải nghiệm." },
  { kind: "Nhánh", name: "communitybuilding4genz", mark: "C", desc: "Học cách xây cộng đồng — để mô hình tự nhân rộng." },
];

export const projectsLabel = "Những dự án chiến lược";

/**
 * Two strategic project cards, each with a themed monochrome stage (Patch 8):
 * Dictionary4GenZ (a levitating tech stele that engraves its own entries) and
 * Library4GenZ (a 3-level shelf-stacking mini-game). Entries and book labels are
 * placeholder copy — founder edits later. Card copy (kind/name/desc) unchanged.
 */
export const dictionary = {
  kind: "Dự án · -4GZ",
  name: "Dictionary4GenZ",
  desc: "Từ điển sống: ngôn ngữ của một thế hệ đang tự định nghĩa chính mình.",
  entries: [
    { word: "vibe", gloss: "dt. — thứ không khí một người mang theo, trước cả khi họ kịp nói." },
    { word: "chữa lành", gloss: "đg. — về lại với chính mình, sau những ồn ào không tên." },
    { word: "flex", gloss: "đg. — khoe; nhưng khoe khéo là kể một câu chuyện." },
    { word: "lowkey", gloss: "tt. — lặng lẽ mà thật; không cần ai vỗ tay." },
    { word: "narrative", gloss: "dt. — câu chuyện ta kể để hiểu chính mình." },
  ],
};

/** Shelf-game levels: specs are [w, h, label] in px — a slot of exactly w×h is
 *  laid per book. L1 vertical only; L2 mixed; L3 near-identical sizes. */
export const library: {
  kind: string;
  name: string;
  desc: string;
  levels: { tag: string; specs: [number, number, string][] }[];
} = {
  kind: "Dự án · -4GZ",
  name: "Library4GenZ",
  desc: "Thư viện sống của W4GZ — nơi lưu giữ và truyền lại những gì đáng đọc.",
  levels: [
    {
      tag: "01",
      specs: [
        [30, 120, "PSYCHOLOGY"],
        [38, 102, "PHILOSOPHY"],
        [26, 136, "CULTURE"],
        [34, 86, "LOGIC"],
      ],
    },
    {
      tag: "02",
      specs: [
        [28, 118, "SEMIOTICS"],
        [36, 96, "RHETORIC"],
        [24, 132, "POETICS"],
        [96, 26, "COMMUNICATION"],
        [80, 30, "HISTORY"],
        [32, 108, "SOCIOLOGY"],
      ],
    },
    {
      tag: "03",
      specs: [
        [28, 116, "MYTHOLOGY"],
        [30, 110, "LINGUISTICS"],
        [26, 122, "PHILOSOPHY"],
        [88, 26, "PSYCHOLOGY"],
        [96, 24, "CULTURE"],
        [78, 28, "RHETORIC"],
        [34, 92, "LOGIC"],
        [72, 30, "SEMIOTICS"],
      ],
    },
  ],
};

export const projects = {
  stat: {
    value:
      "Bối cảnh: ~80 triệu người dùng internet, nhưng trung bình mỗi người Việt đọc khoảng 1 cuốn sách/năm ngoài sách giáo khoa — thuộc nhóm thấp trong khu vực.",
    source: "DataReportal 2025 · ngành xuất bản VN 2016–2025",
    verify: true as const,
  },
  closing:
    "Các dự án này đánh thẳng vào lỗ hổng cấu trúc — đặc biệt trên môi trường internet và cho Gen Z — vốn đang khiến “narrative” của thế hệ này khó được viết tốt. W4GZ là một tập hợp leader là Gen Z, hành động để tác động vào cấu trúc, không tự xem mình là thực thể thụ động.",
};

export const collaborate = {
  heading: "Muốn cùng xây dựng?",
  body: "Tổ chức, định chế, hay người xây độc lập muốn hợp tác trong hệ sinh thái -4GZ — hãy liên hệ.",
  ctaLabel: "Liên hệ",
};

/** W4GZ Media — the inverted "reality disrupted" panel (Patch H). */
export const media = {
  kicker: "Special Force",
  wordmark: "W4GZ MEDIA",
  tagline: "reality, disrupted.",
  body: [
    "W4GZ Media là tiếng nói của cả mạng lưới — nơi câu chuyện rời trang giấy và bước vào dòng chảy hỗn loạn của hình ảnh, âm thanh, và sự chú ý.",
    "Nếu phần còn lại của W4GZ là trật tự của mực và giấy, thì Media là thế lực được sinh ra để phá vỡ trật tự ấy: nhanh hơn, ồn hơn, và sắc hơn — đủ để những câu chuyện đáng sống chạm tới những người chưa từng nghe tên W4GZ.",
    "Họ đảm bảo khả năng tạo tác động xã hội của W4GZ, đóng gói hoạt động và ấn phẩm theo cách bền vững, hợp xu hướng và có lợi nhuận; chuẩn hóa cách làm việc và monetization để các hoạt động ý nghĩa không trở thành gánh nặng tài nguyên cho các W, đồng thời thu hút nguồn lực phù hợp từ bên ngoài.",
  ],
  cta: "Tìm hiểu W4GZ Media →",
};

export const transition = {
  text: "Đằng sau tất cả là những W — gặp họ.",
  href: "/people",
};

export const ecosystem: Page = {
  route: "/ecosystem",
  chapter: "V",
  title: "Ecosystem",
  description:
    "The -4GZ Ecosystem — viết là gốc. Sự giàu có là bằng chứng; mục tiêu là chuẩn hóa để lan tỏa. Dictionary4GenZ, Library4GenZ, và W4GZ Media.",
  sectors: [
    {
      id: "V.3",
      kicker: "02",
      heading: "Mục tiêu lớn hơn: trao quyền & chuẩn hóa để lan tỏa",
      module: "ecosystem",
      body: [
        "Hệ sinh thái không chỉ phong phú. Nó hướng tới trao quyền, tăng vốn xã hội, củng cố trải nghiệm sống ý nghĩa — và quan trọng nhất, chuẩn hóa các hoạt động để có thể lan ra toàn xã hội.",
        "Một hoạt động hay nhưng không chuẩn hóa sẽ mai một cùng người tổ chức. Chuẩn hóa tạo ra bền vững và khả năng mở rộng.",
      ],
    },
  ],
};
