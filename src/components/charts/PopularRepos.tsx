import { type Repository } from '@/types';
import { calculateMostStarredRepos } from '@/utils';
import { ChartConfig } from '@/components/ui/chart';
import CustomBarChart from './CustomBarChart';

function PopularRepos({ repositories }: { repositories: Repository[] }) {
  // Calculate most starred repositories and return array of {repo: string, stars: number}
  const mostStarred = calculateMostStarredRepos(repositories);

  // Configuration for the chart's styling and labels
  const chartConfig = {
    repo: {
      label: 'Repository',
      color: '#E21D48', // Red color for the bars
    },
  } satisfies ChartConfig;

  return (
    <CustomBarChart
      title="popular repos"
      chartConfig={chartConfig}
      data={mostStarred}
      XaxisDataKey="repo"
      YaxisDataKey="stars"
    />
  );
}

export default PopularRepos;
