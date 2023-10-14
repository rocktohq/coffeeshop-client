import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {

  const coffeeList = useLoaderData();

  return (
    <section>
      {
        coffeeList.length > 0
          ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
              coffeeList.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
          </div>
          : <h2 className="text-2xl font-bold text-center mt-12">No Data Found!</h2>
      }
    </section >
  )
}

export default Home
