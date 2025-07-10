import { cn } from '@/lib/utils'
import { FC } from 'react'

interface HeadingProps {
	title: string
	desciption?: string
	className?: string
}

export const Heading: FC<HeadingProps> = ({ title, desciption, className }) => {
	return (
		<div className='space-y-1'>
			<h2 className={cn('text-2xl fonr-medium', className)}>{title}</h2>
			{desciption && (
				<p className='text-sm text-muted-foreground'>{desciption}</p>
			)}
		</div>
	)
}
