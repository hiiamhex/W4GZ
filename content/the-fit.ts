import type { ModuleName } from "@/components/symbols/SymbolModule";

/**
 * Chapter "The Fit" — the registrant-fit funnel page (nav between Why Writing and
 * Courses). Hero "Bạn có phải là một W không?" + six value cards, each carrying
 * its glyph. Self-recognition wording is "W" (a member is a W); "W4GZ" stays the
 * org/brand + course names. The six values are the brand's existing principles.
 */

export const title = "The Fit";
export const description =
  "Bạn có phải là một W không? Sáu giá trị của một người W: Narrative, Writing, Meaning over noise, Honesty, Craft, Community.";

export const hero = {
  label: "The Fit",
  heading: "Bạn có phải là một W (trong W4GZ) không?",
  sub: "Sáu điều dưới đây không phải tiêu chí để loại trừ. Chúng là tấm gương.",
};

export const valuesLabel = "Sáu giá trị";
export const tapHint = "Chạm vào từng thẻ — và xem điều hiện ra có giống bạn không.";

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
    line: "Bạn tin đời mình là một câu chuyện đang được viết, không phải một chuỗi toàn những điều ngẫu nhiên.",
  },
  {
    index: "02",
    name: "Writing",
    nameVi: "Viết",
    glyph: "writing",
    line: "Bạn muốn viết — không phải để gây ấn tượng, mà để nghĩ cho trọn vẹn và cảm nhận thấu suốt.",
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
    line: "Bạn viết thành thật trước khi viết hay; lời nguy hiểm nhất là lời ta tự dối mình.",
  },
  {
    index: "05",
    name: "Craft",
    nameVi: "Lành nghề",
    glyph: "craft",
    line: "Bạn xuất bản sự lành nghề: cắt cho gọn, tìm đúng chữ, chịu trách nhiệm trước người đọc.",
  },
  {
    index: "06",
    name: "Community",
    nameVi: "Cộng đồng",
    glyph: "community",
    line: "Bạn muốn giữ kỉ luật viết giữa những người cũng như vậy.",
  },
];

export const transition = {
  text: "Nếu đây là bạn — giờ hãy học cách viết nó.",
  href: "/courses",
};
