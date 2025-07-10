import { formatPrice } from '@/lib/string/format-price'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { IMonthlySales } from '@/app/shared/types/statistics.interface'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart'

const chartConfig = {
	value: {
		label: 'Прибыль',
		color: '#3B82F6'
	}
} satisfies ChartConfig

interface OverviewProps {
	data: IMonthlySales[]
}

export const Overview = ({ data }: OverviewProps) => {
	return (
		<Card className='col-span-1 lg:col-span-3 xl:col-span-4'>
			<CardHeader className='flex flex-col items-stretch space-y-0 border-b'>
				<CardTitle className='text-xl font-medium tracking-[0.1px] line-clamp-1'>
					Прибыль
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className='aspect-auto h-[310px] w-full'
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									labelFormatter={formatPrice}
									indicator='line'
								/>
							}
						/>
						<Area
							dataKey='value'
							type='natural'
							fill='var(--color-value)'
							stroke='var(--color-value)'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
