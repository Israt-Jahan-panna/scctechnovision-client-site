import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/5RrRWYJ/it-solution-hero-image-2-scaled.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 text-3xl font-bold text-white">
              Innovate, Integrate, Elevate <br /> with AOI IT Solutions
            </h1>
            <p className="mb-2 text-white">
              Partner with AOI IT Solutions, and let's embark on a journey of{" "}
              <br />
              digital transformation together..
            </p>
            <Link to={"/login"}>
            <button className="btn bg-white">Let’s Explore”</button></Link>
          </div>
        </div>
      </div>
      <div className="mt-20 grid lg:grid-cols-4 grid-cols-1 ">
      <div className="flex">
          <div className="">
            <h3 className="mb-3">
            <i className="fa-solid fa-desktop"></i>
            </h3>
            <h1 className="font-bold text-xl ">Tailored Solutions</h1>
            <h3>We recognize that every business is unique.</h3>
          </div>
          <div>
            <p className="h-36 bg-slate-300 w-1 lg:block hidden"> </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <h3 className="mb-3">
              <i className="fa-solid fa-file-lines"></i>
            </h3>
            <h1 className="font-bold text-xl ">Expertise Across Industries</h1>
            <h3>Diverse industry experience, abundant knowledge.</h3>
          </div>
          <div>
            <p className="h-36 bg-slate-300 w-1 lg:block hidden"> </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <h3 className="mb-3">
              <i className="fa-solid fa-clock"></i>
            </h3>
            <h1 className="font-bold text-xl ">Innovation at the Core</h1>
            <h3>
              Innovation at AOI IT Solutions is our driving force, not just a
              buzzword.
            </h3>
          </div>
          <div>
            <p className="h-36 bg-slate-300 w-1 lg:block hidden "> </p>
          </div>
        </div>
        <div className="">
          <div>
            <h3 className="mb-3">
            <i className="fa-solid fa-comment"></i>
            </h3>
            <h1 className="font-bold text-xl ">End-to-End Services</h1>
            <h3>Concept to support, our end-to-end services.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
