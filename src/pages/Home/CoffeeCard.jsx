import PropTypes from 'prop-types'
import { FaDeleteLeft } from 'react-icons/fa6';

const CoffeeCard = ({ coffee }) => {

  const { name, chef, supplier, taste, category, details, photo } = coffee;

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
            <button className="btn btn-error rounded btn-sm text-white"><FaDeleteLeft /> Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard

CoffeeCard.propTypes = {
  coffee: PropTypes.object
}