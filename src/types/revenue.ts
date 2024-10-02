// src/types/revenue.ts
export type RevenueSource = 'subscriptions' | 'ads' | 'others';

export interface RevenueData {
  source: RevenueSource;
  value: number;
}