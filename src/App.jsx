import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Loginpage from "./pages/Loginpage"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage />} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;