import type { ModuleName } from "@/components/symbols/SymbolModule";

/**
 * Chapter "The Fit" — the registrant-fit funnel page (nav between Why Writing and
 * Courses). Hero "ARE YOU W4GZ?" + six value cards, each carrying its glyph.
 * The six values are the brand's existing principles (Master Spec / Manifesto);
 * final wording is locked from Copy v5 (see NOTE) — not yet in the repo.
 */

export const title = "The Fit";
export const description =
  "ARE YOU W4GZ? Sáu giá trị của một người W4GZ: Narrative, Writing, Meaning over noise, Honesty, Craft, Community.";

export const hero = {
  label: "The Fit",
  heading: "ARE YOU W4GZ?",
  sub: "Sáu điều một người W4GZ mang trong mình. Nếu bạn thấy mình trong cả sáu, đây là nhà.",
};

export const valuesLabel = "Sáu giá trị";

export const values: {
  index: string;
  name: string;
  nameVi: string;
  glyph: ModuleName;
  line: string;
}[] = [
  {
    index: "01",
    name: "Narrative",
    nameVi: "Tự sự",
    glyph: "narrative",
    line: "Bạn tin đời mình là một câu chuyện bạn được quyền viết — không phải một kịch bản người khác giao.",
  },
  {
    index: "02",
    name: "Writing",
    nameVi: "Viết",
    glyph: "writing",
    line: "Bạn coi viết là một kỉ luật để rèn, không phải một năng khiếu để ngồi chờ.",
  },
  {
    index: "03",
    name: "Meaning over noise",
    nameVi: "Nghĩa hơn nhiễu",
    glyph: "meaning",
    line: "Giữa dòng chữ vô tận, bạn chọn dựng nghĩa thay vì chạy theo tiếng ồn.",
  },
  {
    index: "04",
    name: "Honesty",
    nameVi: "Trung thực",
    glyph: "honesty",
    line: "Bạn viết thật trước khi viết hay; lời nguy hiểm nhất là lời ta tự dối mình.",
  },
  {
    index: "05",
    name: "Craft",
    nameVi: "Tay nghề",
    glyph: "craft",
    line: "Bạn công bố với tay nghề: cắt cho gọn, tìm đúng chữ, chịu trách nhiệm trước người đọc.",
  },
  {
    index: "06",
    name: "Community",
    nameVi: "Cộng đồng",
    glyph: "community",
    line: "Bạn muốn giữ kỉ luật ấy giữa một bầy trung thực, không phải một mình.",
  },
];

export const note =
  "Chữ chốt theo Copy v5; bản hiện nêu đúng sáu giá trị + tinh thần, chờ wording khóa từ tài liệu.";

export const transition = {
  text: "Nếu đây là bạn — giờ học cách viết nó.",
  href: "/courses",
};
