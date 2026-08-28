type LaceyContext = { message: string; suggestions: string[] };

interface Props {
  onBack: () => void;
  onOpenLacey: (ctx?: LaceyContext) => void;
}

const PRIMER_CONTEXT: LaceyContext = {
  message: "Fantasy baseball in one minute. You draft a team of real baseball players, they earn points based on what they do in real games, and each week you go head to head against someone else in your league. That is the whole thing.",
  suggestions: ["What is a draft", "How do points work", "What do I do each week"],
};

const LEAGUE_CONTEXT: LaceyContext = {
  message: "Happy to help you pick. Here is the plain version. Create A League means you are starting a new league and inviting people in. Join Public League drops you into a league with strangers right away. Reactivate is for when you played last year and want your old league back. Most brand new players either join a league a friend set up using the invite link their friend sends, or they join a public league to try it out first. Which sounds more like you?",
  suggestions: ["How does fantasy sports work?", "What story should I care about this week?", "How do I read a box score?", "What is a salary cap?"],
};

export default function FantasyBaseballPage({ onBack, onOpenLacey }: Props) {
  return (
    <div>
      {/* ── FANTASY BASEBALL SUB-NAV ─────────────────────────────────── */}
      <div style={{ backgroundColor: "#fff", borderBottom: "1px solid #ddd" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", display: "flex", alignItems: "center", height: 44 }}>
          {/* Logo + title */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 20, borderRight: "1px solid #e0e0e0", marginRight: 4, flexShrink: 0 }}>
            {/* Baseball shield */}
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="50" rx="42" ry="48" fill="#4f46e5"/>
              <ellipse cx="50" cy="50" rx="42" ry="48" fill="none" stroke="#fff" strokeWidth="3"/>
              <text x="50" y="66" textAnchor="middle" fill="#fff" fontSize="42" fontWeight="900" fontFamily="Arial">B</text>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 900, color: "#111", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>Fantasy Baseball</span>
          </div>

          {/* Sub-nav tabs */}
          <div style={{ display: "flex", alignItems: "center", overflowX: "auto", height: "100%" }}>
            {[
              { label: "Home", active: true },
              { label: "Sign Up Now!", active: false },
              { label: "2026 Draft Guide", active: false },
              { label: "Cheat Sheet", active: false },
              { label: "2026 Rankings", active: false },
              { label: "2026 Projections", active: false },
              { label: "More ▾", active: false },
            ].map((tab) => (
              <a key={tab.label} href="#" onClick={e => e.preventDefault()} style={{
                fontSize: 12, fontWeight: tab.active ? 700 : 500,
                color: tab.active ? "#4f46e5" : "#444",
                textDecoration: "none", whiteSpace: "nowrap",
                padding: "0 12px", height: "100%",
                display: "flex", alignItems: "center",
                borderBottom: tab.active ? "3px solid #4f46e5" : "3px solid transparent",
              }}
                onMouseEnter={e => { if (!tab.active) (e.currentTarget as HTMLElement).style.color = "#4f46e5"; }}
                onMouseLeave={e => { if (!tab.active) (e.currentTarget as HTMLElement).style.color = "#444"; }}
              >{tab.label}</a>
            ))}
          </div>

          {/* Back */}
          <div style={{ marginLeft: "auto", paddingLeft: 12, flexShrink: 0 }}>
            <button onClick={onBack} style={{
              display: "flex", alignItems: "center", gap: 5,
              backgroundColor: "transparent", border: "1px solid #ddd",
              borderRadius: 4, padding: "5px 10px",
              fontSize: 11, fontWeight: 700, color: "#555",
              cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4f46e5"; (e.currentTarget as HTMLButtonElement).style.color = "#4f46e5"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd"; (e.currentTarget as HTMLButtonElement).style.color = "#555"; }}
            >← ESPN Home</button>
          </div>
        </div>
      </div>

      {/* ── AD BANNER ─────────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 1220, margin: "12px auto",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #222 60%, #8b4513 100%)",
        position: "relative", overflow: "hidden", height: 130,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
      }}>
        {/* Big M */}
        <div style={{
          position: "absolute", left: -20, top: -20,
          fontSize: 220, fontWeight: 900, color: "rgba(255,255,255,0.06)",
          lineHeight: 1, fontFamily: "Georgia, serif", userSelect: "none",
        }}>m</div>
        {/* BOS badge */}
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%) translateX(-120px)",
          width: 60, height: 60, borderRadius: "50%",
          backgroundColor: "#cc0000", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", border: "3px solid #ffcc00"
        }}>
          <span style={{ fontSize: 10, fontWeight: 900, color: "#fff", lineHeight: 1 }}>BOS-</span>
        </div>
        {/* Text */}
        <div style={{ textAlign: "center", position: "relative" }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: 2 }}>
            Magnetic helped BOS Tea
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: 10 }}>
            expand int'l market share <span style={{ color: "#f5c518" }}>+35%</span>
          </div>
          <a href="#" onClick={e => e.preventDefault()} style={{
            fontSize: 12, fontWeight: 700, color: "#f5c518",
            textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            ✦ View Case Study →
          </a>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "0 8px 24px", display: "grid", gridTemplateColumns: "200px 1fr 300px", gap: 16 }}>

        {/* ── LEFT RAIL ─────────────────────────────────────────────── */}
        <aside>
          {/* Quick Links */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 16 }}>
            <div style={{ padding: "8px 12px", borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Quick Links</span>
            </div>
            {QUICK_LINKS.map((link, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: "flex", alignItems: "center", gap: 8, padding: "8px 12px",
                textDecoration: "none", borderTop: "1px solid #eee",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
              >
                <svg width="12" height="12" viewBox="0 0 100 100" fill="none" style={{ flexShrink: 0 }}>
                  <ellipse cx="50" cy="50" rx="42" ry="48" fill="#4f46e5"/>
                  <text x="50" y="65" textAnchor="middle" fill="#fff" fontSize="44" fontWeight="900" fontFamily="Arial">B</text>
                </svg>
                <span style={{ fontSize: 11, color: "#333" }}>{link}</span>
              </a>
            ))}
          </div>

          {/* Customize ESPN */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{ padding: "8px 12px", borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Customize ESPN</span>
            </div>
            <div style={{ padding: "12px" }}>
              <button style={{
                width: "100%", padding: "9px 0", backgroundColor: "#4f46e5",
                border: "none", borderRadius: 20, color: "#fff",
                fontSize: 11, fontWeight: 700, cursor: "pointer", marginBottom: 8,
              }}>Create Account</button>
              <button style={{
                width: "100%", padding: "9px 0", backgroundColor: "#fff",
                border: "1px solid #ccc", borderRadius: 20, color: "#333",
                fontSize: 11, fontWeight: 700, cursor: "pointer",
              }}>Log In</button>
            </div>
          </div>
        </aside>

        {/* ── CENTER ────────────────────────────────────────────────── */}
        <main>
          {/* ── PHASE 1+2: Primer banner ── */}
          <div style={{
            background: "linear-gradient(135deg, #7E4FA8 0%, #B57EDC 100%)",
            borderRadius: 10, padding: "14px 16px",
            display: "flex", alignItems: "center", gap: 14,
            marginBottom: 14,
          }}>
            {/* Lacey avatar circle */}
            <div style={{
              width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
              backgroundColor: "#EFE4F9", border: "2px solid rgba(255,255,255,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
            }}>
              <img src="/lacey.png" alt="Lacey" style={{ width: 40, height: 40, objectFit: "contain" }} />
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 3 }}>
                New to fantasy baseball? Ask Lacey.
              </div>
            </div>

            {/* Start button */}
            <button
              onClick={() => onOpenLacey()}
              style={{
                flexShrink: 0,
                backgroundColor: "#fff", border: "none",
                borderRadius: 20, padding: "8px 20px",
                fontSize: 12, fontWeight: 800, color: "#7E4FA8",
                cursor: "pointer", whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#EFE4F9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fff"; }}
            >Start</button>
          </div>

          {/* Hero story */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14, cursor: "pointer" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
          >
            {/* Hero image — baseball pitcher on orange field */}
            <div style={{
              width: "100%", height: 240,
              background: "radial-gradient(ellipse at 40% 50%, #e8a050 0%, #c07020 30%, #7a4010 70%, #3a1a00 100%)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Pitcher silhouette */}
              <div style={{
                position: "absolute", left: "50%", top: 0, bottom: 0, width: "55%",
                background: "radial-gradient(ellipse at 50% 55%, rgba(0,0,0,0.7) 0%, transparent 65%)",
                transform: "translateX(-20%)",
              }} />
              {/* Jersey number / team hint */}
              <div style={{
                position: "absolute", top: 12, left: 12,
                backgroundColor: "rgba(0,0,0,0.5)", color: "#ff6600",
                fontSize: 9, fontWeight: 900, padding: "3px 8px",
                textTransform: "uppercase", letterSpacing: "0.1em"
              }}>Orioles · #34</div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />
            </div>
            <div style={{ padding: "14px 16px" }}>
              <a href="#" onClick={e => e.preventDefault()} style={{ textDecoration: "none" }}>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "#111", lineHeight: 1.25, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  Fantasy baseball lineup advice for Tuesday: Shane Baz a quality option for streaming
                </h2>
              </a>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: "0 0 8px" }}>
                Everything you need to know to set your fantasy baseball lineups for Tuesday's MLB action.
              </p>
              <span style={{ fontSize: 11, color: "#888" }}>21h · ESPN Fantasy</span>
            </div>
          </div>

          {/* Secondary story */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14 }}>
            <a href="#" onClick={e => e.preventDefault()} style={{
              display: "flex", gap: 12, padding: "14px 16px", textDecoration: "none",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
            >
              {/* Phillies pitcher thumbnail */}
              <div style={{
                width: 140, height: 90, flexShrink: 0,
                background: "radial-gradient(ellipse at 40% 60%, #a01030 0%, #800020 50%, #400010 100%)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0.6) 0%, transparent 70%)",
                }} />
                <div style={{ position: "absolute", top: 4, left: 4, fontSize: 7, fontWeight: 900, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Phillies</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#111", lineHeight: 1.35, marginBottom: 5 }}>
                  Fantasy Baseball Forecaster for Week 13: June 22–28
                </div>
                <p style={{ fontSize: 12, color: "#555", lineHeight: 1.5, margin: "0 0 6px" }}>
                  Set your lineups for the week ahead in fantasy baseball with our preview featuring pitcher rankings, hitter…
                </p>
                <span style={{ fontSize: 11, color: "#888" }}>1d · Tristan H. Cockcroft</span>
              </div>
            </a>

            {/* Quick links row */}
            <div style={{
              borderTop: "1px solid #eee", padding: "8px 16px",
              display: "flex", gap: 20,
            }}>
              {[
                "Betting tips for Tuesday: Will Manny Machado stay hot?",
                "Latest fantasy baseball buzz →",
              ].map((link, i) => (
                <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                  fontSize: 11, color: "#0066cc", textDecoration: "none", flex: 1,
                  lineHeight: 1.4,
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.textDecoration = "underline"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.textDecoration = "none"; }}
                >· {link}</a>
              ))}
            </div>
          </div>

          {/* Arms in the Pen section */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{ padding: "10px 16px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                <ellipse cx="50" cy="50" rx="42" ry="48" fill="#4f46e5"/>
                <text x="50" y="65" textAnchor="middle" fill="#fff" fontSize="44" fontWeight="900" fontFamily="Arial">B</text>
              </svg>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Arms in the Pen</span>
            </div>

            {/* Bullpen image */}
            <div style={{
              width: "100%", height: 180,
              background: "radial-gradient(ellipse at 30% 60%, #2a5e2a 0%, #1a4a1a 50%, #0a2a0a 100%)",
              position: "relative", cursor: "pointer",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.6) 100%)" }} />
              <div style={{ position: "absolute", bottom: 10, left: 12, right: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                  Best relievers for streaming: Bullpen arms to target this week
                </div>
              </div>
            </div>

            {/* More stories */}
            {ARMS_STORIES.map((s, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: "flex", gap: 12, padding: "12px 14px", textDecoration: "none",
                borderTop: "1px solid #eee",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
              >
                <div style={{ width: 90, height: 56, flexShrink: 0, background: s.bg }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#111", lineHeight: 1.4, marginBottom: 3 }}>{s.headline}</div>
                  <span style={{ fontSize: 10, color: "#888" }}>{s.meta}</span>
                </div>
              </a>
            ))}
          </div>
        </main>

        {/* ── RIGHT RAIL ────────────────────────────────────────────── */}
        <aside>
          {/* Top Headlines */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 16 }}>
            <div style={{ padding: "8px 12px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 3, height: 14, backgroundColor: "#cc0000" }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Top Headlines</span>
            </div>
            {TOP_HEADLINES.map((h, i) => (
              <div key={i} style={{ borderTop: i > 0 ? "1px solid #eee" : undefined }}>
                <a href="#" onClick={e => e.preventDefault()} style={{
                  display: "block", padding: "9px 12px", textDecoration: "none",
                  fontSize: 12, color: "#111", lineHeight: 1.4, fontWeight: 500,
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
                >{h}</a>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #eee", padding: "8px 12px" }}>
              <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: 11, color: "#0066cc", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                🌐 All the latest fantasy baseball buzz
              </a>
            </div>
          </div>

          {/* Play ESPN Fantasy Baseball CTA */}
          <div style={{ backgroundColor: "#1a1a3a", border: "1px solid #333", borderRadius: 4, padding: "14px", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                <ellipse cx="50" cy="50" rx="42" ry="48" fill="#4f46e5"/>
                <text x="50" y="65" textAnchor="middle" fill="#fff" fontSize="44" fontWeight="900" fontFamily="Arial">B</text>
              </svg>
              <div>
                <div style={{ fontSize: 10, fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em" }}>Play ESPN</div>
                <div style={{ fontSize: 12, fontWeight: 900, color: "#fff", lineHeight: 1 }}>Fantasy Baseball</div>
              </div>
            </div>
            <div style={{ fontSize: 10, color: "#aaa", marginBottom: 12 }}>The #1 Fantasy Baseball Game</div>
            <button style={{
              width: "100%", padding: "9px 0", marginBottom: 6,
              backgroundColor: "#f5c518", border: "none", borderRadius: 20,
              color: "#111", fontSize: 11, fontWeight: 800, cursor: "pointer",
              textTransform: "uppercase", letterSpacing: "0.05em",
            }}>Create A League</button>
            {["Join a Public League", "Reactivate A League", "Practice With a Mock Draft"].map((btn, i) => (
              <button key={i} style={{
                width: "100%", padding: "8px 0", marginBottom: 5,
                backgroundColor: "transparent", border: "1px solid #555",
                borderRadius: 20, color: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4f46e5"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#555"; }}
              >{btn}</button>
            ))}

            {/* ── PHASE 3+4: League helper card ── */}
            <div
              onClick={() => onOpenLacey()}
              style={{
                marginTop: 10,
                backgroundColor: "#fff", border: "1.5px solid #C9A8E6",
                borderRadius: 8, padding: "10px 12px",
                display: "flex", alignItems: "center", gap: 10,
                cursor: "pointer",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#EFE4F9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fff"; }}
            >
              <img src="/lacey.png" alt="Lacey" style={{ width: 28, height: 28, objectFit: "contain", flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#7E4FA8", lineHeight: 1.35 }}>
                Not sure which to pick? Ask Lacey.
              </span>
            </div>
          </div>

          {/* Play ESPN footer card */}
          <div style={{ backgroundColor: "#4f46e5", padding: "12px", display: "flex", alignItems: "center", gap: 8, borderRadius: 4 }}>
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="50" rx="42" ry="48" fill="#fff" fillOpacity="0.2"/>
              <text x="50" y="65" textAnchor="middle" fill="#fff" fontSize="44" fontWeight="900" fontFamily="Arial">B</text>
            </svg>
            <div>
              <div style={{ fontSize: 9, fontWeight: 900, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Play ESPN</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Fantasy Baseball</div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── LACEY DOCS ──────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1220, margin: "24px auto 0", padding: "0 8px 32px" }}>
        <div style={{ borderTop: "2px solid #C9A8E6", paddingTop: 20, marginBottom: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: "#B57EDC", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>
            How Lacey works on Fantasy Baseball
          </div>
          <div style={{ fontSize: 12, color: "#7c6fa0", lineHeight: 1.5 }}>
            Three connected ways Lacey turns curious and casual fans into players, on the page where ESPN reaches the most new fans of all.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 16 }}>
          {/* Card 1 */}
          <div style={{ backgroundColor: "#fff", border: "1.5px solid #C9A8E6", borderRadius: 10, padding: "16px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#EFE4F9", border: "1.5px solid #C9A8E6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                <img src="/lacey.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#7E4FA8", textTransform: "uppercase", letterSpacing: "0.08em" }}>1 · A one minute on ramp</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#3d2a6e", marginBottom: 6 }}>From overwhelmed to ready</div>
            <div style={{ fontSize: 11, color: "#5a4a7a", lineHeight: 1.6 }}>
              A plain English explainer of drafts, lineups, and scoring that gets a brand new player ready before the jargon can scare them off. One minute, no experience needed.
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: "#fff", border: "1.5px solid #C9A8E6", borderRadius: 10, padding: "16px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#EFE4F9", border: "1.5px solid #C9A8E6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                <img src="/lacey.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#7E4FA8", textTransform: "uppercase", letterSpacing: "0.08em" }}>2 · Help at the sign up moment</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#3d2a6e", marginBottom: 6 }}>A clear first step</div>
            <div style={{ fontSize: 11, color: "#5a4a7a", lineHeight: 1.6 }}>
              Right where a new fan has to choose between creating, joining, or reactivating a league, Lacey points them to the right one, turning hesitation into a started team.
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ backgroundColor: "#fff", border: "1.5px solid #C9A8E6", borderRadius: 10, padding: "16px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#EFE4F9", border: "1.5px solid #C9A8E6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                <img src="/lacey.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#7E4FA8", textTransform: "uppercase", letterSpacing: "0.08em" }}>3 · Answers in the moment</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#3d2a6e", marginBottom: 6 }}>Help right where they are</div>
            <div style={{ fontSize: 11, color: "#5a4a7a", lineHeight: 1.6 }}>
              A companion fans can ask anything, right on the page, whether it is what a category means or who to start this week. Available everywhere, it keeps a new player from getting stuck and giving up.
            </div>
          </div>
        </div>

        {/* Our insights */}
        <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", border: "1.5px solid #C9A8E6" }}>
          <div style={{ padding: "14px 20px 12px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #e8e0f4" }}>
            <img src="/lacey.png" alt="Lacey" style={{ width: 28, height: 28, objectFit: "contain" }} />
            <span style={{ fontWeight: 900, fontSize: 15, color: "#3d2a6e" }}>Our insights</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
            {[
              { stat: "#1", body: "entry point for non-fans is a fantasy league through a partner, coworker, or friend" },
              { stat: "Top barrier", body: "not knowing where to start — baseball asks the most of any new fan" },
              { stat: "Drop-off moment", body: "choosing create, join, or reactivate — one Lacey question turns hesitation into a signup" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "18px 18px 14px",
                borderRight: i < 2 ? "1px solid #e8e0f4" : "none",
                borderBottom: "1px solid #e8e0f4",
              }}>
                <div style={{ fontSize: i === 1 ? 22 : 28, fontWeight: 900, color: "#7E4FA8", letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 6 }}>{s.stat}</div>
                <div style={{ fontSize: 11, color: "#44484c", lineHeight: 1.4 }}>{s.body}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#7E4FA8", padding: "13px 20px" }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,.75)", fontWeight: 500 }}>Designed to convert the fans ESPN already reaches into fans who stay</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── DATA ─────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  "Sign Up Now For Free!",
  "Latest Buzz",
  "2026 Draft Guide",
  "Cheat Sheet",
  "Points League Rankings",
  "Category/Roto Rankings",
  "2026 Projections",
  "Mock Draft Lobby",
  "How To Play",
  "Reliever Depth Chart",
];

const TOP_HEADLINES = [
  "Dodgers' Tucker day-to-day with low back spasms",
  "Mets' Lindor to play at least 1 more rehab game",
  "Reds expect De La Cruz to return from IL Tuesday",
  "Back from IL, Teel goes 0-for-4 in White Sox win",
  "Rangers' Leiter (ankle) to IL; Seager remains out",
  "Marlins DFA struggling Morel, place Hicks on IL",
  "Yankees activate Wells after 2-week absence",
  "A father again, Ohtani homers in Dodgers' 3-2 loss",
];

const ARMS_STORIES = [
  {
    headline: "Two-Start pitcher rankings for Week 13: Corbin Burnes among the elite",
    meta: "2d · Tristan H. Cockcroft",
    bg: "linear-gradient(135deg, #0a1a3a 0%, #1a3870 100%)",
  },
  {
    headline: "Fantasy baseball waiver wire: Best pickups heading into Week 13",
    meta: "3d · ESPN Fantasy",
    bg: "linear-gradient(135deg, #1a3a0a 0%, #2d6e1a 100%)",
  },
];
