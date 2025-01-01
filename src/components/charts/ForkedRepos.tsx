import { type Repository } from '@/types';
import { calculateMostForkedRepos } from '@/utils';
import { ChartConfig } from '@/components/ui/chart';
import CustomBarChart from './CustomBarChart';

function ForkedRepos({ repositories }: { repositories: Repository[] }) {
  // Calculate most forked repositories and return array of {repo: string, count: number}
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  // Define chart configuration for styling and labels
  const chartConfig = {
    repo: {
      label: 'Repository',
      color: '#125427',
    },
  } satisfies ChartConfig;

  return (
    <CustomBarChart
      title="forked repos"
      chartConfig={chartConfig}
      data={mostForkedRepos}
      XaxisDataKey="repo"
      YaxisDataKey="count"
    />
  );
}

export default ForkedRepos;
