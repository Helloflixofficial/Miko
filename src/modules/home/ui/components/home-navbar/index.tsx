import { SidebarTrigger } from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from './search-bar';

const HomeNavbar = () => {
    return (
        <nav className='flex items-center fixed top-0 left-0 right-0 h-16 px-2 pr-5 bg-[#754E1A] z-50'>
            <div className='flex item-center gap-4 w-full'>
                <div className='flex items-center flex-shrink-0'>
                    <SidebarTrigger />
                    <Link href="/">
                        <div className='p-4 flex items-center gap-2'>
                            <Image src="/logo.svg" width={30} height={30} alt="Logo" />
                            <p className='text-xl font-semibold tracking-tight'>Firetube</p>
                        </div>
                    </Link>
                </div>
                {/* search bar is here */}
                <div className='flex-1 flex justify-center max-w-[720px]  '>
                    <Searchbar />

                </div>
            </div>
        </nav>
    )
}
export default HomeNavbar;