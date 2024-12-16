export const users = [
  {
    id: 'admin-1',
    email: 'admin@saifashionzone.com',
    password: 'admin123', // In production, this would be hashed
    name: 'Raiba Admin',
    role: 'admin'
  },
  {
    id: 'user-1',
    email: 'user@example.com',
    password: 'user123', // In production, this would be hashed
    name: 'John Customer',
    role: 'user'
  }
] as const;