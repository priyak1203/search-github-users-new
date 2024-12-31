import { type Repository } from '@/types';
import { calculateMostForkedRepos } from '@/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { Pie, PieChart } from 'recharts';

function ForkedReposPie({ repositories }: { repositories: Repository[] }) {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  const chartData = mostForkedRepos.map((repo, index) => {
    return { ...repo, fill: `var(--color-${index})` };
  });

  const chartConfig = {
    count: {
      label: 'Repo',
    },
    '0': {
      color: '#125427',
    },
    '1': {
      color: '#1DC355',
    },
    '2': {
      color: '#098637',
    },
    '3': {
      color: '#113B1D',
    },
    '4': {
      color: '#0E2014',
    },
  };

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
        <CardTitle className="text-xl">Forked Repos</CardTitle>
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

export default ForkedReposPie;
