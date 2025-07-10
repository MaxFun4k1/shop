'use client'

import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/button'

import { SERVER_URL } from '@/config/api.config'

export const Social = () => {
	const router = useRouter()
	return (
		<div className='space-y-3 w-full mt-5'>
			<Button
				variant='outline'
				className='w-full'
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FcGoogle className='size-5 mr-2' />
				Продолжить через гугл
			</Button>
			<Button
				variant='outline'
				className='w-full'
				onClick={() => router.push(`${SERVER_URL}/auth/yandex`)}
			>
				<FaYandex className='size-5 mr-2' color='#FC3F1D' />
				Продолжить через Яндекс
			</Button>
		</div>
	)
}
