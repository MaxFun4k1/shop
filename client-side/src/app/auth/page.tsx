import { Auth } from './Auth'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Авторизация'
}

export default function AuthPage() {
	return <Auth />
}
