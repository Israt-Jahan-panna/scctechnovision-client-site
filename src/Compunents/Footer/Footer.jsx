import React from 'react';

const Footer = () => {
    return (
        <div className="font-OpenSans">
           <footer className="bg-slate-700 text-yellow-50">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center ">
                  <div className="h-8 mr-3">
                 <img src="https://i.ibb.co/HLSSKDr/1-Logo.png" className="h-20 w-40" alt="" />
                  </div>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-lg font-semibold text-yellow-50uppercase dark:text-white">About Us</h2>
                  <ul className=" text-yellow-50 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline">SCC</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">Contact Us</a>
                      </li>
                      
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg font-semibold text-yellow-50uppercase dark:text-white">Follow us</h2>
                  <ul className=" text-yellow-50 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline ">Facebook</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">Instagram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg font-semibold text-yellow-50uppercase dark:text-white">Legal</h2>
                  <ul className=" text-yellow-50 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-lg  sm:text-center text-yellow-50">© 2023 <a href="" className="hover:underline">SCC™</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>
        </div>
    );
};

export default Footer;