
import {Link, MemoryRouter, Route, Switch, BrowserRouter, Routes} from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
function App() {
  return (
      <BrowserRouter>
          <Routes>
                   <Route path="/profile" element={<Profile />} />
                    <Route index element={<Home/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
