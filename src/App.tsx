import React, { useState } from 'react';
import { NavigationHeader } from './components/NavigationHeader';
import { HeroPlayerBanner } from './components/HeroPlayerBanner';
import { TeamRosterSection } from './components/TeamRosterSection';
import { LatestMatchesTable } from './components/LatestMatchesTable';
import { StandingsSection } from './components/StandingsSection';
import { FooterSection } from './components/FooterSection';
import { PlayerProfileModal } from './components/PlayerProfileModal';
import { VideoReplayModal } from './components/VideoReplayModal';
import { ComparePlayersModal } from './components/ComparePlayersModal';
import { SearchModal } from './components/SearchModal';
import { JoinModal } from './components/JoinModal';
import { ParticleBackground } from './components/ParticleBackground';

export function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D11] text-[#F0F2F5] font-['Inter'] flex flex-col relative overflow-x-hidden">
      
      {/* 60fps Gold Sparkle Canvas Particles */}
      <ParticleBackground />

      {/* Navigation Header */}
      <NavigationHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenJoinModal={() => setJoinModalOpen(true)}
        onOpenCompareModal={() => setCompareModalOpen(true)}
      />

      {/* Main Full-Width Content Container */}
      <main className="main-container flex-grow py-8 relative z-10">
        
        {/* Featured Hero Banner */}
        <HeroPlayerBanner
          onWatchReplays={() => setVideoModalOpen(true)}
          onViewProfile={(id) => setSelectedPlayerId(id)}
        />

        {/* Conditional Tab Rendering */}
        {activeTab === 'STANDINGS' ? (
          <StandingsSection />
        ) : activeTab === 'PLAYERS' ? (
          <>
            <TeamRosterSection onViewProfile={(id) => setSelectedPlayerId(id)} />
            <StandingsSection />
          </>
        ) : (
          <>
            {/* The Team Roster Showcase (5-Column Grid) */}
            <TeamRosterSection onViewProfile={(id) => setSelectedPlayerId(id)} />

            {/* DPC League Standings */}
            <StandingsSection />

            {/* Latest Matches Table */}
            <LatestMatchesTable />
          </>
        )}

      </main>

      {/* Footer Section */}
      <FooterSection />

      {/* Interactive Modals */}
      <PlayerProfileModal
        playerId={selectedPlayerId}
        onClose={() => setSelectedPlayerId(null)}
      />

      <VideoReplayModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <ComparePlayersModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectPlayer={(id) => setSelectedPlayerId(id)}
      />

      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}

export default App;
