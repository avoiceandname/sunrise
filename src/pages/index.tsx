import SpiralSketch from "../components/SpiralSketch";

const HomePage = () => {
  return (
    <div className="bg-[#FFF4EC] min-h-screen flex items-center justify-center">
      <div className="mx-auto p-8 bg-white rounded shadow">
        <SpiralSketch />
      </div>
    </div>
  );
};

export default HomePage;
