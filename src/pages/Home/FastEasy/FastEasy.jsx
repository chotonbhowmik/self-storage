import Storage from "../../../assets/storage.png";
import Book from "../../../assets/book.png";

import Location from "../../../assets/location.png";


const FastEasy = () => {
    return (
      <div className="bg-[#231ADF] py-10">
        <div className="pb-14">
          <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#fff] text-center">
            Fast. Easy. Around the clock.
          </h2>
          <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
            In just 3 minutes to your own storage space:
          </p>
        </div>
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-4">
          <div className="overflow-hidden text-center  rounded  text-slate-500 shadow-slate-200">
            <img src={Storage} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#fff]">
                Select Storage Space
              </h3>
              <p className="text-[#fff] text-[18px] font-normal">
                With just a few clicks you can find suitable storage space at
                SafeStore.
              </p>
            </div>
          </div>

          <div className="overflow-hidden text-center  rounded  text-slate-500 shadow-slate-200">
            <img src={Book} className="mx-auto"></img>

            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#fff]">
                Book, Anytime
              </h3>
              <p className="text-[#fff] text-[18px] font-normal">
                Enter your contact details and credit card – done! Your storage
                space is ready
              </p>
            </div>
          </div>

          <div className="overflow-hidden text-center  rounded  text-slate-500 shadow-slate-200">
            <img src={Location} className="mx-auto h"></img>

            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#fff]">
                Easy storage
              </h3>
              <p className="text-[#fff] text-[18px] font-normal">
                Access codes and directions will be sent by email on the day of
                moving in.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FastEasy;