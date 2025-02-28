import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { DefaultLayout } from "./components/LayoutDefault";
import { Checkout } from "./pages/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/carrinho" element={<Checkout />}/>
      </Route>
    </Routes>
  )
}