import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [targetLocked, setTargetLocked] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorHover, setCursorHover] = useState(false)
  const [scrollSpeed, setScrollSpeed] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Apply theme class to document root
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode')
      document.documentElement.classList.remove('light-mode')
    } else {
      document.documentElement.classList.add('light-mode')
      document.documentElement.classList.remove('dark-mode')
    }
  }, [isDarkMode])

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

    // Scroll speed tracking
    let lastScrollY = window.scrollY
    let lastScrollTime = Date.now()

    const handleScroll = () => {
      const now = Date.now()
      const currentScrollY = window.scrollY
      const timeDelta = now - lastScrollTime
      const scrollDelta = Math.abs(currentScrollY - lastScrollY)

      if (timeDelta > 0) {
        // Calculate velocity in pixels per second
        const velocity = (scrollDelta / timeDelta) * 1000
        // Convert to MACH (scaled for effect: ~1000 pixels/sec = MACH 1.0)
        const machSpeed = Math.min(velocity / 1000, 9.9)
        setScrollSpeed(machSpeed)
      }

      lastScrollY = currentScrollY
      lastScrollTime = now
    }

    // Decay scroll speed to 0 when not scrolling
    const decayInterval = setInterval(() => {
      setScrollSpeed((prev) => {
        if (prev <= 0.1) return 0
        return prev * 0.9 // Decay by 10% each interval
      })
    }, 100)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearInterval(timer)
      clearInterval(decayInterval)
      clearTimeout(lockTimer)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="hud-container">
      {/* Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <span aria-hidden="true">☀ LIGHT MODE</span>
        ) : (
          <span aria-hidden="true">🌙 DARK MODE</span>
        )}
      </button>

      {/* Custom Targeting Cursor - Only in Dark Mode */}
      {isDarkMode && <div
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
      </div>}

      {/* CRT Scanline Overlay - Only in Dark Mode */}
      {isDarkMode && <>
        <div className="scanlines"></div>
        <div className="crt-overlay"></div>
        <div className="vignette"></div>
      </>}

      {/* Radar Sweep - Only in Dark Mode */}
      {isDarkMode && <div className="radar-container">
        <div className="radar-sweep"></div>
        <div className="radar-blip" style={{top: '30%', left: '60%'}}></div>
        <div className="radar-blip" style={{top: '70%', left: '40%'}}></div>
        <div className="radar-blip" style={{top: '50%', left: '80%'}}></div>
      </div>}

      {/* Target Locked Indicator - Follows Cursor - Only in Dark Mode */}
      {isDarkMode && targetLocked && (
        <div
          className="target-locked-indicator"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`
          }}
        >
          TARGET LOCKED
        </div>
      )}

      {/* Top Status Bar */}
      <div className="top-status-bar" role="status" aria-label="System status information">
        <div className="status-left">
          <span className="blink" aria-hidden="true">●</span>
          <span>SYSTEM ONLINE | AIR RESERVE COMPONENT | STATUS: ACTIVE</span>
        </div>
        <div className="status-right">
          <span>RNG: 2.4KM | ALT: 728M | SPD: </span>
          <span
            className={scrollSpeed > 2.0 ? 'speed-warning' : ''}
            aria-label={`Speed: MACH ${scrollSpeed.toFixed(1)}${scrollSpeed > 2.0 ? ' - Warning: High speed' : ''}`}
          >
            MACH {scrollSpeed.toFixed(1)}
          </span>
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
        <nav className="nav-targets" aria-label="Main navigation">
          <div className="nav-grid" role="group" aria-label="Navigation menu">
            <button
              className={`nav-target ${activeSection === 'connect' ? 'active' : ''}`}
              onClick={() => setActiveSection('connect')}
              aria-label="Connect section"
              aria-current={activeSection === 'connect' ? 'page' : undefined}
            >
              <div className="target-bracket" aria-hidden="true">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon" aria-hidden="true">◆</span>
              <span className="target-label">CONNECT</span>
            </button>
            <button
              className={`nav-target ${activeSection === 'educate' ? 'active' : ''}`}
              onClick={() => setActiveSection('educate')}
              aria-label="Educate section"
              aria-current={activeSection === 'educate' ? 'page' : undefined}
            >
              <div className="target-bracket" aria-hidden="true">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon" aria-hidden="true">◆</span>
              <span className="target-label">EDUCATE</span>
            </button>
            <button
              className={`nav-target ${activeSection === 'accelerate' ? 'active' : ''}`}
              onClick={() => setActiveSection('accelerate')}
              aria-label="Accelerate section"
              aria-current={activeSection === 'accelerate' ? 'page' : undefined}
            >
              <div className="target-bracket" aria-hidden="true">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon" aria-hidden="true">◆</span>
              <span className="target-label">ACCELERATE</span>
            </button>
            <button
              className={`nav-target ${activeSection === 'programs' ? 'active' : ''}`}
              onClick={() => setActiveSection('programs')}
              aria-label="Programs section"
              aria-current={activeSection === 'programs' ? 'page' : undefined}
            >
              <div className="target-bracket" aria-hidden="true">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon" aria-hidden="true">🚀</span>
              <span className="target-label">PROGRAMS</span>
            </button>
            <button
              className={`nav-target ${activeSection === 'submit' ? 'active' : ''}`}
              onClick={() => setActiveSection('submit')}
              aria-label="Submit innovation idea"
              aria-current={activeSection === 'submit' ? 'page' : undefined}
            >
              <div className="target-bracket" aria-hidden="true">
                <span className="bracket-corner tl"></span>
                <span className="bracket-corner tr"></span>
                <span className="bracket-corner bl"></span>
                <span className="bracket-corner br"></span>
              </div>
              <span className="target-icon" aria-hidden="true">✦</span>
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
                <div className="alert-box" role="alert" aria-live="polite">
                  <span className="alert-icon blink" aria-hidden="true">⚠</span>
                  <span className="alert-text">CLASSIFIED – UNCLASSIFIED SUBMISSIONS ONLY</span>
                </div>
                <form className="hud-form" aria-label="Innovation submission form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="innovation-title">
                      <span className="label-indicator" aria-hidden="true">►</span> INNOVATION TITLE
                    </label>
                    <input
                      id="innovation-title"
                      type="text"
                      className="form-input"
                      placeholder="Enter project designation..."
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="innovation-description">
                      <span className="label-indicator" aria-hidden="true">►</span> DESCRIPTION
                    </label>
                    <textarea
                      id="innovation-description"
                      className="form-input"
                      rows={4}
                      placeholder="Describe operational capability enhancement..."
                      aria-required="true"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label" id="impact-label">
                      <span className="label-indicator" aria-hidden="true">►</span> IMPACT ASSESSMENT
                    </label>
                    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-labelledby="impact-label">
                      <div className="progress-fill" style={{width: '75%'}}>
                        <span className="progress-text">ACQUISITION: 75%</span>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="submit-btn" aria-label="Submit innovation idea">
                    <span className="btn-bracket" aria-hidden="true">[</span>
                    TRANSMIT
                    <span className="btn-bracket" aria-hidden="true">]</span>
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
        <footer className="hud-footer" role="contentinfo">
          <div className="ticker-container" aria-label="News ticker">
            <div className="ticker-text" aria-live="off">
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

      {/* Grid Overlay - Only in Dark Mode */}
      {isDarkMode && <div className="grid-overlay"></div>}
    </div>
  )
}

export default App
