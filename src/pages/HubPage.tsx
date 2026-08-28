import { useState } from "react";

interface Props {
  onBack: () => void;
  onOpenLacey?: (ctx?: { message: string; suggestions: string[] }) => void;
}

const LAV_DEEP = "#7E4FA8";
const LAV_SOFT = "#EFE4F9";
const LAV_LINE = "#C9A8E6";
const INK = "#16181C";
const GRAY = "#6B7176";
const LINE = "#E6E8EB";

const PLAYERS = [
  {
    sport: "WNBA",
    sportBg: "#FF6B35",
    badge: { text: "Live now", dot: true },
    photo: "/sabrina_ionescu.avif",
    photoBg: "linear-gradient(160deg,#ff8c5a,#cc4400)",
    name: "Sabrina Ionescu",
    role: "Guard · New York Liberty",
    blurb: "Leading scorer in the league this season and the player everyone wants to know about right now.",
    back: {
      accentBg: "linear-gradient(135deg,#FF6B35,#cc3300)",
      jersey: "#20",
      facts: [
        { label: "Hometown", value: "Walnut Creek, CA" },
        { label: "Age", value: "26" },
        { label: "Team", value: "New York Liberty" },
        { label: "Position", value: "Point Guard" },
        { label: "College", value: "University of Oregon" },
        { label: "Drafted", value: "2020 · 1st overall pick" },
      ],
      social: [
        { platform: "Instagram", handle: "@sabrina_i20" },
        { platform: "X / Twitter", handle: "@sabrina_i20" },
      ],
    },
  },
  {
    sport: "FIFA · World Cup",
    sportBg: "#1A7A4A",
    badge: { text: "Live now", dot: true },
    photo: "/tim_weah.jpg",
    photoBg: "linear-gradient(160deg,#2ea866,#0d5a30)",
    name: "Tim Weah",
    role: "Forward · USA Men's National Team",
    blurb: "The face of the US push at the World Cup. Every game is a chance to make history on home soil.",
    back: {
      accentBg: "linear-gradient(135deg,#1A7A4A,#0a3d25)",
      jersey: "#14",
      facts: [
        { label: "Hometown", value: "Brooklyn, NY" },
        { label: "Age", value: "25" },
        { label: "Club", value: "Juventus (Serie A)" },
        { label: "National Team", value: "USA" },
        { label: "Position", value: "Right Winger" },
        { label: "Fun fact", value: "Son of FIFA World Player of the Year George Weah" },
      ],
      social: [
        { platform: "Instagram", handle: "@timweah" },
        { platform: "X / Twitter", handle: "@timweah" },
      ],
    },
  },
  {
    sport: "MLB",
    sportBg: "#003087",
    badge: { text: "Final · NYY 6  BOS 3", dot: false },
    photo: "/aaron_judge.png",
    photoBg: "linear-gradient(160deg,#1a5fb4,#001a5c)",
    name: "Aaron Judge",
    role: "Outfielder · New York Yankees",
    blurb: "On pace for a record-setting home run season. The most talked about player in baseball right now.",
    back: {
      accentBg: "linear-gradient(135deg,#003087,#001040)",
      jersey: "#99",
      facts: [
        { label: "Hometown", value: "Linden, CA" },
        { label: "Age", value: "32" },
        { label: "Team", value: "New York Yankees" },
        { label: "Position", value: "Right Field" },
        { label: "College", value: "Fresno State" },
        { label: "Drafted", value: "2013 · 32nd overall pick" },
      ],
      social: [
        { platform: "Instagram", handle: "@thejudge44" },
        { platform: "X / Twitter", handle: "@thejudge44" },
      ],
    },
  },
];

