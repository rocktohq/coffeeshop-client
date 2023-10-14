import PropTypes from 'prop-types'
import { FaDeleteLeft } from 'react-icons/fa6';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, handleDelete }) => {

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="p-5 shadow-md rounded-md">
      <figure>
        <img className="rounded-md h-52 w-full" src={photo} alt="" />
      </figure>
      <div className="mt-5">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-500">{details}</p>
        <p className="flex justify-between items-center text-gray-500">
          <span>Chef: {chef}</span>
          <span>Supplier: {supplier}</span>
        </p>
        <p className="flex justify-between items-center text-gray-500">
          <span>Taste: {taste}</span>
          <span>Category: {category}</span>
        </p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-gray-500">$<span className="text-2xl font-semibold">100</span></p>
          <div className="space-x-2">
            <button onClick={() => handleDelete(_id)} className="btn btn-error rounded btn-sm text-white"><FaDeleteLeft /> Delete</button>
            <Link to={`/dashboard/updateCoffee/${_id}`}> <button className="btn btn-secondary rounded btn-sm"><GrUpdate /> Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  handleDelete: PropTypes.func
}