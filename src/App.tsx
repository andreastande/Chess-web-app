import { Route, Routes } from "react-router"
import Layout from "./components/Layout"
import Homepage from "./pages/Homepage"
import Play from "./pages/Play"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/play" element={<Play />} />
      </Route>
    </Routes>
  )
}

export default App
