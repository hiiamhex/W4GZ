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
 * Two strategic project cards, each with a themed monochrome effect (Patch 6 B):
 * Dictionary4GenZ (a turning dictionary page) and Library4GenZ (a book-block shelf).
 * The dictionary entries and shelf labels are placeholder copy — founder edits later.
 */
export const dictionary = {
  kind: "Dự án · -4GZ",
  name: "Dictionary4GenZ",
  desc: "Từ điển sống: ngôn ngữ của một thế hệ đang tự định nghĩa chính mình.",
  entries: [
    { word: "narrative", ipa: "dt. · /tự sự/", gloss: "câu chuyện ta kể để hiểu chính mình." },
    { word: "viết", ipa: "đg. · /viết/", gloss: "biến hỗn mang trong đầu thành mạch lạc." },
    { word: "cộng đồng", ipa: "dt. · /bầy/", gloss: "nơi ta giữ kỉ luật viết cho nhau." },
    { word: "W", ipa: "dt. · /w/", gloss: "một người của W4GZ." },
  ],
};

export const library = {
  kind: "Dự án · -4GZ",
  name: "Library4GenZ",
  desc: "Thư viện sống của W4GZ — nơi lưu giữ và truyền lại những gì đáng đọc.",
  spines: [
    { h: 78, w: 34, bg: "#171717", label: "NARRATIVE" },
    { h: 92, w: 28, bg: "#34322c", label: "VIẾT" },
    { h: 66, w: 34, bg: "#211f1b", label: "CỘNG ĐỒNG" },
    { h: 88, w: 34, bg: "#3f3d36", label: "SỰ THẬT" },
    { h: 74, w: 40, bg: "#1b1a17", label: "TAY NGHỀ" },
    { h: 84, w: 34, bg: "#2b2924", label: "Ý NGHĨA" },
    { h: 70, w: 26, bg: "#3a382f", label: "BẦY" },
    { h: 90, w: 34, bg: "#201e1a", label: "W4GZ" },
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
