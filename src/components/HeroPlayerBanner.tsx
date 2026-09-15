import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { PLAYERS_DATA, Player } from '../data/esportsData';

interface Props {
  onWatchReplays: () => void;
  onViewProfile: (playerId: string) => void;
}

export const HeroPlayerBanner: React.FC<Props> = ({ onWatchReplays }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const featuredPlayers = PLAYERS_DATA;
  const currentPlayer: Player = featuredPlayers[currentSlideIndex];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % featuredPlayers.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + featuredPlayers.length) % featuredPlayers.length);
  };

  return (
    <section className="relative w-full rounded-2xl overflow-hidden border border-[#F5C400]/30 mb-6 md:mb-10 shadow-[0_20px_60px_rgba(0,0,0,0.95)] bg-[#0D0D11]">

      {/* ─── Full-Bleed Background Image ─── */}
      <div className="absolute inset-0 z-0">
        <img
          key={currentPlayer.id}
          src={currentPlayer.heroImage || "/assets/images/dendi_hero_carousel.jpg"}
          alt={`${currentPlayer.alias} Na'Vi`}
          className="w-full h-full object-cover object-[75%_20%] sm:object-[80%_30%] md:object-center brightness-90 contrast-110 transition-all duration-700"
        />

        {/* Bottom-to-top dark gradient for text legibility on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-[#0D0D11]/75 sm:via-[#0D0D11]/55 to-transparent" />

        {/* Left dark fade for desktop text area */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0D0D11] via-[#0D0D11]/50 to-transparent w-3/5" />

        {/* Top vignette — masks baked header text in banner images */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#0D0D11] via-[#0D0D11]/80 to-transparent pointer-events-none" />

        {/* Subtle gold ambient glow top-right */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5C400]/8 blur-3xl rounded-full pointer-events-none" />
      </div>

      {/* ─── Arrow Navigation ─── */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/65 border border-[#F5C400]/40 text-[#F5C400] hover:bg-[#F5C400] hover:text-black transition-all backdrop-blur-sm touch-manipulation"
        aria-label="Previous Player"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2.5} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/65 border border-[#F5C400]/40 text-[#F5C400] hover:bg-[#F5C400] hover:text-black transition-all backdrop-blur-sm touch-manipulation"
        aria-label="Next Player"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2.5} />
      </button>

      {/* ─── Content: bottom-anchored on mobile, left-anchored on desktop ─── */}
      <div className="relative z-20 flex flex-col justify-end min-h-[310px] sm:min-h-[400px] md:min-h-[480px] px-5 sm:px-10 md:px-14 pb-5 sm:pb-8 md:pb-12 pt-16 sm:pt-12 md:pt-14">

        <div className="w-full md:max-w-lg space-y-2.5 sm:space-y-3">

          {/* Tag line */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#F5C400]" />
            <span className="font-['Rajdhani'] font-bold text-[9px] sm:text-[11px] tracking-[0.2em] text-[#F5C400] uppercase">
              NATUS VINCERE • DOTA 2
            </span>
          </div>

          {/* Player name — large, bold, gold */}
          <h1 className="font-['Bebas_Neue'] leading-none tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] text-[clamp(1.9rem,9vw,3.75rem)] md:text-5xl lg:text-6xl">
            <span className="text-[#F5C400] drop-shadow-[0_0_28px_rgba(245,196,0,0.6)]">
              "{currentPlayer.alias}"
            </span>{' '}
            <span className="text-white">THE LEGEND</span>
          </h1>

          {/* Role pill + divider */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-[#F5C400]/15 border border-[#F5C400]/40 text-[#F5C400] font-['Rajdhani'] font-bold text-[9px] sm:text-[11px] tracking-widest uppercase px-2.5 py-0.5 rounded">
              {currentPlayer.role}
            </span>
            <span className="h-px w-6 bg-[#F5C400]/30" />
            <span className="font-['Rajdhani'] text-[9px] sm:text-[11px] text-slate-400 uppercase tracking-widest">
              OFFICIAL LINEUP
            </span>
          </div>

          {/* Stat chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-[#F5C400]/20 rounded px-2.5 py-1">
              <span className="font-['Rajdhani'] text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-wider">LAST HITS</span>
              <span className="font-['Rajdhani'] font-bold text-[9px] sm:text-[11px] text-[#F5C400]">{currentPlayer.lastHits}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-[#F5C400]/20 rounded px-2.5 py-1">
              <span className="font-['Rajdhani'] text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-wider">NET WORTH</span>
              <span className="font-['Rajdhani'] font-bold text-[9px] sm:text-[11px] text-[#F5C400]">{currentPlayer.netWorth}</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-0.5">
            <button
              id="hero-watch-replays-button"
              onClick={onWatchReplays}
              className="inline-flex items-center gap-2 btn-primary py-2 sm:py-2.5 px-4 sm:px-6 text-[11px] sm:text-xs shadow-[0_0_24px_rgba(245,196,0,0.4)] hover:shadow-[0_0_36px_rgba(245,196,0,0.65)] transition-all touch-manipulation"
              aria-label="Watch MVP Replays"
            >
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" strokeWidth={2} />
              <span>WATCH MVP REPLAYS</span>
            </button>
          </div>

        </div>

        {/* ─── Pagination pills ─── */}
        <div className="flex items-center justify-center gap-1.5 pt-4 sm:pt-6">
          {featuredPlayers.map((player, idx) => (
            <button
              key={player.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`rounded-full transition-all duration-300 touch-manipulation ${
                currentSlideIndex === idx
                  ? 'bg-[#F5C400] w-7 sm:w-9 h-[5px] shadow-[0_0_8px_rgba(245,196,0,0.9)]'
                  : 'bg-slate-600/70 hover:bg-slate-400 w-[5px] h-[5px]'
              }`}
              aria-label={`Slide ${idx + 1}: ${player.alias}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
