import { FaLaptopCode, FaMobileAlt, FaUserCog } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import './styles.css'

export const Servicios = () => {
  return (
    <section className="servicios" id='services'>
      <div className="container py-5">
        <h1 className='mb-5 text-center'>Servicios</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="row g-0">
                <div className="col-md-2">
                  <div className="card-icon d-flex justify-content-center align-content-center p-3 pe-0">
                    <FaMobileAlt color="#C73232" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h3 className="card-title">Desarrollo de Apps móviles (React Native)</h3>
                    <p className="lead card-text">Desarrollo aplicaciones móviles rápidas, modernas y optimizadas con React Native. Desde el diseño hasta la implementación, construyo experiencias fluidas y funcionales para Android y iOS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="row g-0">
                <div className="col-md-2">
                  <div className="card-icon d-flex justify-content-center align-content-center p-3 pe-0">
                    <FaLaptopCode color="#C73232" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h3 className="card-title">Desarrollo de Web Apps (ReactJS / NextJS)</h3>
                    <p className="lead card-text">Creo aplicaciones web dinámicas, escalables y de alto rendimiento utilizando ReactJS y NextJS. Arquitecturas sólidas, interfaces intuitivas y soluciones a medida para tu proyecto.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="row g-0">
                <div className="col-md-2">
                  <div className="card-icon d-flex justify-content-center align-content-center p-3 pe-0">
                    <HiOutlineDesktopComputer color="#C73232" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h3 className="card-title">Landing pages para emprendimientos (WordPress / ReactJS)</h3>
                    <p className="lead card-text">Desarrollo landing pages profesionales enfocadas en conversión y presencia digital. Diseño moderno, carga rápida y totalmente adaptadas a las necesidades de tu emprendimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="row g-0">
                <div className="col-md-2">
                  <div className="card-icon d-flex justify-content-center align-content-center p-3 pe-0">
                    <FaUserCog color="#C73232" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h3 className="card-title">Consultoría y soporte técnico para proyectos existentes</h3>
                    <p className="lead card-text">Brindo asistencia técnica, mejoras, mantenimiento y optimización de proyectos en curso. Te ayudo a resolver problemas, implementar nuevas funcionalidades y escalar tu producto.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