export default function HubPage({ onBack, onOpenLacey }: Props) {
  const [flipped, setFlipped] = useState<number | null>(null);

  const askLacey = (msg: string, chips: string[]) => {
    if (onOpenLacey) onOpenLacey({ message: msg, suggestions: chips });
  };

  return (
    <div style={{ backgroundColor: "#f5f5f7", fontFamily: "'Inter', sans-serif", color: INK }}>

      {/* ── HUBBAR ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", backgroundColor: "#fff", borderBottom: `1px solid ${LINE}` }}>
        <img src="/lacey.png" alt="Lacey" style={{ width: 26, height: 26, objectFit: "contain" }} />
        <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: "-0.2px" }}>Your Sports Hub</span>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: LAV_DEEP, background: LAV_SOFT, border: `1px solid ${LAV_LINE}`, padding: "3px 9px", borderRadius: 20 }}>powered by Laces</span>
        <a href="#" onClick={e => { e.preventDefault(); onBack(); }} style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: GRAY, textDecoration: "none" }}>← ESPN Home</a>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "22px 8px 40px" }}>

        {/* ── SECTION 1: PLAYER CARDS ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <h3 style={{ fontSize: 13, fontWeight: 900, letterSpacing: -0.1, whiteSpace: "nowrap" }}>Who everyone is talking about</h3>
          <span style={{ fontSize: 10, fontWeight: 700, color: LAV_DEEP, background: LAV_SOFT, border: `1px solid ${LAV_LINE}`, padding: "3px 9px", borderRadius: 20 }}>updated this week</span>
          <span style={{ fontSize: 9, color: GRAY, fontWeight: 500, fontStyle: "italic" }}>click a card to learn more</span>
          <span style={{ flex: 1, height: 1, background: LINE }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 28 }}>
          {PLAYERS.map((p, i) => (
            <div
              key={p.name}
              onClick={() => setFlipped(flipped === i ? null : i)}
              style={{ perspective: "1000px", cursor: "pointer", aspectRatio: "1 / 1" }}
            >
              {/* Rotating inner */}
              <div style={{
                position: "relative", width: "100%", height: "100%",
                transformStyle: "preserve-3d",
                transform: flipped === i ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.55s cubic-bezier(.4,0,.2,1)",
              }}>

                {/* ── FRONT ── */}
                <div style={{
                  position: "absolute", inset: 0,
                  backfaceVisibility: "hidden",
                  borderRadius: 14, overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,.14)",
                  display: "flex", flexDirection: "column",
                }}>
                  <div style={{ background: "#fff", borderBottom: `1px solid ${LINE}`, padding: "7px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                    <span style={{ fontSize: 9.5, fontWeight: 800, color: INK, letterSpacing: 0.4, textTransform: "uppercase" }}>{p.sport}</span>
                    <span style={{ fontSize: 9, fontWeight: 800, color: "#fff", background: "#cc0000", padding: "2px 7px", borderRadius: 10, display: "flex", alignItems: "center", gap: 4 }}>
                      {p.badge.dot && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7CFC9A", display: "inline-block" }} />}
                      {p.badge.text}
                    </span>
                  </div>
                  <div style={{ flex: 1, background: p.photoBg, overflow: "hidden" }}>
                    <img src={p.photo} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  </div>
                  <div style={{ background: "#fff", padding: "11px 14px", flexShrink: 0 }}>
                    <div style={{ fontWeight: 900, fontSize: 15, letterSpacing: -0.3 }}>{p.name}</div>
                    <div style={{ fontSize: 10.5, color: GRAY, fontWeight: 600, marginTop: 2 }}>{p.role}</div>
                    <div style={{ marginTop: 6, fontSize: 11, color: "#33373b", lineHeight: 1.4 }}>{p.blurb}</div>
                  </div>
                </div>

                {/* ── BACK ── */}
                <div style={{
                  position: "absolute", inset: 0,
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  borderRadius: 14, overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,.14)",
                  display: "flex", flexDirection: "column",
                  background: "#fff",
                }}>
                  {/* Back header */}
                  <div style={{ background: p.back.accentBg, padding: "12px 14px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: -0.3 }}>{p.name}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,.75)", fontWeight: 600, marginTop: 1 }}>{p.role}</div>
                    </div>
                    <div style={{ fontFamily: "serif", fontSize: 36, fontWeight: 900, color: "rgba(255,255,255,.25)", lineHeight: 1 }}>{p.back.jersey}</div>
                  </div>

                  {/* Facts grid */}
                  <div style={{ flex: 1, padding: "10px 14px", overflowY: "auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px" }}>
                      {p.back.facts.map(f => (
                        <div key={f.label}>
                          <div style={{ fontSize: 8.5, fontWeight: 800, color: LAV_DEEP, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 1 }}>{f.label}</div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: INK, lineHeight: 1.3 }}>{f.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Social */}
                    <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px solid ${LINE}` }}>
                      <div style={{ fontSize: 8.5, fontWeight: 800, color: LAV_DEEP, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 5 }}>Follow</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {p.back.social.map(s => (
                          <div key={s.platform} style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5 }}>
                            <span style={{ color: GRAY, fontWeight: 600 }}>{s.platform}</span>
                            <span style={{ fontWeight: 800, color: INK }}>{s.handle}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flip-back hint */}
                  <div style={{ padding: "7px 14px", background: LAV_SOFT, borderTop: `1px solid ${LAV_LINE}`, textAlign: "center", fontSize: 9.5, fontWeight: 700, color: LAV_DEEP, flexShrink: 0 }}>
                    ↩ Click to flip back
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 2: CONVERSATION STARTERS ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <h3 style={{ fontSize: 13, fontWeight: 900, letterSpacing: -0.1, whiteSpace: "nowrap" }}>Conversation starters</h3>
          <span style={{ fontSize: 10, fontWeight: 700, color: LAV_DEEP, background: LAV_SOFT, border: `1px solid ${LAV_LINE}`, padding: "3px 9px", borderRadius: 20 }}>things people are asking</span>
          <span style={{ flex: 1, height: 1, background: LINE }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
          {[
            {
              num: "1", sport: "WNBA", sportBg: "#FF6B35", asks: "2,800",
              q: "Why is everyone watching the WNBA right now?",
              wim: "What it means",
              body: "The league is having its biggest moment ever. Star players, packed arenas, and a new generation of fans showing up.",
              say: "Is the WNBA worth watching?",
              chips: ["Who are the best players", "How does the WNBA season work", "What is Caitlin Clark effect"],
            },
            {
              num: "2", sport: "World Cup", sportBg: "#1A7A4A", asks: "5,200",
              q: "What is the offside rule and why do people argue about it?",
              wim: "What it means",
              body: "It stops attackers from camping near the goal. A player is offside if they are ahead of the last defender when the ball is played to them.",
              say: "Can you explain offside to me?",
              chips: ["Explain offside simply", "Why does VAR review it", "When was the rule created"],
            },
            {
              num: "3", sport: "MLB", sportBg: "#003087", asks: "1,400",
              q: "What is a save in baseball and why does it matter?",
              wim: "What it means",
              body: "A closer enters late with the lead and gets the final outs. A save is their stat. It is the highest pressure moment of any game.",
              say: "What makes a great closer?",
              chips: ["What is a closer", "How does a baseball game end", "Who are the best closers right now"],
            },
          ].map(card => (
            <div key={card.num} style={{ background: "#fff", borderRadius: 12, padding: "14px 15px", boxShadow: "0 3px 12px rgba(0,0,0,.08)", display: "flex", flexDirection: "column", aspectRatio: "1 / 1", overflow: "hidden" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: LAV_DEEP, color: "#fff", fontWeight: 900, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>{card.num}</div>
              <span style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.4, padding: "3px 8px", borderRadius: 10, display: "inline-block", marginBottom: 7, color: GRAY, background: LINE }}>{card.sport}</span>
              <h4 style={{ fontSize: 13.5, fontWeight: 900, lineHeight: 1.2, marginBottom: 6 }}>{card.q}</h4>
              <div style={{ fontSize: 10, fontWeight: 800, color: LAV_DEEP, textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 4 }}>{card.wim}</div>
              <p style={{ fontSize: 11.5, color: "#44484c", lineHeight: 1.45, flex: 1 }}>{card.body}</p>
              <div style={{ marginTop: 10, textAlign: "right", fontSize: 10, color: GRAY, fontWeight: 600 }}>
                <span style={{ fontWeight: 800, color: INK }}>{card.asks}</span> people asked this week
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 3: LEARN THROUGH GAMES ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <h3 style={{ fontSize: 13, fontWeight: 900, letterSpacing: -0.1, whiteSpace: "nowrap" }}>Let's play a game</h3>
          <span style={{ fontSize: 10, fontWeight: 700, color: LAV_DEEP, background: LAV_SOFT, border: `1px solid ${LAV_LINE}`, padding: "3px 9px", borderRadius: 20 }}>pick a sport, start anywhere</span>
          <span style={{ flex: 1, height: 1, background: LINE }} />
        </div>

        {/* Mini-game cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 14 }}>
          {[
            {
              img: "/game_zodiac.png",
              badge: "Zodiac",
              title: "Famous Players That Share Your Zodiac",
              sub: "Pick a month, meet your sports match",
              msg: "Which famous athletes share my zodiac sign? I was born in March.",
              chips: ["Show me Aries athletes", "What about Scorpio stars", "Which zodiac has the most legends"],
            },
            {
              img: "/game_this_or_that.png",
              badge: "Quiz",
              title: "Find Your Sport: This or That Edition",
              sub: "Answer 5 quick questions, find your game",
              msg: "Let's play This or That to find the right sport for me. Ask me the first question.",
              chips: ["Give me the next question", "Tell me more about that sport", "What sport fits a competitive person"],
            },
            {
              img: "/game_wag.png",
              badge: "Match",
              title: "Match the WAG to the Athlete",
              sub: "See how many famous couples you know",
              msg: "Let's play Match the WAG to the Athlete. Give me the first clue.",
              chips: ["Give me another couple", "Who is the most famous sports couple", "Tell me about Taylor Swift and Travis Kelce"],
            },
          ].map(g => (
            <div key={g.title}
              style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,.14)", aspectRatio: "1 / 1", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "38%", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                <img src={g.img} alt={g.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 10, right: 10, fontSize: 9, fontWeight: 800, color: "#fff", background: "rgba(0,0,0,.45)", padding: "3px 9px", borderRadius: 10 }}>{g.badge}</span>
              </div>
              <div style={{ background: "#fff", padding: "12px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: 900, fontSize: 13, lineHeight: 1.3, color: INK }}>{g.title}</div>
                <div style={{ fontSize: 11, color: GRAY, marginTop: 4 }}>{g.sub}</div>
                <div style={{ flex: 1 }} />
                <div style={{ background: LAV_DEEP, color: "#fff", textAlign: "center", fontWeight: 800, fontSize: 12, padding: 9, borderRadius: 8 }}>
                  Play →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {[
            { logo: "/nfl_logo.webp", logoBg: "#013369", badge: "5 min", name: "Football in 5 Minutes", sub: "Downs, touchdowns, and why everyone watches", fill: 40, msg: "Teach me football basics in five minutes.", chips: ["What is a down", "How do touchdowns work", "What is a first down"] },
            { logo: "/nba_logo.png", logoBg: "#000000", badge: "New", name: "Basketball Basics", sub: "Quarters, fouls, and how a game is won", fill: 0, msg: "Teach me basketball basics from the start.", chips: ["How long is a quarter", "What is a foul", "How do you win a game"] },
            { logo: "/fifa_logo.jpg", logoBg: "#000000", badge: "Live", name: "Soccer Simplified", sub: "Goals, offsides, and what the Cup is about", fill: 0, msg: "Explain the World Cup to me from scratch.", chips: ["How many teams are in the World Cup", "What is offside", "How long is a soccer game"] },
          ].map(g => (
            <div key={g.name} style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,.14)", aspectRatio: "1 / 1", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "38%", flexShrink: 0, background: g.logoBg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <img src={g.logo} alt={g.name} style={{ height: 72, width: "auto", maxWidth: "80%", objectFit: "contain" }} />
                <span style={{ position: "absolute", top: 10, right: 10, fontSize: 9, fontWeight: 800, color: "#fff", background: "rgba(255,255,255,.2)", padding: "3px 9px", borderRadius: 10 }}>{g.badge}</span>
              </div>
              <div style={{ background: "#fff", padding: "12px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: 900, fontSize: 13 }}>{g.name}</div>
                <div style={{ fontSize: 11, color: GRAY, marginTop: 2 }}>{g.sub}</div>
                <div style={{ flex: 1 }} />
                <div style={{ height: 5, background: LINE, borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 3, background: LAV_DEEP, width: `${g.fill}%` }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9.5, fontWeight: 700, color: GRAY, marginTop: 4, marginBottom: 8 }}>
                  <span>{g.fill > 0 ? `${g.fill}% complete` : "Not started"}</span>
                  <span>5 questions</span>
                </div>
                <div style={{ background: LAV_DEEP, color: "#fff", textAlign: "center", fontWeight: 800, fontSize: 12, padding: 9, borderRadius: 8 }}>
                  {g.fill > 0 ? "Continue →" : "Start →"}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── FOOTER ── */}
      <div style={{ background: "#3a3a3c", padding: "28px 24px 0" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto" }}>

          {/* White research card */}
          <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden" }}>

            {/* Header row */}
            <div style={{ padding: "16px 20px 12px", display: "flex", alignItems: "center", gap: 10, borderBottom: `1px solid ${LINE}` }}>
              <img src="/lacey.png" alt="Lacey" style={{ width: 28, height: 28, objectFit: "contain" }} />
              <span style={{ fontWeight: 900, fontSize: 15, color: INK }}>Our insights</span>
            </div>

            {/* Four stat cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 0 }}>
              {[
                { stat: "75%", body: "have felt excluded from a sports conversation" },
                { stat: "6 to 1", body: "access barriers outweigh actual lack of interest" },
                { stat: "#1", body: "way fans learn today is asking a friend, the most fragile method there is" },
                { stat: "Top barrier", body: "not knowing where to start, more than any other reason" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "18px 18px 14px",
                  borderRight: i < 3 ? `1px solid ${LINE}` : "none",
                  borderBottom: `1px solid ${LINE}`,
                }}>
                  <div style={{ fontSize: i === 3 ? 22 : 30, fontWeight: 900, color: LAV_DEEP, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 6 }}>{s.stat}</div>
                  <div style={{ fontSize: 11, color: "#44484c", lineHeight: 1.4, marginBottom: 8 }}>{s.body}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Purple bottom bar */}
          <div style={{ background: LAV_DEEP, borderRadius: "0 0 14px 14px", padding: "13px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 0 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,.75)", fontWeight: 500 }}>Designed to convert the fans ESPN already reaches into fans who stay</span>
          </div>

          <div style={{ height: 24 }} />
        </div>
      </div>

    </div>
  );
}
