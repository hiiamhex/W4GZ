import type { Page } from "./model";

/** Chapter V · Ecosystem — The -4GZ Ecosystem (Master Spec Trang V). */

export const hero = {
  label: "The -4GZ Ecosystem",
  heading: "Viết là gốc. Mọi thứ khác mọc lên từ đó.",
  sub: "“-4GZ” là một protocol, không phải một nhãn: cho thế hệ này, do thế hệ này dựng, giữ theo một chuẩn mà chính thế hệ này định nghĩa và bảo vệ.",
};

export const richness = {
  label: "Sự giàu có chính là bằng chứng",
  body: "Bề rộng các hoạt động -4GZ là minh chứng sống cho sức mạnh của cộng đồng vừa nói tới: một cộng đồng các W viết khỏe thì sinh ra đời sống văn hóa phong phú quanh nó. Tinh thần các nhánh: thân mật, cozy, tăng vốn văn hóa và kết nối, lành mạnh và văn minh, đề cao kiến thức và sự thạo nghề.",
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
  { kind: "Nhánh", name: "workshop4genz · logic4genz", mark: "W", desc: "Thực hành chuyên đề do các W dẫn; rèn lập luận mạch lạc." },
  { kind: "Nhánh", name: "drawing4genz · chess4genz · gaming4genz", mark: "D", desc: "Vẽ, cờ, game — mài giác quan, tư duy và sự nhập cuộc." },
  { kind: "Nhánh", name: "weekend4genz", mark: "W", desc: "Thể thao nói chung — running, trekking, hiking; thân thể là nền của trải nghiệm." },
  { kind: "Nhánh", name: "communitybuilding4genz", mark: "C", desc: "Nghề xây cộng đồng — để mô hình tự nhân rộng." },
];

export const projectsLabel = "Những dự án chiến lược";

/** Strategic projects + the people (W) — each a card with a hover/tap banner. */
export const ecoCards: EcoCardItem[] = [
  {
    kind: "Dự án",
    name: "Dictionary4GenZ",
    mark: "D",
    desc: "Một từ điển sống, theo nhịp sống người Việt từ lịch sử đến hiện đại — củng cố hạ tầng chữ viết ở mức kí tự và từ ngữ.",
  },
  {
    kind: "Dự án",
    name: "Library4GenZ",
    mark: "L",
    desc: "Hệ thư viện dịch trực tiếp từ các nguồn mở uy tín nước ngoài (Psychology/Communication/Philosophy4GenZ) — nâng hạ tầng tri thức cho người Việt.",
  },
  {
    kind: "Một W",
    name: "The Weaver",
    mark: "✶",
    desc: "Người dệt những mảnh rời rạc thành một mạch truyện liền.",
  },
  {
    kind: "Một W",
    name: "The Witness",
    mark: "✶",
    desc: "Người ghi lại điều thật, không tô vẽ — trí nhớ của cộng đồng.",
  },
];

export const projects = {
  stat: {
    value:
      "Bối cảnh: ~80 triệu người dùng internet, nhưng trung bình mỗi người Việt đọc khoảng 1 cuốn sách/năm ngoài sách giáo khoa — thuộc nhóm thấp trong khu vực.",
    source: "DataReportal 2025 · ngành xuất bản VN 2016–2025",
    verify: true as const,
  },
  closing:
    "Các dự án này đánh thẳng vào lỗ hổng cấu trúc — đặc biệt trên môi trường internet và cho Gen Z — vốn đang khiến “narrative” của thế hệ này khó được viết tốt. W4GZ là một tập hợp leader hành động vào cấu trúc, không tự xem mình là thực thể thụ động.",
};

export const collaborate = {
  heading: "Muốn cùng dựng?",
  body: "Tổ chức, định chế, hay người xây độc lập muốn hợp tác trong hệ sinh thái -4GZ — hãy liên hệ.",
  ctaLabel: "Liên hệ",
};

/** W4GZ Media — the inverted "reality disrupted" panel (Patch H). */
export const media = {
  kicker: "Trong hệ sinh thái",
  wordmark: "W4GZ MEDIA",
  tagline: "reality, disrupted.",
  body: [
    "W4GZ Media là cánh tay phát ngôn của cả mạng lưới — nơi câu chuyện rời trang giấy và bước vào dòng chảy hỗn loạn của hình ảnh, âm thanh, và sự chú ý.",
    "Nếu phần còn lại của W4GZ là trật tự của mực và giấy, thì Media là thế lực được sinh ra để phá vỡ trật tự ấy: nhanh hơn, ồn hơn, và sắc hơn — đủ để một câu chuyện đáng sống chạm tới những người chưa từng nghe tên W4GZ.",
    "Họ đảm bảo social impact, đóng gói hoạt động và ấn phẩm theo cách bền vững, hợp xu hướng và có lợi nhuận; chuẩn hóa cách làm việc và monetization để các hoạt động ý nghĩa không trở thành gánh nặng tài nguyên cho các W, đồng thời hút nguồn lực phù hợp từ bên ngoài.",
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
        "Một hoạt động hay nhưng không chuẩn hóa thì chết cùng người tổ chức. Chuẩn hóa biến nó thành thứ nhân rộng được.",
      ],
    },
  ],
};
