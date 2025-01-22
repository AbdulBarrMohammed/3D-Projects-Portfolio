import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center
            justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">BM</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className='text-black hover:underline underline-offset-8 hover:decoration-[2px] transition-all duration-300 ease-in-out'>
                About
                </NavLink>
                <NavLink to="/projects" className='text-black hover:underline underline-offset-8 hover:decoration-[2px] transition-all duration-300 ease-in-out'>
                Projects
                </NavLink>
                <NavLink to="/contact" className='text-black hover:underline underline-offset-8 hover:decoration-[2px] transition-all duration-300 ease-in-out'>
                Contact
                </NavLink>

            </nav>


        </header>
    )
}

export default Navbar
