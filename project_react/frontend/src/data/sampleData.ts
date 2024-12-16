// Sample data for demonstration
export const sampleProducts = [
  {
    id: '1',
    name: 'Designer Silk Saree',
    category: 'Sarees',
    price: 4999,
    stock: 15,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c'
  },
  {
    id: '2',
    name: 'Girls Party Dress',
    category: 'Girls',
    price: 2499,
    stock: 25,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb'
  },
  {
    id: '3',
    name: 'Boys Casual Set',
    category: 'Boys',
    price: 1999,
    stock: 30,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4'
  }
];

export const sampleOrders = [
  {
    id: 'ORD001',
    customer: 'John Doe',
    date: '2024-03-15',
    total: 4999,
    status: 'Processing',
    items: 3
  },
  {
    id: 'ORD002',
    customer: 'Jane Smith',
    date: '2024-03-14',
    total: 2499,
    status: 'Shipped',
    items: 2
  },
  {
    id: 'ORD003',
    customer: 'Mike Johnson',
    date: '2024-03-13',
    total: 1999,
    status: 'Delivered',
    items: 1
  }
];

export const sampleCustomers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    orders: 5,
    totalSpent: 24999,
    status: 'Active',
    joinDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    orders: 3,
    totalSpent: 15999,
    status: 'Active',
    joinDate: '2024-02-01'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    orders: 1,
    totalSpent: 4999,
    status: 'Inactive',
    joinDate: '2024-03-10'
  }
];