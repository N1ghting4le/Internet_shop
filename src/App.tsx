import { CartAmountContextProvider } from "@/contexts/CartAmountContext/provider";
import { AppRoutes } from "@/routes";

export function App() {
  return (
    <CartAmountContextProvider>
      <AppRoutes />
    </CartAmountContextProvider>
  );
}
