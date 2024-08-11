export interface productFormDataProps {
  invoiceNumber: string;
  logo: string;
  issue_date: number;
  due_date: number;
  billingInfo: {
    by_company: string;
    by_address: string;
  };
  clientInfo: {
    to_company: string;
    to_address: string;
    to_email_address: string;
  };
  items: {
    id: number;
    description: string;
    quantity: string;
    unitPrice: string;
    ItemSubTotal: string;
  }[];
  vat: number;
  grandTotal: number;
}

export default FormProps;
