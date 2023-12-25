import React from "react";

const Features = () => {
  return (
    <div className="mt-6">
        {/* <h1 className="my-8"> <span  className="bg-[#F2E29E] px-4 py-2 rounded-md"> Our Features Projects  </span></h1> */}
      <div className="lg:flex lg:flex-row ">
        <div className="h-96 w-96">
          <img
            src="https://i.ibb.co/KLMQBQR/portfolio-item-4-feature-image-1024x640.jpg"
            alt="" className="h-80"
          />
          <div className="relative bottom-12 left-1 text-start">
            <h3 className="text-sm font-semibold text-white mb-1">
              Vision Crafts Portfolio Hub
            </h3>
            <p className="text-white">creativity </p>
          </div>
        </div>
        <div className="h-96 w-96">
          <img
            src="https://i.ibb.co/JQ1vKcH/portfolio-item-8-feature-image-1024x736.jpg"
            alt="" className="h-80"
          />
          <div className="relative bottom-12 left-1 text-start">
            <h3 className="text-sm font-semibold text-white mb-1">
            Pixel Precision Image Gallery
            </h3>
            <p className="text-white">Desing</p>
          </div>
        </div>
        
        <div className="h-96 w-96">
          <img
            src="https://i.ibb.co/WkND26B/portfolio-item-5-feature-image-1024x736.jpg"
            alt="" className="h-80"
          />
          <div className="relative bottom-12 left-1 text-start">
            <h3 className="text-sm font-semibold text-white mb-1">
              Tech Glimpse Image Exploration Hub
            </h3>
            <p className="text-white">creativity </p>
          </div>
        </div>
        <div className="h-96 w-96">
          <img
            src="https://i.ibb.co/5RrRWYJ/it-solution-hero-image-2-scaled.jpg"
            alt="" className="h-80"
          />
          <div className="relative bottom-12 left-1 text-start">
            <h3 className="text-sm font-semibold text-white mb-1">
            Tech Insight Visual Showcase
            </h3>
            <p className="text-white">Inspiration </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Features;
