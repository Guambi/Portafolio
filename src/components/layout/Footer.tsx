import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { ProfileData } from '@/types/portfolio.types';

interface NavbarProps {
  profile: ProfileData;
}

/**
 * Pie de página minimalista con links sociales y copyright.
 */
export function Footer({ profile }: NavbarProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 'footer-github',
      href: profile.github,
      label: `GitHub de ${profile.name}`,
      icon: GithubIcon,
    },
    {
      id: 'footer-linkedin',
      href: profile.linkedin,
      label: `LinkedIn de ${profile.name}`,
      icon: LinkedinIcon,
    },
    {
      id: 'footer-email',
      href: 'mailto:' + profile.email,
      label: `Enviar email a ${profile.name}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-mono text-sm font-semibold text-blue-400">
              KG
            </span>
            <p className="text-xs text-slate-500">
              Kevin Guzmán — Ingeniero de Software Full Stack & UX
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ id, href, label, icon: Icon }) => (
              <a
                key={id}
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-100 hover:bg-slate-800
                  transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/40 flex items-center justify-center gap-1.5 text-xs text-slate-600">
          <span>© {currentYear} Kevin Guzmán. Construido con</span>
          <span>usando React / TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
