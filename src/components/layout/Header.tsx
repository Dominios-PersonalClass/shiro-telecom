/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import { Headphones } from "lucide-react";
import { mainNavigation } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BrandLogo } from "../brand/BrandLogo";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { MainNav } from "./MainNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const supportHref = buildWhatsAppUrl("general");

  return (
    <>
      <a className="st-skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <header className="st-site-header">
        <Container className="st-site-header__inner">
          <BrandLogo priority />
          <MainNav items={mainNavigation} />
          <div className="st-site-header__actions">
            <Button
              className="st-site-header__support"
              href={supportHref}
              external
              variant="primary"
              size="sm"
              iconStart={<Headphones aria-hidden="true" size={17} strokeWidth={1.8} />}
              ariaLabel="Solicitar soporte a Shiro Telecom por WhatsApp"
            >
              Solicitar soporte
            </Button>
            <MobileMenu
              items={mainNavigation}
              cta={{ label: "Solicitar soporte", href: supportHref, external: true }}
            />
          </div>
        </Container>
      </header>
    </>
  );
}
