import React, { useState } from 'react';
import { Play, Wallet, Film, Compass, Upload, Award, ShieldCheck, Zap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'browse' | 'watch' | 'creator' | 'wallet'>('browse');
  const [walletConnected, setWalletConnected] = useState(false);
  const [balance, setBalance] = useState(250.0);

  const sampleVideos = [
    {
      id: '1',
      title: 'Polygon Ecosystem & Web3 Micropayments',
      creator: 'CryptoVision Tech',
      rate: '0.33 STRM/min',
      duration: '20 min',
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      category: 'Web3'
    },
    {
      id: '2',
      title: 'Pay-As-You-Watch HLS Video Architecture',
      creator: 'StreamVerse Lab',
      rate: '0.50 STRM/min',
      duration: '30 min',
      thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      category: 'Tech'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Navigation */}
      <nav className="glass-nav" style={{ padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Film style={{ color: '#8b5cf6', width: 28, height: 28 }} />
          <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            StreamVerse
          </span>
          <span style={{ fontSize: '11px', background: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', padding: '2px 8px', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.4)' }}>
            Polygon Amoy
          </span>
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          <button onClick={() => setActiveTab('browse')} style={{ color: activeTab === 'browse' ? '#8b5cf6' : '#94a3b8', background: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <Compass size={18} /> Browse
          </button>
          <button onClick={() => setActiveTab('creator')} style={{ color: activeTab === 'creator' ? '#8b5cf6' : '#94a3b8', background: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <Upload size={18} /> Creator Studio
          </button>
          <button onClick={() => setActiveTab('wallet')} style={{ color: activeTab === 'wallet' ? '#8b5cf6' : '#94a3b8', background: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <Wallet size={18} /> Wallet
          </button>
        </div>

        <button 
          onClick={() => setWalletConnected(!walletConnected)}
          className="glow-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Zap size={18} />
          {walletConnected ? `0x71C...3A9 (${balance} STRM)` : 'Connect Wallet'}
        </button>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {activeTab === 'browse' && (
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Pay Only For What You Watch</h1>
              <p style={{ color: '#94a3b8' }}>Decentralized Web3 streaming powered by server-verified watch time and Polygon micropayments.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {sampleVideos.map(video => (
                <div key={video.id} className="card">
                  <div style={{ position: 'relative' }}>
                    <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                      {video.duration}
                    </span>
                  </div>
                  <div style={{ padding: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{video.title}</h3>
                    <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '12px' }}>By {video.creator}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#06b6d4', fontWeight: 600 }}>{video.rate}</span>
                      <button 
                        onClick={() => setActiveTab('watch')}
                        style={{ background: '#8b5cf6', color: '#fff', padding: '6px 14px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                      >
                        <Play size={14} /> Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'watch' && (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: '#000', borderRadius: '12px', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--border-color)', marginBottom: '24px' }}>
              <Play size={64} style={{ color: '#8b5cf6', marginBottom: '16px' }} />
              <p style={{ color: '#94a3b8' }}>HLS Player Shell - Short-Lived Authorization Active</p>
              <span style={{ marginTop: '12px', fontSize: '13px', background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4', padding: '4px 12px', borderRadius: '16px' }}>
                Heartbeat Verified Watch Session Active
              </span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Polygon Ecosystem & Web3 Micropayments</h2>
            <p style={{ color: '#94a3b8' }}>Rate: 0.33 STRM/min • Verified Watch Time: 00:03:45 • Current Charge: 1.23 STRM</p>
          </div>
        )}

        {activeTab === 'creator' && (
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>Creator Studio</h1>
            <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Upload videos to be packaged into HLS with FFmpeg transcoding.</p>
            <div className="card" style={{ padding: '40px', textAlign: 'center', borderStyle: 'dashed' }}>
              <Upload size={48} style={{ color: '#8b5cf6', marginBottom: '16px' }} />
              <h3>Drag and drop video files to upload</h3>
              <p style={{ color: '#94a3b8', marginTop: '8px' }}>MP4, MOV, or MKV up to 4GB</p>
            </div>
          </div>
        )}

        {activeTab === 'wallet' && (
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>StreamCoin Wallet & Payments</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div className="card" style={{ padding: '24px' }}>
                <p style={{ color: '#94a3b8', fontSize: '14px' }}>StreamCoin (STRM) Balance</p>
                <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#8b5cf6', margin: '8px 0' }}>{balance} STRM</h2>
                <p style={{ fontSize: '12px', color: '#06b6d4' }}>Polygon Amoy Testnet</p>
              </div>
              <div className="card" style={{ padding: '24px' }}>
                <p style={{ color: '#94a3b8', fontSize: '14px' }}>Watch Time Consumption</p>
                <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#f8fafc', margin: '8px 0' }}>42 mins</h2>
                <p style={{ fontSize: '12px', color: '#94a3b8' }}>Total Spent: 14.2 STRM</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
