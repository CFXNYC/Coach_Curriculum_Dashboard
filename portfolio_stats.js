// portfolio_stats.js — Club aggregate source of truth
// Represents rolled-up Salesforce + Weekly Self-Report data
// Club: SoHo | Pay Period: May 03, 2026

window.PORTFOLIO_STATS = {
  club: {
    name: "SoHo",
    totalClubs: 1,
    payPeriod: "May 03, 2026",
    payPeriodId: "may03"
  },

  // Aggregate KPIs
  activeCoaches: 30,
  atRiskCoaches: 7,
  atRiskOnWatch: 3,
  recurringClients: 214,
  totalActiveClients: 264,

  // Coach level distribution
  levelDistribution: {
    coach:   { count: 18, label: "PT – Coach",   pct: 60 },
    coachPlus: { count: 9,  label: "PT – Coach+", pct: 30 },
    coachX:  { count: 3,  label: "PT – Coach X", pct: 10 }
  },

  // Ramp stage distribution (ramping = within 90 days after onboarding)
  rampingCoaches: 12,
  rampDistribution: {
    "Month 3": { count: 2 },
    "Month 2": { count: 2 },
    "Week 4":  { count: 2 },
    "Week 3":  { count: 3 },
    "Week 2":  { count: 2 },
    "Week 1":  { count: 1 }
  },

  // Club Health Score (weighted avg of all coach scores)
  clubHealthScore: 72,
  clubHealthStatus: "Building",
  clubHealthMessage: "Keep building momentum to reach Great.",

  // Recurring client rate
  recurringRate: 81  // pct of total active clients who are recurring
};
