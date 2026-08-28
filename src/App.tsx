import { useState } from "react";
import FantasyPage from "@/pages/FantasyPage";
import NFLPage from "@/pages/NFLPage";
import FantasyBaseballPage from "@/pages/FantasyBaseballPage";
import HubPage from "@/pages/HubPage";

type LaceyContext = { message: string; suggestions: string[] };
type Message = { from: "user" | "lacey"; text: string };

const ANSWERS: Record<string, string> = {
  // Default chips
  "How does fantasy sports work?": "You pick real players before the season. Each week, your players earn points based on what they do in real games — touchdowns, home runs, assists. You go head to head against someone else in your league. Most points wins that week. It's like being a team manager, but with real athletes doing the work.",
  "What story should I care about this week?": "The biggest one right now: Patrick Mahomes just signed a historic extension through 2030, cementing the Chiefs as a dynasty. In the World Cup, the US plays Paraguay today in a must-win match. And Sabrina Ionescu is putting up numbers no WNBA player has seen in years.",
  "How do I read a box score?": "The top line is the score — who won and by how much. Below that are player stats. In baseball: runs, hits, errors. In basketball: points, rebounds, assists per player. In football: yards, touchdowns, turnovers. Start with the score, then look at the top performer on each side.",
  "What is a salary cap?": "Every team gets the same spending limit for player salaries. It keeps rich-market teams from buying every great player. Go over the cap and you pay penalties. It's what makes a small city like Green Bay competitive with New York. The NFL cap this year is around $255 million per team.",
  "How do I know which teams are good?": "Look at their record — the W-L number. More wins than losses means they're above .500, which is the basic bar. If they're in the top half of their conference in the standings, they're in playoff range. The best teams are usually household names: Chiefs, Lakers, Yankees, Man City.",
  "What happens if a soccer game ends in a tie?": "In the group stage, both teams get 1 point and move on. In knockout rounds like the World Cup final, it goes to 30 minutes of extra time. If still tied after that, it goes to a penalty shootout — five kicks each, one player vs. the goalkeeper. The crowd goes silent. It's the most nerve-wracking moment in sports.",
  "Explain overtime in soccer": "If a knockout game is tied after 90 minutes, there are two extra 15-minute periods. If it's still tied, each team picks five players to take penalty kicks — just them and the goalkeeper. Whoever makes more wins. Players who miss are devastated. Players who score are heroes. Nothing else in sports matches it.",
  "Which team do I root for?": "Easiest answer: your city's team. If your city has one, start there — built-in storylines, local fans, and bragging rights. If you don't have one nearby, pick a player you like the story of and follow their team. There's genuinely no wrong answer. You can always switch in the first year.",
  "How do I know when football season starts?": "NFL preseason is August — these games don't count but give you a taste. The real season starts the Thursday after Labor Day, usually early September. Playoffs are January, and the Super Bowl is the first Sunday in February. It's the most-watched event in America every year.",
  // WNBA chips
  "Who are the best players": "Right now: Sabrina Ionescu (New York Liberty), A'ja Wilson (Las Vegas Aces), and Breanna Stewart (Liberty). Ionescu is the leading scorer and the face of the league this season. If you watch one player to understand the game, watch her.",
  "How does the WNBA season work": "40 regular season games across the summer. Top 8 teams advance to the playoffs. The WNBA Finals are a best-of-five series. The champion is crowned in October. It's a tight, fast season — every game matters more than in the NBA.",
  "What is Caitlin Clark effect": "When Caitlin Clark was drafted #1 in 2024, WNBA viewership tripled overnight. Games sold out. Sponsors flooded in. Young fans who'd never watched women's basketball showed up and stayed. She made the league impossible to ignore — and it still hasn't slowed down.",
  // World Cup chips
  "Explain offside simply": "When your teammate passes the ball forward to you, you can't be further up the field than the last defender. If you are, the ref calls offside and the other team gets the ball. It stops attackers from camping near the goal waiting for easy shots. Hard to explain, obvious once you see it called.",
  "Why does VAR review it": "Offside is measured by inches — literally a toe or shoulder. Human eyes can't catch it at full speed. VAR uses cameras and a digital line drawn on the freeze-frame to check after the play. It's controversial because it can take 3 minutes and sometimes reverses a goal the whole stadium was celebrating.",
  "When was the rule created": "The offside rule has existed since the 1860s. The modern version — only needing one defender behind you instead of three — was set in 1925. Before that rule, scoring was incredibly rare because you needed so many defenders in position. That change basically created the attacking game we watch today.",
  // MLB chips
  "What is a closer": "The pitcher who comes in at the end of the game to finish it off when your team is winning. Usually the best reliever on the staff, saving their arm for the most important three outs. Edwin Díaz of the Mets even has his own entrance song — live trumpets. A save is the stat. It's the highest-pressure job in baseball.",
  "How does a baseball game end": "Nine innings, three outs per inning, each team bats once per inning. After nine, whoever has more runs wins. If it's tied, extra innings until someone scores. Games can technically go forever — the longest ever was 26 innings in 1920. Most games are done in 2.5 to 3 hours.",
  "Who are the best closers right now": "Edwin Díaz (Mets) is electric — he enters to live trumpets and the whole stadium rises. Devin Williams (Brewers) has a changeup that batters describe as unhittable. Ryan Pressly (Astros) is one of the most reliable in the game. And Aaron Judge's Yankees use Clay Holmes, who's having a great year.",
  // NFL chips
  "What is a down": "A down is one play. You get 4 downs to move the ball 10 yards. Run, pass, whatever works. Move 10 yards and the count resets — four fresh downs. Don't make it in four tries and the other team gets the ball. It's the core engine of every football game.",
  "How do touchdowns work": "Carry or catch the ball across the goal line into the end zone. Worth 6 points. After that, you almost always kick for 1 extra point (the kick is a formality). Or you can risk a 2-point conversion — run or pass from the 2-yard line. Most teams take the kick. Two points sounds small but it changes late-game math.",
  "What is a first down": "Moving the ball 10 yards earns a first down — your count resets to four fresh plays. The chain gang on the sideline tracks it with an actual 10-yard chain. When refs measure on fourth down and it's close, the whole stadium holds its breath. Chains have decided playoff games.",
  // NBA chips
  "How long is a quarter": "15 minutes on the game clock. But the clock stops for incomplete passes, out of bounds, timeouts, and scores — so a 60-minute NBA game takes about 2.5 hours in real life. There are 4 quarters plus a halftime show. The last two minutes of a close game alone can take 20 minutes.",
  "What is a foul": "Illegal contact — pushing, holding, reaching in, charging. Too many fouls in a quarter puts the other team in the bonus: every foul after that is automatic free throws, worth 1 point each from 15 feet. Five fouls on a player and they foul out — gone for the game. Six in the NBA.",
  "How do you win a game": "Most points after 4 quarters. If tied, there's a 5-minute overtime. In the regular season, it keeps going with more 5-minute OTs until someone wins. In the playoffs, it's sudden death — the first team to go ahead at the end of any OT period wins. Games with three or four overtimes are legendary.",
  // World Cup / Soccer chips
  "How many teams are in the World Cup": "48 teams starting with this tournament in 2026, up from 32. The US, Canada, and Mexico are automatic hosts — they don't need to qualify. Everyone else earns their spot through years of regional qualifying matches. The whole thing takes about a month with games every day.",
  "What is offside": "When the ball is passed forward to you, you can't be further up the field than the last defender. If you are, it's offside — the other team gets the ball. It's one of the most argued calls in sports because it's decided by millimeters and human (or camera) error.",
  "How long is a soccer game": "90 minutes — two 45-minute halves. But the clock never stops, so the ref adds stoppage time at the end of each half for injuries, subs, and delays. Usually 3-8 minutes. A full game runs about 100-105 minutes. No commercials during play, which is why the stadium atmosphere is constant.",
};

