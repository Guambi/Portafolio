import { useState, useEffect } from 'react';
import { Menu, X, Download, Send, Copy, Check, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { Popover, Button } from "@material-tailwind/react";
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import type { ProfileData } from '@/types/portafolio.types';

interface NavbarProps {
  profile: ProfileData;
}

interface NavItem {
  label: string;
  href: string;
  selected?: boolean;
}

/**
 * Navbar fija con efecto blur al hacer scroll.
 * Incluye navegación mobile con menú hamburguesa.
 */
export function Navbar({ profile }: NavbarProps) {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { label: 'Inicio', href: '#hero', selected: true },
    { label: 'Proyectos', href: '#projects', selected: false },
    { label: 'Habilidades', href: '#skills', selected: false },
    { label: 'Trayectoria', href: '#experience', selected: false },
  ]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactPopoverOpen, setIsContactPopoverOpen] = useState(false);
  const { copied, copy } = useCopyToClipboard();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy — highlight nav item based on visible section
  useEffect(() => {
    const sectionIds = ['#hero', '#projects', '#skills', '#experience'];
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean) as Element[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const href = `#${entry.target.id}`;
            setNavItems((prev) =>
              prev.map((item) => ({
                ...item,
                selected: item.href === href,
              }))
            );
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectNavItem = (href: string) => {
    setNavItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        selected: item.href === href,
      }))
    );
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
        }
      `}
    >
      <nav
        className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo / Nombre */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="font-mono text-md  font-semibold text-white hover:text-blue-300 p-2 transition-colors border rounded-md border-blue-500 bg-blue-600/20"
          aria-label="Ir al inicio"
        >
          KG
        </a>

        {/* Links de escritorio */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); handleSelectNavItem(item.href); }}
                className={`px-4 py-2 rounded-lg text-base font-medium text-slate-400 ${item.selected ? 'text-xl text-white' : ''} hover:text-slate-100 hover:bg-slate-800/60 transition-all duration-200`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Boton de contacto estilo CTA */}
        <Popover open={isContactPopoverOpen} onOpenChange={setIsContactPopoverOpen}>
          <Popover.Trigger className='hidden md:flex !px-4 !py-2 !rounded-md !text-sm !font-medium
            !bg-blue-600/20 !text-white !border !border-blue-500/30
            hover:bg-blue-600 hover:border-blue-600
            transition-all duration-200' as={Button} variant="outline" onClick={() => setIsContactPopoverOpen((cur) => !cur)}>
            <div className='flex items-center gap-2'>
              <Send size={14} />
              Contactar
            </div>
          </Popover.Trigger>
          <Popover.Content className="max-w-sm grid grid-cols-2 gap-2">
            <a
              id="hero-github-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${profile.name}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              id="hero-linkedin-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${profile.name}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>

            <a
              href={profile.cvFilename}
              download
              id="nav-download-cv"
              className="col-span-full flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
            >
              <Download size={14} />
              Descargar CV
            </a>
            <a
              id="hero-email-link"
              href={`mailto:${profile.email}`}
              aria-label={`Enviar email a ${profile.name}`}
              className="col-span-full flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
            >
              <Mail size={18} />
              Enviar Email
            </a>
            <label className="col-span-full text-center">---- o ----</label>
            <button
              id="hero-cta-copy-email"
              onClick={() => copy(profile.email)}
              className="col-span-full flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-cyan-400" />
                  <span className="text-cyan-400">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  {profile.email}
                </>
              )}
            </button>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>

        {/* Botón menú mobile */}
        <button
          id="nav-mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Panel menú mobile */}
      {
        isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
            <ul className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); handleSelectNavItem(item.href); }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 ${item.selected ? 'text-xl text-white' : ''} hover:text-slate-100 hover:bg-slate-800/80 transition-all`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800 mt-1 grid grid-cols-2 gap-2">
                <a
                  id="hero-github-link"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${profile.name}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
                >
                  <GithubIcon size={18} />
                  GitHub
                </a>
                <a
                  id="hero-linkedin-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${profile.name}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
                >
                  <LinkedinIcon size={18} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.cvFilename}
                  download
                  id="nav-download-cv"
                  className="col-span-full flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
                >
                  <Download size={14} />
                  Descargar CV
                </a>
              </li>
              <li className='grid grid-cols-2 gap-2'>
                <a
                  id="hero-email-link"
                  href={`mailto:${profile.email}`}
                  aria-label={`Enviar email a ${profile.name}`}
                  className="col-span-full flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
                >
                  <Mail size={18} />
                  Enviar Email
                </a>
                <label className="col-span-full text-center">---- o ----</label>
                <button
                  id="hero-cta-copy-email"
                  onClick={() => copy(profile.email)}
                  className="col-span-full flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-cyan-400" />
                      <span className="text-cyan-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      {profile.email}
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>
        )
      }
    </header >
  );
}
