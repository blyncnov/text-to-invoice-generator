import React from "react";

// Components
import InvoicePrompt from "@/components/InvoicePrompt";

export default function Home() {
  return (
    <main className="w-full h-full max-w-[90%] flex justify-center items-center py-6">
      <InvoicePrompt />
    </main>
  );
}
