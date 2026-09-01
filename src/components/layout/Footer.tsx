import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navLinks, getContactDetails, siteMeta } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export async function Footer() {
  const year = new Date().getFullYear();
  const [t, tNav, tSite, tContent] = await Promise.all([
    getTranslations("Footer"),
    getTranslations("Nav"),
    getTranslations("Site"),
    getTranslations("Content"),
  ]);
  const contactDetails = getContactDetails(tContent);

  return (
    <footer className="w-full bg-ink-900 text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.8fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-6 text-white/60">{tSite("description")}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-400">{t("navigation")}</h3>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                {tNav(link.key)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-400">{t("contact")}</h3>
          <div className="flex flex-col gap-3">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
                <p className="whitespace-pre-line text-sm leading-6 text-white/60">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col-reverse items-center gap-2 py-5 text-center text-xs text-white/40 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {siteMeta.name}. {t("rights")}
          </p>
          <p>{siteMeta.legalName}</p>
        </Container>
      </div>
    </footer>
  );
}
