import React from 'react';
import { UserCheck, Shield, ExternalLink, Flame } from 'lucide-react';
import { PLAYERS_DATA, Player } from '../data/esportsData';

interface Props {
  onViewProfile: (playerId: string) => void;
}

export const TeamRosterSection: React.FC<Props> = ({ onViewProfile }) => {
  return (
    <section id="players-section" className="w-full mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#F5C400]/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-[#F5C400] rounded-sm"></div>
          <div>
            <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-white tracking-wider leading-none">
              NATUS VINCERE <span className="text-[#F5C400]">ROSTER</span>
            </h2>
            <p className="font-['Rajdhani'] text-xs md:text-sm text-slate-400 font-semibold tracking-wider uppercase">
              OFFICIAL DOTA 2 ACTIVE SQUAD & LEGENDS
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-['Rajdhani'] font-bold text-[#F5C400] bg-[#F5C400]/10 border border-[#F5C400]/30 px-3 py-1.5 rounded-md">
          <Shield className="w-4 h-4" />
          <span>TI CHAMPIONSHIP SQUAD</span>
        </div>
      </div>

      {/* Roster Cards: Horizontal Slide/Scroll on Mobile, Grid on Tablet/Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 scrollbar-thin scrollbar-thumb-[#F5C400]/30 scrollbar-track-transparent">
        {PLAYERS_DATA.map((player: Player) => (
          <div
            key={player.id}
            className="group relative glass-panel p-4 rounded-xl flex flex-col justify-between hover:border-[#F5C400] transition-all duration-300 transform hover:-translate-y-1 w-[260px] shrink-0 snap-center sm:shrink sm:w-full"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#F5C400] to-transparent opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>

            <div>
              {/* Player Image Card */}
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-3 border border-slate-700 group-hover:border-[#F5C400]/50 transition-colors">
                <img
                  src={player.avatar}
                  alt={`${player.alias} Na'Vi Dota 2`}
                  className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-transparent to-transparent opacity-80"></div>
                
                {/* Role Badge */}
                <div className="absolute top-2 right-2 bg-[#0D0D11]/90 border border-[#F5C400]/40 text-[#F5C400] px-2 py-0.5 rounded font-['Rajdhani'] text-[11px] font-bold tracking-wider uppercase">
                  {player.roleShort}
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="font-['Bebas_Neue'] text-2xl text-white tracking-wide leading-none group-hover:text-[#F5C400] transition-colors">
                    {player.alias}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-['Rajdhani'] font-medium truncate">
                    {player.name}
                  </p>
                </div>
              </div>

              {/* Player Stats Mini Grid */}
              <div className="space-y-1.5 mb-4 text-xs font-['Rajdhani']">
                <div className="flex justify-between items-center bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                  <span className="text-slate-400">ROLE:</span>
                  <span className="text-white font-bold tracking-wide">{player.role}</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                  <span className="text-slate-400">WIN RATE:</span>
                  <span className="text-emerald-400 font-bold">{player.winRate}</span>
                </div>
              </div>
            </div>

            {/* Profile Action Button */}
            <button
              id={`view-profile-btn-${player.id}`}
              onClick={() => onViewProfile(player.id)}
              className="w-full btn-outline justify-center text-xs py-2 group-hover:bg-[#F5C400] group-hover:text-[#0D0D11] transition-all touch-manipulation"
              aria-label={`View Profile of ${player.alias}`}
            >
              <span>[VIEW PROFILE]</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};
