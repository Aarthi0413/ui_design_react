import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from "./components/Dashboard";
import Properties from "./components/Properties";

const App = () => (
    <div className='app-container'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/properties' element={<Properties/>}/>
      </Routes>
    </BrowserRouter>
    </div>
)
export default App;
