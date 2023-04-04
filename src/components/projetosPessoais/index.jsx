import logoBolasImg from '../../assets/imgs/logo_bolas_terceiro.png';
import './style.css'

function ProjetosPessoais(){

    return(
        <div className="container">
            <div className="row">
            <a id="myProjects"></a>
                <div className="card mb-3 cardProjetosPessoais">
                <img src={logoBolasImg} className="card-img-top projetosPessoaisImg" alt="Logo Bolas da Sorte" />
                <div className="card-body cardBodyProjetosPessoais">
                    <a href="https://www.bolasdasorte.com.br" className='mb-3' target="_blank" rel='noreferrer'>
                        <h5 className="card-title">Portal Bolas da Sorte</h5>
                    </a>                    
                    <p className="card-text mt-4">Portal com dados estatísticos das loterias da Caixa Econômica Federal
                    , desenvolvido utilizando VueJS e PHP.</p>
                    <p className="card-text">Portal 100% gratuito, com tecnologias de alto nível.</p>
                    <p className="card-text">Este projeto é uma forma de retribuir para a sociedade, todo o conhecimento
                    e tecnologias que temos acesso de forma livre.</p>                    
                </div>
                </div>

            </div>
        </div>
    );

}
export default ProjetosPessoais;