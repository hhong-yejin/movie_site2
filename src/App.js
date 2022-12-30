import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
