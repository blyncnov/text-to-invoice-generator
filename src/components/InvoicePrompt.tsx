"use client";

const InvoicePrompt: React.FC = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 right-0 py-5 flex justify-center items-center bg-transparent">
      <div className="w-full max-w-[80%] md:max-w-[50%]">
        <div className="w-full flex items-center justify-center gap-1 h-full bg-[rgba(26,19,4,0.5)] border border-main/40 rounded-full px-4">
          <textarea
            name="invoice_prompt"
            id="invoice_prompt"
            rows={1}
            defaultValue="Mr Bello Ibrahim wanted me to create simple graphics."
            placeholder="Enter your prompt here ..."
            className="w-full h-full no-scrollbar text-sm bg-transparent py-2.5 font-light placeholder:text-main/10 focus:ring-0 outline-none focus:ring-offset-0 resize-none"
          ></textarea>
          <div>
            <button
              type="button"
              onClick={() => alert("Hey! Prompt")}
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
