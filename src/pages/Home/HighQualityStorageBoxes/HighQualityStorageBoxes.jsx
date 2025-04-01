
import People from "../../../assets/people.png"
import Quality from "../../../assets/quality.png";

import Map from "../../../assets/map.png"
const HighQualityStorageBoxes = () => {
    return (
      <>
        <div className="mx-auto max-w-7xl py-10 dark:bg-white">
          <div className="flex flex-col lg:flex-row items-center">
            <div>
              <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-left pl-2 lg:pl-0">
                Hochwertige Lagerboxen
              </h2>
              <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-left pl-2 lg:pl-0">
                Zufriedenheit garantiert!
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 pl-3 lg:pl-0">
                <div className="">
                  <div className="flex flex-row items-center mt-5">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2">
                      Jederzeit lagern - 24 Stunden am Tag geöffnet
                    </h3>
                  </div>
                  <div className="flex flex-row items-center mt-5">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2">Videoüberwachung</h3>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row items-center mt-5">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2"> Einfach online buchen</h3>
                  </div>
                  <div className="flex flex-row items-center mt-5">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2">versichert</h3>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row items-center mt-5 ">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2">
                      Ein-und Ausladen unter trockenen Bedingungen
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end flex-row">
              <img src={People}></img>
            </div>
          </div>
          <div className="bg-[#F5F5F5] text-center py-10 justify-center items-center mx-auto flex flex-col">
            <h5 className="text-[#0C094E] font-normal text-[24px]">
              Lösen Sie Ihr Platzproblem in nur 3 Minuten!
            </h5>
            <p className="text-[#231ADF] text-[18px] font-bold rounded-full border border-[#231ADF] w-[160px] mt-2">
              Buchen Sie
              <i className="fa fa-long-arrow-right pl-3" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.117291577699!2d16.386606076266176!3d48.204356671250956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07726938c4ff%3A0xd8f69b2a44137d6a!2sWeyrgasse%209%2C%201030%20Wien%2C%20%C3%96sterreich!5e0!3m2!1sde!2sbd!4v1743519907279!5m2!1sde!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    );
};

export default HighQualityStorageBoxes;