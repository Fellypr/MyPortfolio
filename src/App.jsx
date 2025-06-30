import "./App.css";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { TbBrandGithub } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [Dialogo, setDialogo] = useState(false);

  function abrirDialogo() {
    setDialogo(true);
  }
  function fecharDialogo() {
    setDialogo(false);
  }

  return (
    <body>
      <header id="Header">
        <nav>
          <ul>
            <li>
              <a href="#AboutMe">Sobre mim</a>
            </li>
            <li>
              <a href="#skills">Habilidades e Ferramentas</a>
            </li>
            <li>
              <a href="#Project">Projetos</a>
            </li>
            <li>
              <a href="#Education">Formação</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="AboutMe">
        <div className="InformationAboutMe">
          <h1>Olá, sou Fallype Kenned, e sou um desenvolvedor web full stack.</h1>
          <br />
          <p>
            Sou um desenvolvedor full stack júnior com habilidades em React.js,
            C# (.NET) e SQL Server. Gosto de transformar ideias em sistemas
            funcionais, responsivos e bem estruturados. Atualmente, estou
            expandindo minhas habilidades e buscando oportunidades para crescer
            e contribuir com projetos do mundo real.
          </p>
        </div>
        <picture></picture>
      </section>

      <section id="skills">
        <h1 className="Title" data-aos="flip-left">
          Minhas Habilidades & Ferramentas
        </h1>
        <div className="SkillsTools" data-aos="fade-up">
          <div className="ProgrammingLanguages">
            <p>Linguagens de Programação</p>
            <div className="LanguagesContainer" data-aos="zoom-in">
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  width={70}
                  height={70}
                />
              </div>
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
                  width={70}
                  height={70}
                />
              </div>
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>

          <div className="ProgrammingLanguages" data-aos="fade-up">
            <p>Ferramentas</p>
            <div className="LanguagesContainer" data-aos="zoom-in">
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  width={70}
                  height={70}
                />
              </div>
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  width={70}
                  height={70}
                />
              </div>
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Project">
        <h1 className="Title" data-aos="fade-up">
          Meus Principais Projetos
        </h1>
        <div className="ProjectsContainer" data-aos="fade-up">
          <div className="ProjectsCard">
            <picture>
              <img
                src="img/Fabiana Perfumaria - Brave 16_06_2025 14_54_45.png"
                alt=""
                width={100}
                height={100}
              />
            </picture>
            <p className="ProjectTitle">Sistema de Gerenciamento de Loja</p>
            <p>
              Este projeto simula um sistema completo de vendas para loja,
              reunindo diversas funcionalidades que refletem um sistema real de
              ponto de venda (PDV). O objetivo foi praticar o desenvolvimento
              full stack, com foco em organização, integração entre front-end e
              back-end, e operações de CRUD.
            </p>
            <button className="More" onClick={abrirDialogo}>
              Mais Detalhes
            </button>
          </div>
          {Dialogo && (
            <div className="DialogoContainer">
              <div className="Dialogo">
                <p>
                  🛒 Atualmente, o sistema está em uso real, rodando localmente
                  na máquina da loja, com banco de dados SQLServer também local.
                  <br />
                  <br />
                  <strong>Funcionalidades principais:</strong> <br />
                  - Cadastro, edição e listagem de clientes <br />
                  - Registro e atualização de clientes <br />
                  - Simulação de vendas com cálculo de desconto, troco e
                  atualização automática do estoque <br />- Controle de produtos
                  vendidos e histórico de movimentações <br /> <br />
                  📎 Observação: O sistema está instalado e funcionando
                  localmente na loja, por isso não está acessível online, mas o
                  código-fonte está disponível no GitHub com instruções para
                  rodar localmente.
                </p>
                <button onClick={fecharDialogo}>
                  <MdCancel size={30} />
                </button>
              </div>
            </div>
          )}

          <div className="ProjectsCard" data-aos="fade-up">
            <picture>
              <img
                src="img/Filmes Flix - Brave 11_06_2025 21_03_32.png"
                alt=""
                width={100}
                height={100}
              />
            </picture>
            <p className="ProjectTitle">Catálogo de Filmes com Busca</p>
            <p>
              Este projeto simula um catálogo de filmes, permitindo ao usuário
              pesquisar pelo nome de um filme e visualizar informações
              detalhadas, como sinopse, ano de lançamento, gênero e avaliação do
              filme com base na API The Movie Database.
            </p>
            <button>
              <a
                href="https://fellypr.github.io/FilmesFlixInReact/"
                target="_blank"
              >
                Visitar Site
              </a>
            </button>
          </div>

          <div className="ProjectsCard">
            <picture>
              <img
                src="img/Vite + React - Brave 10_06_2025 15_01_58.png"
                alt=""
                width={100}
                height={100}
              />
            </picture>
            <p className="ProjectTitle">Consulta de Clima por Cidade</p>
            <p>
              Esse projeto permite ao usuário buscar a previsão do tempo de
              qualquer cidade digitando seu nome. A aplicação consome uma API de
              clima (como a OpenWeatherMap) para exibir dados como temperatura
              atual.
            </p>
            <button>
              <a
                href="https://fellypr.github.io/Weather_Forecast_With_React/"
                target="_blank"
              >
                Visitar Site
              </a>
            </button>
          </div>
          <div className="ProjectsCard">
            <picture>
              <img
                src="img/Buscador de Cep - Brave 16_06_2025 14_20_13.png"
                alt=""
                width={100}
                height={100}
              />
            </picture>
            <p className="ProjectTitle">Consulta de Endereço por CEP</p>
            <p>
              Esse projeto foi desenvolvido com o objetivo de praticar a
              integração entre front-end e APIs públicas. A aplicação permite ao
              usuário digitar um CEP e, automaticamente, exibe as informações de
              endereço correspondentes (rua, bairro, cidade, estado, etc).
            </p>
            <button>Visitar Site</button>
          </div>
        </div>
      </section>
      <section id="Education">
        <h1 className="TitleEducation" data-aos="fade-up">
          Minha trajetória
        </h1>
        <div className="EduicationContainer">
          <div className="EduicationCard" data-aos="fade-up">
            <p className="EduicationYear">2022</p>
            <p>
              No Final de 2022, participei de uma palestra na minha cidade que
              abordava as inovações na área da tecnologia. Foi ali que percebi o
              quanto a tecnologia é capaz de transformar o mundo ao nosso redor.
              A partir daquele momento, despertei meu interesse pela
              programação. Logo depois, comecei a pesquisar como me tornar um
              programador — e foi aí que iniciei meus estudos sobre os
              fundamentos da programação.
            </p>
          </div>
          <div className="EduicationCard" data-aos="fade-up">
            <p className="EduicationYear">2023</p>
            <p>
              Já no ano de 2023, com o básico da programação em mente, decidi
              escolher minha primeira linguagem de programação. Percebi que
              seria melhor começar com uma linguagem mais acessível para me
              familiarizar com os conceitos, e foi então que optei pelo Python.
              Na metade do ano, eu já tinha uma boa noção sobre variáveis,
              listas, funções e outros fundamentos importantes. Foi nesse
              momento que resolvi dar um passo além: definir que tipo de
              programador eu queria ser. Escolhi seguir o caminho do
              desenvolvimento web. Com essa decisão, comecei a estudar HTML e
              CSS por meio do canal Curso em Vídeo, do professor Gustavo
              Guanabara, no YouTube. Isso marcou uma nova fase da minha jornada
              na programação.
            </p>
          </div>
          <div className="EduicationCard" data-aos="fade-up">
            <p className="EduicationYear">2024</p>
            <p>
              Em 2024, enfrentei um ano mais desafiador. Já havia concluído o
              ensino médio em 2023 e estava determinado a buscar uma vaga de
              estágio como desenvolvedor web. No entanto, acabei me perdendo no
              meio do caminho — fiquei muito tempo focado apenas em HTML, CSS e
              JavaScript, e comecei a me sentir sem direção. Foi então que
              encontrei um curso de Desenvolvedor Full Stack na plataforma da
              DIO, e esse foi o ponto de virada no meu aprendizado. Lá, aprendi
              React, APIs, e também como trabalhar com banco de dados (SQL
              Server). Além disso, tive contato com versionamento de código e
              deploy na Azure — conhecimentos que ampliaram minha visão sobre o
              mundo da programação e me deram mais confiança para seguir em
              frente.
            </p>
          </div>
          <div className="EduicationCard" data-aos="fade-up">
            <p className="EduicationYear">2025</p>
            <p>
              Atualmente, ainda estou em busca da minha primeira oportunidade na
              área, mas sigo firme, sem desanimar. Sei que, a cada ano, tenho
              evoluído significativamente. Já desenvolvi diversos projetos, e um
              dos mais desafiadores foi a criação de um sistema web para uma
              loja de perfumes — uma experiência muito gratificante, onde
              aprendi bastante e utilizei ferramentas que nem imaginava dominar
              até então. Neste momento, estou no terceiro período da faculdade
              de Engenharia de Software e busco constantemente ampliar meus
              conhecimentos. Atualmente, estou me dedicando ao aprimoramento do
              meu inglês e aprendendo sobre Kali Linux, com o objetivo de tornar
              os sites que desenvolvo ainda mais seguros.
            </p>
          </div>
        </div>
      </section>

      <footer id="Contact">
        <div className="ContactContainer">
          <h1>Entre em Contato</h1>
          <p>
            Na minha trajetória como desenvolvedor iniciante, sempre procuro
            aprimorar minhas habilidades, colocando em prática o que aprendi em
            projetos concretos e evoluindo junto com a equipe, com
            comprometimento e grande vontade de aprender cada vez mais.
          </p>
          <div className="ContactIcons">
            <a href="https://github.com/Fellypr" target="_blank">
              <TbBrandGithub size={40} />
            </a>
            <a
              href="https://www.instagram.com/fellype_emiliano/"
              target="_blank"
            >
              <FaInstagramSquare size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/fellype-kenned-05bb94319/"
              target="_blank"
            >
              <CiLinkedin size={40} />
            </a>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;