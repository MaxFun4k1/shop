import { Navigation } from './navigation/Navigation'

import { Logo } from '../../main-layout/header/logo/Logo'

export const Sidebar = () => {
	return (
		<div className='h-full flex flex-col bg-neutral-50 border-r overflow-y-auto pt-4 px-5'>
			<Logo />
			<Navigation />
		</div>
	)
}
