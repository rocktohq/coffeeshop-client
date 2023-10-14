import { useLoaderData } from "react-router-dom"
import CoffeeCard from "../Shared/CoffeeCard/CoffeeCard";
import toast from "react-hot-toast";
import { useState } from "react";

const Dashboard = () => {

  const loadedCoffeeList = useLoaderData();
  const [coffeeList, setCoffeeList] = useState(loadedCoffeeList);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success("Item deleted successfully");
          const newCoffeeList = coffeeList.filter(coffee => coffee._id !== id);
          setCoffeeList(newCoffeeList);
        }
        else {
          toast.error("Something went wrong");
          console.log(data);
        }
      })
  }

  return (
    <section>
      <div className="bg-base-200 p-5 rounded-md shadow-md">
        <p>
          <span>Home &#187; Dashboard</span>
        </p>
      </div>
      {
        coffeeList.length > 0
          ? <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {
              coffeeList.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete}></CoffeeCard>)
            }
          </div>
          : <h2 className="text-2xl font-bold text-center mt-12">No Data Found!</h2>
      }
    </section >
  )
}

export default Dashboard
