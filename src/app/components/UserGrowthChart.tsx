// src/components/UserGrowthChart.tsx
"use client";

import React, { useState, useMemo } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Import Shadcn's Select components

interface UserGrowthData {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

const chartConfig = {
  totalUsers: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  activeUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface UserGrowthChartProps {
  data: UserGrowthData[];
}

type TimeFrame = "3m" | "6m" | "12m";

const timeFrameOptions: { label: string; value: TimeFrame }[] = [
  { label: "Last 3 Months", value: "3m" },
  { label: "Last 6 Months", value: "6m" },
  { label: "Last 12 Months", value: "12m" },
];

export function UserGrowthChart({ data }: UserGrowthChartProps) {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("12m");

  // Helper function to get the last N months of data
  const getLastNMonthsData = (data: UserGrowthData[], n: number) => {
    return data.slice(-n);
  };

  // Memoize the filtered data for performance
  const filteredData = useMemo(() => {
    let monthsToShow = 12; // Default to 12 months
    if (timeFrame === "3m") monthsToShow = 3;
    else if (timeFrame === "6m") monthsToShow = 6;

    return getLastNMonthsData(data, monthsToShow);
  }, [data, timeFrame]);

  // Helper function to get the description text based on time frame
  const getDescription = (tf: TimeFrame) => {
    switch (tf) {
      case "3m":
        return "Past 3 Months";
      case "6m":
        return "Past 6 Months";
      case "12m":
      default:
        return "Past 12 Months";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <CardTitle>User Growth</CardTitle>
          <CardDescription>{getDescription(timeFrame)}</CardDescription>
        </div>
        <div className="w-full sm:w-auto">
          <Select onValueChange={(value) => setTimeFrame(value as TimeFrame)} defaultValue="12m">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select Time Frame" />
            </SelectTrigger>
            <SelectContent>
              {timeFrameOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              type="monotone"
              dataKey="totalUsers"
              stroke="var(--color-totalUsers)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="var(--color-activeUsers)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}