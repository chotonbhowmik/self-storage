import Storage from "../../../assets/storage.png";
import Book from "../../../assets/book.png";

import Location from "../../../assets/location.png";


const FastEasy = () => {
    return (
      <div className="bg-[#231ADF] py-10">
        <div className="pb-14">
          <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#fff] text-center">
            Schnell. Einfach. Rund um die Uhr.
          </h2>
          <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
            In nur 3 Minuten zu Ihrem eigenen Lagerraum:
          </p>
        </div>
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-4">
          <div className="overflow-hidden text-center  rounded  text-slate-500 shadow-slate-200">
            <img src={Storage} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#fff]">
                Lagerraum auswählen
              </h3>
              <p className="text-[#fff] text-[18px] font-normal">
                Mit nur wenigen Klicks finden Sie den passenden Lagerraum bei
                FoxBox.
              </p>
            </div>
          </div>

          <div className="overflow-hidden text-center  rounded  text-slate-500 shadow-slate-200">
            <img src={Book} className="mx-auto"></img>

            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#fff]">
                Buchen, Jederzeit
              </h3>
              <p className="text-[#fff] text-[18px] font-normal">
                Geben Sie Ihre Kontaktinformationen und Ihre Kreditkarte ein -
                fertig! Ihr Lagerraum Platz ist bereit
              </p>
            </div>
          </div>

          <div className="overflow-hidden text-center  rounded  text-slate-500 shadow-slate-200">
            <img src={Location} className="mx-auto h"></img>

            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#fff]">
                Einfache Lagerung
              </h3>
              <p className="text-[#fff] text-[18px] font-normal">
                Die Zugangscodes und eine Wegbeschreibung werden am Tag des
                Einzugs per E-Mail verschickt. 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FastEasy;