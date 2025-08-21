import React from "react";

const CheckIcon = ({ color = "#10b981", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill={color} opacity="0.12" />
    <path
      d="M8 12.5l2.5 2.5L16.5 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Course = () => {
  React.useEffect(() => {
    document.body.classList.add("hide-scrollbar");
    document.documentElement.classList.add("hide-scrollbar");
    return () => {
      document.body.classList.remove("hide-scrollbar");
      document.documentElement.classList.remove("hide-scrollbar");
    };
  }, []);

  // ✅ EVERYTHING comes from JSON (like DB)
  const courseData = {
    hero: {
      title: "Prompt Engineering & LLM Mastery",
      caption:
        "Master the art of designing effective prompts to maximize the performance of Large Language Models like GPT, Claude, and Gemini.",
      cta: "Enroll Now",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop",
    },
    badges: [
      "⏱ 20 hours / 2 weeks",
      "📊 Beginner to Intermediate",
      "💻 Basic Computer Literacy + English",
      "🏆 Certified Prompt Engineer (CPE)",
    ],
    sections: [
      {
        title: "What You’ll Learn",
        type: "bullets",
        items: [
          "Craft contextually strong prompts",
          "Solve real-world tasks using LLMs",
          "Build Prompt Libraries for enterprises",
        ],
      },
      {
        title: "Course Modules",
        type: "modules",
        items: [
          "Introduction to LLMs & Prompting Paradigm",
          "Prompt Structures: Zero-shot, Few-shot, CoT",
          "Task-Specific Prompting (Content, Coding, Legal)",
          "Prompt Debugging & Optimization Strategies",
          "Automating Workflows with Prompt Templates",
        ],
      },
    ],
    highlights: [
      "📝 Hands-on Assignments + Case Study",
      "🏅 Certified Prompt Engineer",
    ],
  };

  // ✅ Same styles as before
  const styles = {
    page: {
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      background: "#f8fafc",
      color: "#0f172a",
      display: "flex",
      flexDirection: "column",
    },
    card: {
      width: "100%",
      height: "100%",
      background: "#ffffff",
      borderRadius: 0,
      boxShadow: "none",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      overflowX: "hidden",
    },
    hero: {
      background: "linear-gradient(135deg,#f59e0b 0%,#fbbf24 100%)",
      color: "#111827",
      padding: "32px 16px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
    },
    heroTitle: {
      fontSize: "clamp(20px, 4vw, 32px)",
      fontWeight: 800,
    },
    heroCaption: {
      fontSize: "clamp(16px, 2.5vw, 22px)",
      maxWidth: "600px",
      color: "#1f2937",
    },
    heroCta: {
      background: "#111827",
      color: "#fff",
      border: 0,
      borderRadius: 8,
      padding: "12px 20px",
      fontWeight: 700,
      fontSize: "16px",
      width: "fit-content",
      cursor: "pointer",
    },
    heroRightImage: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid rgba(255,255,255,.7)",
      boxShadow: "0 8px 24px rgba(0,0,0,.15)",
    },
    heroBadges: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: 12,
      padding: "16px",
    },
    badge: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: "#6d28d9",
      border: "1px solid #5b21b6",
      borderRadius: 10,
      padding: "16px",
      textAlign: "center",
      fontSize: "clamp(14px, 2vw, 18px)",
      color: "#ffffff",
    },
    section: {
      padding: "16px",
    },
    sectionTitle: {
      fontSize: "clamp(16px, 3vw, 20px)",
      fontWeight: 800,
      margin: "8px 0 12px 0",
    },
    bulletList: {
      display: "grid",
      gridTemplateColumns: "1fr",
      rowGap: 12,
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    bulletItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "10px 12px",
      borderRadius: 10,
      background: "#f8fafc",
      border: "1px solid #eef2f7",
    },
    modules: {
      display: "grid",
      gridTemplateColumns: "1fr",
      rowGap: 10,
    },
    moduleItem: {
      display: "grid",
      gridTemplateColumns: "28px 1fr",
      gap: 10,
      padding: "10px 12px",
      borderRadius: 10,
      background: "#f8fafc",
      border: "1px solid #eef2f7",
    },
    moduleIndex: {
      width: 28,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#111827",
      color: "#fff",
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 700,
    },
    highlights: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      padding: "16px",
    },
    highlightItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: "#5b21b6",
      borderRadius: 12,
      padding: "16px",
      textAlign: "center",
      fontSize: "clamp(14px, 3vw, 18px)",
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* HERO */}
        <div style={styles.hero}>
          <div style={{ flex: 1, minWidth: "250px" }}>
            <div style={styles.heroTitle}>{courseData.hero.title}</div>
            <div style={styles.heroCaption}>{courseData.hero.caption}</div>
            <button style={styles.heroCta}>{courseData.hero.cta}</button>
          </div>
          <img
            src={courseData.hero.image}
            alt="Instructor"
            style={styles.heroRightImage}
          />
        </div>

        {/* BADGES */}
        <div style={styles.heroBadges}>
          {courseData.badges.map((badge, i) => (
            <div key={i} style={styles.badge}>
              {badge}
            </div>
          ))}
        </div>

        {/* SECTIONS */}
        {courseData.sections.map((section, sIndex) => (
          <section key={sIndex} style={styles.section}>
            <div style={styles.sectionTitle}>{section.title}</div>


            {section.type === "bullets" && (
              <ul style={styles.bulletList}>
                {section.items.map((point, i) => (
                  <li key={i} style={styles.bulletItem}>
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.type === "modules" && (
              <div style={styles.modules}>
                {section.items.map((m, i) => (
                  <div key={i} style={styles.moduleItem}>
                    <div style={styles.moduleIndex}>{i + 1}</div>
                    <div>{m}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* HIGHLIGHTS */}
        <div style={styles.highlights}>
          {courseData.highlights.map((h, i) => (
            <div key={i} style={styles.highlightItem}>
              {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