const FALLBACK = "Great question. In the full Lacey experience, I'd pull from ESPN's live data and give you a real-time answer. This is a demo — but try the suggested questions to see exactly how I'd respond!";

export default function App() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [laceyContext, setLaceyContext] = useState<LaceyContext | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState<"home" | "fantasy" | "nfl" | "fantasy-baseball" | "hub">("home");
  const [showLaceyTooltip, setShowLaceyTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const openLacey = (ctx?: LaceyContext) => {
    setLaceyContext(ctx ?? null);
    setMessages([]);
    setPanelOpen(true);
  };

  const handleChipClick = (q: string) => {
    const answer = ANSWERS[q] ?? FALLBACK;
    setMessages(prev => [...prev, { from: "user", text: q }, { from: "lacey", text: answer }]);
  };

  const handleSend = () => {
    const q = inputValue.trim();
    if (!q) return;
    const answer = ANSWERS[q] ?? FALLBACK;
    setMessages(prev => [...prev, { from: "user", text: q }, { from: "lacey", text: answer }]);
    setInputValue("");
  };

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", backgroundColor: "#f3f3f3", minHeight: "100vh" }}>

      {/* ── SCORE STRIP ─────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#111", borderBottom: "1px solid #333" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", display: "flex", alignItems: "stretch", overflowX: "auto" }}>
          {SCORES.map((g, i) => (
            <div key={i} style={{
              display: "flex", flexDirection: "column", justifyContent: "center",
              padding: "5px 14px", borderRight: "1px solid #2a2a2a",
              minWidth: 130, flexShrink: 0
            }}>
              <div style={{ fontSize: 9, color: "#a0a0a0", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>{g.league} · {g.status}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "#fff", fontWeight: g.homeWin ? 700 : 400 }}>{g.home}</span>
                <span style={{ fontSize: 12, color: "#fff", fontWeight: 700 }}>{g.homeScore}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: g.awayWin ? "#fff" : "#999", fontWeight: g.awayWin ? 700 : 400 }}>{g.away}</span>
                <span style={{ fontSize: 12, color: g.awayWin ? "#fff" : "#999", fontWeight: 700 }}>{g.awayScore}</span>
              </div>
            </div>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", padding: "0 14px", flexShrink: 0 }}>
            <span style={{ fontSize: 10, color: "#cc0000", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>Full Scoreboard →</span>
          </div>
        </div>
      </div>

      {/* ── NAVIGATION ──────────────────────────────────────────────── */}
      <nav style={{ backgroundColor: "#1a1a1a", borderBottom: "3px solid #cc0000" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", display: "flex", alignItems: "center", height: 44 }}>
          {/* ESPN Logo */}
          <div
            onClick={() => setPage("home")}
            style={{
              backgroundColor: "#cc0000", color: "#fff",
              fontWeight: 900, fontSize: 22, letterSpacing: "-1px",
              padding: "0 10px", height: "100%", display: "flex", alignItems: "center",
              marginRight: 16, fontStyle: "italic", flexShrink: 0,
              cursor: "pointer", userSelect: "none",
            }}
          >ESPN</div>

          {/* Primary nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, overflowX: "auto" }}>
            {["NFL", "NBA", "MLB", "Men's World Cup", "Fantasy Baseball", "More Sports"].map((item) => {
              const isFantasy = item === "Fantasy Football";
              const isFantasyBaseball = item === "Fantasy Baseball";
              const isNFL = item === "NFL";
              const isActive = (isFantasy && page === "fantasy") || (isFantasyBaseball && page === "fantasy-baseball");
              const isClickable = isFantasy || isFantasyBaseball;
              return (
                <a key={item} href="#" onClick={e => {
                  e.preventDefault();
                  if (isFantasy) setPage("fantasy");
                  if (isFantasyBaseball) setPage("fantasy-baseball");
                }} style={{
                  color: "#fff", textDecoration: "none", fontSize: 12, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.04em",
                  padding: "0 10px", height: 44, display: "flex", alignItems: "center",
                  whiteSpace: "nowrap", opacity: 0.9,
                  borderBottom: isActive ? "3px solid #cc0000" : "3px solid transparent",
                  cursor: isClickable ? "pointer" : "default",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = "#cc0000"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = isActive ? "#cc0000" : "transparent"; }}
                >{item}</a>
              );
            })}
          </div>

          {/* Right nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 2, flexShrink: 0, borderLeft: "1px solid #333", paddingLeft: 8 }}>
            {["Watch", "Fantasy"].map((item) => (
              <a key={item} href="#" onClick={e => e.preventDefault()} style={{
                color: "#fff", textDecoration: "none", fontSize: 12, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.04em",
                padding: "0 10px", height: 44, display: "flex", alignItems: "center",
                whiteSpace: "nowrap"
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#cc0000"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              >{item}</a>
            ))}
            <a href="#" onClick={e => e.preventDefault()} style={{
              backgroundColor: "#cc0000", color: "#fff", textDecoration: "none",
              fontSize: 11, fontWeight: 800, padding: "6px 12px", marginLeft: 6, marginRight: 4,
              textTransform: "uppercase", letterSpacing: "0.06em"
            }}>ESPN+</a>

            {/* Lacey hub nav icon */}
            <div
              style={{ position: "relative", display: "flex", alignItems: "center", marginLeft: 6 }}
              onMouseEnter={() => setShowLaceyTooltip(true)}
              onMouseLeave={() => setShowLaceyTooltip(false)}
            >
              <button
                onClick={() => setPage("hub")}
                style={{
                  width: 30, height: 30, borderRadius: "50%",
                  backgroundColor: "#EFE4F9",
                  border: "2px solid #C9A8E6",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", overflow: "hidden", padding: 0,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#7E4FA8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A8E6"; }}
              >
                <img src="/lacey.png" alt="Lacey hub" style={{ width: 22, height: 22, objectFit: "contain" }} />
              </button>
              {showLaceyTooltip && (
                <div style={{
                  position: "absolute", bottom: -30, left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#7E4FA8", color: "#fff",
                  fontSize: 10, fontWeight: 700, whiteSpace: "nowrap",
                  padding: "4px 9px", borderRadius: 4,
                  pointerEvents: "none", zIndex: 100,
                }}>
                  Ask Lacey
                  <div style={{
                    position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)",
                    width: 0, height: 0,
                    borderLeft: "4px solid transparent",
                    borderRight: "4px solid transparent",
                    borderBottom: "4px solid #7E4FA8",
                  }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {page === "fantasy" ? (
        <FantasyPage onBack={() => setPage("home")} />
      ) : page === "nfl" ? (
        <NFLPage onBack={() => setPage("home")} onOpenLacey={() => setPanelOpen(true)} />
      ) : page === "fantasy-baseball" ? (
        <FantasyBaseballPage onBack={() => setPage("home")} onOpenLacey={openLacey} />
      ) : page === "hub" ? (
        <HubPage onBack={() => setPage("home")} onOpenLacey={openLacey} />
      ) : (<>

      {/* ── AD BANNER ───────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#e8e8e8", borderBottom: "1px solid #ccc" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", height: 52, gap: 12 }}>
          <div style={{
            width: 728, height: 36, backgroundColor: "#d9d9d9", border: "1px solid #bbb",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <span style={{ fontSize: 10, color: "#999", textTransform: "uppercase", letterSpacing: "0.1em" }}>Advertisement</span>
          </div>
        </div>
      </div>

      {/* ── BODY ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "16px 8px", display: "grid", gridTemplateColumns: "200px 1fr 300px", gap: 16 }}>

        {/* ── LEFT RAIL ─────────────────────────────────────────────── */}
        <aside>
          {/* Sign up promo */}
          <div style={{ backgroundColor: "#1a1a1a", color: "#fff", padding: "16px 14px", marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 800, lineHeight: 1.3, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Get More Out of ESPN
            </div>
            <div style={{ fontSize: 11, color: "#aaa", lineHeight: 1.5, marginBottom: 12 }}>
              Sign up for an account to enjoy personalized scores, news, and alerts from your favorite teams.
            </div>
            <a href="#" onClick={e => e.preventDefault()} style={{
              display: "block", textAlign: "center", backgroundColor: "#cc0000",
              color: "#fff", fontSize: 11, fontWeight: 800, padding: "8px 0",
              textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em",
              marginBottom: 6
            }}>Sign Up</a>
            <a href="#" onClick={e => e.preventDefault()} style={{
              display: "block", textAlign: "center", backgroundColor: "#2a2a2a",
              color: "#ddd", fontSize: 11, fontWeight: 700, padding: "8px 0",
              textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em"
            }}>Log In</a>
          </div>

          {/* ── LACEY: New to Sports card ── */}
          <div style={{
            backgroundColor: "#fff",
            border: "2px solid #c4b5f4",
            borderRadius: 6,
            padding: "10px 10px",
            marginBottom: 12,
            textAlign: "center",
          }}>
            <img
              src="/lacey.png"
              alt="Lacey"
              style={{ width: 48, height: 48, objectFit: "contain", margin: "0 auto 5px", display: "block" }}
            />
            <div style={{
              fontSize: 13, fontWeight: 900, color: "#3d2a6e",
              letterSpacing: "-0.01em", marginBottom: 2, lineHeight: 1.2
            }}>Your Sports Companion</div>

            <button
              onClick={() => setPanelOpen(true)}
              style={{
                width: "100%", padding: "6px 0",
                backgroundColor: "#a78bfa", border: "none",
                borderRadius: 4, color: "#fff",
                fontSize: 11, fontWeight: 800,
                letterSpacing: "0.05em", textTransform: "uppercase",
                cursor: "pointer",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9169f0"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#a78bfa"; }}
            >Meet Lacey</button>
          </div>

          {/* Watch on ESPN */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 16 }}>
            <div style={{
              backgroundColor: "#1a1a1a", color: "#fff", fontSize: 11, fontWeight: 800,
              padding: "7px 10px", textTransform: "uppercase", letterSpacing: "0.08em"
            }}>Watch on ESPN</div>
            {WATCH_LINKS.map((item, i) => (
              <div key={i} style={{ borderTop: i > 0 ? "1px solid #eee" : undefined }}>
                <a href="#" onClick={e => e.preventDefault()} style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
                  textDecoration: "none", color: "#111"
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
                >
                  <div style={{
                    width: 28, height: 28, backgroundColor: item.color, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <span style={{ fontSize: 7, color: "#fff", fontWeight: 900, textTransform: "uppercase" }}>{item.abbr}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#111", lineHeight: 1.2 }}>{item.name}</div>
                    <div style={{ fontSize: 10, color: "#888" }}>{item.time}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{
              backgroundColor: "#1a1a1a", color: "#fff", fontSize: 11, fontWeight: 800,
              padding: "7px 10px", textTransform: "uppercase", letterSpacing: "0.08em"
            }}>Quick Links</div>
            {QUICK_LINKS.map((link, i) => (
              <div key={i} style={{ borderTop: i > 0 ? "1px solid #eee" : undefined }}>
                <a href="#" onClick={e => e.preventDefault()} style={{
                  display: "block", padding: "8px 10px", fontSize: 11, fontWeight: 600,
                  color: "#333", textDecoration: "none",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#cc0000"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#333"; }}
                >→ {link}</a>
              </div>
            ))}
          </div>
        </aside>

        {/* ── CENTER COLUMN ─────────────────────────────────────────── */}
        <main>
          {/* Hero card */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd", marginBottom: 16, cursor: "pointer" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
          >
            {/* Hero image placeholder */}
            <div style={{
              width: "100%", aspectRatio: "16/9",
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #cc0000 100%)",
              position: "relative", overflow: "hidden"
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)"
              }} />
              {/* Sport label */}
              <div style={{
                position: "absolute", top: 14, left: 14,
                backgroundColor: "#cc0000", color: "#fff",
                fontSize: 10, fontWeight: 800, padding: "3px 8px",
                textTransform: "uppercase", letterSpacing: "0.1em"
              }}>NFL</div>
              {/* Headline overlay */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px" }}>
                <div style={{ fontSize: 11, color: "#ff9999", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>BREAKING</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#fff", lineHeight: 1.15, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                  Mahomes Signs Historic Extension,<br />Cements Chiefs Dynasty Through 2030
                </div>
                <div style={{ fontSize: 12, color: "#ccc", marginTop: 8, lineHeight: 1.5 }}>
                  The two-time Super Bowl MVP and Kansas City quarterback restructured his deal in what analysts are calling the most impactful contract in NFL history.
                </div>
              </div>
            </div>
            <div style={{ padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eee" }}>
              <span style={{ fontSize: 10, color: "#888" }}>By Adam Schefter · 2 hours ago</span>
              <span style={{ fontSize: 10, color: "#cc0000", fontWeight: 700 }}>Read More →</span>
            </div>
          </div>

          {/* Secondary story grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            {SECONDARY_STORIES.map((story, i) => (
              <div key={i} style={{ backgroundColor: "#fff", border: "1px solid #ddd", cursor: "pointer" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
              >
                <div style={{
                  width: "100%", aspectRatio: "16/9",
                  background: story.bg, position: "relative"
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.7) 100%)"
                  }} />
                  <div style={{
                    position: "absolute", top: 8, left: 8,
                    backgroundColor: story.labelColor, color: "#fff",
                    fontSize: 9, fontWeight: 800, padding: "2px 6px", textTransform: "uppercase", letterSpacing: "0.1em"
                  }}>{story.league}</div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 10px" }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", lineHeight: 1.2, textTransform: "uppercase" }}>{story.headline}</div>
                  </div>
                </div>
                <div style={{ padding: "8px 10px", borderTop: "1px solid #eee" }}>
                  <span style={{ fontSize: 10, color: "#888" }}>{story.byline}</span>
                </div>
              </div>
            ))}
          </div>

          {/* More headlines bar */}
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{
              backgroundColor: "#1a1a1a", color: "#fff", fontSize: 11, fontWeight: 800,
              padding: "8px 12px", textTransform: "uppercase", letterSpacing: "0.08em"
            }}>More Headlines</div>
            {MORE_HEADLINES.map((h, i) => (
              <div key={i} style={{ borderTop: "1px solid #eee" }}>
                <a href="#" onClick={e => e.preventDefault()} style={{
                  display: "flex", gap: 10, padding: "9px 12px",
                  textDecoration: "none", color: "#111", alignItems: "flex-start"
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
                >
                  <div style={{
                    width: 4, height: "100%", minHeight: 18, backgroundColor: h.color,
                    flexShrink: 0, marginTop: 2
                  }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: h.color, textTransform: "uppercase", marginRight: 6 }}>{h.league}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#111", lineHeight: 1.4 }}>{h.text}</span>
                  </div>
                  <span style={{ fontSize: 10, color: "#aaa", flexShrink: 0 }}>{h.time}</span>
                </a>
              </div>
            ))}
          </div>
        </main>

        {/* ── RIGHT RAIL ────────────────────────────────────────────── */}
        <aside>
          <div style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}>
            <div style={{
              backgroundColor: "#1a1a1a", color: "#fff", fontSize: 11, fontWeight: 800,
              padding: "8px 12px", textTransform: "uppercase", letterSpacing: "0.08em",
              display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
              <span>Top Headlines</span>
              <span style={{ fontSize: 9, color: "#cc0000", fontWeight: 700, letterSpacing: "0.1em" }}>ALL NEWS →</span>
            </div>
            {TOP_HEADLINES.map((h, i) => (
              <div key={i} style={{ borderTop: i > 0 ? "1px solid #eee" : undefined }}>
                <a href="#" onClick={e => e.preventDefault()} style={{
                  display: "block", padding: "10px 12px", textDecoration: "none"
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f9f9f9"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
                >
                  <div style={{ display: "flex", gap: 4, marginBottom: 4, alignItems: "center" }}>
                    <span style={{
                      fontSize: 9, fontWeight: 800, color: "#fff",
                      backgroundColor: h.color, padding: "1px 5px",
                      textTransform: "uppercase", letterSpacing: "0.06em"
                    }}>{h.league}</span>
                    <span style={{ fontSize: 9, color: "#aaa" }}>{h.time}</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#111", lineHeight: 1.4 }}>{h.text}</div>
                </a>
              </div>
            ))}
          </div>

          {/* Right rail ad */}
          <div style={{
            marginTop: 16, width: "100%", height: 250,
            backgroundColor: "#e0e0e0", border: "1px solid #ccc",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <span style={{ fontSize: 10, color: "#999", textTransform: "uppercase", letterSpacing: "0.1em" }}>Advertisement</span>
          </div>

          {/* ESPN+ promo */}
          <div style={{ marginTop: 16, backgroundColor: "#1a1a1a", padding: "16px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ backgroundColor: "#cc0000", color: "#fff", fontSize: 12, fontWeight: 900, padding: "2px 6px", fontStyle: "italic" }}>ESPN+</div>
              <span style={{ fontSize: 11, color: "#fff", fontWeight: 700 }}>EXCLUSIVE</span>
            </div>
            {ESPNPLUS.map((item, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: "block", padding: "8px 0", borderTop: i > 0 ? "1px solid #2a2a2a" : undefined,
                textDecoration: "none"
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>{item.text}</div>
                <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{item.sub}</div>
              </a>
            ))}
          </div>
        </aside>
      </div>

      </>)}

      {/* ── LACEY: Chat panel / Ask Lacey bubble ── */}
      {panelOpen ? (
        /* ── OPEN PANEL ── */
        <div style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 9999,
          width: 340, height: 480,
          display: "flex", flexDirection: "column",
          backgroundColor: "#fff",
          border: "2px solid #c4b5f4",
          borderRadius: 16,
          boxShadow: "0 8px 40px rgba(139,92,246,0.25), 0 2px 12px rgba(0,0,0,0.12)",
          overflow: "hidden",
        }}>
          {/* Panel header */}
          <div style={{
            background: "linear-gradient(135deg, #a78bfa 0%, #c4b5f4 100%)",
            padding: "12px 14px",
            display: "flex", alignItems: "center", gap: 10,
            flexShrink: 0,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              backgroundColor: "#f3eeff",
              border: "2px solid rgba(255,255,255,0.6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, overflow: "hidden",
            }}>
              <img src="/lacey.png" alt="Lacey" style={{ width: 30, height: 30, objectFit: "contain" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: "#fff", lineHeight: 1.1 }}>Lacey</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", marginTop: 1 }}>Your sports guide · Always here</div>
            </div>
            {/* Minimize button */}
            <button
              onClick={() => { setPanelOpen(false); setLaceyContext(null); }}
              title="Minimize"
              style={{
                width: 28, height: 28, borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.25)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff", fontSize: 16, lineHeight: 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", flexShrink: 0,
                fontWeight: 300,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.25)"; }}
            >–</button>
          </div>

          {/* Messages area */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "16px 14px",
            display: "flex", flexDirection: "column", gap: 10,
          }}>
            {/* Opening message bubble — scripted or default */}
            <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
              <div style={{
                width: 26, height: 26, borderRadius: "50%",
                backgroundColor: "#f3eeff", border: "1.5px solid #c4b5f4",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <img src="/lacey.png" alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />
              </div>
              <div style={{
                backgroundColor: "#f3eeff", border: "1px solid #e0d5fc",
                borderRadius: "16px 16px 16px 4px",
                padding: "10px 14px", maxWidth: "80%",
              }}>
                <div style={{ fontSize: 13, color: "#3d2a6e", lineHeight: 1.5 }}>
                  {laceyContext
                    ? laceyContext.message
                    : "Hey! What can I answer for you?"}
                </div>
              </div>
            </div>

            {/* Conversation messages */}
            {messages.map((m, i) => (
              <div key={i} style={{
                display: "flex", gap: 8, alignItems: "flex-end",
                flexDirection: m.from === "user" ? "row-reverse" : "row",
              }}>
                {m.from === "lacey" && (
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%",
                    backgroundColor: "#f3eeff", border: "1.5px solid #c4b5f4",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <img src="/lacey.png" alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />
                  </div>
                )}
                <div style={{
                  backgroundColor: m.from === "user" ? "#7E4FA8" : "#f3eeff",
                  border: m.from === "user" ? "none" : "1px solid #e0d5fc",
                  borderRadius: m.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  padding: "10px 14px", maxWidth: "80%",
                }}>
                  <div style={{ fontSize: 13, color: m.from === "user" ? "#fff" : "#3d2a6e", lineHeight: 1.5 }}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Suggested question chips — hide once conversation starts */}
            {messages.length === 0 && (() => {
              const chips = laceyContext?.suggestions ?? [
                "How does fantasy sports work?",
                "What story should I care about this week?",
                "How do I read a box score?",
                "What is a salary cap?",
                "How do I know which teams are good?",
                "What happens if a soccer game ends in a tie?",
                "Explain overtime in soccer",
                "Which team do I root for?",
                "How do I know when football season starts?",
              ];
              return (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 34 }}>
                  {chips.map((q) => (
                    <button key={q} onClick={() => handleChipClick(q)} style={{
                      alignSelf: "flex-start",
                      backgroundColor: "#fff", border: "1.5px solid #C9A8E6",
                      borderRadius: 20, padding: "6px 14px",
                      fontSize: 12, color: "#7E4FA8", fontWeight: 600, cursor: "pointer",
                      textAlign: "left",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#EFE4F9"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fff"; }}
                    >{q}</button>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Input area */}
          <div style={{
            borderTop: "1px solid #ede9fe", padding: "10px 12px",
            display: "flex", gap: 8, alignItems: "center",
            backgroundColor: "#fdfcff", flexShrink: 0,
          }}>
            <input
              type="text"
              placeholder="Ask me anything about sports…"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
              style={{
                flex: 1, border: "1.5px solid #c4b5f4", borderRadius: 20,
                padding: "8px 14px", fontSize: 12, color: "#3d2a6e",
                outline: "none", backgroundColor: "#fff",
              }}
              onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = "#a78bfa"; }}
              onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = "#c4b5f4"; }}
            />
            <button
              onClick={handleSend}
              style={{
                width: 34, height: 34, borderRadius: "50%",
                backgroundColor: inputValue.trim() ? "#a78bfa" : "#e0d5fc",
                border: "none", cursor: inputValue.trim() ? "pointer" : "default",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "background-color 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        /* ── COLLAPSED BUBBLE ── */
        <div
          onClick={() => setPanelOpen(true)}
          style={{
            position: "fixed", bottom: 24, right: 24, zIndex: 9999,
            display: "flex", alignItems: "center", gap: 10,
            backgroundColor: "#fff",
            border: "2px solid #c4b5f4",
            borderRadius: 50,
            padding: "8px 18px 8px 8px",
            boxShadow: "0 4px 20px rgba(139,92,246,0.22), 0 2px 8px rgba(0,0,0,0.10)",
            cursor: "pointer",
            transition: "box-shadow 0.15s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(139,92,246,0.35), 0 2px 10px rgba(0,0,0,0.12)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(139,92,246,0.22), 0 2px 8px rgba(0,0,0,0.10)"; }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            backgroundColor: "#f3eeff", border: "2px solid #c4b5f4",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, overflow: "hidden",
          }}>
            <img src="/lacey.png" alt="Lacey" style={{ width: 34, height: 34, objectFit: "contain" }} />
          </div>
          <span style={{
            fontSize: 13, fontWeight: 800, color: "#5b3fa6",
            letterSpacing: "0.01em", whiteSpace: "nowrap"
          }}>Ask Lacey</span>
        </div>
      )}

      {/* ── LACEY INTEGRATION DOCS ─────────────────────────────────── */}
      {page === "home" && <div style={{ maxWidth: 1220, margin: "24px auto 0", padding: "0 8px 32px" }}>
        <div style={{ borderTop: "2px solid #C9A8E6", paddingTop: 20, marginBottom: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: "#B57EDC", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>
            How Lacey works across ESPN
          </div>
          <div style={{ fontSize: 12, color: "#7c6fa0", lineHeight: 1.5 }}>
            Three connected ways Lacey meets ESPN fans wherever they are, from their first visit to their thousandth.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 16 }}>
          {/* Box 1 */}
          <div style={{ backgroundColor: "#fff", border: "1.5px solid #C9A8E6", borderRadius: 10, padding: "16px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#EFE4F9", border: "1.5px solid #C9A8E6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                <img src="/lacey.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#7E4FA8", textTransform: "uppercase", letterSpacing: "0.08em" }}>1 · A Friend in Sports on Every Page</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#3d2a6e", marginBottom: 6 }}>Always within reach</div>
            <div style={{ fontSize: 11, color: "#5a4a7a", lineHeight: 1.6 }}>
              A subtle entry point in the navigation that follows fans across ESPN and opens the full Lacey experience whenever they want to go deeper. Present on every page, never in the way.
            </div>
          </div>

          {/* Box 2 */}
          <div style={{ backgroundColor: "#fff", border: "1.5px solid #C9A8E6", borderRadius: 10, padding: "16px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#EFE4F9", border: "1.5px solid #C9A8E6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                <img src="/lacey.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#7E4FA8", textTransform: "uppercase", letterSpacing: "0.08em" }}>2 · An on ramp for new fans</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#3d2a6e", marginBottom: 6 }}>A clear place to start</div>
            <div style={{ fontSize: 11, color: "#5a4a7a", lineHeight: 1.6 }}>
              A welcoming starting point for the casual and new fans ESPN wants to reach, turning first time curiosity into a reason to stay and explore.
            </div>
          </div>

          {/* Box 3 */}
          <div style={{ backgroundColor: "#fff", border: "1.5px solid #C9A8E6", borderRadius: 10, padding: "16px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#EFE4F9", border: "1.5px solid #C9A8E6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                <img src="/lacey.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#7E4FA8", textTransform: "uppercase", letterSpacing: "0.08em" }}>3 · Answers in the moment</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#3d2a6e", marginBottom: 6 }}>Help right where they are</div>
            <div style={{ fontSize: 11, color: "#5a4a7a", lineHeight: 1.6 }}>
              A companion fans can ask anything, right on the page, without leaving what they were doing. Available everywhere, it turns a moment of confusion into a moment of engagement.
            </div>
          </div>
        </div>

        {/* Design logic box */}
        <div style={{ backgroundColor: "#EFE4F9", border: "1.5px solid #C9A8E6", borderRadius: 10, padding: "16px 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: "#7E4FA8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>WHY IT WORKS</div>
          <div style={{ fontSize: 11, color: "#3d2a6e", lineHeight: 1.7 }}>
            Our primary research found that three quarters of fans have felt left out of sports conversations — not from lack of interest, but lack of a starting point. ESPN already has the audience it wants; Lacey is the front door that turns curiosity into engagement, on every page, in every moment.
          </div>
        </div>
      </div>}

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#1a1a1a", borderTop: "3px solid #cc0000", marginTop: 24 }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", padding: "16px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 16 }}>
            {["About ESPN", "Advertise", "Contact Us", "Terms of Use", "Privacy Policy", "Do Not Sell My Info"].map(l => (
              <a key={l} href="#" onClick={e => e.preventDefault()} style={{ fontSize: 10, color: "#888", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div style={{ fontSize: 10, color: "#555" }}>© 2025 ESPN. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

// ── DATA ─────────────────────────────────────────────────────────────────────

const SCORES = [
  { league: "NBA", status: "Final", home: "BOS", homeScore: "112", homeWin: true, away: "NYK", awayScore: "98", awayWin: false },
  { league: "NBA", status: "Final", home: "LAL", homeScore: "104", homeWin: false, away: "GSW", awayScore: "109", awayWin: true },
  { league: "MLB", status: "Final", home: "NYY", homeScore: "6", homeWin: true, away: "BOS", awayScore: "3", awayWin: false },
  { league: "MLB", status: "Final", home: "LAD", homeScore: "5", homeWin: false, away: "SF", awayScore: "7", awayWin: true },
  { league: "NHL", status: "Final OT", home: "TOR", homeScore: "3", homeWin: true, away: "MTL", awayScore: "2", awayWin: false },
  { league: "NHL", status: "7:00 PM ET", home: "COL", homeScore: "–", homeWin: false, away: "VGK", awayScore: "–", awayWin: false },
  { league: "WNBA", status: "Final", home: "NY", homeScore: "82", homeWin: true, away: "CHI", awayScore: "74", awayWin: false },
  { league: "WNBA", status: "8:30 PM ET", home: "LA", homeScore: "–", homeWin: false, away: "SEA", awayScore: "–", awayWin: false },
];

const WATCH_LINKS = [
  { abbr: "NFL", name: "NFL Live Countdown", time: "6:00 PM ET · ESPN", color: "#013369" },
  { abbr: "NBA", name: "NBA Finals Tip-Off", time: "8:30 PM ET · ABC", color: "#17408B" },
  { abbr: "MLB", name: "Sunday Night Baseball", time: "7:00 PM ET · ESPN", color: "#002D72" },
  { abbr: "SC", name: "SportsCenter", time: "11:00 PM ET · ESPN", color: "#cc0000" },
];

const QUICK_LINKS = [
  "NFL Draft Tracker",
  "NBA Playoffs Bracket",
  "MLB Standings",
  "World Cup Scores",
  "Fantasy Football",
  "ESPN Bet",
  "ESPN Radio",
  "SEC Network",
];

const SECONDARY_STORIES = [
  {
    headline: "LeBron Passes Kareem, Sets All-Time Scoring Record",
    league: "NBA", labelColor: "#17408B",
    bg: "linear-gradient(135deg, #0a192f, #17408B)",
    byline: "Dave McMenamin · 4h ago"
  },
  {
    headline: "USMNT Advances to Men's World Cup Quarterfinals",
    league: "WORLD CUP", labelColor: "#009A44",
    bg: "linear-gradient(135deg, #003300, #009A44)",
    byline: "Jeff Carlisle · 1h ago"
  },
];

const MORE_HEADLINES = [
  { league: "NFL", text: "Jets trade for Davante Adams ahead of camp opener", time: "1h", color: "#003F2D" },
  { league: "NBA", text: "Wembanyama drops 42 points in Spurs playoff opener", time: "2h", color: "#C4CED4" },
  { league: "MLB", text: "Ohtani no-hitter bid broken up in the 7th inning", time: "3h", color: "#002D72" },
  { league: "Golf", text: "Rory McIlroy wins third consecutive major championship", time: "5h", color: "#1a5e20" },
];

const TOP_HEADLINES = [
  { league: "NFL", text: "Chiefs restructure Mahomes deal; Kelce extension expected next", time: "30m", color: "#E31837" },
  { league: "NBA", text: "Celtics advance to Finals after Game 7 thriller over Knicks", time: "1h", color: "#007A33" },
  { league: "NBA", text: "Curry announces he will return to Warriors for 16th season", time: "2h", color: "#1D428A" },
  { league: "MLB", text: "Yankees' Judge on pace for record-setting home run season", time: "3h", color: "#003087" },
  { league: "NFL", text: "Cowboys sign WR to record $32M per year extension", time: "4h", color: "#003594" },
  { league: "NHL", text: "Avalanche's MacKinnon wins fourth consecutive Hart Trophy", time: "5h", color: "#6F263D" },
  { league: "GOLF", text: "LIV Golf and PGA Tour merger talks intensify ahead of Open", time: "6h", color: "#1a5e20" },
];

const ESPNPLUS = [
  { text: "McGregor vs. Poirier 4: Full Fight Replay", sub: "UFC · Available Now" },
  { text: "Bundesliga: Bayern vs Dortmund Klassiker", sub: "Soccer · Sun 2:30 PM ET" },
  { text: "30 for 30: The Last Stand", sub: "Documentary · New Episode" },
];
