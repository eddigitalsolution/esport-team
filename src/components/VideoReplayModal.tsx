import React, { useState, useEffect } from 'react';
import { X, Play, Eye, Film } from 'lucide-react';
import { REPLAY_CLIPS } from '../data/esportsData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoReplayModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);

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

  const currentClip = REPLAY_CLIPS[activeClipIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl glass-panel border-2 border-[#F5C400]/40 rounded-2xl overflow-hidden p-6 bg-[#0D0D11]/95 max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(245,196,0,0.3)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-300 hover:text-[#F5C400] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F5C400] transition-colors z-20"
          aria-label="Close Video Replays Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-6">
          <Film className="w-7 h-7 text-[#F5C400]" />
          <div>
            <h2 id="video-modal-title" className="font-['Bebas_Neue'] text-3xl text-white tracking-wider leading-none">
              DENDI <span className="text-[#F5C400]">MVP REPLAY VAULT</span>
            </h2>
            <p className="font-['Rajdhani'] text-xs text-slate-400 font-semibold uppercase">
              LEGENDARY DOTA 2 COMPETITIVE HIGHLIGHTS
            </p>
          </div>
        </div>

        {/* Video Player Display Area */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-[#F5C400]/30 mb-6 group">
          <img
            src={currentClip.thumbnail}
            alt={currentClip.title}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-black/40 to-transparent flex flex-col justify-between p-6">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="bg-[#F5C400] text-[#0D0D11] px-3 py-1 rounded font-['Rajdhani'] font-bold text-xs uppercase tracking-wider">
                TI HIGHLIGHT REPLAY
              </span>
              <span className="bg-black/70 text-slate-300 px-2.5 py-1 rounded font-['Rajdhani'] text-xs font-semibold">
                {currentClip.duration}
              </span>
            </div>

            {/* Play Button Overlay */}
            <div className="self-center my-auto">
              <button
                className="w-20 h-20 rounded-full bg-[#F5C400] text-[#0D0D11] flex items-center justify-center shadow-[0_0_30px_rgba(245,196,0,0.6)] group-hover:scale-110 focus:ring-4 focus:ring-[#F5C400]/50 transition-all"
                aria-label={`Play highlight clip ${currentClip.title}`}
                onClick={() => alert(`Playing: ${currentClip.title}`)}
              >
                <Play className="w-9 h-9 fill-current ml-1" />
              </button>
            </div>

            {/* Bottom Title & Description */}
            <div>
              <h3 className="font-['Bebas_Neue'] text-2xl text-white tracking-wide">
                {currentClip.title}
              </h3>
              <p className="text-xs text-slate-300 font-['Inter'] line-clamp-2">
                {currentClip.description}
              </p>
            </div>

          </div>
        </div>

        {/* Clip Selector Items */}
        <h4 className="font-['Rajdhani'] font-bold text-xs text-slate-400 uppercase tracking-widest mb-3">
          SELECT REPLAY CLIP ({activeClipIndex + 1} OF {REPLAY_CLIPS.length}):
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {REPLAY_CLIPS.map((clip, idx) => (
            <button
              key={clip.id}
              onClick={() => setActiveClipIndex(idx)}
              className={`text-left p-3 rounded-lg border transition-all flex flex-col justify-between focus:ring-2 focus:ring-[#F5C400] ${
                activeClipIndex === idx
                  ? 'bg-[#F5C400]/15 border-[#F5C400] shadow-[0_0_10px_rgba(245,196,0,0.2)]'
                  : 'bg-[#14151C] border-slate-800 hover:border-slate-700'
              }`}
              aria-label={`Select clip ${clip.title}`}
            >
              <div className="flex justify-between items-center text-xs font-['Rajdhani'] mb-1">
                <span className="font-bold text-[#F5C400]">CLIP #{idx + 1}</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {clip.views}
                </span>
              </div>
              <h5 className="font-['Rajdhani'] font-bold text-sm text-white line-clamp-1">
                {clip.title}
              </h5>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
