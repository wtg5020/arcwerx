import './App.css'

function App() {
  return (
    <div className="hud-container">
      {/* CRT Scanline Overlay */}
      <div className="scanlines"></div>
      <div className="crt-overlay"></div>

      {/* HUD Corner Elements */}
      <div className="hud-corner top-left"></div>
      <div className="hud-corner top-right"></div>
      <div className="hud-corner bottom-left"></div>
      <div className="hud-corner bottom-right"></div>

      {/* Crosshair Center */}
      <div className="crosshair">
        <div className="crosshair-h"></div>
        <div className="crosshair-v"></div>
        <div className="crosshair-circle"></div>
      </div>

      {/* Main Content */}
      <div className="hud-content">
        {/* Header */}
        <header className="hud-header">
          <div className="status-bar">
            <span className="blink">●</span> SYSTEM ONLINE
          </div>
          <h1 className="title">
            <span className="title-prefix">// </span>
            ArcWerx
            <span className="title-suffix"> _</span>
          </h1>
          <div className="subtitle">AIR FORCE RESEARCH LABORATORY</div>
          <div className="subtitle-line">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        </header>

        {/* Main Grid */}
        <main className="hud-main">
          <div className="grid-container">
            {/* Mission Statement */}
            <section className="hud-panel">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> MISSION
              </div>
              <div className="panel-content">
                <p>
                  Advanced research and development initiatives bridging
                  cutting-edge technology with operational capabilities.
                </p>
                <p className="highlight">
                  Accelerating innovation for Air Force superiority.
                </p>
              </div>
            </section>

            {/* Capabilities */}
            <section className="hud-panel">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> CAPABILITIES
              </div>
              <div className="panel-content">
                <ul className="capability-list">
                  <li><span className="marker">►</span> Rapid Prototyping</li>
                  <li><span className="marker">►</span> Advanced Computing</li>
                  <li><span className="marker">►</span> AI/ML Integration</li>
                  <li><span className="marker">►</span> Cyber Operations</li>
                  <li><span className="marker">►</span> Systems Engineering</li>
                </ul>
              </div>
            </section>

            {/* Status */}
            <section className="hud-panel">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> STATUS
              </div>
              <div className="panel-content">
                <div className="status-grid">
                  <div className="status-item">
                    <span className="status-label">SYSTEMS:</span>
                    <span className="status-value green">OPERATIONAL</span>
                  </div>
                  <div className="status-item">
                    <span className="status-label">SECURITY:</span>
                    <span className="status-value green">SECURED</span>
                  </div>
                  <div className="status-item">
                    <span className="status-label">NETWORK:</span>
                    <span className="status-value green">ACTIVE</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact/Access */}
            <section className="hud-panel">
              <div className="panel-header">
                <span className="panel-indicator">▸</span> ACCESS
              </div>
              <div className="panel-content">
                <p>
                  <span className="label">DOMAIN:</span> arcwerx.dso.mil
                </p>
                <p>
                  <span className="label">CLASSIFICATION:</span> UNCLASSIFIED
                </p>
                <p className="access-note">
                  For authorized personnel and collaboration inquiries.
                </p>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="hud-footer">
          <div className="footer-grid">
            <div className="footer-item">
              <span className="footer-label">LAT:</span> 39.7392° N
            </div>
            <div className="footer-item">
              <span className="footer-label">LONG:</span> 104.9903° W
            </div>
            <div className="footer-item">
              <span className="footer-label">ALT:</span> 1839M
            </div>
            <div className="footer-item">
              <span className="footer-label">TIME:</span> {new Date().toISOString().split('T')[1].split('.')[0]}Z
            </div>
          </div>
          <div className="footer-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          <div className="footer-text">
            U.S. AIR FORCE RESEARCH LABORATORY // DEPARTMENT OF DEFENSE
          </div>
        </footer>
      </div>

      {/* Grid Overlay */}
      <div className="grid-overlay"></div>
    </div>
  )
}

export default App
