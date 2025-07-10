'use client'

import { StoreSwitcher } from './StoreSwitcher'
import Image from 'next/image'
import Link from 'next/link'

import { Loader } from '@/components/ui/Loader'

import { DASHBOARD_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import { MobileSidebar } from '../sidebar/MobileSidebar'

export const Header = () => {
	const { user, isLoading } = useProfile()

	return (
		<div className='p-6 gap-x-4 h-full flex items-center bg-white border-b'>
			<MobileSidebar />
			<div className='flex items-center gap-x-4 ml-auto'>
				{isLoading ? (
					<Loader size='sm' />
				) : (
					user && (
						<>
							<StoreSwitcher items={user.stores} />
							<Link href={DASHBOARD_URL.home()}>
								<Image
									src={user.picture}
									alt={user.name}
									width={42}
									height={42}
									className='rounded-full'
								/>
							</Link>
						</>
					)
				)}
			</div>
		</div>
	)
}
