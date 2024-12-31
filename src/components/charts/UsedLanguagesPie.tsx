import { type Repository } from '@/types';
import { calculatePopularLanguages } from '@/utils';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function UsedLanguagesPie({ repositories }: { repositories: Repository[] }) {
  const popularLanguages = calculatePopularLanguages(repositories);

  const chartData = popularLanguages.map((lang, index) => {
    return { ...lang, fill: `var(--color-${index})` };
  });

  const chartConfig = {
    count: {
      label: 'Language',
    },
    '0': {
      color: '#2563EB',
    },
    '1': {
      color: '#60A8FB',
    },
    '2': {
      color: '#3B86F7',
    },
    '3': {
      color: '#90C7FE',
    },
    '4': {
      color: '#BEDCFE',
    },
  } satisfies ChartConfig;

  // Percentage label
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl">Used Languages</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="language"
              labelLine={false}
              label={renderCustomizedLabel}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default UsedLanguagesPie;
