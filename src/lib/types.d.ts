export interface FormProps {
  invoiceNumber: string;
  issue_date: number;
  due_date: number;
  billingInfo: {
    name: string;
    address: string;
  };
  clientInfo: {
    name: string;
    address: string;
    email_address: string;
  };
  items: {
    id: number;
    description: string;
    quantity: number;
    unitPrice: number;
    ItemSubTotal: number;
  }[];
  vat: number;
  grandTotal: number;
}

export default FormProps;
