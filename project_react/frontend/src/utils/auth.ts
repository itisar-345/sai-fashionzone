import { users } from '../data/users';
import { User } from '../types';

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  // Don't send password to client
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}