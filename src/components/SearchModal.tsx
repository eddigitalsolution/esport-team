import React, { useState } from 'react';
import { X, Search, Trophy, User, Shield } from 'lucide-react';
import { PLAYERS_DATA, LATEST_MATCHES } from '../data/esportsData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlayer: (playerId: string) => void;
}

export const SearchModal: React.FC<Props> = ({ isOpen, onClose, onSelectPlayer }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedPlayers = PLAYERS_DATA.filter(
    (p) =>
      p.alias.toLowerCase().includes(query.toLowerCase()) ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.role.toLowerCase().includes(query.toLowerCase())
  );

  const matchedMatches = LATEST_MATCHES.filter(
    (m) =>
      m.opponent.toLowerCase().includes(query.toLowerCase()) ||
      m.tournament.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel border border-[#F5C400]/40 rounded-2xl p-6 bg-[#0D0D11]/95 shadow-[0_0_50px_rgba(245,196,0,0.2)]">
        
        {/* Header Search Input */}
        <div className="relative mb-6">
          <Search className="w-6 h-6 text-[#F5C400] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="global-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Na'Vi players, Dota 2 matches, heroes..."
            className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-slate-900 border-2 border-[#F5C400]/30 text-white font-['Rajdhani'] font-bold text-lg placeholder-slate-500 focus:outline-none focus:border-[#F5C400]"
            autoFocus
            autoComplete="off"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            aria-label="Close Search Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-6 pr-2">
          {/* Players Results */}
          <div>
            <h4 className="font-['Rajdhani'] font-bold text-xs text-[#F5C400] tracking-widest uppercase mb-3 flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>ROSTER PLAYERS ({matchedPlayers.length})</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {matchedPlayers.map((player) => (
                <div
                  key={player.id}
                  onClick={() => {
                    onSelectPlayer(player.id);
                    onClose();
                  }}
                  className="bg-[#14151C] border border-slate-800 hover:border-[#F5C400] p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img src={player.avatar} alt={player.alias} className="w-10 h-10 rounded-md object-cover" />
                  <div>
                    <h5 className="font-['Bebas_Neue'] text-lg text-white leading-none">{player.alias}</h5>
                    <p className="text-xs text-slate-400 font-['Rajdhani']">{player.roleShort}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Matches Results */}
          <div>
            <h4 className="font-['Rajdhani'] font-bold text-xs text-[#F5C400] tracking-widest uppercase mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>MATCH LOGS ({matchedMatches.length})</span>
            </h4>

            <div className="space-y-2">
              {matchedMatches.map((m) => (
                <div
                  key={m.id}
                  className="bg-[#14151C] border border-slate-800 p-3 rounded-lg flex items-center justify-between text-xs font-['Rajdhani']"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">Na'Vi vs {m.opponent}</span>
                    <span className="text-slate-400">({m.tournament})</span>
                  </div>
                  <span className={`font-bold px-2 py-0.5 rounded ${m.result === 'WIN' ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'}`}>
                    {m.result} {m.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
