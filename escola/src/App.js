
import './App.css';
import Logo from './Components/template/logo';
import Menu from './Components/template/menu';
//import Main from './Components/template/Main';
import Footer from './Components/template/Footer';
//import CrudAluno from './Components/CrudAluno';
import Rotas from './Rotas';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
return (
<BrowserRouter>
<div className="App">
<Logo />
<Menu />
<Rotas/>
<Footer />
</div>
</BrowserRouter>
);
}
