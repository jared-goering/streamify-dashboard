// src/components/MetricsCard.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface MetricsCardProps {
  title: string;
  value: string | number;
}

export function MetricsCard({ title, value }: MetricsCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}