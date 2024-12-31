import { type Repository } from '@/types';
import { calculateMostForkedRepos } from '@/utils';
import { ChartConfig } from '../ui/chart';
import CustomPieChart from './CustomPieChart';

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
  } satisfies ChartConfig;

  return (
    <CustomPieChart
      title="forked repos"
      chartConfig={chartConfig}
      chartData={chartData}
      nameKey="repo"
      dataKey="count"
    />
  );
}

export default ForkedReposPie;
