import React from "react";

// Components
import InvoicePrompt from "@/components/InvoicePrompt";

export default function Home() {
  return (
    <main className="w-full max-w-6xl py-6 px-6 md:px-0 mx-auto">
      {/* {"MAIN INVOICE FORM"} */}
      <div className="w-full h-full min-h-[calc(87dvh-24px)] bg-[rgba(26,19,4,0.1)] border border-[#3c3017] text-sm rounded-xl">
        <section className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_30%] gap-5">
          <div className="w-full h-full text-sm px-4 py-2 rounded-xl">
            <h2>main</h2>
          </div>
          <div className="w-full h-full text-sm px-4 py-2 rounded-xl">
            <h2>Actions</h2>
          </div>
        </section>
      </div>

      {/* {"FIXED PROMPT SECTION"} */}
      <InvoicePrompt />
    </main>
  );
}
