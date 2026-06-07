import type { Page } from "./model";
import type { ModuleName } from "@/components/symbols/SymbolModule";

/** Chapter I · Home (Master Spec PART 5 · Trang I). Bespoke layout reads these. */

export const heroStats = [
  { value: "10+", label: "Số khóa đã dạy" },
  { value: "Gen Z", label: "Thế hệ trọng tâm" },
  { value: "HCMC", label: "Không gian vật lý" },
  { value: "Est. 2022", label: "Năm khởi lập" },
];

export const tickerItems = [
  "Creates narratives worth living",
  "Writing4GenZ",
  "Est. 2022",
  "Ho Chi Minh City",
  "The -4GZ Ecosystem",
];

export const pillars: { name: string; line: string; module?: ModuleName }[] = [
  { name: "Narrative", line: "bạn là câu chuyện bạn kể về mình." },
  { name: "Writing", line: "kỉ luật để tự viết câu chuyện ấy.", module: "writing" },
  {
    name: "Community",
    line: "điều kiện để giữ và lan kỉ luật đó.",
    module: "community",
  },
];
export const pillarsClosing = "Bỏ một trụ, hai trụ kia sụp. W4GZ dựng cả ba.";

export const doors = [
  {
    index: "01",
    title: "Vì sao Viết",
    description: "Lập luận về narrative, viết, và chủ quyền trong thời đại AI.",
    href: "/why-writing",
  },
  {
    index: "02",
    title: "Học viết",
    description:
      "Introduction online và Advanced offline — cổng duy nhất vào cộng đồng.",
    href: "/courses",
  },
  {
    index: "03",
    title: "Cộng đồng",
    description: "Vì sao một mình là không đủ, và bước vào bằng cách nào.",
    href: "/community",
  },
  {
    index: "04",
    title: "Hệ sinh thái",
    description: "Các nhánh -4GZ và những dự án chiến lược cho người Việt.",
    href: "/ecosystem",
  },
];

export const transition = {
  text: "Trước khi học cách viết, cần hiểu vì sao phải viết.",
  href: "/why-writing",
};

export const home: Page = {
  route: "/",
  chapter: "I",
  title: "W4GZ — Writing4GenZ",
  description:
    "Một đời là một văn bản. W4GZ trả cây bút về tay người viết — và cho họ một cộng đồng để viết tiếp. Creates narratives worth living.",
  sectors: [
    {
      id: "I.1",
      kicker: "Creates narratives worth living",
      heading: "Một đời là một văn bản.",
      sub: "Câu hỏi duy nhất: ai cầm bút?",
      body: [
        "Mỗi ngày, thuật toán viết hộ bạn hàng nghìn câu — điều cần xem, cần muốn, cần sợ. W4GZ trả cây bút về tay người viết, và cho họ một cộng đồng để viết tiếp.",
      ],
      cta: [
        { label: "Bắt đầu với Introduction", href: "/courses", variant: "filled" },
        {
          label: "Con đường vào cộng đồng",
          href: "/community",
          variant: "outline",
        },
      ],
    },
  ],
};
