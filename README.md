This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Introduction

Welcome to Streamify Dashboard, a comprehensive analytics tool designed to provide insightful metrics for your streaming platform. Whether you’re tracking user growth, engagement metrics, revenue distribution, or top-performing songs, Streamify Dashboard offers a user-friendly interface to visualize and interpret your data effectively.

# Features

	•	Metrics Cards: Quick overview of key statistics like Total Users, Active Users, Total Streams, Revenue, and Top Artist.
	•	User Growth Chart: Visual representation of user growth over the past 12 months with customizable time frames.
	•	Revenue Distribution Pie Chart: Breakdown of revenue sources with interactive segments.
	•	Engagement Metrics Chart: Monitor user engagement through metrics like Average Session Duration, Retention Rate, and Churn Rate.
	•	Top Songs Bar Chart: Highlight your top 5 streamed songs.
	•	Streams Table: Detailed view of recent streams.
	•	Light/Dark Mode Toggle: Seamlessly switch between light and dark themes for better accessibility and user experience.

# Technologies Used

	•	Next.js: React framework for server-rendered applications.
	•	React: JavaScript library for building user interfaces.
	•	TypeScript: Superset of JavaScript for static typing.
	•	Tailwind CSS: Utility-first CSS framework for rapid UI development.
	•	Shadcn UI: Tailwind CSS-based component library for consistent styling.
	•	Recharts: Charting library built on React components.
	•	Next-Themes: Manage light and dark themes in Next.js.

#Thought Process

Building the Streamify Dashboard involved several key considerations to ensure a balance between functionality, performance, and user experience:

	1.	User-Centric Design:
	•	Prioritized ease of use by organizing metrics into intuitive cards and charts.
	•	Implemented responsive design to ensure accessibility across devices.
	2.	Scalability:
	•	Chose Next.js for its server-side rendering capabilities, enhancing performance and SEO.
	•	Utilized TypeScript to enforce type safety, reducing bugs and improving maintainability.
	3.	Consistent Styling:
	•	Adopted Tailwind CSS combined with Shadcn UI to maintain a consistent and customizable design language.
	•	Integrated Recharts for dynamic and interactive data visualization.
	4.	Theming:
	•	Incorporated a Light/Dark mode toggle using next-themes, catering to user preferences and enhancing accessibility.
	5.	Modular Architecture:
	•	Developed reusable components (e.g., MetricsCard, UserGrowthChart) to promote code reusability and simplify future enhancements.

