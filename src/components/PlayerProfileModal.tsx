import React, { useEffect } from 'react';
import { X, Shield, Sparkles } from 'lucide-react';
import { PLAYERS_DATA, Player } from '../data/esportsData';

interface Props {
  playerId: string | null;
  onClose: () => void;
}

export const PlayerProfileModal: React.FC<Props> = ({ playerId, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (playerId) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerId, onClose]);

  if (!playerId) return null;

  const player: Player | undefined = PLAYERS_DATA.find((p) => p.id === playerId);
  if (!player) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-panel border-2 border-[#F5C400]/40 rounded-2xl overflow-hidden p-6 md:p-8 bg-[#0D0D11]/95 max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(245,196,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="player-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-300 hover:text-[#F5C400] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F5C400] transition-colors z-20"
          aria-label="Close Player Profile Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
          
          {/* Avatar */}
          <div className="md:col-span-4 relative">
            <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-[#F5C400]/50 shadow-lg">
              <img src={player.avatar} alt={player.alias} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-2 left-2 bg-[#0D0D11]/90 px-3 py-1 rounded border border-[#F5C400]/40 text-[#F5C400] font-['Rajdhani'] font-bold text-xs">
              {player.roleShort}
            </div>
          </div>

          {/* Player Info */}
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#F5C400]" />
              <span className="font-['Rajdhani'] font-bold text-xs text-[#F5C400] uppercase tracking-widest">
                OFFICIAL NA'VI PLAYER DOSSIER
              </span>
            </div>

            <h2 id="player-modal-title" className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white tracking-wider leading-none">
              {player.alias} <span className="text-slate-400 text-2xl font-normal">({player.name})</span>
            </h2>

            <p className="font-['Rajdhani'] font-bold text-sm text-[#F5C400] uppercase">
              ROLE: {player.role}
            </p>

            <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed">
              {player.bio}
            </p>
          </div>

        </div>

        {/* Career Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-[#14151C] border border-slate-800 p-3 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 font-['Rajdhani'] uppercase block">TOTAL MATCHES</span>
            <span className="font-['Bebas_Neue'] text-2xl text-white">{player.matchesPlayed}</span>
          </div>

          <div className="bg-[#14151C] border border-slate-800 p-3 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 font-['Rajdhani'] uppercase block">WIN RATE</span>
            <span className="font-['Bebas_Neue'] text-2xl text-emerald-400">{player.winRate}</span>
          </div>

          <div className="bg-[#14151C] border border-slate-800 p-3 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 font-['Rajdhani'] uppercase block">KDA RATIO</span>
            <span className="font-['Bebas_Neue'] text-2xl text-cyan-400">{player.kda}</span>
          </div>

          <div className="bg-[#14151C] border border-slate-800 p-3 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 font-['Rajdhani'] uppercase block">NET WORTH / MIN</span>
            <span className="font-['Bebas_Neue'] text-2xl text-[#F5C400]">{player.netWorth}</span>
          </div>
        </div>

        {/* Signature Heroes */}
        <div>
          <h3 className="font-['Rajdhani'] font-bold text-sm text-white tracking-wider uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F5C400]" />
            <span>SIGNATURE DOTA 2 HERO PICKS</span>
          </h3>

          <div className="flex flex-wrap gap-2">
            {player.signatureHeroes.map((hero) => (
              <span
                key={hero}
                className="bg-[#14151C] border border-[#F5C400]/30 text-slate-200 px-3.5 py-1.5 rounded-lg text-xs font-['Rajdhani'] font-bold tracking-wider hover:border-[#F5C400] hover:text-[#F5C400] transition-colors"
              >
                ★ {hero}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary text-xs py-2 px-6 focus:ring-2 focus:ring-[#F5C400]"
            aria-label="Close Profile"
          >
            CLOSE PROFILE
          </button>
        </div>

      </div>
    </div>
  );
};
