import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

  const navLinks = <>
    <li className="hover:text-secondary"><NavLink to="/">Home</NavLink></li>
    <li className="hover:text-secondary"><NavLink to="/dashboard">Dashboard</NavLink></li>
  </>;

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-1">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-3xl font-bold hidden lg:block">Expresso<span className="text-secondary">Emporium</span></Link>
        <Link className="text-3xl font-bold lg:hidden">E<span className="text-secondary">E</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-2 text-lg space-x-2">
          {
            navLinks
          }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="join hidden lg:flex">
          <input className="input input-sm input-bordered join-item focus:outline-none" placeholder="Search coffee..." />
          <button className="btn btn-sm btn-secondary join-item rounded-r-full">Search</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
