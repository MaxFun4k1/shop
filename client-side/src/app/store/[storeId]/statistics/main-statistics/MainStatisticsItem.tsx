import { getIcon } from './statistics.util'
import { formatPrice } from '@/lib/string/format-price'
import CountUp from 'react-countup'

import { IMainStatistics } from '@/app/shared/types/statistics.interface'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface MainStatisticsItemProps {
	item: IMainStatistics
}

export const MainStatisticsItem = ({ item }: MainStatisticsItemProps) => {
	const Icon = getIcon(item.id)

	return (
		<Card className='drop-shadow-sm p-0 '>
			<CardHeader className='p-4 pb-2 flex flex-row items-center justify-between space-y-0'>
				<CardTitle className='text-sm font-medium text-slate-500'>
					{item.name}
				</CardTitle>
				<Icon className='size-5' />
			</CardHeader>
			<CardContent className='px-4 py-2 pt-1'>
				<h2 className='text-2xl font-bold'>
					{item.id !== 1 ? (
						<CountUp end={item.value} />
					) : (
						<CountUp end={item.value} formattingFn={formatPrice} />
					)}
				</h2>
			</CardContent>
		</Card>
	)
}
