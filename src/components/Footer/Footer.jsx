import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import './styles.css'

export const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pb-4 pb-lg-0">
            <h3 className="text-center text-lg-start m-0"><a href="#hero">Luis Retamozo</a></h3>
          </div>
          <div className="col-lg-4 pb-4 pb-lg-0">
            <p className='m-0 text-center'>&copy; 2025 Luis Retamozo. Todos los derechos reservados.</p>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-between align-items-center w-50 mx-auto mx-lg-0 ms-lg-auto">
              <a className="icon-contact transition" href="https://www.linkedin.com/in/luis-retamozo-b69aa4154/" target='_blank'><FaLinkedin size={20} color="#C73232" /></a>
              <a className="icon-contact transition" href="https://github.com/lretamozo91" target='_blank'><FaGithub size={20} color="#C73232" /></a>
              <a className="icon-contact transition" href="https://wa.me/+543875895202" target='_blank'><FaWhatsapp size={20} color="#C73232" /></a>
              <a className="icon-contact transition" href="mailto:lretamozo91@gmail.com" target='_blank'><HiOutlineMail size={20} color="#C73232" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
