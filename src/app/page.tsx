import React from "react";

// Font
import { SatisfyQo } from "./fonts";

// Components
import InvoicePrompt from "@/components/InvoicePrompt";

export default function Home() {
  return (
    <main className="w-full max-w-[90%] py-6 mx-auto">
      {/* {"MAIN INVOICE FORM"} */}
      <div className="w-full h-full min-h-[calc(87dvh-24px)] text-sm rounded-xl">
        <section className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_20%] gap-5">
          <div className="w-full h-full text-sm px-4 py-2 rounded-xl">
            <div className="w-full flex flex-col gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C28E0E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-leaf"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="w-auto pb-4">
                <h1 className="text-3xl font-normal">INVOICE_56847</h1>
              </div>

              <div className="invoice_info w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[50px] gap-y-10 divide-y divide-x-0 md:divide-y-0 md:divide-x divide-main/10">
                <div className="invoice_right_information w-full">
                  <div className="w-auto pb-3">
                    <h3
                      className={`text-2xl text-main font-light ${SatisfyQo.className}`}
                    >
                      Issued by
                    </h3>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="by_company">Company</label>
                      <input
                        type="text"
                        name="by_company"
                        id="by_company"
                        placeholder="Paystack Inc."
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="by_address">Address</label>
                      <input
                        type="text"
                        name="by_address"
                        id="by_address"
                        placeholder="Harmony Estate, Alabata, Abeokuta"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="by_state">State</label>
                      <input
                        type="text"
                        name="by_state"
                        id="by_state"
                        placeholder="Glasgow"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="by_country">Country</label>
                      <input
                        type="text"
                        name="by_country"
                        id="by_country"
                        placeholder="United Kingdom"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>
                  </div>
                </div>

                <div className="invoice_left_information w-full md:pl-10 md:pt-0 pt-10">
                  <div className="w-auto pb-3">
                    <h3
                      className={`text-2xl text-main font-normal ${SatisfyQo.className}`}
                    >
                      Issued to
                    </h3>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="to_company">Company</label>
                      <input
                        type="text"
                        name="to_company"
                        id="to_company"
                        placeholder="Taiwo Boluwatife"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="to_address">Address</label>
                      <input
                        type="text"
                        name="to_address"
                        id="to_address"
                        placeholder="No 5, Kajola Street, Ijebu Ode"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="to_state">State</label>
                      <input
                        type="text"
                        name="to_state"
                        id="to_state"
                        placeholder="Tamac"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="to_country">Country</label>
                      <input
                        type="text"
                        name="to_country"
                        id="to_country"
                        placeholder="Nigeria"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full text-sm px-4 py-2 rounded-xl">
            <div>{/* <h2>Actions</h2> */}</div>
          </div>
        </section>

        <div className="w-full py-10">
          <div className="w-full h-[1px] bg-main/5"></div>
        </div>

        <section></section>
      </div>

      {/* {"FIXED PROMPT SECTION"} */}
      <InvoicePrompt />
    </main>
  );
}

//  <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
//    <label htmlFor="company">Email Address</label>
//    <input
//      type="email"
//      name="email_address"
//      id="email_address"
//      placeholder="bholuwatife00@invoice.io"
//      className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/10 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
//    />
//  </div>
