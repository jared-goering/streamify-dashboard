// src/components/EngagementMetricsChart.tsx
"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { EngagementMetricsData } from "@/types/engagementMetrics";
import { Checkbox } from "@/components/ui/checkbox"; // Using Shadcn's Checkbox

const chartConfig = {
  averageSessionDuration: {
    label: "Avg. Session Duration (min)",
    color: "hsl(var(--chart-1))",
  },
  retentionRate: {
    label: "Retention Rate (%)",
    color: "hsl(var(--chart-2))",
  },
  churnRate: {
    label: "Churn Rate (%)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

interface EngagementMetricsChartProps {
  data: EngagementMetricsData[];
}

export function EngagementMetricsChart({ data }: EngagementMetricsChartProps) {
  // State variables to control visibility
  const [showAverageSessionDuration, setShowAverageSessionDuration] =
    useState(true);
  const [showRetentionRate, setShowRetentionRate] = useState(true);
  const [showChurnRate, setShowChurnRate] = useState(true);

  // Toggle function for legend interaction
  const toggleMetric = (metricKey: string) => {
    if (metricKey === "averageSessionDuration") {
      setShowAverageSessionDuration((prev) => !prev);
    } else if (metricKey === "retentionRate") {
      setShowRetentionRate((prev) => !prev);
    } else if (metricKey === "churnRate") {
      setShowChurnRate((prev) => !prev);
    }
  };

  return (
    <Card>
      {/* Updated CardHeader with Flex Layout */}
      <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <CardTitle>User Engagement Metrics</CardTitle>
          <CardDescription>Over Time</CardDescription>
        </div>
        {/* Checkbox Controls Positioned to the Right */}
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
          {/* Average Session Duration Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="averageSessionDuration"
              checked={showAverageSessionDuration}
              onCheckedChange={(checked) =>
                setShowAverageSessionDuration(checked as boolean)
              }
              className="h-4 w-4 text-[hsl(var(--chart-1))]" // Apply color
            />
            <label
              htmlFor="averageSessionDuration"
              className="text-sm font-medium text-[hsl(var(--chart-1))]"
            >
              {chartConfig.averageSessionDuration.label}
            </label>
          </div>
          {/* Retention Rate Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="retentionRate"
              checked={showRetentionRate}
              onCheckedChange={(checked) =>
                setShowRetentionRate(checked as boolean)
              }
              className="h-4 w-4 text-[hsl(var(--chart-2))]" // Apply color
            />
            <label
              htmlFor="retentionRate"
              className="text-sm font-medium text-[hsl(var(--chart-2))]"
            >
              {chartConfig.retentionRate.label}
            </label>
          </div>
          {/* Churn Rate Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="churnRate"
              checked={showChurnRate}
              onCheckedChange={(checked) =>
                setShowChurnRate(checked as boolean)
              }
              className="h-4 w-4 text-[hsl(var(--chart-3))]" // Apply color
            />
            <label
              htmlFor="churnRate"
              className="text-sm font-medium text-[hsl(var(--chart-3))]"
            >
              {chartConfig.churnRate.label}
            </label>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Chart Container */}
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                className="text-xs"
              />
              {/* Left Y-Axis for Average Session Duration */}
              {showAverageSessionDuration && (
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 10 }}
                />
              )}
              {/* Right Y-Axis for Retention and Churn Rates */}
              {(showRetentionRate || showChurnRate) && (
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fontSize: 10 }}
                />
              )}
              <Tooltip content={<ChartTooltipContent />} />
              <Legend
                onClick={(e) => {
                  if (e && e.dataKey) {
                    toggleMetric(e.dataKey.toString());
                  }
                }}
                wrapperStyle={{ fontSize: "10px" }}
              />
              {/* Lines */}
              {showAverageSessionDuration && (
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="averageSessionDuration"
                  name={chartConfig.averageSessionDuration.label}
                  stroke={chartConfig.averageSessionDuration.color}
                  strokeWidth={2}
                  dot={false}
                />
              )}
              {showRetentionRate && (
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="retentionRate"
                  name={chartConfig.retentionRate.label}
                  stroke={chartConfig.retentionRate.color}
                  strokeWidth={2}
                  dot={false}
                />
              )}
              {showChurnRate && (
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="churnRate"
                  name={chartConfig.churnRate.label}
                  stroke={chartConfig.churnRate.color}
                  strokeWidth={2}
                  dot={false}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}