import { type Repository } from '@/types';
import { calculatePopularLanguages } from '@/utils';
import { ChartConfig } from '@/components/ui/chart';
import CustomPieChart from './CustomPieChart';

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

  return (
    <CustomPieChart
      title="used Languages"
      chartConfig={chartConfig}
      chartData={chartData}
      nameKey="language"
      dataKey="count"
    />
  );
}

export default UsedLanguagesPie;
