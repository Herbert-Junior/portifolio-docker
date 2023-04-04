import './style.css';

function Footer(){
    return(
        <div className="container ctnFooter">
            <div className="row" id='rowFooter'>
                <div id="divFooter">
                    <h3>Referências</h3>
                    <ul>
                    <li><span id="yut"></span><a href="https://www.youtube.com/c/EspecializatiBr" target="_blank" rel="noreferrer"> Canal EspecializaTI</a></li>
                    <li><span id="yut"></span><a href="https://www.youtube.com/c/MatheusDalPizzol" target="_blank" rel="noreferrer">Canal Hard Coding</a></li>
                    <li><a href="https://web.dio.me/" target="_blank" rel="noopener noreferrer">Cursos e Bootcamps - DIO</a></li>
                    </ul>                    
                </div>
            </div>
        </div>
    );

}

export default Footer;