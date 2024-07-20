import { useState } from "react";
import "../src/index.css";
export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav>
      <div className="w-full relative z-10 h-full py-4 text-lg font-outfit px-8 sm:px-12 md:px-[100px] lg:px-[200px] xl:px-[280px] justify-between flex bg-black/20 text-[#E4E6F2] items-center">
        <div
          className="xl:hidden flex justify-between items-center gap-x-4"
          onClick={() => setShowModal(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="6" width="16" height="2" fill="white" />
            <rect x="4" y="11" width="16" height="2" fill="white" />
            <rect x="4" y="16" width="16" height="2" fill="white" />
          </svg>
          <img src="../images/logo.svg" className="sm:block hidden" />
        </div>
        <img src="../images/logo.svg" className="block sm:hidden xl:block" />
        {showModal ? (
          <div className="absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen bg-black/20ss backdrop-blur-xl">
            <div className="">
              <button
                onClick={() => setShowModal(false)}
                className="absolute px-4 py-2 text-white rounded right-2 top-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <nav className="w-full my-4" onClick={() => setShowModal(false)}>
                <div className=" flex flex-col items-center ">
                  <p className="hover:underline py-4 decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
                    About
                  </p>
                  <p className="hover:underline py-4 decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
                    Service
                  </p>
                  <p className="hover:underline py-4 decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
                    Process
                  </p>
                  <p className="hover:underline py-4 decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
                    Work
                  </p>
                  <p className="hover:underline py-4 decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
                    Pricing
                  </p>
                  <p className="hover:underline py-4 decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
                    FAQs
                  </p>
                  <p className="hover:underline py-4 decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
                    Book a Call
                  </p>
                </div>
              </nav>
            </div>
          </div>
        ) : null}
        <div className="  hidden xl:flex gap-x-7">
          <p className="hover:underline decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
            About
          </p>
          <p className="hover:underline decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
            Service
          </p>
          <p className="hover:underline decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
            Process
          </p>
          <p className="hover:underline decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
            Work
          </p>
          <p className="hover:underline decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
            Pricing
          </p>
          <p className="hover:underline decoration-2 underline-offset-8 no-underline decoration-[#6881ff] cursor-pointer">
            FAQs
          </p>
        </div>
        <p className="border hidden  sm:block  text-base lg:mr-16 xl:mr-0 border-[#6881FF] hover:bg-[#6881FF]  rounded-xl px-7 py-3">
          Book a Call
        </p>
      </div>
    </nav>
  );
}
