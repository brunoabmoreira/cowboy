import React from "react";
import Menu from './Menu';
import style from "./Musicas.css"
import Apolinario from '../imagens/apolinario.PNG'
import Brasil from '../imagens/Brasil.png'
import Cachos from '../imagens/cachos.png'
import Negocio from '../imagens/negocio.png'
import Fazenda from '../imagens/fazenda.PNG'
import Turmaboa from '../imagens/turmaboa.PNG'
import Mariana from '../imagens/mariana.PNG'
import Isabel from '../imagens/isabel.PNG'
import Boanerges from '../imagens/boanerges.PNG'
import Dezoito from '../imagens/dezoito.png'


export default function Musicas() {
    return(
        <div id="scroll">
            <div id="containerMusica">
                <Menu />
                    <div className="linhas">
                        <div className="textoMusica">
                            <h1>O APOLINÁRIO</h1>
                            <br></br>
                            <p>
                                Por trás do lajeiro no "atái" do pereiro nasceu APOLINÁRIO<br />
                                Filho primeiro de "Creuza fateiro" e "Zé da Rosário"<br />
                                Ainda frangote mostrava ter dote pra cabra VALENTE<br />
                                Com sete facadas, botou o fato abaixo de doca Vicente<br />
                            </p>
                            <br></br>
                            <p>
                                Furou Zé Galheiro e capou no terreiro, Chico Nogueira<br />
                                E ainda de quebra emprenhou as três filhas de Juca Barreira<br />
                            </p>
                            <br></br>
                            <p>
                                Ôh,Ôh,Ôh,Ôôôôhhh....O Gonzagão de Januário<br />            
                                Ôh,Ôh,Ôh,Ôôôôhhh....Essa é a canção do Apolinário<br />
                            </p>
                            <br></br>
                            <p>
                                Já homem refeito, veio para cidade, o Apolinário<br />
                                Ainda bestão, encabolecido, com cara de otário<br />
                                Aprendeu forrozar, forró de primeira, pras banda vuá  <br /> 
                                Dançava gingando, pulando e rodando<br />
                                Igual carrapeta solta no ar<br />
                            </p>
                            <br></br>
                            <p>
                                Ôh,Ôh,Ôh,Ôôôôhhh....O Gonzagão de Januário<br />            
                                Ôh,Ôh,Ôh,Ôôôôhhh....Essa é a canção do Apolinário<br />
                            </p>
                            <br></br>
                            <p>
                                Parando de vez, com a bagaceira, o Apolinário<br />
                                Então se juntou com a filha mais bela de Pedro Macário<br />
                                Por fim ele disse que estava de tudo um pouco cansado<br />
                                Mas muito contente com a nova vida de amancebado <br /> 
                            </p>
                            <br></br>
                            <p>
                                Ôh,Ôh,Ôh,Ôôôôhhh....O Gonzagão de Januário<br />            
                                Ôh,Ôh,Ôh,Ôôôôhhh....Essa é a canção do Apolinário<br />  
                            </p>
                        </div>
                        <div className="fotosMusica">
                            <img src={Apolinario}></img>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="fotosMusica">
                            <img src={Brasil}></img>
                        </div>
                        <div className="textoMusica">
                            <h1>BRASIL</h1>
                            <br></br>
                            <p>
                                Brasil, olha meu caro, também sou teu filho<br />
                                Confio muito em ti. Por isso dou duro,<br />
                                Queimo a pestana, não sei o que é dormir.<br />
                            </p>
                            <br></br>
                            <p>
                                Olha parceiro, sou forte, guerreiro,<br />
                                Não quero moleza, sou muito arrojado.<br />
                                Quero na vida ser teu companheiro.<br />
                                Agora te peço: Deixa chover no meu roçado<br />
                            </p>
                            <br></br>
                            <p>
                                Não vivo da rua, não sou viciado<br />
                                Não mato, não roubo, não sou canastrão<br />
                                Não perco meu tempo com papo furado.<br />
                                Sou cabra da peste, nasci no nordeste, sou cidadão<br />
                            </p>
                            <br></br>
                            <p>
                                Brasil, não seja cruel, não seja padrasto.<br />
                                Deixa o meu gado comer no teu pasto<br />
                            </p>
                            <br></br>
                            <p>
                                Cara, me tira desta agronomia<br />
                                Só quero o teu bem<br />
                                Não negue o momento desta parceria<br />
                            </p>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="textoMusica">
                            <h1>A SAUDADE MATA</h1>
                            <br></br>
                            <p>
                                Onde estão os teus cabelos perfumados<br />
                                Longos, cheios, cacheados, onde está você amor?<br />
                                As suas mãos, os seus olhos, o seu carinho,<br />
                                Onde está o seu sorriso tão lindo, encantador.<br />
                            </p>
                            <br></br>
                            <p>
                                A tua ausência me faz falta, me dá tédio<br />
                                Quero saber qual o remédio pra curar tamanha dormir<br />
                                Teus lábios carnudos, bem desenhados<br />
                                Fogosos e milhados<br />
                                Oh meu Deus, onde andas tu<br />
                            </p>
                            <br></br>
                            <p>
                                Ainda me lembro do vestido decotado, até um pouco alongado<br />
                                De um verde quase azul<br />
                                Foste soltando-o e aos poucos me mostrando<br />
                                Segredos e mistérios brotando do corpo nu<br />
                            </p>
                            <br></br>
                            <p>
                                Ai esta saudade mata, esta saudade mata onde está você<br />
                                Ai esta saudade mata, esta saudade mata morro de prazer<br />
                            </p>
                        </div>
                        <div className="fotosMusica">
                            <img src={Cachos}></img>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="fotosMusica">
                            <img src={Negocio}></img>
                        </div>
                        <div className="textoMusica">
                            <h1>O NEGÓCIO</h1>
                            <br></br>
                            <p>
                                Quem levanta o negócio do homem, é mulher nova<br />
                                Quem levanta o negócio do homem, é mulher nova<br />
                            </p>
                            <br></br>
                            <p>
                                Fiz parceria com Maria Luzinete, ela tinha 37, idade muito elevada<br />
                                Associei-me com a Chica Jardilina, ela tinha a perna fina e já era bem cansada<br />
                                A parceria, A sociedade, O investimento só crescia para baixo, como rabo de jumento.<br />
                            </p>
                            <br></br>
                            <p>
                                Então juntei-me com a filha de celeste, 18 anos tinha a peste, que corpinho sedutor<br />
                                Bunda arretada, bem durinha, afilotada e um rosto encantador<br />
                                Aí então tudo logo foi pra frente, Acreditem minha gente<br />
                                É mulher nova ou não é?<br />
                                Tudo melhora, A saudade revigora, fica em fim tudo de pé!<br />
                            </p>
                            <br></br>
                            <p>
                                Quem levanta o negócio do homem, é mulher nova<br/>
                                Quem levanta o negócio do homem, é mulher nova<br />
                            </p>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="textoMusica">
                            <h1>A FAZENDA</h1>
                            <br></br>
                            <p>
                               Lá na fazenda quando chega a madrugada<br/>
                               Vem do mato uma toada, alegrando a solidão<br/>
                               É o sabiá, maestro da alvorada, comandando a passarada<br/>
                               Animando meu sertão<br/>
                            </p>
                            <br></br>
                            <p>
                                Então levanto, pego o violão, dou o tom, tanjo o bordão<br/>
                                Faço verso, faço prosa, caprichando no refrão<br/>
                            </p>
                            <br></br>
                            <p>
                                Ôh, ôh, ôh, ôh.... Sabiá da mata<br/>
                                Ôh, ôh, ôh, ôh.... Mestre azulão<br/>
                                Ôh, ôh, ôh, ôh.... Rouxinol da flauta<br/>
                                Ôh, ôh, ôh, ôh.... Rei currupião<br/>
                            </p>
                            <br></br>
                            <p>
                                Do ribeirão, donde ronca a cachoeira<br/>
                                Sai a bicharada inteira, do Tatu ao Zé furão<br/>
                                É o encontro do homem com a natureza<br/>
                                Mostrando toda a beleza que existe na região<br/>
                            </p>
                            <br></br>
                            <p>
                                Ôh, ôh, ôh, ôh.... Sabiá da mata<br/>
                                Ôh, ôh, ôh, ôh.... Mestre azulão<br/>
                                Ôh, ôh, ôh, ôh.... Rouxinol da flauta<br/>
                                Ôh, ôh, ôh, ôh.... Rei currupião<br/>
                            </p>
                        </div>
                        <div className="fotosMusica">
                            <img src={Fazenda}></img>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="fotosMusica">
                            <img src={Turmaboa}></img>
                        </div>
                        <div className="textoMusica">
                            <h1>A TURMA É BOA</h1>
                            <br></br>
                            <p>
                                Vamos minha gente, vamos lá<br/>
                                Vamos brincar, mas também vamos estudar<br/>
                                A brincadeira é muito boa, é de verdade<br/>
                                Mas não esqueçam nenhum pouco a faculdade<br/>
                            </p>
                            <br></br>
                            <p>
                                Tem o Bruno, Morãozim, Rafaé e Duduzão<br/>
                                Danié, Bomsquim e Rodrigão<br/>
                            </p>
                            <br></br>
                            <p>
                                A turma é boa, é de primeira, é arrojada<br/>
                                No carnaval vai ser bom, vai ser parada<br/>
                                É no pagode, no forró ou mesmo no samba<br/>
                                A turma manja a brincadeira, a turma é bamba<br/>
                            </p>
                            <br></br>
                            <p>
                                A turma é bamba<br/>
                                A turma é bamba<br/>
                                A turma é bamba<br/>
                            </p>
                            <br></br>
                            <p>
                                Vamos brincar, vamos estudar<br/>
                                E todo mundo fica bamba, bamba, bamba<br/>
                            </p>
                            <br></br>
                            <p>
                                Vamos ser todos estudantes de primeira<br/>
                                Pois a vida não está pra brincadeira<br/>
                                A brincadeira é boa, faz parte, tudo bem<br/>
                                Mas sem o estudo, meu amigo, você não é de ninguém<br/>
                            </p>
                            <br></br>
                            <p>
                                A turma é bamba<br/>
                                A turma é bamba<br/>
                                A turma é bamba<br/>
                            </p>
                            <br></br>
                            <p>
                                Vamos brincar, vamos estudar<br/>
                                E todo mundo fica bamba, bamba, bamba<br/>
                            </p>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="textoMusica">
                            <h1>MARIANA EM FAMÍLIA</h1>
                            <br></br>
                            <p>
                               Nesta data completo dois anos<br/>
                               Estou feliz por estar com vocês<br/>
                               Sou sapeca, danada, uma chamavam<br/>
                               Apresento-me sou Mariana<br/>
                               Mariana, Mariana<br/>
                            </p>
                            <br></br>
                            <p>
                               O Vovô, eu brigo com ele<br/>
                               A vovó me ama demais<br/>
                               Tio Bruno é muito bacana<br/>
                               Só ele entende a sobrinha Mariana<br/>
                               Mariana, Mariana<br/>
                            </p>
                            <br></br>
                            <p>
                                Rodrigão é meu tio brigão<br/>
                                Tia Mona é toda elegância<br/>
                                Tô com eles por toda semana<br/>
                                Dou trabalho pois sou Mariana<br/>
                                Mariana, Mariana<br/>
                            </p>
                            <br></br>
                            <p>
                                Minha Mãe é super charmosa<br/>
                                Meu pai é fortão é Lobão<br/>
                                Quero deles um mano ou uma mana<br/>
                                Pra brincar com a irmãzinha Mariana<br/>
                                Mariana, Mariana<br/>
                            </p>
                        </div>
                        <div className="fotosMusica">
                            <img src={Mariana}></img>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="fotosMusica">
                            <img src={Isabel}></img>
                        </div>
                        <div className="textoMusica">
                            <h1>ISABEL</h1>
                            <br></br>
                            <p>
                                Com rosto bonito<br/>
                                Com lábios de mel<br/>
                                São verdes os teus olhos<br/>
                                Querida Isabel<br/>
                            </p>
                            <br></br>
                            <p>
                                Com rosto bonito<br/>
                                Com lábios de mel<br/>
                                São verdes os teus olhos<br/>
                                Querida Isabel<br/>
                            </p>
                            <br></br>
                            <p>
                                As vezes cansado<br/>
                                De tanto lutar<br/>
                                Eu chego em casa<br/>
                                Conforta-me ver, o teu lindo olhar<br/>
                            </p>
                            <br></br>
                            <p>
                                Teus filhos te adoram<br/>
                                Te amam sem fim<br/>
                                São frutos do amor<br/>
                                De ti e de mim<br/>
                            </p>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="textoMusica">
                            <h1>BOANERGES</h1>
                            <br></br>
                            <p>
                                Sabem quem sou?<br/>
                                Não sabem não<br/>
                                Vou lhes dizer<br/>
                                Nasci no Nordeste, Lá no Sertão<br/>
                            </p>
                            <br></br>
                            <p>
                                Sou Boanerges<br/>
                                Filho do vento, e do trovão<br/>
                                Sou Boanerges<br/>
                                Cabra da peste, Briguei de tabefe<br/>
                                Com Lampião<br/>
                            </p>
                            <br></br>
                            <p>
                                Fui bom nadador<br/>
                                Também caçador<br/>
                                Amei Jardilina e Caxitorina, mas foi Catarina<br/>
                                Meu grande amor<br/>
                            </p>
                            <br></br>
                            <p>
                                Sou Boanerges<br/>
                                Filho do vento, e do trovão<br/>
                                Sou Boanerges<br/>
                                Cabra da peste, Briguei de tabefe<br/>
                                Com Lampião<br/>
                            </p>
                            <br></br>
                            <p>
                                Domei touro brabo<br/>
                                Montei em alasão<br/>
                                Plantei nos roçados<br/>
                                E nas capoeiras, fiz muito algodão<br/>
                            </p>
                            <br></br>
                            <p>
                                Sou Boanerges<br/>
                                Filho do vento, e do trovão<br/>
                                Sou Boanerges<br/>
                                Cabra da peste, Briguei de tabefe<br/>
                                Com Lampião<br/>
                            </p>
                            <br></br>
                            <p>
                                Tenho grande família<br/>
                                Com filhos e filhas<br/>
                                De muito valor<br/>
                                Estou velho e cansado<br/>
                                Mas tudo isso eu fiz, com muito amor<br/>
                            </p>
                            <br></br>
                            <p>
                                Sou Boanerges<br/>
                                Filho do vento, e do trovão<br/>
                                Sou Boanerges<br/>
                                Cabra da peste, Briguei de tabefe<br/>
                                Com Lampião<br/>
                            </p>
                        </div>
                        <div className="fotosMusica">
                            <img src={Boanerges}></img>
                        </div>
                    </div>
                    <div className="linhas">
                        <div className="fotosMusica">
                            <img src={Dezoito}></img>
                        </div>
                        <div className="textoMusica">
                            <h1>MULHER É A NOVA</h1>
                            <br></br>
                            <p>
                               Mulher é a nova<br/>
                               Mulher é a nova<br/>
                               Mulher é a nova<br/>
                               Mulher é a nova<br/>
                               Mulher é a nova<br/>
                               Mulher é a nova<br/>
                               Depois dos 30, tá com pé na cova.<br/>
                            </p>
                            <br></br>
                            <p>
                               Pode ser loira, pode ser morena, pode ser crioula<br/>
                               É nessa idade, que ela é boa de rola<br/>
                            </p>
                            <br></br>
                            <p>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Depois dos 30, tá com pé na cova.<br/>
                            </p>
                            <br></br>
                            <p>
                                O Roberto disse<br/>
                                Que a mulher é de 30<br/>
                                Ou de quarenta<br/>
                                Fique com ela!<br/>
                                Que não me aguenta<br/>
                            </p>
                            <br></br>
                            <p>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Mulher é a nova<br/>
                                Depois dos 30, tá com pé na cova.<br/>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}