import { Repository } from '@/types';
import { calculateStarsPerLanguage } from '@/utils';
import { ChartConfig } from '../ui/chart';
import CustomPieChart from './CustomPieChart';

function PopularLanguagesPie({ repositories }: { repositories: Repository[] }) {
  // Calculate most starred languages and return array of {language: string, stars: number}
  const mostStarredLangs = calculateStarsPerLanguage(repositories);

  const chartData = mostStarredLangs.map((lang, index) => {
    return { ...lang, fill: `var(--color-${index})` };
  });

  const chartConfig = {
    stars: {
      label: 'Language',
    },
    '0': {
      color: '#4a0447',
    },
    '1': {
      color: '#b332ac',
    },
    '2': {
      color: '#c561c0',
    },
    '3': {
      color: '#ef0be4',
    },
    '4': {
      color: '#7e0c79',
    },
  } satisfies ChartConfig;

  return (
    <CustomPieChart
      title="most stars per language"
      chartConfig={chartConfig}
      chartData={chartData}
      nameKey="language"
      dataKey="stars"
    />
  );
}

export default PopularLanguagesPie;
