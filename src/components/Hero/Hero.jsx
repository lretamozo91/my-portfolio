import perfil from '../../assets/perfil.png'
import { TypeAnimation } from 'react-type-animation'
import './styles.css'

export const Hero = () => {
  return (
    <section className="hero pt-5" id='hero'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <img src={perfil} alt="" className='perfil-img' />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className='text-center my-4'>
              <h1>Hola, soy Luis Retamozo</h1>
              <TypeAnimation
                sequence={[
                  'Desarrollador Front-end',
                  2000, // espera 2 segundos
                  'ReactJS / React Native Developer',
                  2000,
                  '',   // borra el texto
                  500
                ]}
                wrapper="h1"
                cursor={true}
                repeat={Infinity} // no repetir
                speed={50}
                style={{ display: 'inline-block', color: '#D64545' }}
              />
              <p className='mb-4'>Apasionado por la creación de aplicaciones móviles, web apps y landing pages modernas y escalables.</p>
              <div className="d-flex justify-content-center content-button">
                <a href="#contact" className='btn btn-primary me-4'>Contacto</a>
                <a href="/CV_Luis_Retamozo.pdf" target="_blank" rel="noopener noreferrer" className='btn btn-secondary'>Ver CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
