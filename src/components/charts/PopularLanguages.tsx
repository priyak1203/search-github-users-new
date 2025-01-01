import { Repository } from '@/types';
import { calculateStarsPerLanguage } from '@/utils';
import { ChartConfig } from '@/components/ui/chart';
import CustomBarChart from './CustomBarChart';

function PopularLanguages({ repositories }: { repositories: Repository[] }) {
  // Calculate most starred languages and return array of {language: string, stars: number}
  const mostStarredLangs = calculateStarsPerLanguage(repositories);

  // Configuration for the chart's styling and labels
  const chartConfig = {
    language: {
      label: 'Language',
      color: '#4a0447', // Purple color for the bars
    },
  } satisfies ChartConfig;

  return (
    <CustomBarChart
      title="most stars per language"
      chartConfig={chartConfig}
      data={mostStarredLangs}
      XaxisDataKey="language"
      YaxisDataKey="stars"
    />
  );
}

export default PopularLanguages;
