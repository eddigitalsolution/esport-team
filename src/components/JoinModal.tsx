import React, { useState } from 'react';
import { X, Shield, Lock, Mail, UserCheck, Flame } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md glass-panel border-2 border-[#F5C400]/40 rounded-2xl p-6 md:p-8 bg-[#0D0D11]/95 shadow-[0_0_50px_rgba(245,196,0,0.3)]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-300 hover:text-[#F5C400] transition-colors"
          aria-label="Close Join Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#F5C400] flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#0D0D11]" />
          </div>
          <div>
            <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wider leading-none">
              JOIN <span className="text-[#F5C400]">NA'VI FAN CLUB</span>
            </h2>
            <p className="font-['Rajdhani'] text-xs text-slate-400 font-semibold uppercase">
              EXCLUSIVE DOTA 2 PERKS & TOURNAMENT ALERTS
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <UserCheck className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="font-['Bebas_Neue'] text-2xl text-white">WELCOME TO NATUS VINCERE!</h3>
            <p className="text-xs text-slate-300 font-['Inter']">Your membership confirmation has been dispatched.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="user-email-input" className="block text-xs font-['Rajdhani'] font-bold text-slate-300 uppercase mb-1">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="user-email-input"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="navi.fan@dota2.com"
                  autoComplete="email"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#F5C400]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="user-password-input" className="block text-xs font-['Rajdhani'] font-bold text-slate-300 uppercase mb-1">
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="user-password-input"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#F5C400]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary justify-center py-3 text-sm shadow-[0_0_20px_rgba(245,196,0,0.3)] mt-2"
              aria-label="Submit Join Form"
            >
              <Flame className="w-4 h-4" />
              <span>AUTHENTICATE & JOIN</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
