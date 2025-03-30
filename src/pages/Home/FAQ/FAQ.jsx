

const FAQ = () => {
    return (
      <div className="max-w-5xl mx-auto bg-white pb-10 px-3 lg:px-0">
        <div>
          <div className="bg-white py-10">
            <h2 className="font-bold text-[25px] lg:text-[40px] leading-[36px] text-[#231ADF] text-center">
              Questions
            </h2>
            <p className="font-bold text-[25px] lg:text-[40px] leading-[36px] text-[#0C094E] text-center pt-5">
              & Answer
            </p>
          </div>
        </div>
        <div>
          <section className="w-full bg-white">
            <details
              className="group p-4  divide-y divide-slate-200 rounded-[12px] border border-[#0C094E]"
              open
            >
              <summary className="relative cursor-pointer list-none pr-8 font-bold text-[20px] text-[#0C094E] transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                How big are the boxes and how much do they cost?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac21 desc-ac21"
                >
                  <title id="title-ac21">Open icon</title>
                  <desc id="desc-ac21">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                Wind UI team currently releases it's components on HTML and
                React, but also thinking on adding more in the future. You can
                easily toggle between the two languages through the code blocks,
                on each page component.
              </p>
            </details>
            <details className="group p-4 mt-4  divide-y divide-slate-200 rounded-[12px] border border-[#0C094E]">
              <summary className="relative cursor-pointer list-none pr-8 font-bold text-[20px] text-[#0C094E] transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                How can I pay?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac22 desc-ac22"
                >
                  <title id="title-ac22">Open icon</title>
                  <desc id="desc-ac22">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                All our icons related ui components are using, heroicons SVG
                icons, by the makers of Tailwind CSS.
              </p>
            </details>
            <details className="group p-4 mt-4  divide-y divide-slate-200 rounded-[12px] border border-[#0C094E]">
              <summary className="relative cursor-pointer list-none pr-8 font-bold text-[20px] text-[#0C094E]  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                Where can I find my invoice?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac24 desc-ac24"
                >
                  <title id="title-ac24">Open icon</title>
                  <desc id="desc-ac24">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                You can find all latest additions and updates in our Changelog
                page, where we have a detailed timeline for any changes.
              </p>
            </details>
            <details className="group p-4 mt-4  divide-y divide-slate-200 rounded-[12px] border border-[#0C094E]">
              <summary className="relative cursor-pointer list-none pr-8 font-bold text-[20px] text-[#0C094E]  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                When does the rental end?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac23 desc-ac23"
                >
                  <title id="title-ac23">Open icon</title>
                  <desc id="desc-ac23">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                You can find the official TailwindCSS detailed documentation as
                well as the official TailwindCSS website link on our footer
                under Resources.
              </p>
            </details>
          </section>
        </div>
      </div>
    );
};

export default FAQ;