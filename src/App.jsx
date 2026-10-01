import './App.css'
import technologia from "./assets/tecnologia.jpg"

function App() {
  return (
    <>
      <header>
        <p>DESI 2026/V1</p>
        <a href="">Início • </a>
        <a href="">Sobre • </a>
        <a href="">Tecnologias • </a>
        <a href="">Mercado • </a>
        <a href="">Projetos </a>
      </header>
      <body>
        <h1>Transforme ideias em sistemas</h1>
        <p>Desenvolva soluções, aprenda novas tecnologias e construa seu futuro na área de TI</p>
        <button className="btn"> aperte</button>
        <img src={technologia} alt="" />
        <h1>Sobre o curso:</h1>
        <h2>O que é Desenvolvimento de Sistemas?</h2>
        <p className='pe'>Desenvolvimento de Sistemas é a área responsável por criar, testar e manter softwares e aplicações que solucionam problemas e atendem às necessidades dos usuários.</p>
        <h2>Qual o objetivo do curso?</h2>
        <p className='pe'>O objetivo do curso de DESI (Desenvolvimento de Sistemas) é preparar profissionais para criar, desenvolver, testar e manter sistemas e aplicações, utilizando tecnologias de programação.</p>
        <h2>O que um profissional dessa área faz?</h2>
        <p className='pe'>Um profissional de Desenvolvimento de Sistemas cria, testa, mantém e melhora sistemas, aplicativos e sites para solucionar problemas e atender às necessidades dos usuários.
</p>
        <section class="conhecimentos">
    <h2>Conhecimentos Desenvolvidos no Curso</h2>

    <div class="cards">

        <div class="card">
            <h3>Lógica de Programação</h3>
            <p>Aprendemos a desenvolver soluções utilizando lógica e algoritmos.</p>
        </div>

        <div class="card">
            <h3>Desenvolvimento Web</h3>
            <p>Criação de sites e sistemas utilizando tecnologias web.</p>
        </div>

        <div class="card">
            <h3>Frontend</h3>
            <p>Desenvolvimento da parte visual e interativa dos sistemas.</p>
        </div>

        <div class="card">
            <h3>Backend</h3>
            <p>Desenvolvimento da parte responsável pelo funcionamento do sistema.</p>
        </div>

        <div class="card">
            <h3>Banco de Dados</h3>
            <p>Armazenamento, organização e gerenciamento de informações.</p>
        </div>

        <div class="card">
            <h3>Desenvolvimento de APIs</h3>
            <p>Criação de recursos para comunicação entre diferentes sistemas.</p>
        </div>

        <div class="card">
            <h3>Aplicativos</h3>
            <p>Desenvolvimento de aplicações para dispositivos e diferentes plataformas.</p>
        </div>

        <div class="card">
            <h3>Versionamento de Código</h3>
            <p>Utilização de ferramentas como Git e GitHub para controlar alterações.</p>
        </div>

    </div>
</section>
<section class="tecnologias">
    <h2>Tecnologias</h2>
    <p>Algumas tecnologias estudadas no curso de Desenvolvimento de Sistemas:</p>

    <div class="tecnologias-container">

        <div class="tecnologia">
            <h3>HTML</h3>
        </div>

        <div class="tecnologia">
            <h3>CSS</h3>
        </div>

        <div class="tecnologia">
            <h3>JavaScript</h3>
        </div>

        <div class="tecnologia">
            <h3>React</h3>
        </div>

        <div class="tecnologia">
            <h3>Node.js</h3>
        </div>

        <div class="tecnologia">
            <h3>SQL</h3>
        </div>

        <div class="tecnologia">
            <h3>Git</h3>
        </div>

        <div class="tecnologia">
            <h3>GitHub</h3>
        </div>

    </div>
</section>
        <section class="areas">
    <h2>Áreas de Atuação</h2>
    <p>Algumas possibilidades profissionais para quem se forma em Desenvolvimento de Sistemas:</p>

    <div class="areas-container">

        <div class="area">
            <h3>Frontend</h3>
            <p>Criação da parte visual e interativa dos sistemas.</p>
        </div>

        <div class="area">
            <h3>Backend</h3>
            <p>Desenvolvimento da parte lógica e funcional dos sistemas.</p>
        </div>

        <div class="area">
            <h3>Full Stack</h3>
            <p>Atuação tanto no frontend quanto no backend.</p>
        </div>

        <div class="area">
            <h3>Aplicações</h3>
            <p>Desenvolvimento de aplicativos e sistemas.</p>
        </div>

        <div class="area">
            <h3>Banco de Dados</h3>
            <p>Organização e gerenciamento de informações.</p>
        </div>

        <div class="area">
            <h3>Suporte e Manutenção</h3>
            <p>Correção de problemas e manutenção de sistemas.</p>
        </div>

    </div>
</section>
        <section class="projetos">
    <h2>Exemplos de Projetos</h2>
    <p>Alguns sistemas que um desenvolvedor pode criar:</p>

    <div class="projetos-container">

        <div class="projeto">
            <h3>Cadastro de Clientes</h3>
            <p>Sistema para cadastrar e organizar informações de clientes.</p>
        </div>

        <div class="projeto">
            <h3>Sistema de Estoque</h3>
            <p>Controle de produtos, quantidades e movimentações.</p>
        </div>

        <div class="projeto">
            <h3>Agendamentos</h3>
            <p>Aplicação para marcar e organizar horários.</p>
        </div>

        <div class="projeto">
            <h3>Loja Virtual</h3>
            <p>Plataforma para apresentar e vender produtos pela internet.</p>
        </div>

        <div class="projeto">
            <h3>Dashboard Administrativo</h3>
            <p>Painel para visualizar e acompanhar informações do sistema.</p>
        </div>

        <div class="projeto">
            <h3>Aplicativo de Tarefas</h3>
            <p>Aplicativo para criar, organizar e acompanhar tarefas.</p>
        </div>

    </div>
</section>
        <section class="cta">
    <h2>Seu futuro na tecnologia pode começar aqui.</h2>

    <p>
        Conheça o curso Técnico em Desenvolvimento de Sistemas.
    </p>
</section>
      </body>
      <footer>
        <p>DESI 2026/V1</p>
        <p>SENAI</p>
        <p>2026</p>
        <p>Manoella Moura</p>
      </footer>
    </>
  )
}

export default App
