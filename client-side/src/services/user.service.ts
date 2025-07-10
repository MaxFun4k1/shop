import { axiosWithAuth } from '@/api/api.interceptors'

import { IUser } from '@/app/shared/types/user.interface'

import { API_URL } from '@/config/api.config'

class UserService {
	async getProfile() {
		const { data } = await axiosWithAuth<IUser>({
			url: API_URL.users(`/profile`),
			method: 'GET'
		})

		return data
	}

	async toggleFavoorite(productId: string) {
		return axiosWithAuth<IUser>({
			url: API_URL.users(`/profile/favorites/${productId}`),
			method: 'PATCH'
		})
	}
}

export const userService = new UserService()
