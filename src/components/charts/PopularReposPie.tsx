import { type Repository } from '@/types';
import { calculateMostStarredRepos } from '@/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart } from 'recharts';

function PopularReposPie({ repositories }: { repositories: Repository[] }) {
  const mostStarredRepos = calculateMostStarredRepos(repositories);

  const chartData = mostStarredRepos.map((repo, index) => {
    return { ...repo, fill: `var(--color-${index})` };
  });

  const chartConfig = {
    stars: {
      label: 'Stars',
    },
    '0': {
      color: '#E21D48',
    },
    '1': {
      color: '#FBD5DA',
    },
    '2': {
      color: '#F17E92',
    },
    '3': {
      color: '#F7ABB6',
    },
    '4': {
      color: '#E9536F',
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
        <CardTitle className="text-xl">Popular Repos</CardTitle>
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
              dataKey="stars"
              nameKey="repo"
              labelLine={false}
              label={renderCustomizedLabel}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default PopularReposPie;
