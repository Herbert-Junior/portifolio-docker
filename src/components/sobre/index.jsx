import meImg from '../../assets/imgs/me.png';
import './style.css'

function Sobre(){

    return(
        <div className="container">
            <div className="row">
                <div className="card mb-3 cardMe">
                <a id="sobremin"></a>
                <img src={meImg} className="card-img-top meImg" alt="Foto do perfil de Herbert Roberti Júnior" />
                <div className="card-body cardBodyMe">
                    <h5 className="card-title mb-3">Herbert Roberti Júnior</h5>
                    <p className="card-text">Formado em Desenvolvimento de sistema para web na Faculdade IBTA, 
                    aproveitei o conhecimento acadêmico e cursos extra-currículares para desenvolver aplicações
                    das quais tinha curiosidade.</p>
                    <p className="card-text">Começei e segui firme em PHP, porém, amo de paixão Java.</p>
                    <p className="card-text">Atualmente, trabalho com Laravel, Javascript, MySQL, AWS e outras
                    tecnologias.</p>
                    <p className="card-text">Conhecimento em muitas tecnologias, mas, destaco:
                     Spring Boot - VueJS - ReactJS - SQL-Server - .Net - Azure - Métodos Agéis</p>
                    <p className="card-text"><small className="text-muted">21/08/2022</small></p>
                </div>
                </div>

            </div>
        </div>
    );

}
export default Sobre;