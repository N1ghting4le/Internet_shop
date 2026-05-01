import { Routes, Route } from "react-router";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminLayout } from "@/layouts/AdminLayout";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AdminLoginPage } from "@/pages/AdminLoginPage";
import { AdminProductPage } from "@/pages/AdminProductPage";
import { AdminProductsListPage } from "@/pages/AdminProductsListPage";
import { CartPage } from "@/pages/CartPage";
import { CatalogPage } from "@/pages/CatalogPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { OrdersPage } from "@/pages/OrdersPage";
import { ProductPage } from "@/pages/ProductPage";

export function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<CatalogPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Route>
      <Route path="admin">
        <Route path="login" element={<AdminLoginPage />} />
        <Route
          path="products"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminProductsListPage />} />
          <Route path=":id" element={<AdminProductPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
