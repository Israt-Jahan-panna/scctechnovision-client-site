import React from "react";

const Collaboration = () => {
  return (
    <div className="font-OpenSans mt-8 lg:px-28 lg:py-10 p-5 bg-[#F8F7F4] rounded-sm">
      {/* collabortion part-1 */}
      <div className="flex lg:flex-row flex-col justify-between lg:px-24 mt-8 mb-2">
        <h3 className="text-2xl font-bold mb-2">
          Collaborate with <br /> your team anytime,
          <br /> anywhere.
        </h3>
        <div>
          <div>
            <p className="text-xs">
              We understand the dynamic nature of the digital landscape and are{" "}
              <br />
              committed to keeping your business at the forefront of
              technological <br />
              advancements.
            </p>
          </div>
          {/* experience sections */}
          <div className="lg:block hidden">
          <div className="bg-[#F2E29E] flex lg:flex-row flex-col justify-around p-2 rounded-md relative -bottom-5 ">
            <div className="flex items-center justify-center gap-4 ">
              <h3 className="font-bold text-3xl ">10k</h3>{" "}
              <h3 className="font-semibold">
                {" "}
                Years <br />
                Experiance
              </h3>{" "}
              <h3 className="h-12 bg-black w-[2px]"> </h3>
            </div>

            <div className="flex items-center justify-center gap-4">
              <h3 className="font-bold text-3xl ">80k</h3>{" "}
              <h3 className="font-semibold">
                {" "}
                Years <br />
                Experiance
              </h3>{" "}
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* collabortion part-2 */}
      <div className="flex lg:flex-row flex-col lg:px-10 lg:gap-8 justify-between">
        <div className="px-4">
          <div className="flex justify-center items-center gap-4 mb-4 text-xs">
            <div>
              <i className="fa-solid fa-gear"></i>
            </div>
            <div>
              <h1 className="font-bold ">Security Assurance</h1>
              <h2>Fortifying Digital Defenses Daily. </h2>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mb-4 text-xs">
            <div>
            <i className="fa-solid fa-chart-line"></i>
            </div>
            <div>
              <h1 className="font-bold ">Scalability</h1>
              <h2>Scaling Success, One Step Beyond.</h2>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mb-4 text-xs">
            <div>
            <i className="fa-solid fa-person-through-window"></i>
            </div>
            <div >
              <h1 className="font-bold ">Client-Centric Approach</h1>
              <h2>Your Success, Our Core Focus.</h2>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/yhwJqBM/it-solution-image-1-768x429.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
