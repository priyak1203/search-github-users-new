import { Repository } from '@/types';
import { calculatePopularLanguages } from '@/utils';
import { ChartConfig } from '@/components/ui/chart';

import CustomBarChart from './CustomBarChart';

function UsedLanguages({ respositories }: { respositories: Repository[] }) {
  // Calculate popular languages
  // [{language: string, count: number}]
  const popularLanguages = calculatePopularLanguages(respositories);

  // Configuration for the chart's styling and labels
  // color sets the color of the bars
  const chartConfig = {
    language: {
      label: 'Language',
      color: '#2563EB',
    },
  } satisfies ChartConfig;

  return (
    <CustomBarChart
      title="used languages"
      chartConfig={chartConfig}
      data={popularLanguages}
      XaxisDataKey="language"
      YaxisDataKey="count"
    />
  );
}

export default UsedLanguages;
