import { type Repository } from '@/types';
import { calculateMostStarredRepos } from '@/utils';
import { ChartConfig } from '@/components/ui/chart';
import CustomPieChart from './CustomPieChart';

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

  return (
    <CustomPieChart
      title="popular repos"
      chartConfig={chartConfig}
      chartData={chartData}
      nameKey="repo"
      dataKey="stars"
    />
  );
}

export default PopularReposPie;
