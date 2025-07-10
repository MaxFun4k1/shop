import { Dashboard } from './Dashboard'
import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return <Dashboard />
}
