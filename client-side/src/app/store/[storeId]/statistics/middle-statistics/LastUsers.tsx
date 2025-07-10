import { formatPrice } from '@/lib/string/format-price'
import Image from 'next/image'

import { ILastUsers } from '@/app/shared/types/statistics.interface'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface LastUsersProps {
	data: ILastUsers[]
}

export const LastUsers = ({ data }: LastUsersProps) => {
	return (
		<Card className='col-span-1 lg:col-span-3'>
			<CardHeader className='flex flex-col items-stretch space-y-0 border-b'>
				<CardTitle className='text-xl font-medium tracking-[0.1px] line-clamp-1'>
					Прибыль
				</CardTitle>
			</CardHeader>
			<CardContent>
				{data.length ? (
					data.map(user => (
						<div className='flex items-center mt-5'>
							<Image
								className='rounded-full'
								src={user.picture}
								alt={user.name}
								width={40}
								height={40}
							/>
							<div className='ml-4 space-y-1 text-sm text-muted-foreground'>
								<p className='leading-none text-black font-medium'>
									{user.name}
								</p>
								<p>{user.email}</p>
							</div>
							<div className='ml-auto font-medium'>
								+{formatPrice(user.total)}
							</div>
						</div>
					))
				) : (
					<div>{'У этого магазина нет покупателей :('}</div>
				)}
			</CardContent>
		</Card>
	)
}
