import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailsFilling from "./Pages/DetailsFilling";
import SelectedIdCheck from "./Components/SelectedIdCheck";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routing to Home Page  */}
        <Route exact path="/" element={<Home />} />

        {/* taking inputs from the users */}
        <Route
          exact
          path="/template/fill-details"
          element={
            <SelectedIdCheck>
              <DetailsFilling />
            </SelectedIdCheck>
          }
        />

        {/* Routing to My Resumes Page */}
        <Route exact path="/my/resumes" element={<MyResumes />} />

        {/* Routing to About Us Page */}
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
