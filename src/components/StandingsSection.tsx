import React from 'react';
import { Award, Flame, Shield, TrendingUp } from 'lucide-react';

interface TeamStanding {
  rank: number;
  name: string;
  logo: string;
  points: number;
  series: string;
  winRate: string;
  status: 'QUALIFIED' | 'CONTENDER' | 'ELIMINATED';
}

const STANDINGS: TeamStanding[] = [
  { rank: 1, name: "Natus Vincere (Na'Vi)", logo: "🛡️", points: 1450, series: "12-2", winRate: "85.7%", status: "QUALIFIED" },
  { rank: 2, name: "Team Liquid", logo: "💧", points: 1200, series: "10-4", winRate: "71.4%", status: "QUALIFIED" },
  { rank: 3, name: "OG Esports", logo: "🌻", points: 950, series: "8-6", winRate: "57.1%", status: "CONTENDER" },
  { rank: 4, name: "Alliance", logo: "🛡️", points: 720, series: "6-8", winRate: "42.8%", status: "CONTENDER" },
  { rank: 5, name: "Team Spirit", logo: "🐉", points: 400, series: "3-11", winRate: "21.4%", status: "ELIMINATED" }
];

export const StandingsSection: React.FC = () => {
  return (
    <section id="standings-section" className="w-full glass-panel p-6 rounded-2xl border border-[#F5C400]/25 shadow-xl mb-10">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <Award className="w-7 h-7 text-[#F5C400]" />
          <div>
            <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wider leading-none">
              GLOBAL DPC <span className="text-[#F5C400]">LEAGUE STANDINGS</span>
            </h2>
            <p className="font-['Rajdhani'] text-xs text-slate-400 font-semibold tracking-wider uppercase">
              THE INTERNATIONAL QUALIFICATION POINTS TALLY
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-[#F5C400]/10 border border-[#F5C400]/30 text-[#F5C400] text-xs font-['Rajdhani'] font-bold px-3 py-1.5 rounded-lg">
          <TrendingUp className="w-4 h-4" />
          <span>RANK #1 NATUS VINCERE</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] font-['Rajdhani'] font-bold text-slate-400 uppercase tracking-widest bg-slate-900/60">
              <th className="py-3 px-4">RANK</th>
              <th className="py-3 px-4">TEAM</th>
              <th className="py-3 px-4 text-center">DPC POINTS</th>
              <th className="py-3 px-4 text-center">SERIES (W-L)</th>
              <th className="py-3 px-4 text-center">WIN RATE</th>
              <th className="py-3 px-4 text-right">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-['Inter'] text-sm">
            {STANDINGS.map((st) => (
              <tr
                key={st.rank}
                className={`hover:bg-[#1A1C24]/90 transition-colors ${
                  st.rank === 1 ? 'bg-[#F5C400]/5 border-l-4 border-l-[#F5C400]' : ''
                }`}
              >
                <td className="py-3.5 px-4 font-['Bebas_Neue'] text-xl text-[#F5C400]">
                  #{st.rank}
                </td>

                <td className="py-3.5 px-4 font-['Rajdhani'] font-bold text-white">
                  <span className={st.rank === 1 ? 'text-[#F5C400]' : 'text-white'}>
                    {st.name}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-center font-['Bebas_Neue'] text-lg text-white">
                  {st.points} PTS
                </td>

                <td className="py-3.5 px-4 text-center font-['Rajdhani'] font-bold text-slate-300">
                  {st.series}
                </td>

                <td className="py-3.5 px-4 text-center font-['Rajdhani'] font-bold text-emerald-400">
                  {st.winRate}
                </td>

                <td className="py-3.5 px-4 text-right font-['Rajdhani'] font-bold text-xs">
                  <span
                    className={`px-2.5 py-1 rounded tracking-wider ${
                      st.status === 'QUALIFIED'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : st.status === 'CONTENDER'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {st.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
