import { Outlet } from "react-router-dom"
import Header from './../components/Header/Header';
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-2xl mx-auto px-3">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  )
}

export default MainLayout
