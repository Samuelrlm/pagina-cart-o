import { BrowserRouter, Routes, Route } from "react-router-dom"
import PagePagamento from "./pages/pagamento"
import PageCartoes from "./pages/cartoes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagePagamento/>} />
        <Route path="/cartoes" element={<PageCartoes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
