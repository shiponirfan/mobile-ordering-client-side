import banner1 from "../../assets/banner/banner1.jpg";
const HeroBanner = () => {
  return (
    <div
      className="h-[800px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="container mx-auto px-6 lg:px-8  h-full justify-center items-center flex">
        <div className="lg:w-1/2 w-full space-y-2 text-center lg:text-left">
          <h2 className="font-extrabold text-bg-primary 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-xl uppercase">
            Upgrade Your Tech
          </h2>
          <h2 className="font-extrabold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-xl  uppercase">
            Unleash the Possibilities!
          </h2>
          <p>
            Explore cutting-edge mobile phones with our hassle-free online
            shopping experience. From flagship powerhouses to budget-friendly
            gems, find the perfect device that suits your style and needs.
            Elevate your connectivity today!
          </p>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item w-full md:w-96 h-14"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="indicator">
              <button className="btn join-item h-14 px-8 bg-bg-primary text-white hover:bg-bg-secondary">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
