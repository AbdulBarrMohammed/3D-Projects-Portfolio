import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center
            justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">BM</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className='text-black hover:font-bold'>
                About
                </NavLink>
                <NavLink to="/projects" className='text-black hover:font-bold'>
                Projects
                </NavLink>
                <NavLink to="/contact" className='text-black hover:font-bold'>
                Contact
                </NavLink>

            </nav>


        </header>
    )
}

export default Navbar
