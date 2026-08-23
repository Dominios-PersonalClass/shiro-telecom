/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import { Clock3, Mail, MapPin, Music2, Phone } from "lucide-react";
import Link from "next/link";
import { mainNavigation, siteConfig } from "@/config/site";
import { serviceList } from "@/data/services";
import { BrandLogo } from "../brand/BrandLogo";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="st-site-footer">
      <Container>
        <div className="st-site-footer__main">
          <div className="st-site-footer__brand">
            <BrandLogo variant="light" />
            <p>{siteConfig.tagline}</p>
            <p className="st-site-footer__coverage">
              Centro de operaciones en {siteConfig.operationsCenter}. Cobertura: {siteConfig.coverage}.
            </p>
          </div>

          <nav className="st-site-footer__column" aria-labelledby="footer-navigation-title">
            <h2 id="footer-navigation-title">Navegación</h2>
            <ul>
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="st-site-footer__column" aria-labelledby="footer-services-title">
            <h2 id="footer-services-title">Soluciones</h2>
            <ul>
              {serviceList.map((service) => (
                <li key={service.id}>
                  <Link href={`/servicios#${service.slug}`}>{service.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="st-site-footer__column st-site-footer__contact">
            <h2>Contacto</h2>
            <address>
              <p>
                <MapPin aria-hidden="true" size={17} strokeWidth={1.8} />
                <span>{siteConfig.address.display}</span>
              </p>
              <p>
                <Phone aria-hidden="true" size={17} strokeWidth={1.8} />
                <a href={siteConfig.phone.href} data-event="phone_click">
                  {siteConfig.phone.display}
                </a>
              </p>
              <p>
                <Mail aria-hidden="true" size={17} strokeWidth={1.8} />
                <a href={siteConfig.email.href} data-event="email_click">
                  {siteConfig.email.address}
                </a>
              </p>
              <p>
                <Clock3 aria-hidden="true" size={17} strokeWidth={1.8} />
                <span>{siteConfig.schedule.display}</span>
              </p>
              <p>
                <Music2 aria-hidden="true" size={17} strokeWidth={1.8} />
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="tiktok_click"
                >
                  TikTok oficial
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="st-site-footer__bottom">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <a href={siteConfig.url}>{siteConfig.domain}</a>
        </div>
      </Container>
    </footer>
  );
}
