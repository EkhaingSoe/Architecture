
import { Route, Routes } from "react-router";
import Path from "./pages/Path";
import BlogDetail from './components/BlogDetail'
import ServiceDetail from './pages/ServiceDetail'
import PorfolioDetail from "./pages/PorfolioDetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Path/>}/>
        <Route path="/blogDetail" element={<BlogDetail/>}/>
        <Route path="/serviceDetail" element={<ServiceDetail/>}/>
        <Route path="/porfolioDetail" element={<PorfolioDetail/>}/>
      </Routes>
    </div>
  )
}

export default App

