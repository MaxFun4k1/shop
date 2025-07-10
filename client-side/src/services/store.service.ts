import { axiosWithAuth } from "@/api/api.interceptors"
import { IStore, IStoreCreate } from "@/app/shared/types/store.interface"
import { API_URL } from "@/config/api.config"

class StoreService {
	async getById(id: string) {
		const { data } = await axiosWithAuth<IStore>({
			url: API_URL.stores(`/by-id/${id}`),
			method: 'GET', 
		})

		return data
	}

	async create(data: IStoreCreate) {
		const { data: createdStore } = await axiosWithAuth<IStore>({
			url: API_URL.stores(``),
			method: 'POST', 
			data
		})

		return createdStore
	}

	async update(id: string) {
		const { data: updatedStore } = await axiosWithAuth<IStore>({
			url: API_URL.stores(`/${id}`),
			method: 'PUT',
		})

		return updatedStore
	}

	async delete(id: string) {
		const { data: deletedStore } = await axiosWithAuth<IStore>({
			url: API_URL.stores(`/${id}`),
			method: 'DELETE',
		})

		return deletedStore
	}
}

export const storeService = new StoreService()