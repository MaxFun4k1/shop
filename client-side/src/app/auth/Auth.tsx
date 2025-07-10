'use client'

import { AuthFields } from './AuthFields'
import { Social } from './Social'
import { useAuthForm } from './useAuthForm'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Form } from '@/components/ui/form-elements/form'

export const Auth = () => {
	const [isReq, setIsReq] = useState(false)

	const { onSubmit, form, isPending } = useAuthForm(isReq)

	return (
		<div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
			<div className='h-full bg-blue-600 hidden lg:flex items-center justify-center'>
				<Image
					src='/images/auth.svg'
					alt='MaxShop auth'
					width={100}
					height={100}
				/>
			</div>
			<div className='h-full flex  flex-col items-center justify-center'>
				<Card className='border-none p-6 flex flex-col items-center justify-center w-[380px]'>
					<CardHeader className='text-center w-full'>
						<CardTitle className='pb-1 text-3xl font-bold'>
							{isReq ? 'Создать в аккаунт' : 'Войти в аккаунт'}
						</CardTitle>
						<CardDescription>
							Войдите или создайте учетную запись, чтобы оформлять
							покупки!
						</CardDescription>
					</CardHeader>
					<CardContent className='p-0 w-full'>
						<Form {...form}>
							<form
								className='space-y-5'
								onSubmit={form.handleSubmit(onSubmit)}
							>
								{/* Auth Fields */}
								<AuthFields
									form={form}
									isPending={isPending}
									isReq={isReq}
								/>

								<Button className='w-full' disabled={isPending}>
									Продолжить
								</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className='p-0 mt-4 text-sm text-muted-foreground'>
						{isReq ? 'Уже есть аккаунт?' : 'Нет еще аккаунта?'}
						<button
							className='cursor-pointer ml-1 text-sky-600'
							onClick={() => setIsReq(!isReq)}
						>
							{isReq ? 'Войти' : 'Создать'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
