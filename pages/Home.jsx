import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Banner from "./Banner";
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "For All Your Outfit Needs",
      content:
        "Discover everything you need to complete your look. From stylish clothing to trendy accessories, we have it all. Explore our diverse collection and find your perfect outfit today!",
      link: "/about",
      image: "src/assets/Images/Image.1.png",
    },
    {
      title: "Upto 30% off on all Men's Wear",
      content:
        "Get the best deals on summer outfits. Limited time offer, shop now and save big on your favorite styles.",
      link: "/sale",
      image: "src/assets/Images/Image6.png",
    },
    {
      title: "Up to 50% Off on All Women's Wear",
      content:
        "Take advantage of our limited-time offer and save up to 50% on a wide range of women’s summer fashion. Shop now to find your favorite styles and enjoy unbeatable discounts!",
      link: "/sale",
      image: "src/assets/Images/Image7.png",
    },
    {
      title: "New Arrivals",
      content:
        "Discover the latest trends and styles with our new arrivals. Stay ahead in fashion with our exclusive collection.",
      link: "/new",
      image: "src/assets/Images/Image8.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-r from-pink-200 to-purple-300 m-10 mt-4 rounded">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 ml-10 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {slides[activeSlide].title}
            </h1>
            <p className="mb-8 leading-relaxed">
              {slides[activeSlide].content}
            </p>
            <div className="flex justify-center">
              <Link to={slides[activeSlide].link}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  {slides[activeSlide].title}
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end items-end">
            <img
              className="object-contain"
              alt="fashion"
              src={slides[activeSlide].image}
            />
          </div>
        </div>
      </section>
      <h1 className="text-4xl text-center mt-3 mb-3">About</h1>
      <About />
      <Banner />
      <h1 className="text-4xl text-center mt-3 mb-3">Contact</h1>
      <Contact />
      <Testimonials />
    </>
  );
};

export default Home;
