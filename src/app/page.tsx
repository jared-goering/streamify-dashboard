// src/app/page.tsx
'use client';

import React from 'react';
import { MetricsCard } from './components/MetricsCard';
import { UserGrowthChart } from './components/UserGrowthChart';
import { RevenuePieChart } from './components/RevenuePieChart';
import { TopSongsBarChart } from './components/TopSongsBarChart';
import { EngagementMetricsChart } from './components/EngagementMetricsChart';
import { StreamsTable } from './components/StreamsTable';
import { ThemeToggle } from './components/ThemeToggle'; // Import the ThemeToggle component

import { userGrowthData } from '@/data/userGrowthData';
import { revenueData } from '@/data/revenueData';
import { topSongsData } from '@/data/topSongsData';
import { streamData } from '@/data/streamData';
import { engagementMetricsData } from '@/data/engagementMetricsData';

export default function Dashboard() {
  // Mock metrics data
  const metrics = {
    totalUsers: 12345,
    activeUsers: 6789,
    totalStreams: 23456,
    revenue: '$1,000,000',
    topArtist: 'The Weeknd',
  };

  const handleRevenueSegmentClick = (source: string) => {
    // Implement filtering logic for the data table
    console.log(`Filtering data for revenue source: ${source}`);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Streamify Dashboard
        </h1>
        <div className="mt-4 md:mt-0">
          <ThemeToggle />
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricsCard title="Total Users" value={metrics.totalUsers} />
        <MetricsCard title="Active Users" value={metrics.activeUsers} />
        <MetricsCard title="Total Streams" value={metrics.totalStreams} />
        <MetricsCard title="Revenue" value={metrics.revenue} />
        <MetricsCard title="Top Artist" value={metrics.topArtist} />
      </div>

      {/* First Row of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* User Growth Chart */}

          <UserGrowthChart data={userGrowthData} />


        {/* Revenue Distribution Pie Chart */}

          <RevenuePieChart
            data={revenueData}
            onClickSegment={handleRevenueSegmentClick}
          />

        {/* Engagement Metrics Chart */}

          <EngagementMetricsChart data={engagementMetricsData} />

      </div>

      {/* Second Row: Top Songs and Streams Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top 5 Streamed Songs Bar Chart */}
          <TopSongsBarChart data={topSongsData} />


        {/* Streams Table */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Recent Streams
          </h2>
          <StreamsTable data={streamData} />
        </div>
      </div>
    </div>
  );
}