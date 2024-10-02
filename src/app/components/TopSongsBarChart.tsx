// src/components/TopSongsBarChart.tsx
"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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

interface TopSongData {
  song: string;
  streams: number;
}

const chartConfig = {
  streams: {
    label: "Streams",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface TopSongsBarChartProps {
  data: TopSongData[];
}

export function TopSongsBarChart({ data }: TopSongsBarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Streamed Songs</CardTitle>
        <CardDescription>Past 30 Days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="song"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar
              dataKey="streams"
              fill="var(--color-streams)"
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}