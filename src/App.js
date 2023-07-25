import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import Main from "./components/Main"

// This is a React Router v6 app
import { Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/department" element={<Department />} /> */}
        <Route path="/main/*" element={<Main />} />
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* Review this line as it gives an error but it is exactly the same as the prveios one? */}
        {/* <Route Path='/credit' element={<CreditControl />} /> */}
      </Routes>

    </>
  );
}

export default App;
