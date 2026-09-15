import React, { useState, useEffect } from 'react';
import { X, ArrowRightLeft } from 'lucide-react';
import { PLAYERS_DATA, Player } from '../data/esportsData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ComparePlayersModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [player1Id, setPlayer1Id] = useState<string>('dendi');
  const [player2Id, setPlayer2Id] = useState<string>('puppey');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const p1 = PLAYERS_DATA.find((p) => p.id === player1Id) || PLAYERS_DATA[0];
  const p2 = PLAYERS_DATA.find((p) => p.id === player2Id) || PLAYERS_DATA[2];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl glass-panel border-2 border-[#F5C400]/40 rounded-2xl p-6 md:p-8 bg-[#0D0D11]/95 max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(245,196,0,0.3)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="compare-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-300 hover:text-[#F5C400] focus:ring-2 focus:ring-[#F5C400] transition-colors z-20"
          aria-label="Close Comparison Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <ArrowRightLeft className="w-7 h-7 text-[#F5C400]" />
          <div>
            <h2 id="compare-modal-title" className="font-['Bebas_Neue'] text-3xl text-white tracking-wider leading-none">
              ROSTER STATISTICAL <span className="text-[#F5C400]">HEAD-TO-HEAD</span>
            </h2>
            <p className="font-['Rajdhani'] text-xs text-slate-400 font-semibold uppercase">
              COMPARE PERFORMANCE METRICS & CAREER RECORD
            </p>
          </div>
        </div>

        {/* Selectors Row */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Player 1 Selector */}
          <div>
            <label htmlFor="compare-player-1-select" className="block text-xs font-['Rajdhani'] font-bold text-[#F5C400] uppercase mb-1">
              SELECT FIRST LEGEND
            </label>
            <select
              id="compare-player-1-select"
              value={player1Id}
              onChange={(e) => setPlayer1Id(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-['Rajdhani'] font-bold text-sm focus:outline-none focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]"
            >
              {PLAYERS_DATA.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.alias} ({p.roleShort})
                </option>
              ))}
            </select>
          </div>

          {/* Player 2 Selector */}
          <div>
            <label htmlFor="compare-player-2-select" className="block text-xs font-['Rajdhani'] font-bold text-[#F5C400] uppercase mb-1">
              SELECT SECOND LEGEND
            </label>
            <select
              id="compare-player-2-select"
              value={player2Id}
              onChange={(e) => setPlayer2Id(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-['Rajdhani'] font-bold text-sm focus:outline-none focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]"
            >
              {PLAYERS_DATA.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.alias} ({p.roleShort})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Head to Head Visual Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#14151C]/90 p-5 rounded-xl border border-slate-800">
          
          {/* Player 1 Side */}
          <div className="flex flex-col items-center text-center p-4 bg-[#0D0D11] rounded-lg border border-[#F5C400]/30">
            <img src={p1.avatar} alt={p1.alias} className="w-24 h-24 rounded-full object-cover border-2 border-[#F5C400] mb-3 shadow-lg" />
            <h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wider">{p1.alias}</h3>
            <span className="text-xs font-['Rajdhani'] font-bold text-[#F5C400] uppercase mb-4">{p1.role}</span>

            <div className="w-full space-y-2 text-xs font-['Rajdhani']">
              <div className="flex justify-between bg-slate-900 p-2 rounded">
                <span className="text-slate-400">WIN RATE:</span>
                <span className="text-emerald-400 font-bold">{p1.winRate}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-2 rounded">
                <span className="text-slate-400">KDA RATIO:</span>
                <span className="text-cyan-400 font-bold">{p1.kda}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-2 rounded">
                <span className="text-slate-400">AVG LAST HITS:</span>
                <span className="text-white font-bold">{p1.lastHits}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-2 rounded">
                <span className="text-slate-400">NET WORTH:</span>
                <span className="text-[#F5C400] font-bold">{p1.netWorth}</span>
              </div>
            </div>
          </div>

          {/* Player 2 Side */}
          <div className="flex flex-col items-center text-center p-4 bg-[#0D0D11] rounded-lg border border-[#F5C400]/30">
            <img src={p2.avatar} alt={p2.alias} className="w-24 h-24 rounded-full object-cover border-2 border-[#F5C400] mb-3 shadow-lg" />
            <h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wider">{p2.alias}</h3>
            <span className="text-xs font-['Rajdhani'] font-bold text-[#F5C400] uppercase mb-4">{p2.role}</span>

            <div className="w-full space-y-2 text-xs font-['Rajdhani']">
              <div className="flex justify-between bg-slate-900 p-2 rounded">
                <span className="text-slate-400">WIN RATE:</span>
                <span className="text-emerald-400 font-bold">{p2.winRate}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-2 rounded">
                <span className="text-slate-400">KDA RATIO:</span>
                <span className="text-cyan-400 font-bold">{p2.kda}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-2 rounded">
                <span className="text-slate-400">AVG LAST HITS:</span>
                <span className="text-white font-bold">{p2.lastHits}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-2 rounded">
                <span className="text-slate-400">NET WORTH:</span>
                <span className="text-[#F5C400] font-bold">{p2.netWorth}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Close CTA */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary py-2 px-6 text-xs focus:ring-2 focus:ring-[#F5C400]"
            aria-label="Close Comparison Modal"
          >
            DONE COMPARING
          </button>
        </div>

      </div>
    </div>
  );
};
