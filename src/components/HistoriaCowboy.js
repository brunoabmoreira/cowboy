import React from "react"
import Menu from './Menu'
import style from "./HistoriaCowboy.css"
import Cowboy from '../imagens/cowboy.png'
import Zemoreiracurimata from '../imagens/zemoreiracurimata.PNG'
import Infancia from '../imagens/infancia.PNG'
import Antaugusto from '../imagens/antaugusto.PNG'
import Galo from '../imagens/galo.png'
import UFC from '../imagens/UFC.png'
import Dourado from '../imagens/dourado.png'
import Fazenda3 from '../imagens/fazenda3.PNG'
import Serra from '../imagens/serra.jpg'


export default function HistoriaCowboy() {

    function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
        var d = new Date,
            ano_atual = d.getFullYear(),
            mes_atual = d.getMonth() + 1,
            dia_atual = d.getDate(),
    
            ano_aniversario = +ano_aniversario,
            mes_aniversario = +mes_aniversario,
            dia_aniversario = +dia_aniversario,
    
            quantos_anos = ano_atual - ano_aniversario;
    
        if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
            quantos_anos--;
        }
    
        return quantos_anos < 0 ? 0 : quantos_anos;
    }

    return (
        <div id="scroll">
            <div id="containerHistoria">
                <Menu />
                    <div className="linhas">
                            <div className="textoHistoriaAf">
                                <h1>O INÍCIO</h1>
                                <p>
                                    Nascido no dia 01/11/1945 em Fortaleza, morou nos seus primeiros dias no Distrito de Curimatã no município Quixadá, sertão cearense, Afonso foi o primeiro filho do casal Elza Lopes Moreira e José Moreira.
                                    Criado próximo aos avós maternos, na fazenda Curimatã, Afonso desde cedo pegou gosto pelas coisas do sertão, veremos adiante que ele saiu do sertão, mas o sertão nunca saiu dele.
                                </p>
                                <br></br>
                                <p>
                                    Na foto está José Moreira, em uma visita feita na Fazenda Curimatã, muitos anos após os avós de Afonso a terem vendido, nessa ocasião, José Moreira também acabou vendendo sua casa que ficava no mesmo terreno, alguns metros distante da casa principal da fazenda, todos acabaram se mudando para Fortaleza, na Rua Antônio Augusto, no bairro da Aldeota.
                                </p>
                                <br></br>
                                <p>
                                    Nessa época, José Moreira também adquiriu um terreno e uma casa no Bairro Bonsucesso, em Fortaleza.
                                    Nesse terreno ele criava alguns animais e passava boa parte dos seus dias.
                                </p>
                            </div>
                            <div className="fotosHistoriaAf">
                                <img src={Zemoreiracurimata}></img>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="fotosHistoriaAf">
                                <img src={Infancia}></img>
                            </div>
                            <div className="textoHistoriaAf">
                                <h1>A INFÂNCIA</h1>
                                <p>
                                    Afonso foi criado junto ao seus avós, como neto mais velho, participava mais das atividades do dia-a-dia da fazenda, chegou a possuir alguns animais, doados pelo seu avô, cavalos, garrotes, e foi nesse período que se apaixonou verdadeiramente pela simplicidade da vida no sertão, pela criação de animais e pela natureza nordestina.
                                </p>
                                <br></br>
                                <p>
                                    Muitas histórias ele conta desse período, a única triste é a de quando seus avós resolveram vender a fazenda, venderam inclusive seus animais, foi aí que percebeu que não era dono de verdade. Mas o amor e o apego pelas coisas do sertão foram fortemente cultivados em seu coração.
                                </p>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="textoHistoriaAf">
                                <h1>A JUVENTUDE</h1>
                                <p>
                                    Afonso passou a morar em Fortaleza, na rua Antonio Augusto - 1525, no bairro da Aldeota, junto de sua mãe, Elza, e de seus irmãos, Moreira, Paula, Martiniano, Francisco, Vicente e Fátima. O seu pai, José Moreira, decidiu morar na casa no Bonsucesso, mas frequentemente visitava à mulher e os filhos.
                                </p>
                                <br></br>
                                <p>
                                    Foi um período de muitas descobertas, novos amigos, jogos de futebol, festas, e estudos. Muitas histórias ele conta desse período, de aventuras, brigas, namoradas e casos de família.
                                </p>
                                <br></br>
                                <p>
                                    Nesse período sua avó ainda morava próximo a ele, em uma casa na mesma rua, exatamente na frente da casa de sua mãe, ele continuou a frequentar muito a casa de sua avó e também de sua tia avó Araguaci.
                                </p>
                                <br></br>
                                <p>
                                    Seus irmãos começaram a trabalhar muito cedo, com destaque para Moreira, que passara em concursos, mas Afonso não pensava em trabalhar, apenas estudar para entrar na sonhada faculdade de Agronomia, sob protestos e pressão dos irmãos, Afonso decidiu mudar-se para a casa do seu pai, no bonsucesso, apesar da tristeza de sua mãe.
                                </p>
                            </div>
                            <div className="fotosHistoriaAf">
                                <img src={Antaugusto}></img>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="fotosHistoriaAf">
                                <img src={Galo}></img>
                            </div>
                            <div className="textoHistoriaAf">
                                <h1>O ENSINO</h1>
                                <p>
                                    Já no Bonsucesso, Afonso precisava se virar para conseguir se alimentar, pois descobriu que seu pai não estava lá, contou com a ajuda de vizinhos e, principalmente, do seu irmão Francisco, que, para ajudar financeiramente seu irmão, pediu para que Afonso cuidasse de galos de sua criação, Hobby que foi incentivado pelo próprio Afonso, anos antes.
                                </p>
                                <br></br>
                                <p>
                                    Nesse período Afonso começou a trabalhar como professor particular, dando aulas para várias crianças e adolescentes do bairro, chegou a montar uma verdadeira sala de aulas dentro de casa para conseguir algum dinheiro. Em um desses dias José Moreira, seu pai, chega em casa e se assusta com a situação.
                                </p>
                                <br></br>
                                <p>
                                    Afonso então pegou gosto pelo ensino, onde, no futuro, se tornaria professor e conheceria o amor de sua vida, sua esposa Isabel. Em razão do amor que adquiriu por lecionar e com muita dedicação, conseguiu ingressar na faculdade de Letras, pela Universidade Federal do Ceará, onde,  durante esse período, conseguiu ensinar em alguns colégios da capital, como o Colégio Capistrano de Abreu e o General Osório, foi, inclusive, professor de seu irmão Moreira e de sua futura esposa Isabel.
                                </p>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="textoHistoriaAf">
                                <h1>A UNIVERSIDADE</h1>
                                <p>
                                    Durante o período da faculdade, teve que arrumar um outro serviço, contando com a ajuda de sua mãe, passou a trabalhar na antiga COELCE (Companhia Energética do Ceará) como leiturista, muitas histórias ele conta dessa época. 
                                </p>
                                <br></br>
                                <p>
                                Sua vida era muito corrida, alternando entre os estudos da faculdade, o serviço de leiturista e as aulas. Casou-se e tornou-se pai, Rebeka foi sua primeira filha, vivia com sua esposa Isabel, morando de aluguél com muitas dificuldades, que aumentaram com o nascimento do segundo filho, Rodrigo. Nesse período resolveu tentar novamente o vestibular, ainda sonhava com a faculdade de Agronomia e em ter sua própria fazenda, com seus animais e em novamente viver uma vida no sertão. 
                                </p>
                                <br></br>
                                <p>
                                    Afonso então consegue ingressar na faculdade de Agronomia, pela Universidade Federal do Ceará, o que já estava difícil fica agora um pouco pior, a faculdade era muito difícil, muita matemática e muita física, e ele não sabia para que servia tantos cálculos se o que ele queria era criar bode, conta em uma de suas histórias.
                                </p>
                                <br></br>
                                <p>
                                    Aos "trancos e barrancos" Afonso se formou em agronomia. Foi então que uma grande oportunidade surgiu em sua vida, um concurso na COELCE para uma vaga de Engenheiro Argônomo. Na época, ainda como leiturista, teve que escutar a seguinte frase de um dos funcionários de auto escalão da COELCE: "quem nasce para cangalha, nunca chegará à sela." e isso teve um efeito contrário, o incentivou.
                                </p>
                            </div>
                            <div className="fotosHistoriaAf">
                                <img src={UFC}></img>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="fotosHistoriaAf">
                                <img src={Dourado}></img>
                            </div>
                            <div className="textoHistoriaAf">
                                <h1>A MUDANÇA DE VIDA</h1>
                                <p>
                                    Afonso fora aprovado no concurso para Engenheiro Agronomo da COELCE, nesse período, junto de sua esposa, saíram do aluguél adquirindo um imóvel na Rua Tomás Acioli, número 340, no bairro Joaquim Távora, Na ocasião já tinha dois filhos, Rebeka e Rodrigo, e nesse período, nasceram mais dois filhos, Bruno e Monalisa.
                                </p>
                                <br></br>
                                <p>
                                    Afonso passou a viajar pela COELCE em projetos de energia solar, conseguiu juntar um bom dinheiro e finalmente realizou seu sonho, comprar uma propriedade no interior e voltar a criar seus animais. Comprou um sítio no município de Guaiúba, no distrito do Dourado. O Sítio ficou conhecido como Sítio "Rerobrunalisa" em homenagem aos seus filhos, mais todos chamavam mesmo de Sítio Dourado.
                                </p>
                                <br></br>
                                <p>
                                    Lá ele iniciou suas criações: porcos, vacas, carneiros, galinhas, capotes e diversos outros animais. Construiu um açúde na data de nascimento do seu filho Bruno e reuniu a família toda, por muitos anos, nesse sítio.
                                </p>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="textoHistoriaAf">
                                <h1>A APOSENTADORIA</h1>
                                <p>
                                    Afonso então se aposenta da COELCE e assume definitivamente seu personagem "O Cowboy", resolve vender o sítio e realizar a compra de uma fazenda e, após muitas pesquisas, ele encontra o local, no município de Itapiúna, distrito de caio prado, ele encontrou sua nova morada. A fazenda já teve muitos nomes mas todos a conhecem atualmente como "A Fazenda do Cowboy" pois, Afonso, é conhecido por onde passa como "o Cowboy" em razão de seu estilo diferente.
                                </p>
                                <br></br>
                                <p>
                                    Na fazenda foram muitas aventuras, comemorou seus aniversários a partir dos 50 anos, levou filhos e sobrinhos durante as férias escolares e em vários feriados, deu sequência à criação de seus animais, agora com mais espaço para pastagem e foi lá também onde começou a compor sua canções, escrever suas poesias e curtir, em várias ocasiões, sua solitude.
                                </p>
                            </div>
                            <div className="fotosHistoriaAf">
                                <img src={Fazenda3}></img>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="fotosHistoriaAf">
                                <img src={Serra}></img>
                            </div>
                            <div className="textoHistoriaAf">
                                <h1>DIAS ATUAIS</h1>
                                <p>
                                    Por influência de sua mãe, Elza. Afonso resolveu adquirir outro imóvel, pois sua mãe sempre o pedia, meu filho, compre uma casa na serra, realizando esse sonho de sua mãe, que tornou-se seu, ele realiza a compra de uma casa na serra de baturité, próximo a Guaramiranga e Mulungu e a batiza de "Cantinho do Vovô e da Vovó", local agradável para reunir familiares e amigos.
                                </p>
                                <br></br>
                                <p>
                                    Afonso atualmente está com <b>{idade(1945,12,1)}</b> anos, continua com sua vida simples e dedicada à família, permanece com suas criações na fazenda, suas plantas na serra, seus filmes de faroeste na cidade, suas incursões quase diárias ao centro, em busca de novos filmes, músicas, enfeites para seus chapéus, e histórias. 
                                </p>
                            </div>
                    </div>    
            </div>
        </div>
    )
}