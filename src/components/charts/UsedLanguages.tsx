import { Repository } from '@/types';
import { calculatePopularLanguages } from '@/utils';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Used Languages
      </h2>
      {/* ChartContainer handles responsive sizing and theme variables */}
      <ChartContainer config={chartConfig} className="h-100 w-full">
        {/* BarChart is the main container for the bar chart visualization */}
        {/* accessability Layer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={popularLanguages}>
          {/* CartesianGrid adds horizontal guide lines */}
          <CartesianGrid vertical={false} />

          {/* XAxis configures the horizontal axis showing language names  */}
          <XAxis
            dataKey="language"
            tickLine={false} // Removes tick marks
            tickMargin={10} // Adds spacing between labels and axis
          />

          {/* YAxis configures the vertical axis showing count values */}
          <YAxis dataKey="count" />

          {/* ChartTooltip shows details when hovering over bars */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Bar component defines how each data point is rendered */}
          {/* Uses CSS variables for color and adds rounded corners */}
          <Bar dataKey="count" fill="var(--color-language)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export default UsedLanguages;
