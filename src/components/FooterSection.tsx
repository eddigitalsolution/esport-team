import React from 'react';
import { Youtube, Twitter, Twitch, Instagram, Shield, ExternalLink } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#090A0D] border-t border-[#F5C400]/20 pt-12 pb-8 px-4 md:px-8 mt-16">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Grid: Brand + Socials + Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F5C400] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#0D0D11]" />
              </div>
              <span className="font-['Bebas_Neue'] text-3xl text-white tracking-wider">
                NATUS VINCERE <span className="text-[#F5C400]">DOTA 2</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-['Inter'] leading-relaxed max-w-md">
              Official esports hub of Natus Vincere (Na'Vi). Champions of The International 2011 and multi-time finalist. Born to Win.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h4 className="font-['Rajdhani'] font-bold text-sm text-[#F5C400] tracking-widest uppercase mb-3">
              OFFICIAL SOCIAL CHANNELS
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'hover:text-red-500 hover:border-red-500/50' },
                { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-sky-400 hover:border-sky-400/50' },
                { name: 'Twitch', icon: Twitch, url: 'https://twitch.tv', color: 'hover:text-purple-400 hover:border-purple-400/50' },
                { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-pink-500 hover:border-pink-500/50' }
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 transition-all ${s.color}`}
                    aria-label={`Visit Na'Vi ${s.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Official Sponsors */}
          <div className="md:col-span-4">
            <h4 className="font-['Rajdhani'] font-bold text-sm text-[#F5C400] tracking-widest uppercase mb-3">
              OFFICIAL PARTNERS & SPONSORS
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {['Red Bull', 'NVIDIA', 'ASUS ROG', 'Monster Energy'].map((sponsor) => (
                <div
                  key={sponsor}
                  className="bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-lg font-['Rajdhani'] font-bold text-xs text-slate-300 tracking-wider hover:border-[#F5C400]/40 transition-colors"
                >
                  {sponsor}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-['Inter'] gap-4">
          <p>&copy; {new Date().getFullYear()} Natus Vincere. All Rights Reserved. Dota 2 is a registered trademark of Valve Corporation.</p>
          <div className="flex items-center gap-4 font-['Rajdhani'] font-semibold">
            <a href="#privacy" className="hover:text-[#F5C400] transition-colors">PRIVACY POLICY</a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#F5C400] transition-colors">TERMS OF SERVICE</a>
            <span>•</span>
            <a href="#press" className="hover:text-[#F5C400] transition-colors">PRESS KIT</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
