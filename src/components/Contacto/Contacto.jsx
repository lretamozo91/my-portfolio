import { useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import emailjs from "emailjs-com";
import './styles.css';

export const Contacto = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w1h1m7r",
        "template_mozl9tk",
        formRef.current,
        "7ggtVI784HeA9iYbf"
      )
      .then(() => {
        alert("Mensaje enviado con éxito");
      })
      .catch(() => {
        alert("Error al enviar el mensaje");
      });
  };

  return (
    <section className="contacto py-5" id="contact">
      <div className="container">
        <div className="content-contact rounded p-5">
          <div className="row">
            <div className="col-md-6 d-flex align-content-center flex-wrap">
              <div>
                <h1 className='mb-4'>Contacto</h1>
                <p className='lead mb-3 pe-3'>¿Tenés un proyecto en mente o necesitás sumar un desarrollador a tu equipo?</p>
                <p className='lead'>Hablemos! Estoy abierto a nuevas oportunidades y desafíos.</p>
              </div>
            </div>
            <div className="col-md-6">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-group mb-3">
                  <label className='text-red-color' htmlFor="formControlInput1">Nombre:</label>
                  <input name='user_name' type="text" className="form-control" id="formControlInput1" placeholder="Ej: Juan Perez" required />
                </div>
                <div className="form-group mb-3">
                  <label className='text-red-color' htmlFor="formControlInput2">Correo electrónico:</label>
                  <input name='user_email' type="email" className="form-control" id="formControlInput2" placeholder="Ej: nombre@ejemplo.com" required />
                </div>
                <div className="form-group mb-3">
                  <label className='text-red-color' htmlFor="formControlInput3">Asunto:</label>
                  <input name='user_asunto' type="text" className="form-control" id="formControlInput3" placeholder="Ej: Necesito un sitio web" required />
                </div>
                <div className="form-group mb-3">
                  <label className='text-red-color' htmlFor="exampleFormControlTextarea1">Mensaje:</label>
                  <textarea name='message' className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <div className="text-center text-md-end">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="content-contact-2 rounded p-4 mt-5">
            <div className="row text-center">
              <div className="col-lg-4">
                <h5><FaPhoneAlt color="#C73232" />&nbsp;&nbsp;+54 9 387 5895202</h5>
              </div>
              <div className="col-lg-4">
                <h5><MdEmail color="#C73232" />&nbsp;&nbsp;lretamozo91@gmail.com</h5>
              </div>
              <div className="col-lg-4">
                <h5><FaLocationDot color="#C73232" />&nbsp;&nbsp;Salta, Argentina - Trabajo remoto</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

