import React from "react";

const CheckIcon = ({ color = "#10b981" }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="10" fill={color} opacity="0.12" />
        <path d="M8 12.5l2.5 2.5L16.5 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ClockIcon = ({ color = "#6b7280" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none"/>
        <polyline points="12,6 12,12 16,14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const BarChartIcon = ({ color = "#6b7280" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <line x1="18" y1="20" x2="18" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="20" x2="12" y2="4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="6" y1="20" x2="6" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const LaptopIcon = ({ color = "#6b7280" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke={color} strokeWidth="2" fill="none"/>
        <line x1="2" y1="14" x2="22" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const BadgeAwardIcon = ({ color = "#6b7280" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="8" r="6" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M6 21v-7a6 6 0 0 1 12 0v7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AwardIcon = ({ color = "#f59e0b" }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" fill="rgba(245, 158, 11, .12)" />
        <path d="M7 14l-1 7 6-3 6 3-1-7" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const HandsOnIcon = ({ color = "#f59e0b" }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M16 3h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M12.5 8.5L11.5 9.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 15.5L11.5 14.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Course = () => {
    const styles = {
        page: {
            maxWidth: 960,
            margin: "24px auto 64px auto",
            padding: "0 16px",
            color: "#0f172a"
        },
        card: {
            background: "#ffffff",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
            overflow: "hidden"
        },
        hero: {
            background: "#fde68a",
            backgroundImage: "linear-gradient(135deg,#f59e0b 0%,#fbbf24 100%)",
            color: "#111827",
            padding: "48px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            minHeight: "280px"
        },
        heroTitle: {
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 0.2
        },
        heroCaption: {
            fontSize: 12,
            maxWidth: 460,
            color: "#1f2937"
        },
        heroCta: {
            background: "#111827",
            color: "#fff",
            border: 0,
            borderRadius: 8,
            padding: "10px 16px",
            fontWeight: 700,
            cursor: "pointer"
        },
        heroRightImage: {
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid rgba(255,255,255,.7)",
            boxShadow: "0 8px 24px rgba(0,0,0,.15)",
        },
        heroBadges: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            padding: "16px 32px",
            marginTop: "-32px",
            marginLeft: "32px",
            marginRight: "32px",
            position: "relative",
            zIndex: 10
        },
        badge: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "#7c3aed",
            border: "1px solid #6d28d9",
            borderRadius: 10,
            padding: "16px 8px",
            aspectRatio: "1",
            textAlign: "center",
            fontSize: "11px",
            lineHeight: "1.3",
            color: "#ffffff"
        },
        section: {
            padding: "10px 20px 24px 20px"
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: 800,
            margin: "8px 0 12px 0"
        },
        bulletList: {
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: 12,
            margin: 0,
            padding: 0,
            listStyle: "none"
        },
        bulletItem: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10
        },
        modules: {
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: 10,
            counterReset: "module"
        },
        moduleItem: {
            display: "grid",
            gridTemplateColumns: "28px 1fr",
            alignItems: "flex-start",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 10,
            background: "#f8fafc",
            border: "1px solid #eef2f7"
        },
        moduleIndex: {
            width: 28,
            height: 28,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111827",
            color: "#fff",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700
        },
        highlights: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            padding: "8px 20px 24px 20px",
            maxWidth: "400px",
            margin: "0 auto"
        },
        highlightItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "#fff7ed",
            border: "1px solid #fde68a",
            borderRadius: 12,
            padding: "16px 12px",
            aspectRatio: "1",
            textAlign: "center",
            fontSize: "12px",
            lineHeight: "1.3"
        }
    };

    const learnBullets = [
        "Craft contextually strong prompts",
        "Solve real-world tasks using LLMs",
        "Build Prompt Libraries for enterprises"
    ];

    const modules = [
        "Introduction to LLMs & Prompting Paradigm",
        "Prompt Structures: Zero-shot, Few-shot, CoT",
        "Task-Specific Prompting (Content, Coding, Legal)",
        "Prompt Debugging & Optimization Strategies",
        "Automating Workflows with Prompt Templates"
    ];

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.hero}>
                    <div style={{display: "grid", gap: 8}}>
                        <div style={styles.heroTitle}>Prompt Engineering & LLM Mastery</div>
                        <div style={styles.heroCaption}>
                            Master the art of designing effective prompts to maximize the performance of Large Language Models like GPT, Claude, and Gemini.
                        </div>
                        <div>
                            <button style={styles.heroCta}>Enroll Now</button>
                        </div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop"
                        alt="Instructor"
                        style={styles.heroRightImage}
                    />
                </div>

                <div style={styles.heroBadges}>
                    <div style={styles.badge}><ClockIcon color="#ffffff" /><div>20 hours / 2 weeks</div></div>
                    <div style={styles.badge}><BarChartIcon color="#ffffff" /><div>Beginner to Intermediate</div></div>
                    <div style={styles.badge}><LaptopIcon color="#ffffff" /><div>Basic Computer Literacy + English</div></div>
                    <div style={styles.badge}><BadgeAwardIcon color="#ffffff" /><div>Certified Prompt Engineer (CPE)</div></div>
                </div>

                <section style={styles.section}>
                    <div style={styles.sectionTitle}>What You’ll Learn</div>
                    <ul style={styles.bulletList}>
                        {learnBullets.map((point, index) => (
                            <li key={index} style={styles.bulletItem}>
                                <CheckIcon />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section style={styles.section}>
                    <div style={styles.sectionTitle}>Course Modules</div>
                    <div style={styles.modules}>
                        {modules.map((text, idx) => (
                            <div key={idx} style={styles.moduleItem}>
                                <div style={styles.moduleIndex}>{idx + 1}</div>
                                <div>{text}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <div style={styles.highlights}>
                    <div style={styles.highlightItem}>
                        <HandsOnIcon />
                        <div>Hands-on Prompting Assignments + Final Case Study</div>
                    </div>
                    <div style={styles.highlightItem}>
                        <AwardIcon />
                        <div>Certified Prompt Engineer (CPE)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
