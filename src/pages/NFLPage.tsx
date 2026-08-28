interface Props {
  onBack: () => void;
  onOpenLacey: () => void;
}

export default function NFLPage({ onBack, onOpenLacey }: Props) {
  return (
    <div>
      {/* ── NFL SUB-NAV ─────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#fff", borderBottom: "1px solid #ddd" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", display: "flex", alignItems: "center", height: 44 }}>
          {/* Shield + title */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 20, borderRight: "1px solid #e0e0e0", marginRight: 4, flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="50" rx="42" ry="48" fill="#013369"/>
              <ellipse cx="50" cy="50" rx="42" ry="48" fill="none" stroke="#fff" strokeWidth="3"/>
              <line x1="50" y1="5" x2="50" y2="95" stroke="#fff" strokeWidth="2.5"/>
              <line x1="8" y1="50" x2="92" y2="50" stroke="#fff" strokeWidth="2.5"/>
              <line x1="12" y1="30" x2="88" y2="30" stroke="#fff" strokeWidth="2"/>
              <line x1="12" y1="70" x2="88" y2="70" stroke="#fff" strokeWidth="2"/>
            </svg>
            <span style={{ fontSize: 14, fontWeight: 900, color: "#111", letterSpacing: "-0.01em" }}>NFL</span>
          </div>

          {/* Sub-nav tabs */}
          <div style={{ display: "flex", alignItems: "center", overflowX: "auto", height: "100%" }}>
            {[
              { label: "Home", active: true },
              { label: "Draft", active: false },
              { label: "Free Agency ▾", active: false },
              { label: "Scores", active: false },
              { label: "Schedule ▾", active: false },
              { label: "Standings", active: false },
              { label: "Stats ▾", active: false },
              { label: "Teams ▾", active: false },
              { label: "Depth Charts", active: false },
              { label: "More ▾", active: false },
            ].map((tab) => (
              <a key={tab.label} href="#" onClick={e => e.preventDefault()} style={{
                fontSize: 12, fontWeight: tab.active ? 700 : 500,
                color: tab.active ? "#cc0000" : "#444",
                textDecoration: "none", whiteSpace: "nowrap",
                padding: "0 12px", height: "100%",
                display: "flex", alignItems: "center",
                borderBottom: tab.active ? "3px solid #cc0000" : "3px solid transparent",
              }}
                onMouseEnter={e => { if (!tab.active) (e.currentTarget as HTMLElement).style.color = "#cc0000"; }}
                onMouseLeave={e => { if (!tab.active) (e.currentTarget as HTMLElement).style.color = "#444"; }}
              >{tab.label}</a>
            ))}
          </div>

          {/* Back button */}
          <div style={{ marginLeft: "auto", paddingLeft: 12, flexShrink: 0 }}>
            <button onClick={onBack} style={{
              display: "flex", alignItems: "center", gap: 5,
              backgroundColor: "transparent", border: "1px solid #ddd",
              borderRadius: 4, padding: "5px 10px",
              fontSize: 11, fontWeight: 700, color: "#555",
              cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#cc0000"; (e.currentTarget as HTMLButtonElement).style.color = "#cc0000"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd"; (e.currentTarget as HTMLButtonElement).style.color = "#555"; }}
            >← ESPN Home</button>
          </div>
        </div>
      </div>

      {/* ── BODY ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "16px 8px", display: "grid", gridTemplateColumns: "200px 1fr 300px", gap: 16 }}>

        {/* ── LEFT RAIL ─────────────────────────────────────────────── */}
        <aside>
          {/* ESPN Promo */}
          <div style={{
            backgroundColor: "#1a1a1a", padding: "18px 14px", marginBottom: 14,
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(204,0,0,0.04) 10px, rgba(204,0,0,0.04) 20px)"
          }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 4, textTransform: "uppercase" }}>
              All of ESPN.
            </div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#cc0000", lineHeight: 1.2, marginBottom: 12, textTransform: "uppercase" }}>
              All in One Place.
            </div>
            <a href="#" onClick={e => e.preventDefault()} style={{
              display: "block", textAlign: "center",
              backgroundColor: "#fff", color: "#111",
              fontSize: 11, fontWeight: 800, padding: "8px 0",
              textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em",
            }}>Sign Up Now</a>
          </div>

          {/* ── LACEY: New to NFL card ── */}
          <div style={{
            backgroundColor: "#fff", border: "2px solid #c4b5f4",
            borderRadius: 6, padding: "14px 12px", marginBottom: 14, textAlign: "center",
          }}>
            <img src="/lacey.png" alt="Lacey" style={{ width: 60, height: 60, objectFit: "contain", margin: "0 auto 6px", display: "block" }} />
            <div style={{ fontSize: 13, fontWeight: 900, color: "#3d2a6e", marginBottom: 3, lineHeight: 1.2 }}>New to NFL?</div>
            <div style={{ fontSize: 10, color: "#7c6fa0", marginBottom: 10, lineHeight: 1.5 }}>Let Lacey guide you through it</div>
            <button onClick={onOpenLacey} style={{
              width: "100%", padding: "8px 0",
              backgroundColor: "#a78bfa", border: "none", borderRadius: 4,
              color: "#fff", fontSize: 11, fontWeight: 800,
              letterSpacing: "0.05em", textTransform: "uppercase", cursor: "pointer",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9169f0"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#a78bfa"; }}
            >Ask Lacey</button>
          </div>

          {/* Watch on ESPN */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14 }}>
            <div style={{ padding: "7px 10px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Watch on ESPN</span>
            </div>
            <div style={{ padding: "8px 10px", borderBottom: "1px solid #eee" }}>
              <button style={{
                width: "100%", padding: "7px 0", backgroundColor: "#5b21b6",
                border: "none", borderRadius: 20, color: "#fff",
                fontSize: 11, fontWeight: 700, cursor: "pointer",
              }}>Subscribe Now</button>
            </div>
            {WATCH_ITEMS.map((item, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "7px 10px", textDecoration: "none",
                borderTop: "1px solid #eee",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
              >
                <svg width="14" height="14" viewBox="0 0 100 100" fill="none" style={{ flexShrink: 0 }}>
                  <ellipse cx="50" cy="50" rx="42" ry="48" fill="#013369"/>
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#fff" strokeWidth="4"/>
                  <line x1="8" y1="50" x2="92" y2="50" stroke="#fff" strokeWidth="4"/>
                  <line x1="12" y1="30" x2="88" y2="30" stroke="#fff" strokeWidth="3"/>
                  <line x1="12" y1="70" x2="88" y2="70" stroke="#fff" strokeWidth="3"/>
                </svg>
                <span style={{ fontSize: 11, color: "#333" }}>{item}</span>
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14 }}>
            <div style={{ padding: "7px 10px", borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Quick Links</span>
            </div>
            {QUICK_LINKS.map((link, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "7px 10px", textDecoration: "none", borderTop: "1px solid #eee",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
              >
                <span style={{ fontSize: 13 }}>{link.icon}</span>
                <span style={{ fontSize: 11, color: "#333" }}>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Favorites */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14 }}>
            <div style={{ padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.06em" }}>Favorites</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06-.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <div style={{ padding: "10px 10px" }}>
              <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: 11, color: "#0066cc", fontWeight: 600, textDecoration: "none" }}>Manage Favorites</a>
            </div>
          </div>

          {/* Podcasts */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{ padding: "7px 10px", borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Podcasts</span>
            </div>
            {PODCASTS.map((p, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "7px 10px", textDecoration: "none", borderTop: "1px solid #eee",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
              >
                <span style={{ fontSize: 13 }}>🎙️</span>
                <span style={{ fontSize: 11, color: "#333" }}>{p}</span>
              </a>
            ))}
          </div>
        </aside>

        {/* ── CENTER COLUMN ─────────────────────────────────────────── */}
        <main>
          {/* Hero article */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14, cursor: "pointer" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
          >
            <div style={{
              width: "100%", aspectRatio: "16/9", position: "relative",
              background: "linear-gradient(160deg, #8b1a1a 0%, #c0392b 30%, #e74c3c 55%, #f39c12 100%)",
              overflow: "hidden",
            }}>
              {/* Helmet silhouette */}
              <div style={{
                position: "absolute", right: "15%", top: "10%", bottom: "0",
                width: "45%", opacity: 0.15,
                background: "radial-gradient(ellipse at 60% 40%, #fff 0%, transparent 70%)",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%)"
              }} />
              <div style={{ position: "absolute", top: 10, right: 10, backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 2, padding: "2px 6px" }}>
                <span style={{ fontSize: 9, color: "#fff" }}>✕</span>
              </div>
              <div style={{
                position: "absolute", top: 12, left: 12,
                backgroundColor: "#013369", color: "#fff",
                fontSize: 9, fontWeight: 800, padding: "3px 8px",
                textTransform: "uppercase", letterSpacing: "0.1em"
              }}>Las Vegas Raiders</div>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <a href="#" onClick={e => e.preventDefault()} style={{ textDecoration: "none" }}>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "#111", lineHeight: 1.25, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  Raiders players' first impressions of QB Fernando Mendoza
                </h2>
              </a>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: "0 0 8px" }}>
                We asked players and coaches about their first impressions of the Raiders' rookie and No. 1 pick during OTAs.
              </p>
              <span style={{ fontSize: 11, color: "#888" }}>8h · Ryan McFadden</span>
            </div>
          </div>

          {/* Minicamps section */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 14 }}>
            <div style={{ padding: "10px 14px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                <ellipse cx="50" cy="50" rx="42" ry="48" fill="#013369"/>
                <line x1="50" y1="5" x2="50" y2="95" stroke="#fff" strokeWidth="5"/>
                <line x1="8" y1="50" x2="92" y2="50" stroke="#fff" strokeWidth="5"/>
                <line x1="12" y1="30" x2="88" y2="30" stroke="#fff" strokeWidth="3.5"/>
                <line x1="12" y1="70" x2="88" y2="70" stroke="#fff" strokeWidth="3.5"/>
              </svg>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#111", textTransform: "uppercase", letterSpacing: "0.1em" }}>Minicamps are here!</span>
            </div>

            {/* Big minicamp story */}
            <div style={{ cursor: "pointer" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
            >
              <div style={{
                width: "100%", height: 200,
                background: "linear-gradient(135deg, #1a3a0a 0%, #2d6e1a 40%, #4a9e2f 70%, #f5c518 100%)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.65) 100%)"
                }} />
                <div style={{ position: "absolute", top: 10, right: 10, backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 2, padding: "2px 6px" }}>
                  <span style={{ fontSize: 9, color: "#fff" }}>✕</span>
                </div>
              </div>
              <div style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
                <a href="#" onClick={e => e.preventDefault()} style={{ textDecoration: "none" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#111", lineHeight: 1.3, marginBottom: 6 }}>
                    From QB battles to rookie progress, here's everything we're watching at minicamps
                  </div>
                </a>
                <span style={{ fontSize: 11, color: "#888" }}>7h · NFL Nation</span>
              </div>
            </div>

            {/* Secondary minicamp story */}
            <a href="#" onClick={e => e.preventDefault()} style={{
              display: "flex", gap: 12, padding: "12px 14px", textDecoration: "none",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
            >
              <div style={{
                width: 120, height: 78, flexShrink: 0,
                background: "linear-gradient(135deg, #0a1a3a 0%, #1a3870 60%, #3060b0 100%)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.12)" }}>18</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.4, marginBottom: 4 }}>
                  NFL minicamp daily updates: Caleb Williams having more fun this minicamp
                </div>
                <span style={{ fontSize: 11, color: "#888" }}>4d · NFL Nation</span>
              </div>
            </a>
          </div>

          {/* More stories */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{ padding: "8px 14px", borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Latest NFL News</span>
            </div>
            {MORE_STORIES.map((s, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: "flex", gap: 12, padding: "12px 14px", textDecoration: "none",
                borderTop: "1px solid #eee",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
              >
                <div style={{
                  width: 90, height: 58, flexShrink: 0,
                  background: s.bg, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 800, textTransform: "uppercase" }}>{s.team}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.4, marginBottom: 3 }}>{s.headline}</div>
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
          </div>

          {/* Ad box */}
          <div style={{
            width: "100%", height: 200, marginBottom: 16,
            backgroundColor: "#e0e0e0", border: "1px solid #ccc",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <span style={{ fontSize: 10, color: "#999", textTransform: "uppercase", letterSpacing: "0.1em" }}>Advertisement</span>
          </div>

          {/* Trending Now */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{ padding: "8px 12px", borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>Trending Now</span>
            </div>
            <div style={{
              width: "100%", height: 160,
              background: "linear-gradient(160deg, #8b1a1a 0%, #cc0000 50%, #e87722 100%)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.7) 100%)" }} />
              <div style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                  2026 NFL contracts: Next to get a big deal at every position
                </div>
              </div>
            </div>
            <div style={{ padding: "8px 12px" }}>
              <p style={{ fontSize: 11, color: "#444", lineHeight: 1.5, margin: 0 }}>
                Will Patrick Mahomes stick as the highest-paid QB? Could another edge rusher top Will Anderson, Jr.? We named the next players to get big deals.
              </p>
            </div>
            {TRENDING.map((t, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: "block", padding: "8px 12px", textDecoration: "none",
                fontSize: 12, color: "#111", lineHeight: 1.4,
                borderTop: "1px solid #eee",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
              >{t}</a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

// ── DATA ─────────────────────────────────────────────────────────────────────

const WATCH_ITEMS = [
  "Live & Upcoming",
  "ESPN & NFL+ Premium Bundle",
  "NFL Live",
  "Peyton's Places",
  "The Kingdom",
];

const QUICK_LINKS = [
  { icon: "🏈", label: "2026 Schedule" },
  { icon: "🏈", label: "Odds" },
  { icon: "🏆", label: "Super Bowl Winners" },
  { icon: "📺", label: "Super Bowl LXI on ESPN" },
  { icon: "⚡", label: "Fantasy Football" },
  { icon: "🎟️", label: "Tickets" },
];

const PODCASTS = [
  "The Mina Kimes Show",
  "Fantasy Focus Football",
  "The Bill Barnwell Show",
];

const TOP_HEADLINES = [
  "Source: Pickens reports ahead of Cowboys' camp",
  "Source: Jets, durable Tippmann reach $62M deal",
  "Former defensive lineman Aldon Smith dies at 36",
  "NFL closes personal conduct review of WR Diggs",
  "Retired Ragnow: Body told me to stop playing",
  "Police: Cooper violated order by visiting girlfriend",
  "Seahawks' SB LX rings salute fans, city, history",
  "Sources: No NFL discipline for Chiefs coach Merritt",
  "😊 Reid coy on Kelce-Swift wedding attendance",
];

const MORE_STORIES = [
  { headline: "Cowboys sign Pickens: How the WR fits with Dallas offense", meta: "3h · Todd Archer", bg: "linear-gradient(135deg, #003594, #869397)", team: "DAL" },
  { headline: "Mahomes' new contract makes him the highest-paid player in sports history", meta: "4h · Adam Schefter", bg: "linear-gradient(135deg, #E31837, #FFB612)", team: "KC" },
  { headline: "Jets' offensive line upgrade gives Aaron Glenn confidence heading into '26", meta: "6h · Rich Cimini", bg: "linear-gradient(135deg, #125740, #000)", team: "NYJ" },
  { headline: "Caleb Williams showing 'elite' pocket presence in Bears minicamp sessions", meta: "7h · Courtney Cronin", bg: "linear-gradient(135deg, #0B162A, #C83803)", team: "CHI" },
];

const TRENDING = [
  "Brady's coaching debut: What to expect from the Raiders in 2026",
  "Top 10 offseason winners and losers after free agency closes",
];
