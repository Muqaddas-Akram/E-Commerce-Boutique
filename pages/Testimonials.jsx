import React, { useState } from 'react';

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const testimonials = [
    {
      name: "Muqaddas Akram",
      role: "Regular Customer",
      image: "src/assets/Images/Image3.jpg",
      text: "I absolutely love shopping here! The quality of the clothing is fantastic, and the styles are always on-trend. The customer service is top-notch, making every shopping experience enjoyable."
    },
    {
      name: "Adil Ali",
      role: "Regular Customer",
      image: "src/assets/Images/Image10.png",
      text: "This store has become my go-to for all my fashion needs. The variety of options is incredible, and I always find exactly what I'm looking for. Highly recommend checking out their latest collections!"
    },
    {
      name: "Javeria",
      role: "Regular Customer",
      image: "src/assets/Images/Image9.jpg",
      text: "Shopping here has been a game-changer for my wardrobe. The clothing is stylish and well-made, and the sales are unbeatable. I'm always excited to see their new arrivals!"
    }
  ];
  

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <h1 className="text-4xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
          <div className="flex flex-wrap -m-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-4 md:w-1/3 w-full ${showTestimonials ? 'slide-in' : ''}`}>
                <div className="h-full bg-pink-100 p-8 rounded shadow-md">
                  <p className="leading-relaxed mb-6">{testimonial.text}</p>
                  <a 
                    className="inline-flex items-center cursor-pointer"
                    onClick={() => setSelectedTestimonial(testimonial)}
                  >
                    <img alt="testimonial" src={testimonial.image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">{testimonial.name}</span>
                      <span className="text-gray-500 text-sm">{testimonial.role}</span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedTestimonial && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md mx-auto relative">
            <button 
              className="absolute top-0 right-0 m-4 text-gray-500"
              onClick={() => setSelectedTestimonial(null)}
            >
              &times;
            </button>
            <img 
              alt="testimonial" 
              src={selectedTestimonial.image} 
              className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center mb-4 mx-auto"
            />
            <h2 className="text-2xl font-medium text-gray-900 mb-2 text-center">{selectedTestimonial.name}</h2>
            <p className="text-gray-500 text-sm text-center mb-4">{selectedTestimonial.role}</p>
            <p className="leading-relaxed text-center">{selectedTestimonial.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
