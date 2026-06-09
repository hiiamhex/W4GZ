import { buildMetadata } from "@/lib/seo";
import { privacy } from "@/content/privacy";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";

export const metadata = buildMetadata({
  title: "Quyền riêng tư",
  description:
    "Cách W4GZ thu thập, dùng, lưu giữ và bảo vệ dữ liệu biểu mẫu — đúng những gì cần, trên hạ tầng của chính mình, không bên thứ ba.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero label={privacy.label} heading={privacy.heading} sub={privacy.lead} module="hub" />

      <Section topRule>
        <Container>
          <p className="mb-12 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            {privacy.updated}
          </p>
          <div className="max-w-2xl space-y-12">
            {privacy.sections.map((s) => (
              <div key={s.h}>
                <h2 className="mb-4 font-display text-2xl italic leading-tight text-ink md:text-3xl">
                  {s.h}
                </h2>
                <div className="space-y-4">
                  {s.p.map((para, i) => (
                    <p key={i} className="text-lg leading-relaxed text-ink/80">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="hr-t pt-8">
              <SectionLabel className="mb-3">Liên hệ</SectionLabel>
              {privacy.contact ? (
                <a
                  href={`mailto:${privacy.contact}`}
                  className="font-display text-xl italic text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink"
                >
                  {privacy.contact}
                </a>
              ) : (
                <p className="text-lg text-ink/80">
                  Yêu cầu về dữ liệu: nhắn qua kênh cộng đồng của W4GZ.{" "}
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                    [ email liên hệ — đang cập nhật ]
                  </span>
                </p>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
