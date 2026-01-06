import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [targetLocked, setTargetLocked] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorHover, setCursorHover] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    const lockTimer = setTimeout(() => setTargetLocked(true), 2000)

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })

      // Check if hovering over interactive element
      const target = e.target as HTMLElement
      const isInteractive = target.closest('button, a, input, textarea, .nav-target')
      setCursorHover(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(timer)
      clearTimeout(lockTimer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="hud-container">
      {/* Custom Targeting Cursor */}
      <div
        className={`custom-cursor ${cursorHover ? 'cursor-hover' : ''}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      >
        <div className="cursor-crosshair-h"></div>
        <div className="cursor-crosshair-v"></div>
        <div className="cursor-circle"></div>
        <div className="cursor-dot"></div>
      </div>

      {/* CRT Scanline Overlay */}
      <div className="scanlines"></div>
      <div className="crt-overlay"></div>
      <div className="vignette"></div>

      {/* HUD Corner Elements */}
      <div className="hud-corner top-left"></div>
      <div className="hud-corner top-right"></div>
      <div className="hud-corner bottom-left"></div>
      <div className="hud-corner bottom-right"></div>

      {/* Radar Sweep */}
      <div className="radar-container">
        <div className="radar-sweep"></div>
        <div className="radar-blip" style={{top: '30%', left: '60%'}}></div>
        <div className="radar-blip" style={{top: '70%', left: '40%'}}></div>
        <div className="radar-blip" style={{top: '50%', left: '80%'}}></div>
      </div>

      {/* Targeting Reticle - Center */}
      <div className={`targeting-reticle ${targetLocked ? 'locked' : ''}`}>
        <div className="reticle-outer">
          <div className="reticle-tick top"></div>
          <div className="reticle-tick right"></div>
          <div className="reticle-tick bottom"></div>
          <div className="reticle-tick left"></div>
        </div>
        <div className="reticle-inner"></div>
        <div className="crosshair-h"></div>
        <div className="crosshair-v"></div>
        {targetLocked && <div className="lock-indicator">TARGET LOCKED</div>}
      </div>

      {/* Top Status Bar */}
      <div className="top-status-bar">
        <div className="status-left">
          <span className="blink">●</span> SYSTEM ONLINE | AIR RESERVE COMPONENT | STATUS: ACTIVE
        </div>
        <div className="status-right">
          RNG: 2.4KM | ALT: 1839M | SPD: MACH 0.0
        </div>
      </div>

      {/* Main Content */}
      <div className="hud-content">
        {/* Header */}
        <header className="hud-header">
          <div className="logo-container">
            <h1 className="title">
              <span className="title-prefix">┌─ </span>
              ARCWERX
              <span className="title-suffix"> ─┐</span>
            </h1>
            <div className="tagline typing-effect">
              FOSTERING A LASTING CULTURE OF INNOVATION
            </div>
          </div>
          <div className="subtitle">AIR RESERVE COMPONENT | DEFENSE INNOVATION</div>
          <div className="subtitle-line">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        </header>

        {/* Navigation Menu - Targeting System */}
        <nav className="nav-targets">
          <div className="nav-grid">
            <button
              className={`nav-target ${activeSection === 'connect' ? 'active' : ''}`}
              onClick={() => setActiveSection('connect')}
            >
              <div className="target-bracket">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon">◆</span>
              <span className="target-label">CONNECT</span>
            </button>
            <button
              className={`nav-target ${activeSection === 'educate' ? 'active' : ''}`}
              onClick={() => setActiveSection('educate')}
            >
              <div className="target-bracket">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon">◆</span>
              <span className="target-label">EDUCATE</span>
            </button>
            <button
              className={`nav-target ${activeSection === 'accelerate' ? 'active' : ''}`}
              onClick={() => setActiveSection('accelerate')}
            >
              <div className="target-bracket">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon">◆</span>
              <span className="target-label">ACCELERATE</span>
            </button>
            <button
              className={`nav-target ${activeSection === 'programs' ? 'active' : ''}`}
              onClick={() => setActiveSection('programs')}
            >
              <div className="target-bracket">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon">🚀</span>
              <span className="target-label">PROGRAMS</span>
            </button>
            <button
              className={`nav-target ${activeSection === 'submit' ? 'active' : ''}`}
              onClick={() => setActiveSection('submit')}
            >
              <div className="target-bracket">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon">✦</span>
              <span className="target-label">SUBMIT IDEA</span>
            </button>
          </div>
        </nav>

        {/* Main Grid */}
        <main className="hud-main">
          <div className="grid-container">
            {/* Programs Section - ARTEMIS, Innovation Funds, Hackathons */}
            <section className="hud-panel mission-brief">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> OBJECTIVE: PROGRAMS
              </div>
              <div className="panel-content">
                <div className="program-item">
                  <div className="program-name">
                    <span className="marker">►</span> ARTEMIS CONTRACT
                  </div>
                  <div className="program-desc">
                    Advanced Research & Technology for Emerging Military & Intelligence Systems.
                    Rapid prototyping and technology transition program.
                  </div>
                  <div className="program-status">
                    <span className="status-label">STATUS:</span>
                    <span className="status-value green">ACTIVE</span>
                  </div>
                </div>
                <div className="program-item">
                  <div className="program-name">
                    <span className="marker">►</span> INNOVATION FUNDS
                  </div>
                  <div className="program-desc">
                    Funding opportunities for breakthrough defense technologies and
                    operational capability enhancements.
                  </div>
                  <div className="program-status">
                    <span className="status-label">FUNDING:</span>
                    <span className="status-value green">AVAILABLE</span>
                  </div>
                </div>
                <div className="program-item">
                  <div className="program-name">
                    <span className="marker">►</span> HACKATHONS
                  </div>
                  <div className="program-desc">
                    Collaborative innovation events bringing together military, industry,
                    and academia to solve critical defense challenges.
                  </div>
                  <div className="program-status">
                    <span className="status-label">NEXT EVENT:</span>
                    <span className="status-value">Q2 2026</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Submit Idea Section */}
            <section className="hud-panel mission-brief">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> TARGET: SUBMIT INNOVATION
              </div>
              <div className="panel-content">
                <div className="alert-box">
                  <span className="alert-icon blink">⚠</span>
                  <span className="alert-text">CLASSIFIED – UNCLASSIFIED SUBMISSIONS ONLY</span>
                </div>
                <form className="hud-form">
                  <div className="form-group">
                    <label className="form-label">
                      <span className="label-indicator">►</span> INNOVATION TITLE
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter project designation..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      <span className="label-indicator">►</span> DESCRIPTION
                    </label>
                    <textarea
                      className="form-input"
                      rows={4}
                      placeholder="Describe operational capability enhancement..."
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      <span className="label-indicator">►</span> IMPACT ASSESSMENT
                    </label>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '75%'}}>
                        <span className="progress-text">ACQUISITION: 75%</span>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="submit-btn">
                    <span className="btn-bracket">[</span>
                    TRANSMIT
                    <span className="btn-bracket">]</span>
                  </button>
                </form>
              </div>
            </section>

            {/* Mission/Innovation Culture */}
            <section className="hud-panel">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> MISSION PARAMETERS
              </div>
              <div className="panel-content">
                <p>
                  ARCWERX cultivates a lasting culture of innovation within the
                  Air Reserve Component and broader defense community.
                </p>
                <p className="highlight">
                  Connecting innovators. Educating warfighters. Accelerating capability.
                </p>
                <ul className="capability-list">
                  <li><span className="marker">►</span> Technology Scouting</li>
                  <li><span className="marker">►</span> Rapid Prototyping</li>
                  <li><span className="marker">►</span> Partnership Development</li>
                  <li><span className="marker">►</span> Capability Demonstration</li>
                </ul>
              </div>
            </section>

            {/* Hub Locations */}
            <section className="hud-panel">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> HUB LOCATIONS
              </div>
              <div className="panel-content">
                <div className="status-grid">
                  <div className="status-item">
                    <span className="status-label">TUCSON HUB:</span>
                    <span className="status-value green">ACTIVE</span>
                  </div>
                  <div className="status-item">
                    <span className="status-label">RANGE:</span>
                    <span className="status-value">NATIONWIDE</span>
                  </div>
                  <div className="status-item">
                    <span className="status-label">COMMS:</span>
                    <span className="status-value green">ONLINE</span>
                  </div>
                </div>
                <p className="access-note">
                  <span className="label">DOMAIN:</span> arcwerx.dso.mil<br/>
                  <span className="label">CLASSIFICATION:</span> UNCLASSIFIED
                </p>
              </div>
            </section>

            {/* Innovation Metrics */}
            <section className="hud-panel">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> SYSTEMS CHECK
              </div>
              <div className="panel-content">
                <div className="metrics-grid">
                  <div className="metric-item">
                    <div className="metric-label">INNOVATION LEVEL</div>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{width: '98%'}}></div>
                    </div>
                    <div className="metric-value">98%</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">COLLABORATION</div>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{width: '87%'}}></div>
                    </div>
                    <div className="metric-value">87%</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">CAPABILITY READINESS</div>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{width: '93%'}}></div>
                    </div>
                    <div className="metric-value">93%</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer - Scrolling Ticker */}
        <footer className="hud-footer">
          <div className="ticker-container">
            <div className="ticker-text">
              ARCWERX ONLINE | TUCSON HUB ACTIVE | CONNECT WITH INNOVATORS |
              ARTEMIS PROGRAM OPERATIONAL | INNOVATION FUNDS AVAILABLE |
              NEXT HACKATHON Q2 2026 | UNCLASSIFIED SUBMISSIONS WELCOME |
              DEFENSE INNOVATION ACCELERATOR | AIR RESERVE COMPONENT
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-item">
              <span className="footer-label">LAT:</span> 32.1545° N
            </div>
            <div className="footer-item">
              <span className="footer-label">LONG:</span> 110.8710° W
            </div>
            <div className="footer-item">
              <span className="footer-label">ALT:</span> 728M
            </div>
            <div className="footer-item">
              <span className="footer-label">TIME:</span> {currentTime.toISOString().split('T')[1].split('.')[0]}Z
            </div>
          </div>
          <div className="footer-diagnostics">
            <div className="diagnostic-item">
              <span className="diag-label">SYS:</span>
              <div className="diag-bar">
                <div className="diag-fill" style={{width: '98%'}}></div>
              </div>
              <span className="diag-value">98%</span>
            </div>
            <div className="diagnostic-item">
              <span className="diag-label">NET:</span>
              <div className="diag-bar">
                <div className="diag-fill" style={{width: '100%'}}></div>
              </div>
              <span className="diag-value">100%</span>
            </div>
            <div className="diagnostic-item">
              <span className="diag-label">PWR:</span>
              <div className="diag-bar">
                <div className="diag-fill" style={{width: '94%'}}></div>
              </div>
              <span className="diag-value">94%</span>
            </div>
          </div>
          <div className="footer-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          <div className="footer-text">
            U.S. AIR FORCE RESERVE // ARCWERX INNOVATION HUB // DEPARTMENT OF DEFENSE
          </div>
          <div className="footer-subtext">
            COMMS CHANNELS: ARCWERX.DSO.MIL | UNCLASSIFIED NETWORK
          </div>
        </footer>
      </div>

      {/* Grid Overlay */}
      <div className="grid-overlay"></div>
    </div>
  )
}

export default App
