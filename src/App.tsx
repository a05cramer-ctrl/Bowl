import { useState, useEffect, useRef } from 'react'
import './App.css'
import videoSrc from './4e011f7c-ad1f-4088-a9d4-5f7e739b3344.mp4'

function App() {
  const [copied, setCopied] = useState(false)
  const [loreVisible, setLoreVisible] = useState(false)
  const loreSectionRef = useRef<HTMLElement>(null)
  const contractAddress = 'aBKTT57cvumxa1p3p1k2SsbkGN8uesZENXDUFcjbonk'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoreVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (loreSectionRef.current) {
      observer.observe(loreSectionRef.current)
    }

    return () => {
      if (loreSectionRef.current) {
        observer.unobserve(loreSectionRef.current)
      }
    }
  }, [])

  return (
    <div className="app">
      {/* Video Background */}
      <video 
        className="video-background" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      {/* Floating Particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{ 
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <a href="#about">about</a>
        <a href="#chart">chart</a>
        <a href="https://x.com/Bowl_bonk" target="_blank" rel="noopener noreferrer">community</a>
        <button className="close-btn">✕</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* Title */}
          <h1 className="hero-title">Bowl</h1>

          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>live mc: n/a</span>
          </div>

          {/* Contract Box */}
          <div className="contract-box" onClick={copyToClipboard}>
            <div className="contract-label">Contract:</div>
            <div className="contract-address">{contractAddress}</div>
            <div className="contract-hint">click to copy</div>
            {copied && <div className="toast">Copied!</div>}
          </div>

          {/* Primary Buttons */}
          <div className="primary-buttons">
            <button className="btn-primary btn-filled">
              Buy Now
            </button>
            <button className="btn-primary btn-outlined">
              Chart
            </button>
          </div>

          {/* Social Buttons */}
          <div className="social-buttons">
            <a href="#" className="social-btn" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Dexscreener
            </a>
            <a href="https://x.com/Bowl_bonk" className="social-btn" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X
            </a>
          </div>
        </div>
      </section>

      {/* Lore Section */}
      <section ref={loreSectionRef} className={`lore-section ${loreVisible ? 'visible' : ''}`}>
        <div className="lore-container">
          <h2 className="lore-title">Lore</h2>
          
          <div className="lore-card-wrapper">
            {/* Grain Overlay */}
            <div className="grain-overlay"></div>
            
            {/* Golden Dust Particles */}
            <div className="lore-particles">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className="lore-particle" 
                  style={{ 
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${8 + Math.random() * 4}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="lore-card">
              <div className="lore-text">
                <p>
                  <span className="highlight">bonk</span> is the dog of solana.
                </p>
                <p>
                  every dog runs on instinct, not charts.
                </p>
                <p className="spacer"></p>
                <p>
                  instinct leads to one thing:
                </p>
                <p>
                  <span className="highlight">the bowl</span>.
                </p>
                <p className="spacer"></p>
                <p>
                  a bowl isn't hype.
                </p>
                <p>
                  it isn't noise.
                </p>
                <p>
                  it's where everything ends up.
                </p>
                <p className="spacer"></p>
                <p>
                  food goes in.
                </p>
                <p>
                  energy comes out.
                </p>
                <p>
                  the cycle continues.
                </p>
                <p className="spacer"></p>
                <p>
                  <span className="highlight">$bowl</span> is not a promise.
                </p>
                <p>
                  it is inevitability.
                </p>
                <p className="spacer"></p>
                <p className="final-line">
                  fill the bowl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
