import { Route,Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import LandingPage from "./pages/Landing/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<LandingPage/>} />
      </Route>
    </Routes>
  )
}

export default App;