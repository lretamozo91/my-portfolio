import sobreMi from '../../assets/animado.png';
import './styles.css';

export const SobreMi = () => {
  return (
    <section className="sobre-mi py-5" id='about'>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-7 d-flex align-items-center">
            <div className="bubble transition mb-4 mb-md-0" role="note" aria-label="Globo de texto">
              <h2 className='text-dark'>Este soy yo:</h2>
              <p className="text-dark">Soy <strong>Técnico Universitario en Programación</strong> y me especializo en el desarrollo front-end, con un fuerte enfoque en <strong>ReactJS y React Native</strong>, tecnologías con las que actualmente busco seguir creciendo profesionalmente.</p>
              <p className="text-dark">Cuento con experiencia trabajando en proyectos móviles y web, aplicando buenas prácticas, optimización de componentes, integración con APIs, manejo de estados, Redux Toolkit, React Navigation, Jest y herramientas modernas del ecosistema JavaScript.</p>
              <p className="text-dark">También tengo experiencia previa como desarrollador <strong>front-end en Drupal</strong>, donde trabajé durante más de cuatro años creando interfaces funcionales, implementando módulos, personalizando temas y asegurando una experiencia de usuario sólida. Esta base me aportó disciplina, lógica y un entendimiento profundo del ciclo completo de desarrollo en entornos productivos.</p>
              <p className="text-dark">Soy una persona comprometida con el aprendizaje continuo: actualmente me encuentro ampliando mis conocimientos en backend para fortalecer mi <strong>perfil full-stack</strong> y comprender de punta a punta todo el flujo de una aplicación. Me caracterizo por la responsabilidad, la comunicación clara, la capacidad para resolver problemas y la búsqueda constante de mejorar en cada proyecto.</p>
              <span className="tail" aria-hidden="true"></span>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center">
              <div className="oval">
                <img src={sobreMi} alt="" className='sobre-mi-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}