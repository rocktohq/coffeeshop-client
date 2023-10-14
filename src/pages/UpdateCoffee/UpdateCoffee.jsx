import { Helmet, HelmetProvider } from "react-helmet-async"
import toast from "react-hot-toast";
import { GrUpdate } from "react-icons/gr"
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {

  const loadedCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = loadedCoffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();
    const form = event.target;

    const updatedName = form.name.value;
    const updatedChef = form.chef.value;
    const updatedSupplier = form.supplier.value;
    const updatedTaste = form.taste.value;
    const updatedCategory = form.category.value;
    const updatedDetails = form.details.value;
    const updatedPhoto = form.photo.value;

    const updatedCoffee = { updatedName, updatedChef, updatedSupplier, updatedTaste, updatedCategory, updatedDetails, updatedPhoto };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(res => res.json())
      .then(data => {

        if (data.modifiedCount > 0) {
          toast.success("Coffee updated successfully");
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
        <title>Update Coffee</title>
      </Helmet>
      <section>
        <div className="bg-base-200 p-5 rounded-md shadow-md">
          <p>
            <span>Home &#187; Dashboard</span>
            <span> &#187; Update Coffee</span>
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee} className="mt-5">
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input type="text" name="name" placeholder="Coffee Name" defaultValue={name} className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Chef Name</span>
              </label>
              <input type="text" name="chef" placeholder="Chef Name" defaultValue={chef} className="input input-bordered focus:outline-none w-full" />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Suppiler Name</span>
              </label>
              <input type="text" name="supplier" placeholder="Suppiler Name" defaultValue={supplier} className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input type="text" name="taste" placeholder="Taste" defaultValue={taste} className="input input-bordered focus:outline-none w-full" />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input type="text" name="category" placeholder="Category" defaultValue={category} className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered focus:outline-none w-full" />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered focus:outline-none w-full" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white"><GrUpdate />Update Coffee</button>
          </div>
        </form>
      </section>
    </HelmetProvider>
  )
}

export default UpdateCoffee
