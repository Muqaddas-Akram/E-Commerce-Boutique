import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <section className="text-gray-600 body-font mt-16 px-4 py-8 sm:px-6 md:px-8 lg:px-16 xl:px-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 lg:w-3/5 mb-8 md:mb-0">
          <h1 className="title-font font-medium text-3xl text-pink-500 mb-4">Login Form</h1>
          <p className="leading-relaxed mt-4 text-center md:text-left">
            Welcome back! Please enter your credentials to access your account and continue your sweet journey with us. If you're new here, sign up to join our community of dessert lovers and never miss out on our latest treats and special offers. Happy indulging!
          </p>
        </div>
        <div className="md:w-1/2 lg:w-2/6  bg-gradient-to-r from-pink-300 to-purple-400 rounded-lg p-8 flex flex-col mx-auto w-full max-w-md">
          <h2 className="text-white text-lg font-medium title-font mb-5">Log In</h2>
          <form>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              className="text-pink-500 w-full bg-white mt-5 border-0 py-2 px-8 focus:outline-none hover:bg-pink-200 rounded text-lg"
            >
              Log In
            </button>
            <div className='flex text-xs mt-3 space-x-1'>
            <p>Don't have an Account</p><Link to="/signup" className='underline'>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
