
import './App.css';
import Menu from './components/menu/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sobre from './components/sobre';
import ProjetosPessoais from './components/projetosPessoais';
import Footer from './components/footer';
import {Helmet} from "react-helmet";


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portifólio - Herbert Roberti Júnior</title>
        <meta name="description" content="Portifólio de Herbert Roberti Júnior - Fullstack Development" />
      </Helmet>      
      <Menu />
      <div className="row">
        <h2 className='mt-4 mb-2' id="titleProjetosPessoais">
          Sobre mim
        </h2>
      </div>      
      <Sobre />
      <div className="row">
        <h2 className='mt-4 mb-2' id="titleProjetosPessoais">
          Projetos Pessoais
        </h2>
      </div>
      <ProjetosPessoais />
      <Footer />
    </div>
  );
}

export default App;
