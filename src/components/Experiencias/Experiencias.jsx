import { ExperienciaItem } from "./ExperienciaItem"
import { ExperienciasData } from "./experienciasData"
import './styles.css'

export const Experiencias = () => {
  return (
    <section className="experiencias py-5" id='experience'>
      <div className="container pb-5">
        <h1 className='text-center'>Experiencia laboral</h1>
      </div>
      <div className="container content-exp py-5">
        { ExperienciasData.map( exp => (
          <div key={exp.id} className="row">
            <ExperienciaItem 
              imgIcon={exp.imgIcon}
              imgAlt={exp.imgAlt} 
              companyName={exp.companyName} 
              dateMode={exp.dateMode} 
              dateMode2={exp.dateMode2 ? exp.dateMode2 : ''} 
              workstation={exp.workstation} 
              descriptions={exp.descriptions}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
