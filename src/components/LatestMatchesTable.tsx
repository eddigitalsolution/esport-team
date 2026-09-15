import React, { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, Search, Filter } from 'lucide-react';
import { LATEST_MATCHES, Match } from '../data/esportsData';

export const LatestMatchesTable: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'WIN' | 'LOSS'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMatches = LATEST_MATCHES.filter((m) => {
    const matchesFilter = filter === 'ALL' || m.result === filter;
    const matchesQuery = m.opponent.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.tournament.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <section className="w-full glass-panel p-6 rounded-2xl border border-[#F5C400]/25 shadow-xl mb-10">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <Trophy className="w-7 h-7 text-[#F5C400]" />
          <div>
            <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wider leading-none">
              LATEST <span className="text-[#F5C400]">MATCHES</span>
            </h2>
            <p className="font-['Rajdhani'] text-xs text-slate-400 font-semibold tracking-wider uppercase">
              RECENT DOTA 2 COMPETITIVE LOGS & RESULTS
            </p>
          </div>
        </div>

        {/* Filter Buttons & Search Input */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Search */}
          <div className="relative min-w-[180px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="match-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team or event..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C400]"
              autoComplete="off"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
            {(['ALL', 'WIN', 'LOSS'] as const).map((f) => (
              <button
                key={f}
                id={`match-filter-btn-${f.toLowerCase()}`}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded text-xs font-['Rajdhani'] font-bold tracking-wider uppercase transition-all ${
                  filter === f
                    ? 'bg-[#F5C400] text-[#0D0D11] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Matches Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] font-['Rajdhani'] font-bold text-slate-400 uppercase tracking-widest bg-slate-900/60">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">TEAM</th>
              <th className="py-3 px-4 text-center">RESULT</th>
              <th className="py-3 px-4 text-center">SCORE</th>
              <th className="py-3 px-4 text-center">MAP</th>
              <th className="py-3 px-4 text-right">DATE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-['Inter'] text-sm">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match: Match) => (
                <tr
                  key={match.id}
                  className="hover:bg-[#1A1C24]/90 transition-colors group"
                >
                  {/* Match Number */}
                  <td className="py-3.5 px-4 font-['Bebas_Neue'] text-lg text-slate-400 group-hover:text-[#F5C400]">
                    {match.id}
                  </td>

                  {/* Team Opponent */}
                  <td className="py-3.5 px-4">
                    <div>
                      <p className="font-['Rajdhani'] font-bold text-white group-hover:text-[#F5C400] transition-colors">
                        Na'Vi vs {match.opponent}
                      </p>
                      <p className="text-[11px] text-slate-400 font-['Inter']">
                        {match.tournament}
                      </p>
                    </div>
                  </td>

                  {/* Result Badge */}
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Rajdhani'] font-bold tracking-wider ${
                        match.result === 'WIN'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                          : 'bg-rose-500/15 text-rose-400 border border-rose-500/40'
                      }`}
                    >
                      {match.result === 'WIN' ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <XCircle className="w-3.5 h-3.5" />
                      )}
                      <span>{match.result}</span>
                    </span>
                  </td>

                  {/* Score */}
                  <td className="py-3.5 px-4 text-center font-['Rajdhani'] font-bold text-base text-slate-200">
                    {match.score}
                  </td>

                  {/* Map format */}
                  <td className="py-3.5 px-4 text-center font-['Rajdhani'] font-semibold text-xs text-slate-400">
                    <span className="bg-slate-900 border border-slate-700 px-2 py-0.5 rounded">
                      {match.mapType}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-3.5 px-4 text-right font-['Rajdhani'] font-medium text-xs text-slate-400">
                    {match.date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-500 font-['Rajdhani']">
                  No matching logs found. Try adjusting your search query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
