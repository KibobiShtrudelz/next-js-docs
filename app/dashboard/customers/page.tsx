import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function CustomersPage() {
  return (
    <div>
      <h1>Customers</h1>
      <p>Customers are the best!</p>
    </div>
  );
}
