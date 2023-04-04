import { useState } from 'react';
import Header from '../header';
import './style.css';


function Menu(){
    const [checked, setChecked] = useState(false);

    const changeCheck = () => {
        setChecked(!checked);
      };    

      const handleChange = () => {
        setChecked(!checked);
      }; 
      
      const closeMenu = () => {
        setChecked(!checked);
      };

    return (
        <header>
            <div className="checkbox-container">
                <div className="checkbox-wrapper">
                    <input
                    id="toggle"
                    type="checkbox"
                    checked={checked}
                    className="checkbox"   
                    onChange={handleChange}   
                    />
                    <label className="checkbox" onClick={changeCheck} >
                        <div className="trace"></div>
                        <div className="trace"></div>
                        <div className="trace"></div>
                    </label>
                    <div className="menu"></div>
                    <nav className="menu-items">
                        <ul>
                            <li>
                                <a id="sobre" onClick={closeMenu} href="#sobremin">Sobre mim</a>
                            </li>
                            <li>
                                <a id="projects" onClick={closeMenu} href="#myProjects">Meu Projeto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Header />            
        </header>
      );
}

export default Menu;