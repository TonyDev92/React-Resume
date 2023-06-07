import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { CvContext } from './shared/cv.context';
import Home from './pages/home/Home';
import Education from './pages/education/Education';
import Experience from './pages/experience/Experience';
import About from './pages/about/About';

function App() {
  const data = {
    contact: {  
      linkedin: "https://www.linkedin.com/in/tonydeveloper/",
      gitHub: "https://github.com/TonyDev92",
      phone: "+34 622939625",
      email: "tonydeveloper92@gmail.com"
    },
    professionalProfile: "Desarrollador con gran capacidad analitica y resolutiva, habil en lagestion del tiempo y recursos, con grandes cualidades de liderazgo y trabajo en equipo",
    aboutMe: "👩‍💻 Desarrollador Full Stack | Apasionado por la Transformación Digital 🌐 | Aprendizaje constante | Trabajo en equipo 🤝 💼 ¡Hola! Soy Tony Carrasco, un apasionado desarrollador Full Stack con experiencia en tecnologías como HTML, CSS, SASS, JavaScript, React, Angular, Node.js, PHP y Symfony. 💻 Mi transición de la hostelería a la programación me ha permitido explorar mi creatividad y llevar mis habilidades al siguiente nivel. ✨ Soy una persona proactiva que se enorgullece de enfrentar nuevos desafíos y superarlos. Me emociona aprender constantemente y estar al tanto de las últimas tendencias tecnológicas. La programación me ha brindado la oportunidad de seguir creciendo y evolucionando en un entorno en constante cambio. 🌟 Además de mi pasión por el desarrollo de software, también disfruto trabajar en equipo y colaborar para alcanzar objetivos comunes. Creo firmemente que el éxito se construye mejor en conjunto, a través de la comunicación abierta y la sinergia entre los miembros del equipo. ⚡ Fuera del mundo tecnológico, me encanta mantenerme activo y en forma a través del deporte. También disfruto sumergirme en libros inspiradores, perderme en la magia del cine y dejarme llevar por la música. Estas pasiones me ayudan a encontrar equilibrio y mantener mi mente abierta a nuevas ideas. 🚀 Si buscas a alguien apasionado, orientado al logro y dispuesto a asumir nuevos retos, ¡estoy aquí para ayudar! Estoy emocionado de seguir creciendo como profesional y contribuir al éxito de proyectos innovadores. ¡Conectemos y hagamos realidad ideas increíbles juntos!",
    languages: [
      {
        es: "castellano: nativo",
        en: "inglés: intermedio",
        ja: "japonés : básico"
      }
    ],
    
    education: [
      {
        qualification: "Full Stack developer",
        school: "Upgrade-Hub",
        hours: "385h",
        date: "01/02/2023 - 11/05/2023"
      },
      {
        qualification: "Certificación en Javascript",
        school: "OpenBootcamp",
        date: "03/13/2023",
        hours: "15h"
      },
      {
        qualification: "Certificación en conceptos de la programación",
        school: "OpenBootcamp",
        date: "1/17/2023",
        hours: "8h"
      },
      {
        qualification: "Introducción a la programación",
        school: "OpenBootcamp",
        date: "1/24/2023",
        hours: "9h",
        url: "./assets/Introducción a la programación.pdf"
      },
      {
        qualification: "Introducción a la inteligencia artificial",
        date: "14/10/2022",
        hours: "180h",
        school: 'Fundación tripartita para la formación en el empleo "FTFE"'
      }
    ],
    experience: [
      {
        occupation: "Full Stack Developer",
        company: "Freelance",
        date: "febrero 2023 - actualmente",
        description: "DESARROLLO DE PROYECTOS PROFESIONALES Y ACADÉMICOS (APLICACIONES Y PÁGINAS WEB RESPONSIVE , DESARROLLADAS EN ANGULAR , REACT, SYMFONY Y NODEJS)"
      },
      {
        occupation: "Camarero",
        company: "Restaurante Tinta Fina & CO",
        date: "Jun 2022 - Nov 2022",
        skills: "Gestión del estrés"
      },
      {
        occupation: "Encargado",
        company: "Restaurante Siloé",
        date: "Jun 2021 - Jun 2022",
        skills: "Gestión de recursos y planificación con Deadlines"
      },
      {
        occupation: "Camarero",
        company: "Restaurante Tendido 1",
        date: "Dic 2018 - Abr 2021",
        skills: "Trabajo bajo presión, tolerancia a la frustración"
      }
    ],
    technologies: [
      { url: "./assets/Angular.svg" },
      { url: "./assets/React.svg"},
      { url: "./assets/axios.svg"},
      { url: "./assets/Css.svg"},
      { url: "./assets/Express.svg"},
      { url: "./assets/git.svg"},
      { url: "./assets/HTML.svg"},
      { url: "./assets/i18next.svg"},
      { url: "./assets/mongodb.svg"},
      { url: "./assets/Nodejs.svg"},
      { url: "./assets/github.svg"},
      { url: "./assets/cors.png"},
      { url: "./assets/nodemon.svg"},
      { url: "./assets/sass.svg"},
      { url: "./assets/typescript.svg"},
      { url: "./assets/symfony-ar21.svg"},
      { url: "./assets/php-horizontal.svg"},
      { url: "./assets/javascript.png"}
      
    ]

  }
  return (
    <CvContext.Provider value={{ data }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </CvContext.Provider>
  );
}

export default App;
