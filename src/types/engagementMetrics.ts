// src/types/engagementMetrics.ts
export interface EngagementMetricsData {
    date: string; // e.g., '2023-01'
    averageSessionDuration: number; // In minutes
    retentionRate: number; // Percentage (0 to 100)
    churnRate: number; // Percentage (0 to 100)
  }