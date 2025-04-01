import BannerBg from "../../../assets/banner.jpg";
// import star from "../../../assets/start.png";
import number from "../../../assets/24.png";
const BannerSection = () => {
  return (
    <div
      className="hero grid  "
      style={{
        backgroundImage: `radial-gradient(circle, rgba(51, 116, 173, 0.32), rgba(0, 0, 0, 1)), url(${BannerBg})`,
        gridTemplateColumns: "1fr auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-neutral-content text-center flex justify-center items-center pb-20">
        <div className="max-w-7xl">
          {/* <div className="justify-self-end">
            <img src={star} alt="Star" className="w-32 h-auto" />
          </div> */}
          <img src={number} className="object-cover"></img>
          <h1 className="mb-5 text-[30px] lg:text-[72px]  font-bold text-[#FFFFFF]  leading-[40px] lg:leading-[80px]">
            Sorgenfrei Lagerraum mieten in Wien-Landstrasse
          </h1>

          <div className="bg-white lg:rounded-full rounded-bl-[30px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[30px] max-w-2xl mx-auto p-6">
            <form className="w-full">
              <div className="flex flex-wrap justify-between space-y-2 md:space-y-0 md:flex-row gap-5">
                {/* LOCATION FIELD */}
                {/* <div className="relative z-0 w-full md:w-64 group border-b-2 lg:border-r-2 lg:border-b-0 border-slate-300 pb-5 lg:pb-0">
                  <select
                    id="location"
                    name="location"
                    required
                    className="peer block w-full appearance-none  bg-transparent  pr-10 pt-4 pb-1 text-sm font-bold text-[#1942BB] focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    <option value="1" selected>
                      Austria
                    </option>
                    <option value="2">Außervillgraten</option>
                    <option value="3">Ausstellungsstraße, Vienna</option>
                  </select>
                  <label
                    htmlFor="location"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 left-0 z-0 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600"
                  >
                    STANDORT WÄHLEN
                  </label>
                  <i className="fa fa-long-arrow-down absolute right-3 top-1/2 -translate-y-1/2 text-[#1942BB] pointer-events-none"></i>
                </div> */}

                <div className="relative z-0 w-full md:w-64 group lg:border-r-2 lg:border-b-0 border-slate-300 ">
                  <select
                    id="location"
                    name="location"
                    required
                    className="peer block w-full appearance-none   bg-transparent  pr-10 pt-4 pb-1 text-sm font-bold text-[#1942BB] focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    <option value="1" selected>
                      Small (1-3m²)
                    </option>
                    <option value="2">Medium (3-5m²)</option>
                    <option value="3">Large (5-8m²)</option>
                    <option value="3">XL (8-15m²)</option>
                  </select>
                  <label
                    htmlFor="location"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 left-0 z-0 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600"
                  >
                    EINHEIT WÄHLEN
                  </label>
                  <i className="fa fa-long-arrow-down absolute right-3 top-1/2 -translate-y-1/2 text-[#1942BB] pointer-events-none"></i>
                </div>

                {/* BUTTON */}
                <div className="w-full md:w-auto flex justify-center md:justify-start">
                  <button className="relative  lg:w-[250px] w-[300px] rounded-full bg-[#1C2253] text-white py-3  mt-4 md:mt-0 text-center font-bold pr-3">
                    Finden Sie Ihre Box
                    <i
                      className="fa fa-long-arrow-right absolute right-6 top-1/2 -translate-y-1/2 "
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-[#00C6AA] lg:max-w-[450px] max-w-[310px] rounded-bl-[30px] rounded-br-[30px] text-white mx-auto text-center">
            <p className="text-[16px] font-normal py-2">
              Nur 10 Box verfügbar. Ab 59:00 EUR pro Monat. Buchen Sie Ihre Box
              jetzt
            </p>
          </div>
        </div>
      </div>
      {/* Star image on the right side */}
    </div>
  );
};

export default BannerSection;
