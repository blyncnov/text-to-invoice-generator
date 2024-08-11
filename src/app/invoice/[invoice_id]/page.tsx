"use client";

import React, { useState } from "react";

// Font
import { SatisfyQo } from "@/app/fonts";

// Type declarartion
import { productFormDataProps } from "@/lib/types";
import { FormatPrice } from "@/lib/formatPrice";

type fieldNameProps = "description" | "quantity" | "unitPrice" | "ItemSubTotal";

const InvoiceDetails = () => {
  const [products, setProducts] = useState<productFormDataProps[]>([
    {
      id: 1,
      description: "",
      quantity: "1",
      unitPrice: "0",
      ItemSubTotal: "0",
    },
  ]);

  // TODO: ADD NEW PRODUCT ITEM
  const handleAddNewProduct = () => {
    setProducts((prev) => [
      ...prev,
      {
        id: products.length + 1,
        description: "",
        quantity: "0",
        unitPrice: "0",
        ItemSubTotal: "0",
      },
    ]);
  };

  // TODO: REMOVE PRODUCT ITEM
  const handleRemoveAProduct = (id: number) => {
    const p = products.filter((p) => p.id !== id);
    setProducts(p);
  };

  const handleOnChangeEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    if (name in products[index]) {
      const updatedProducts = [...products];
      products[index][name as fieldNameProps] = value;

      // Update Product SubTotal price
      products[index]["ItemSubTotal"] = (
        Number(products[index]["unitPrice"]) *
        Number(products[index]["quantity"])
      ).toString();

      // Update State
      setProducts(updatedProducts);
    } else return;
  };

  // Calculate grand total price
  const totalPrice = products.reduce((acc, product) => {
    return acc + Number(product.ItemSubTotal);
  }, 0);

  return (
    <main className="w-full max-w-[90%] py-6 mx-auto">
      <div className="w-full h-full text-sm rounded-xl">
        <section className="w-full h-full grid grid-cols-1 gap-5">
          <div className="w-full h-full text-sm py-2 rounded-xl">
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
                <h1 className="text-3xl font-normal">{"INVOICE_56847"}</h1>
              </div>

              <div className="invoice_info w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[50px] gap-y-5 md:gap-y-10 divide-y divide-x-0 lg:divide-y-0 lg:divide-x divide-main/10">
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
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="by_address">Address</label>
                      <input
                        type="text"
                        name="by_address"
                        id="by_address"
                        placeholder="Harmony Estate, Alabata, Abeokuta"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>
                  </div>
                </div>

                <div className="invoice_left_information w-full lg:pl-10 lg:pt-0 pt-5">
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
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="to_address">Address</label>
                      <input
                        type="text"
                        name="to_address"
                        id="to_address"
                        placeholder="No 5, Kajola Street, Ijebu Ode"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>

                    <div className="w-full grid grid-cols-[120px_1fr] items-center gap-4 whitespace-nowrap">
                      <label htmlFor="to_email_address">Email Address</label>
                      <input
                        type="text"
                        name="to_email_address"
                        id="to_email_address"
                        placeholder="info@text-invoice.io"
                        className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full py-6">
          <div className="w-full h-[1px] bg-main/5"></div>
        </div>

        <section className="w-full flex flex-col gap-5">
          <div className="w-full grid grid-cols-1 gap-3">
            <div className="w-full grid grid-cols-[auto_auto_auto_auto_auto] md:grid-cols-[65%_1fr_1fr_1fr_auto] items-center gap-x-6 md:gap-3 overflow-x-scroll no-scrollbar whitespace-nowrap">
              <div>
                <p className="px-2 text-base">Product description</p>
              </div>
              <div>
                <p className="text-base">Quantity</p>
              </div>
              <div>
                <p className="text-base">Price</p>
              </div>
              <div>
                <p className="text-base">Sub Total</p>
              </div>
              <div>
                <p>Actions</p>
              </div>
            </div>

            {products.map((product, index) => {
              return (
                <div
                  key={product.id}
                  className="w-full text-sm bg-[rgba(26,19,4,0.5)] p-2 rounded-xl"
                >
                  <div className="w-full grid grid-cols-1 md:grid-cols-[65%_1fr_1fr_1fr_auto] items-center gap-3">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Add product"
                      defaultValue={product.description}
                      onChange={(e) => handleOnChangeEvent(e, index)}
                      className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                    />
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      defaultValue={product.quantity}
                      onChange={(e) => handleOnChangeEvent(e, index)}
                      className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                    />
                    <input
                      type="number"
                      name="unitPrice"
                      id="unitPrice"
                      defaultValue={product.unitPrice}
                      onChange={(e) => handleOnChangeEvent(e, index)}
                      className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                    />
                    <input
                      type="number"
                      name="ItemSubTotal"
                      id="ItemSubTotal"
                      value={product.ItemSubTotal}
                      className="w-full rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                    />
                    <div>
                      {products.indexOf(product) === products.length - 1 ? (
                        <div className="w-auto flex items-center gap-3">
                          <button
                            type="button"
                            onClick={handleAddNewProduct}
                            className="w-8 h-8 flex justify-center items-center rounded-lg py-1.5 px-2 bg-[rgba(194,143,14,0.1)] border border-main/40"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#C28E0E"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-plus"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>

                          {products.indexOf(product) !== 0 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveAProduct(product.id)}
                              className="w-8 h-8 flex justify-center items-center rounded-lg py-1.5 px-2 bg-[rgba(204,14,0,0.1)] border border-[rgba(204,14,0,0.47)]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#CC0D00"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-trash-2"
                              >
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                <line x1="10" x2="10" y1="11" y2="17" />
                                <line x1="14" x2="14" y1="11" y2="17" />
                              </svg>
                            </button>
                          )}
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleRemoveAProduct(product.id)}
                          className="w-8 h-8 flex justify-center items-center rounded-lg py-1.5 px-2 bg-[rgba(204,14,0,0.1)] border border-[rgba(204,14,0,0.47)]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#CC0D00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trash-2"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="w-full py-6">
          <div className="w-full h-[1px] bg-main/5"></div>
        </div>

        <section className="w-full max-w-full min-w-full">
          <div className="w-full flex md:flex-row flex-col justify-between items-center gap-4">
            <div className="px-2 flex items-center gap-3 flex-wrap">
              <label className="inline-flex items-center cursor-pointer gap-3">
                <input
                  type="checkbox"
                  defaultValue=""
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-main after:content-[''] after:absolute after:top-[1px] after:start-[2px] after:bg-main after:border-main after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[rgba(26,19,4,0.9)] border border-main/50"></div>
              </label>
              <div>
                <h4 className="text-base">Include Tax (%)</h4>
              </div>
              <div className="w-auto flex gap-2 items-center">
                <input
                  type="text"
                  name="tax"
                  id="tax"
                  defaultValue={10}
                  className="w-[40px] text-center rounded-lg py-1.5 px-2 placeholder:text-main/20 placeholder:font-light bg-[rgba(26,19,4,0.1)] border border-main/40"
                />
              </div>
            </div>

            <div className={`flex items-center gap-3 ${SatisfyQo.className}`}>
              <h4 className="text-base">Total Amount:</h4>
              <h4 className="text-3xl text-main">{`$${FormatPrice(
                totalPrice
              )}`}</h4>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InvoiceDetails;
