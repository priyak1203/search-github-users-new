import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type CustomBarChartProps = {
  title: string;
  chartConfig: ChartConfig;
  data: any;
  XaxisDataKey: string;
  YaxisDataKey: string;
};

function CustomBarChart({
  title,
  chartConfig,
  data,
  XaxisDataKey,
  YaxisDataKey,
}: CustomBarChartProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4 capitalize">
        {title}
      </h2>
      {/* ChartContainer: Custom wrapper component that handles responsive sizing and theme */}
      <ChartContainer config={chartConfig} className="h-100 w-full">
        {/* BarChart: Main chart component from recharts */}
        {/* accessibilityLayer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={data}>
          {/* CartesianGrid: Adds horizontal guide lines (vertical disabled) */}
          <CartesianGrid vertical={false} />
          {/* XAxis configures the horizontal axis  */}
          {/* tickFormatter truncates long repository names to 10 characters */}
          <XAxis
            dataKey={XaxisDataKey}
            tickLine={true} // Shows small lines at each tick mark
            tickMargin={10} // Space between tick line and label
            tickFormatter={(value) => value.slice(0, 10)}
          />

          {/* YAxis: Vertical axis showing star counts */}
          <YAxis dataKey={YaxisDataKey} />

          {/* ChartTooltip: Custom tooltip component that appears on hover */}
          {/* ChartTooltipContent: Renders the actual content inside the tooltip */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Bar: The actual bar elements of the chart */}
          {/* fill uses CSS variable for consistent theming */}
          {/* radius adds rounded corners to the bars */}
          <Bar
            dataKey={YaxisDataKey}
            fill={`var(--color-${XaxisDataKey})`}
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export default CustomBarChart;
