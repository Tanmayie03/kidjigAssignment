import Navbar from "../components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-[#151515] text-white font-outfit w-full h-full">
        <div className="md:bg-[#101C5CA3]/60 bg-[#101C5CA3]/50 lg:w-[700px] w-[300px] h-[300px] overflow-hidden moving-div2 md:h-[550px] absolute md:-top-96 right-0 top-0 md:right-12 rounded-full  blur-3xl"></div>
        <div className="md:bg-[#101C5CA3]/60 bg-[#101C5CA3]/50 lg:w-[600px] w-[300px] h-[300px] moving-div md:h-[500px] absolute md:-top-96 top-64 sm:left-32 overflow-hidden md:left-[32%] rounded-full  blur-3xl"></div>
        <Navbar />
        <div className="bg-[url('../images/bgImage.svg')]  px-8 sm:px-12 md:px-[100px] lg:px-[200px]   xl:px-[290px] bg-cover w-full h-screen">
          <div className="flex flex-col pt-20 md:pt-44  relative justify-center">
            <p className=" text-4xl md:text-5xl lg:text-[56px] leading-[60px] font-outfit   text-white">
              Empowering Lives Through Innovative{" "}
              <span className="underline pr-2 decoration-[7px] underline-offset-8 font-bold decoration-[#7F93FF]">
                AI
              </span>
              Technologies.{" "}
            </p>
            <p className="text-lg md:text-[22px] py-5 font-light text-[#C0C2CC]">
              Finding new horizons for visionaries to accelerate their
              innovation and progress.
            </p>
            <div className="flex items-center gap-x-4">
              <button className="bg-[#6A35FF] text-lg truncate md:text-nowrap rounded-xl px-4 md:px-8 font-semibold py-3">
                Explore Our Services
              </button>
              <button className="border border-[#6881FF] truncate md:text-nowrap text-lg font-semibold  rounded-xl px-4 md:px-6 py-3">
                Learn more
              </button>
            </div>

            <p className="text-base md:text-2xl  pt-[80px]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1C1C1C] to-white ">
                From Ideas to Software Solutions
              </span>
              💡✨
              <span className="bg-clip-text text-transparent bg-gradient-to-r  from-white to-[#E3E3E3] ">
                From Ideas to Software Solutions
              </span>
              🌟✨
              <span className="bg-clip-text text-transparent bg-gradient-to-r  from-[#E3E3E3] to-[#1C1C1C] ">
                From Ideas to
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
