import { Link, NavLink } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md"
import { RxUpdate } from "react-icons/rx"
import { AiOutlineDashboard } from "react-icons/ai"


const DashboardAside = () => {

  const asideLinks = <>
    <li className="divider">Dashboard</li>
    <li className="flex items-center gap-1 text-gray-500"><AiOutlineDashboard /><Link to="/dashboard" className="hover:text-secondary">Dashboard</Link></li>
    <li className="flex items-center gap-1"><MdAddToPhotos /><NavLink to="/dashboard/addCoffee" className="hover:text-secondary">Add a new Coffee</NavLink></li>
    <li className="flex items-center gap-1"><RxUpdate /><Link className="hover:text-secondary">Update a Coffee</Link></li>
  </>;
  return (
    <ul className="space-y-2 text-lg font-medium">
      {
        asideLinks
      }
    </ul>
  )
}

export default DashboardAside
