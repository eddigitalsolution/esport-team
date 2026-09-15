import React, { useState } from 'react';
import { Calendar, Users, Briefcase, Bell, Flame, ShieldAlert, ChevronRight } from 'lucide-react';
import { PLAYERS_DATA, STAFF_MEMBERS, UPCOMING_MATCHES } from '../data/esportsData';

interface Props {
  onViewProfile: (playerId: string) => void;
}

export const RightSidebar: React.FC<Props> = ({ onViewProfile }) => {
  const [activeCategory, setActiveCategory] = useState<'REGIONAL' | 'MATCHES' | 'INTERNATIONAL'>('MATCHES');
  const [reminderSet, setReminderSet] = useState<Record<string, boolean>>({});

  const toggleReminder = (id: string) => {
    setReminderSet((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-full flex flex-col gap-6">
      
      {/* 1. Navigation Category Filters */}
      <div className="glass-panel p-4 rounded-xl border border-[#F5C400]/20">
        <h3 className="font-['Bebas_Neue'] text-xl text-white tracking-wider mb-3 flex items-center gap-2">
          <Flame className="w-5 h-5 text-[#F5C400]" />
          <span>TOURNAMENT FEEDS</span>
        </h3>
        <div className="flex flex-col gap-1.5 font-['Rajdhani'] font-bold text-xs uppercase">
          {[
            { key: 'MATCHES', label: 'LATEST MATCHES' },
            { key: 'REGIONAL', label: 'REGIONAL LEAGUES' },
            { key: 'INTERNATIONAL', label: 'INTERNATIONAL TOURNAMENTS' }
          ].map((cat) => (
            <button
              key={cat.key}
              id={`sidebar-cat-btn-${cat.key.toLowerCase()}`}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`w-full text-left px-3 py-2 rounded-md transition-all flex items-center justify-between ${
                activeCategory === cat.key
                  ? 'bg-[#F5C400] text-[#0D0D11] shadow'
                  : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-[#F5C400]'
              }`}
            >
              <span>{cat.label}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* 2. Match Schedule Widget */}
      <div className="glass-panel p-5 rounded-xl border border-[#F5C400]/30 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5C400]/10 rounded-full blur-xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="font-['Bebas_Neue'] text-2xl text-white tracking-wider flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#F5C400]" />
            <span>UPCOMING MATCHES</span>
          </h3>
          <span className="text-[10px] bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded font-['Rajdhani'] font-bold animate-pulse">
            LIVE NEXT
          </span>
        </div>

        <div className="space-y-3">
          {UPCOMING_MATCHES.map((match) => (
            <div
              key={match.id}
              className="bg-[#14151C] border border-slate-700/80 hover:border-[#F5C400]/50 p-3.5 rounded-lg transition-all"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 font-['Rajdhani'] mb-2">
                <span className="font-semibold text-slate-300">{match.tournament}</span>
                <span className="text-[#F5C400] font-bold">{match.date}</span>
              </div>

              {/* Match Versus Info */}
              <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-2">
                  <span className="font-['Bebas_Neue'] text-lg text-white">NA'VI</span>
                </div>

                <div className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-['Bebas_Neue'] text-[#F5C400]">
                  VS
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-['Bebas_Neue'] text-lg text-white">{match.opponent}</span>
                  <span className="text-lg">{match.opponentLogo}</span>
                </div>
              </div>

              {/* Action Button & Time */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <span className="text-xs text-slate-400 font-['Inter']">{match.time}</span>
                <button
                  id={`reminder-btn-${match.id}`}
                  onClick={() => toggleReminder(match.id)}
                  className={`text-xs py-1 px-3 rounded font-['Rajdhani'] font-bold flex items-center gap-1.5 transition-all ${
                    reminderSet[match.id]
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-[#F5C400]/10 text-[#F5C400] border border-[#F5C400]/30 hover:bg-[#F5C400] hover:text-[#0D0D11]'
                  }`}
                  aria-label={`Set Reminder for Na'Vi vs ${match.opponent}`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>{reminderSet[match.id] ? 'REMINDER SET' : 'NOTIFY ME'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Roster Mini-Cards */}
      <div className="glass-panel p-5 rounded-xl border border-[#F5C400]/20">
        <h3 className="font-['Bebas_Neue'] text-2xl text-white tracking-wider mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#F5C400]" />
          <span>ROSTER MINI-CARDS</span>
        </h3>

        <div className="space-y-2.5">
          {PLAYERS_DATA.map((player) => (
            <div
              key={player.id}
              onClick={() => onViewProfile(player.id)}
              className="bg-[#14151C] border border-slate-800 hover:border-[#F5C400]/50 p-2.5 rounded-lg flex items-center justify-between cursor-pointer group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md overflow-hidden border border-slate-700 group-hover:border-[#F5C400] transition-colors">
                  <img src={player.avatar} alt={player.alias} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-['Bebas_Neue'] text-base text-white group-hover:text-[#F5C400] transition-colors leading-tight">
                    {player.alias}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-['Rajdhani'] font-semibold block">
                    ({player.roleShort})
                  </span>
                </div>
              </div>

              <span className="text-xs text-[#F5C400] font-['Rajdhani'] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                STATS &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Staff & Coaching Staff */}
      <div className="glass-panel p-5 rounded-xl border border-[#F5C400]/20">
        <h3 className="font-['Bebas_Neue'] text-2xl text-white tracking-wider mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#F5C400]" />
          <span>COACHING & ANALYTICS STAFF</span>
        </h3>

        <div className="space-y-3">
          {STAFF_MEMBERS.map((staff) => (
            <div
              key={staff.id}
              className="bg-[#14151C] border border-slate-800 p-3 rounded-lg flex items-center gap-3"
            >
              <img
                src={staff.avatar}
                alt={staff.name}
                className="w-10 h-10 rounded-full object-cover border border-[#F5C400]/40"
              />
              <div>
                <h4 className="font-['Rajdhani'] font-bold text-sm text-white leading-tight">
                  {staff.name}
                </h4>
                <p className="text-[11px] text-[#F5C400] font-['Rajdhani'] font-bold uppercase tracking-wider">
                  {staff.role}
                </p>
                <p className="text-[10px] text-slate-400 font-['Inter']">
                  {staff.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
};
