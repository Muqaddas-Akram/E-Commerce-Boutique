import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = [
  { id: 1, link: '/new', name: 'New Arrival' },
  { id: 2, link: '/sale', name: 'Sale' },
  { id: 3, link: '/men', name: 'Men' },
  { id: 4, link: '/women', name: 'Women' },
  { id: 5, link: '/kids', name: 'Kids' },
];


const ProductNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        data-aos="zoom-in"
        className="flex flex-col sm:flex-row justify-between items-center mx-4 px-8 sm:mx-10 mt-3 mb-3 rounded-lg bg-gradient-to-r from-pink-200 to-purple-300"
      >
        <ul className={`flex flex-col sm:flex-row items-center gap-4 ${isMenuOpen ? 'block' : 'hidden'} sm:flex`}>
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-4 py-2 hover:text-purple-500 duration-200">
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="ml-4 px-4 py-2 my-3 text-pink-500 hover:bg-pink-200 rounded-md bg-purple-300 duration-200">
          Order Now
        </button>
      </div>
      </>
    );
};

export default ProductNavbar;
