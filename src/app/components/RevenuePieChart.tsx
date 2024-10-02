// src/components/RevenuePieChart.tsx
"use client";

import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Label } from "recharts";
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
  ChartTooltipContent,
} from "@/components/ui/chart";

// Define the chart configuration with specific keys
const chartConfig = {
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  ads: {
    label: "Advertisements",
    color: "hsl(var(--chart-2))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

// Create a type for RevenueSource based on the keys of chartConfig
export type RevenueSource = keyof typeof chartConfig; // 'subscriptions' | 'ads' | 'others'

// Define the RevenueData interface using RevenueSource
export interface RevenueData {
  source: RevenueSource;
  value: number;
}

interface RevenuePieChartProps {
  data: RevenueData[];
  onClickSegment?: (source: RevenueSource) => void;
}

export function RevenuePieChart({
  data,
  onClickSegment,
}: RevenuePieChartProps) {
  const totalRevenue = useMemo(
    () => data.reduce((acc, curr) => acc + curr.value, 0),
    [data]
  );

  const handleClick = (entry: any) => {
    if (onClickSegment) {
      onClickSegment(entry.payload.source);
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>Current Fiscal Year</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <Tooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="source"
              innerRadius={60}
              strokeWidth={5}
              onClick={handleClick}
            >
              {data.map((entry, index) => {
                const color = chartConfig[entry.source]?.color || "#8884d8";
                return <Cell key={`cell-${index}`} fill={color} />;
              })}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          ${totalRevenue.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Revenue
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconType="circle"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}