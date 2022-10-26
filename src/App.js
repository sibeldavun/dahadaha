import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import CampaignDetail from "./pages/CampaignDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (


    <Router>
      
      


      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/campaign/:SeoName/:id' element={<CampaignDetail />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </Router>

  );
}

export default App;