import { axiosWithAuth } from '@/api/api.interceptors'

import {
	IMainStatistics,
	IMiddleStatisctics
} from '@/app/shared/types/statistics.interface'

import { API_URL } from '@/config/api.config'

class StatisticService {
	async getMain(storeId: string) {
		const { data } = await axiosWithAuth<IMainStatistics[]>({
			url: API_URL.statistics(`/main/${storeId}`),
			method: 'GET'
		})

		return data
	}

	async getMiddle(storeId: string) {
		const { data } = await axiosWithAuth<IMiddleStatisctics>({
			url: API_URL.statistics(`/middle/${storeId}`),
			method: 'GET'
		})

		return data
	}
}

export const statisticService = new StatisticService()
