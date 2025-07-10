'use client'

import { MainStatistics } from './statistics/main-statistics/MainStatistics'
import { MiddleStatistics } from './statistics/middle-statistics/MiddleStatistics'

import { Heading } from '@/components/ui/Heading'

export const Store = () => {
	return (
		<div className='p-6'>
			<Heading title='Статистика' />
			<MainStatistics />
			<MiddleStatistics />
		</div>
	)
}
