import { Outlet } from "react-router-dom"
import DashboardAside from "../components/DashboardAside/DashboardAside"

const DashboardLayout = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-10 my-10">
      <aside className="lg:col-span-1 p-5 shadow-md rounded-md">
        <DashboardAside></DashboardAside>
      </aside>
      <div className="lg:col-span-3 shadow-md p-5 rounded-md">
        <Outlet></Outlet>
      </div>
    </section>
  )
}

export default DashboardLayout
