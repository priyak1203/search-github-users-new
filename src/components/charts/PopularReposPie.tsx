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

  const renderCustomizedLabel = ({
    cx,
    cy,
    x,
    y,
    payload,
    textAnchor,
  }: any) => {
    return (
      <text cx={cx} cy={cy} x={x} y={y} textAnchor={textAnchor} fill="#E21D48">
        {payload.stars}
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
