import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <div className='border-b-2 border-b-orange-500 py-6'>
        <div className='container flex justify-between items-center mx-auto'>
            <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
                PuEats.com
            </Link>
            <div className='md:hidden'>
              <MobileNav />
            </div>
        </div>
    </div>
  )
}
