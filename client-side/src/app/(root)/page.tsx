import { Home } from './Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Ваш шопинг, ваше удовольствие - все в одном месте!'
}

export default function HomePage() {
	return <Home />
}
