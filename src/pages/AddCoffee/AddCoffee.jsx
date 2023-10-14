import { Helmet, HelmetProvider } from "react-helmet-async"
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6"

const AddCoffee = () => {

  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffee = { name, chef, supplier, taste, category, details, photo };

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(coffee)
    })
      .then(res => res.json())
      .then(data => {

        if (data.insertedId) {
          toast.success("Coffee added successfully");
          form.reset();
        }
        else {
          toast.error("Something went wrong");
          console.log(data);
        }
      })
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Add a New Coffee</title>
      </Helmet>
      <section>
        <div className="bg-base-200 p-5 rounded-md shadow-md">
          <p>
            <span>Home &#187; Dashboard</span>
            <span> &#187; Add Coffee</span>
          </p>
        </div>
        <form onSubmit={handleAddCoffee} className="mt-5">
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Chef Name</span>
              </label>
              <input type="text" name="chef" placeholder="Chef Name" className="input input-bordered focus:outline-none w-full" />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Suppiler Name</span>
              </label>
              <input type="text" name="supplier" placeholder="Suppiler Name" className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input type="text" name="taste" placeholder="Taste" className="input input-bordered focus:outline-none w-full" />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input type="text" name="category" placeholder="Category" className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input type="text" name="details" placeholder="Details" className="input input-bordered focus:outline-none w-full" />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered focus:outline-none w-full" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white"><FaPlus />Add Coffee</button>
          </div>
        </form>
      </section>
    </HelmetProvider>
  )
}

export default AddCoffee
