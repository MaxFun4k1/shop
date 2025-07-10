import { Sidebar } from './Sidebar'
import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger className='lg:hidden pr-4 hover:opacity-75 transition cursor-pointer'>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className='p-0 bg-white'>
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}
