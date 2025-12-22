import { RiNextjsLine } from 'react-icons/ri';
import { ReactSvg } from '../../assets/svg/React';
import { JavaScriptSvg } from '../../assets/svg/JavaScriptSvg';
import { TailwindSvg } from '../../assets/svg/TailwindSvg';
import { BootstrapSvg } from '../../assets/svg/BootstrapSvg';
import { NodeSvg } from '../../assets/svg/NodeSvg';
import { PostmanSvg } from '../../assets/svg/PostmanSvg';
import { VisualStudioSvg } from '../../assets/svg/VisualStudioSvg';
import { MySqlSvg } from '../../assets/svg/MySqlSvg';
import { PostgreSvg } from '../../assets/svg/PostgreSvg';
import { MongoSvg } from '../../assets/svg/MongoSvg';
import { ApiRestSvg } from '../../assets/svg/ApiRestSvg';
import { HtmlSvg } from '../../assets/svg/HtmlSvg';
import { TypeScriptSvg } from '../../assets/svg/TypeScriptSvg';
import { CssSvg } from '../../assets/svg/CssSvg';
import { SassSvg } from '../../assets/svg/SassSvg';
import { JQuerySvg } from '../../assets/svg/JQuerySvg';
import { ReduxSvg } from '../../assets/svg/ReduxSvg';
import { ExpoSvg } from '../../assets/svg/ExpoSvg';
import { AxiosSvg } from '../../assets/svg/AxiosSvg';
import { GitSvg } from '../../assets/svg/GitSvg';
import { JestSvg } from '../../assets/svg/JestSvg';
import { FirebaseSvg } from '../../assets/svg/FirebaseSvg';
import { WordpressSvg } from '../../assets/svg/WordpressSvg';
import { DrupalSvg } from '../../assets/svg/DrupalSvg';
import './styles.css';

export const Habilidades = () => {
  return (
    <section className="habilidades" id='skills'>
      <div className="container py-5 text-center">
        <h1 className='mb-5'>Tecnologias y habilidades</h1>
        <div className="row">
          <div className="col-md-6 col-xl-4 order-2 order-xl-1 mb-3">
            <div className="content-hab transition border border-3 py-3 border-3 py-3 rounded-5">
              <h2 className='mb-3'>Lenguajes</h2>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <span className="span-content"><HtmlSvg />&nbsp;&nbsp;HTML</span>
                <span className="span-content"><CssSvg />&nbsp;&nbsp;CSS</span>
                <span className="span-content"><JavaScriptSvg />&nbsp;&nbsp;JavaScript</span>
                <span className="span-content"><TypeScriptSvg />&nbsp;&nbsp;TypeScript</span>
                <span className="span-content"><SassSvg />&nbsp;&nbsp;Sass</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 order-1 order-xl-2 mb-3">
            <div className="img-habilidades rounded-5 h-100"></div>
          </div>
          <div className="col-md-6 col-xl-4 order-3 mb-3">
            <div className="content-hab transition border border-3 py-3 rounded-5">
              <h2 className='mb-3'>Frameworks / Librerías</h2>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <span className="span-content"><ReactSvg />&nbsp;&nbsp;React Native</span>
                <span className="span-content"><ReactSvg />&nbsp;&nbsp;ReactJS</span>
                <span className="span-content"><RiNextjsLine size={30} color="#F7F7F7" />&nbsp;&nbsp;Next.js</span>
                <span className="span-content"><ExpoSvg />&nbsp;&nbsp;Expo</span>
                <span className="span-content"><AxiosSvg />&nbsp;&nbsp;Axios</span>
                <span className="span-content"><TailwindSvg />&nbsp;&nbsp;Tailwind</span>
                <span className="span-content"><ReduxSvg />&nbsp;&nbsp;Redux Toolkit</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 order-4 mb-3">
            <div className="content-hab transition border border-3 py-3 rounded-5">
              <h2 className='mb-3'>Bases de datos</h2>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <span className="span-content"><FirebaseSvg />&nbsp;&nbsp;Firebase</span>
                <span className="span-content"><MongoSvg />&nbsp;&nbsp;MongoDB</span>
                <span className="span-content"><MySqlSvg />&nbsp;&nbsp;MySql</span>
                <span className="span-content"><PostgreSvg />&nbsp;&nbsp;Postgresql</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 order-5 mb-3">
            <div className="content-hab transition border border-3 py-3 rounded-5">
              <h2 className='mb-3'>Herramientas</h2>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <span className="span-content"><GitSvg />&nbsp;&nbsp;Git / GitHub</span>
                <span className="span-content"><JestSvg />&nbsp;&nbsp;Jest</span>
                <span className="span-content"><PostmanSvg />&nbsp;&nbsp;Postman</span>
                <span className="span-content"><VisualStudioSvg />&nbsp;&nbsp;VS Code</span>
                <span className="span-content"><NodeSvg />&nbsp;&nbsp;Node.js</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 order-5 mb-3">
            <div className="content-hab transition border border-3 py-3 rounded-5">
              <h2 className='mb-3'>Otras</h2>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <span className="span-content"><DrupalSvg />&nbsp;&nbsp;Drupal</span>
                <span className="span-content"><WordpressSvg />&nbsp;&nbsp;WordPress</span>
                <span className="span-content"><BootstrapSvg />&nbsp;&nbsp;Bootstrap</span>
                <span className="span-content"><ApiRestSvg />&nbsp;&nbsp;API REST</span>
                <span className="span-content"><JQuerySvg />&nbsp;&nbsp;jQuery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
