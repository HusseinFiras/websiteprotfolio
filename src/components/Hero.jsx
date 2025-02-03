import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      {/* Text Content */}
      <div className='parallax__content w-full mx-auto'>
        <div className="flex flex-col">
          <h1 className='font-medium text-white whitespace-nowrap
            text-[70px] xs:text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px]
            leading-tight tracking-tight z-20'>
            <span className="block mb-2">HUSSEIN</span>
            <span className="block">FIRAS</span>
          </h1>
          <Position />
        </div>
      </div>

      {/* Background Images */}
      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />
      
      {/* 3D Spaceman */}
      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;