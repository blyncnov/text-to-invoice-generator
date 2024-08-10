"use client";

import { useRouter } from "next/navigation";

const InvoicePrompt: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full py-5 flex justify-center items-center bg-transparent">
      <div className="w-full max-w-[80%] md:max-w-[50%]">
        <div className="w-full flex items-center justify-center gap-1 h-full bg-[rgba(26,19,4,0.5)] border border-main/40 rounded-full px-4">
          <textarea
            name="invoice_prompt"
            id="invoice_prompt"
            rows={1}
            defaultValue="Mr Bello Ibrahim wanted me to create simple graphics."
            placeholder="Enter your prompt here ..."
            className="w-full h-full no-scrollbar text-sm bg-transparent py-2.5 font-light placeholder:text-main/20 focus:ring-0 outline-none focus:ring-offset-0 resize-none"
          ></textarea>
          <div>
            <button
              type="button"
              onClick={() => router.push("/invoice/12345")}
              className="bg-gradient-to-tr to-main from-[#53421d] text-sm rounded-full py-1 px-3"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePrompt;
