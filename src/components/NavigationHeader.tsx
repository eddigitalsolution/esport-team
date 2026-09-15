import React, { useState } from 'react';
import { Search, Menu, X, User, ArrowRightLeft } from 'lucide-react';

interface Props {
  onOpenSearch: () => void;
  onOpenJoinModal: () => void;
  onOpenCompareModal: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const NavigationHeader: React.FC<Props> = ({
  onOpenSearch,
  onOpenJoinModal,
  onOpenCompareModal,
  activeTab,
  setActiveTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'HOME', label: 'HOME' },
    { id: 'PLAYERS', label: 'PLAYERS' },
    { id: 'STANDINGS', label: 'STANDINGS' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0D11]/95 backdrop-blur-md border-b border-[#F5C400]/20 shadow-xl">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        
        {/* Brand & Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            setActiveTab('HOME');
          }}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-wider text-[#F5C400] leading-none">NA'VI</span>
              <span className="text-[10px] bg-[#F5C400]/15 border border-[#F5C400]/40 text-[#F5C400] px-1.5 py-0.5 rounded font-['Rajdhani'] font-bold tracking-wider">DOTA 2</span>
            </div>
            <span className="text-[9px] md:text-[10px] text-slate-400 tracking-widest font-['Rajdhani'] font-semibold uppercase leading-none">NATUS VINCERE HUB</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id.toLowerCase()}`}
                onClick={() => {
                  setActiveTab(item.id);
                }}
                className={`relative whitespace-nowrap px-4 py-2 font-['Rajdhani'] font-bold text-xs lg:text-sm tracking-wider uppercase transition-all ${
                  isActive
                    ? 'text-[#F5C400]'
                    : 'text-slate-300 hover:text-[#F5C400]'
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F5C400] shadow-[0_0_8px_#F5C400] rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          {/* Compare Stats CTA */}
          <button
            id="header-compare-button"
            onClick={() => {
              onOpenCompareModal();
            }}
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/90 border border-[#F5C400]/40 text-[#F5C400] font-['Rajdhani'] font-bold text-xs tracking-wider uppercase hover:bg-[#F5C400] hover:text-[#0D0D11] transition-all focus:ring-2 focus:ring-[#F5C400]"
            aria-label="Compare Player Stats"
          >
            <ArrowRightLeft className="w-4 h-4" strokeWidth={1.75} />
            <span className="whitespace-nowrap">COMPARE ROSTER</span>
          </button>


          {/* Search Button */}
          <button
            id="header-search-button"
            onClick={() => {
              onOpenSearch();
            }}
            className="p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-[#F5C400] hover:border-[#F5C400]/50 transition-all focus:ring-2 focus:ring-[#F5C400] touch-manipulation"
            aria-label="Open Search Modal"
            title="Search Players or Matches"
          >
            <Search className="w-4 h-4" strokeWidth={1.75} />
          </button>

          {/* Login Button */}
          <button
            id="header-login-button"
            onClick={() => {
              onOpenJoinModal();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 font-['Rajdhani'] font-bold text-xs tracking-wider hover:border-[#F5C400]/50 hover:text-[#F5C400] transition-all focus:ring-2 focus:ring-[#F5C400] touch-manipulation"
            aria-label="Account Login"
          >
            <User className="w-4 h-4 text-[#F5C400]" strokeWidth={1.75} />
            <span className="whitespace-nowrap">LOGIN</span>
          </button>

          {/* Join Us CTA */}
          <button
            id="header-joinus-button"
            onClick={() => {
              onOpenJoinModal();
            }}
            className="btn-primary whitespace-nowrap text-xs py-1.5 sm:py-2 px-3 sm:px-4 shadow-[0_0_15px_rgba(245,196,0,0.3)] focus:ring-2 focus:ring-[#F5C400] touch-manipulation"
            aria-label="Join Na'Vi Fan Club"
          >
            JOIN US
          </button>

          {/* Mobile Drawer Toggle Button */}
          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 focus:ring-2 focus:ring-[#F5C400] touch-manipulation"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.75} /> : <Menu className="w-5 h-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D11] border-b border-[#F5C400]/30 px-4 py-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-['Rajdhani'] font-bold tracking-wider text-sm uppercase flex items-center justify-between ${
                    activeTab === item.id
                      ? 'text-[#F5C400] bg-[#F5C400]/10 border-l-2 border-[#F5C400]'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => {
                onOpenCompareModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-lg font-['Rajdhani'] font-bold tracking-wider text-sm uppercase text-[#F5C400] bg-[#F5C400]/10 border border-[#F5C400]/30 flex items-center gap-3 mt-2"
            >
              <ArrowRightLeft className="w-4 h-4 text-[#F5C400]" strokeWidth={1.75} />
              <span>COMPARE ROSTER</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
