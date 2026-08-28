interface Props {
  onBack: () => void;
}

export default function FantasyPage({ onBack }: Props) {
  return (
    <div>
      {/* ── FANTASY SUB-NAV ─────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#fff", borderBottom: "1px solid #ddd" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", display: "flex", alignItems: "center", height: 44 }}>
          {/* Shield + title */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 20, borderRight: "1px solid #e0e0e0", marginRight: 4, flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#013369" stroke="#013369" strokeWidth="1"/>
              <path d="M9 12L11 14L15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 14, fontWeight: 900, color: "#111", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>Fantasy Football</span>
          </div>

          {/* Sub-nav tabs */}
          <div style={{ display: "flex", alignItems: "center", overflowX: "auto", height: "100%" }}>
            {[
              { label: "Home", active: true },
              { label: "Sign Up Now!", active: false },
              { label: "Gridiron Gauntlet", active: false },
              { label: "Cheat Sheet Central", active: false },
              { label: "2026 Rankings", active: false },
              { label: "2026 Projections", active: false },
              { label: "More ▾", active: false },
            ].map((tab) => (
              <a
                key={tab.label}
                href="#"
                onClick={e => e.preventDefault()}
                style={{
                  fontSize: 12, fontWeight: tab.active ? 700 : 500,
                  color: tab.active ? "#cc0000" : "#444",
                  textDecoration: "none", whiteSpace: "nowrap",
                  padding: "0 12px", height: "100%",
                  display: "flex", alignItems: "center",
                  borderBottom: tab.active ? "3px solid #cc0000" : "3px solid transparent",
                  transition: "color 0.1s",
                }}
                onMouseEnter={e => { if (!tab.active) (e.currentTarget as HTMLElement).style.color = "#cc0000"; }}
                onMouseLeave={e => { if (!tab.active) (e.currentTarget as HTMLElement).style.color = "#444"; }}
              >{tab.label}</a>
            ))}
          </div>

          {/* Back button */}
          <div style={{ marginLeft: "auto", paddingLeft: 12, flexShrink: 0 }}>
            <button
              onClick={onBack}
              style={{
                display: "flex", alignItems: "center", gap: 5,
                backgroundColor: "transparent", border: "1px solid #ddd",
                borderRadius: 4, padding: "5px 10px",
                fontSize: 11, fontWeight: 700, color: "#555",
                cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#cc0000"; (e.currentTarget as HTMLButtonElement).style.color = "#cc0000"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd"; (e.currentTarget as HTMLButtonElement).style.color = "#555"; }}
            >
              ← ESPN Home
            </button>
          </div>
        </div>
      </div>

      {/* ── BODY ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "16px 8px", display: "grid", gridTemplateColumns: "200px 1fr 300px", gap: 16 }}>

        {/* ── LEFT RAIL ─────────────────────────────────────────────── */}
        <aside>
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 16 }}>
            <div style={{
              backgroundColor: "#1a1a1a", color: "#fff", fontSize: 11, fontWeight: 800,
              padding: "7px 10px", textTransform: "uppercase", letterSpacing: "0.08em"
            }}>Quick Links</div>
            {QUICK_LINKS.map((link, i) => (
              <div key={i} style={{ borderTop: i > 0 ? "1px solid #eee" : undefined }}>
                <a href="#" onClick={e => e.preventDefault()} style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: "7px 10px", textDecoration: "none",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#013369"/>
                  </svg>
                  <span style={{ fontSize: 11, color: "#333", fontWeight: 500 }}>{link}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Favorites */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{
              padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center",
              borderBottom: "1px solid #eee"
            }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.06em" }}>Favorites</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <div style={{ padding: "10px 10px" }}>
              <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: 11, color: "#0066cc", fontWeight: 600, textDecoration: "none" }}>Manage Favorites</a>
            </div>
          </div>
        </aside>

        {/* ── CENTER COLUMN ─────────────────────────────────────────── */}
        <main>
          {/* Hero article */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14 }}>
            {/* Hero image */}
            <div style={{
              width: "100%", aspectRatio: "16/9",
              background: "linear-gradient(160deg, #1a3a1a 0%, #2d5a1b 35%, #4a7c2f 60%, #f5c518 100%)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Jersey number overlay for realism */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column",
              }}>
                <div style={{
                  fontSize: 80, fontWeight: 900, color: "rgba(255,255,255,0.08)",
                  letterSpacing: "-4px", lineHeight: 1,
                }}>GB</div>
              </div>
              <div style={{
                position: "absolute", top: 8, right: 8,
                backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 2,
                width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontSize: 9, color: "#fff" }}>✕</span>
              </div>
            </div>
            {/* Article text */}
            <div style={{ padding: "14px 16px" }}>
              <a href="#" onClick={e => e.preventDefault()} style={{ textDecoration: "none" }}>
                <h2 style={{
                  fontSize: 20, fontWeight: 900, color: "#111", lineHeight: 1.25,
                  margin: "0 0 8px", letterSpacing: "-0.02em",
                }}>To draft or not to draft? Eight players fantasy football managers are divided on</h2>
              </a>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: "0 0 8px" }}>
                Is there a player you're too cautious with that everyone else seems to love -- or vice versa? You're not alone.
              </p>
              <span style={{ fontSize: 11, color: "#888" }}>5h · ESPN Fantasy staff</span>
            </div>
          </div>

          {/* Secondary article */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14 }}>
            <div style={{ display: "flex", gap: 14, padding: 14 }}>
              <div style={{
                width: 130, height: 86, flexShrink: 0,
                background: "linear-gradient(135deg, #1a0a3a 0%, #4a1a8a 60%, #7a3fc0 100%)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.15)" }}>18</span>
              </div>
              <div style={{ flex: 1 }}>
                <a href="#" onClick={e => e.preventDefault()} style={{ textDecoration: "none" }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#111", lineHeight: 1.3, marginBottom: 6 }}>
                    Don't make these six draft mistakes
                  </div>
                </a>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 6 }}>
                  Avoiding common pitfalls can keep your draft on track for success.
                </div>
                <span style={{ fontSize: 11, color: "#888" }}>5d · Eric Moody</span>
              </div>
            </div>
          </div>

          {/* Quick promo links */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14, padding: "10px 16px", display: "flex", gap: 20 }}>
            <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: 12, color: "#333", textDecoration: "none" }}>
              <span style={{ color: "#888" }}>·</span> Mock Draft Season: Players experts are taking — and passing on
            </a>
            <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: 12, color: "#0066cc", textDecoration: "none", fontWeight: 600 }}>
              <span style={{ color: "#888" }}>·</span> Join a mock draft now!
            </a>
          </div>

          {/* All the Latest Buzz */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{
              padding: "10px 16px", borderBottom: "1px solid #eee",
              display: "flex", alignItems: "center", gap: 8
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#013369"/>
              </svg>
              <span style={{ fontSize: 13, fontWeight: 900, color: "#111", textTransform: "uppercase", letterSpacing: "0.06em" }}>All the Latest Buzz</span>
            </div>

            {/* Buzz article */}
            <div style={{ borderBottom: "1px solid #eee" }}>
              <div style={{
                width: "100%", height: 200,
                background: "linear-gradient(160deg, #0a0a1a 0%, #1a1a3a 40%, #2a2a5a 100%)",
                position: "relative", overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)"
                }} />
                <div style={{ position: "absolute", bottom: 12, left: 16, right: 16 }}>
                  <div style={{
                    display: "inline-block", backgroundColor: "#cc0000", color: "#fff",
                    fontSize: 9, fontWeight: 800, padding: "2px 6px",
                    textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6
                  }}>Fantasy</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
                    Fantasy buzz: Bears RB committee limits upside, but Swift still the top option
                  </div>
                </div>
                <div style={{
                  position: "absolute", top: 8, right: 8,
                  backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 2,
                  width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <span style={{ fontSize: 9, color: "#fff" }}>✕</span>
                </div>
              </div>
              <div style={{ padding: "10px 16px" }}>
                <span style={{ fontSize: 11, color: "#888" }}>2h · ESPN Fantasy</span>
              </div>
            </div>

            {/* More buzz items */}
            {BUZZ_ITEMS.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid #eee" }}>
                <a href="#" onClick={e => e.preventDefault()} style={{
                  display: "flex", gap: 12, padding: "12px 16px", textDecoration: "none"
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
                >
                  <div style={{
                    width: 90, height: 60, flexShrink: 0,
                    backgroundColor: item.bg, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <span style={{ fontSize: 20, fontWeight: 900, color: "rgba(255,255,255,0.2)" }}>{item.num}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.4, marginBottom: 4 }}>{item.headline}</div>
                    <span style={{ fontSize: 10, color: "#888" }}>{item.time} · {item.author}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </main>

        {/* ── RIGHT RAIL ────────────────────────────────────────────── */}
        <aside>
          {/* Top Headlines */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 16 }}>
            <div style={{
              padding: "8px 12px", borderBottom: "1px solid #eee",
              display: "flex", alignItems: "center", gap: 6
            }}>
              <div style={{ width: 3, height: 14, backgroundColor: "#cc0000" }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Top Headlines</span>
            </div>
            {HEADLINES.map((h, i) => (
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
          </div>

          {/* Play ESPN Fantasy Football */}
          <div style={{
            backgroundColor: "#1a1f5e", borderRadius: 4, padding: "16px 14px", marginBottom: 14,
            border: "1px solid #2a2f6e"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="0.5"/>
                <path d="M12 6L8 8.5V12C8 14.5 9.8 16.8 12 17.5C14.2 16.8 16 14.5 16 12V8.5L12 6Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              </svg>
              <div>
                <div style={{ fontSize: 9, color: "#aab", textTransform: "uppercase", letterSpacing: "0.1em" }}>Play ESPN</div>
                <div style={{ fontSize: 13, fontWeight: 900, color: "#fff", letterSpacing: "0.02em" }}>FANTASY FOOTBALL</div>
                <div style={{ fontSize: 10, color: "#8899cc" }}>The #1 Fantasy Football Game</div>
              </div>
            </div>
            {[
              { label: "Create A League", bg: "#4CAF50", color: "#fff", bold: true },
              { label: "Join Public League", bg: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" },
              { label: "Reactivate A League", bg: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" },
              { label: "Mock Draft Now", bg: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" },
            ].map((btn, i) => (
              <button key={i} style={{
                width: "100%", padding: "9px 0", marginBottom: i < 3 ? 6 : 0,
                backgroundColor: btn.bg, border: (btn as any).border || "none",
                borderRadius: 3, color: btn.color,
                fontSize: 12, fontWeight: (btn as any).bold ? 800 : 600,
                cursor: "pointer", letterSpacing: "0.02em",
              }}>{btn.label}</button>
            ))}
          </div>

          {/* Play ESPN Fantasy Basketball */}
          <div style={{
            backgroundColor: "#1a1f5e", borderRadius: 4, padding: "16px 14px",
            border: "1px solid #2a2f6e"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                backgroundColor: "#E65100", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontSize: 14 }}>🏀</span>
              </div>
              <div>
                <div style={{ fontSize: 9, color: "#aab", textTransform: "uppercase", letterSpacing: "0.1em" }}>Play ESPN</div>
                <div style={{ fontSize: 13, fontWeight: 900, color: "#fff", letterSpacing: "0.02em" }}>FANTASY BASKETBALL</div>
                <div style={{ fontSize: 10, color: "#8899cc" }}>The #1 Fantasy Basketball Game</div>
              </div>
            </div>
            {[
              { label: "Create A League", bg: "#E65100", color: "#fff", bold: true },
              { label: "Join a Public League", bg: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" },
              { label: "Reactivate A League", bg: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" },
              { label: "Practice With a Mock Draft", bg: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" },
            ].map((btn, i) => (
              <button key={i} style={{
                width: "100%", padding: "9px 0", marginBottom: i < 3 ? 6 : 0,
                backgroundColor: btn.bg, border: (btn as any).border || "none",
                borderRadius: 3, color: btn.color,
                fontSize: 12, fontWeight: (btn as any).bold ? 800 : 600,
                cursor: "pointer", letterSpacing: "0.02em",
              }}>{btn.label}</button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

// ── DATA ─────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  "Sign Up Now For Free!",
  "Gridiron Gauntlet",
  "Cheat Sheet Central",
  "2026 Rankings",
  "2026 Projections",
  "Depth Charts",
  "Mock Draft Lobby",
  "NFL Pick'em",
  "NFL Survivor",
  "NFL Playoff Predictor",
  "NFL Win Totals",
  "College Pick'em",
];

const HEADLINES = [
  "NFL closes personal conduct review of WR Diggs",
  "Bowles backs Mayfield as long-term QB amid talks",
  "QB Williams eyes being 'stoic' and 'strong' leader",
  "Coker, Panthers reach 3-year, $35M extension",
  "WR Brown marvels at Maye, 'a true leader of men'",
  "Watson keen to start again, downplays Haslam jab",
  "Mahomes to make over $500M in reworked deal",
  "Packers TE Kraft (ACL) expects to be ready Wk. 1",
  "🏈 Cheat Sheet Central: PPR rankings, more",
];

const BUZZ_ITEMS = [
  { headline: "2026 Fantasy Football draft rankings: Top 300 PPR tiers", time: "3h", author: "Eric Moody", bg: "#1a3a1a", num: "1" },
  { headline: "Sleepers, busts and breakouts for every position in 2026", time: "4h", author: "ESPN Fantasy", bg: "#1a1a3a", num: "7" },
  { headline: "Fantasy impact: What the Mahomes extension means for Chiefs offense", time: "5h", author: "Daniel Dopp", bg: "#3a1a1a", num: "15" },
];
