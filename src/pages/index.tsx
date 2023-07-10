import SpiralSketch from "../components/SpiralSketch";

const HomePage = () => {
  return (
    <section className="text-black body-font bg-[#FFF4EC]">
      <div className="container m-auto py-12 md:py-28">
        <div className="mx-8 md:mx-4 lg:mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className=" mx-auto text-left">
            <h3 className="mb-2 font-bold uppercase text-black lg:text-sm md:text-xs">
              Two-headed Calf
            </h3>
            <h1 className="mb-8 md:mb-10 text-5xl font-bold text-black lg:text-7xl md:text-1xl ">
              <span>
                But tonight he is alive and in the north field with his mother.{" "}
              </span>
            </h1>
            <h2 className="mb-8 md:mb-10 text-xl font-light text-black lg:text-3xl ">
              It is a perfect summer evening: the moon rising over the orchard,
              the wind in the grass. And as he stares into the sky, there are
              twice as many stars as usual.
            </h2>
            <span className="mx-auto text-black ">
              <a href="/kinetic">
                <button className="group mt-1 font-semibold inline-flex items-center bg-black text-[#FFF4EC]  border border-2 border-black py-4 px-5 rounded hover:bg-[#FFF4EC] hover:text-black">
                  <span className="mr-2">Laura Gilpin</span>
                  <svg
                    className="w-4 h-4 color-[#FFF4EC] group-hover:color-white"
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="48"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>{" "}
                </button>
              </a>
            </span>
          </div>
          <div className="text-left mx-auto flex justify-center">
            <SpiralSketch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
