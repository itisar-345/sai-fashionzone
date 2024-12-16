import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { HomePage } from '../pages/user/HomePage';
import { ShopPage } from '../pages/user/ShopPage';
import { ProductPage } from '../pages/user/ProductPage';
import { CartPage } from '../pages/user/CartPage';
import { AdminDashboard } from '../pages/admin/Dashboard';
import { ProductsManager } from '../pages/admin/ProductsManager';
import { OrdersManager } from '../pages/admin/OrdersManager';
import { CustomersManager } from '../pages/admin/CustomersManager';
import { LoginPage } from '../pages/auth/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: 'cart', element: <CartPage /> },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'products', element: <ProductsManager /> },
      { path: 'orders', element: <OrdersManager /> },
      { path: 'customers', element: <CustomersManager /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}