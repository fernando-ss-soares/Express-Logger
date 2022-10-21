import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Index";
import Payment from "./pages/pagamento/Index";
import Checkout from "./pages/carrinho/Index";
import Panel from "./pages/painel/Index";
import Request from "./pages/pedido/Index";
import Profile from "./pages/perfil/Index";

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/panel" element={<Panel/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/request" element={<Request/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}