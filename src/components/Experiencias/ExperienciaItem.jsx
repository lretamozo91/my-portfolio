
export const ExperienciaItem = ({imgIcon, imgAlt, companyName, dateMode, dateMode2, workstation, descriptions }) => {
  return (
    <>
      <div className={`col-md-3 pb-md-5 text-md-end pe-md-5 timeline-exp`}>
        {imgIcon && <img src={imgIcon} alt={imgAlt} width={50} className="rounded" />}
        {companyName && <h3 className="company-name">{ companyName }</h3>}
        <p className="text-red-color">{dateMode}</p>
        {dateMode2 && <p className="text-red-color">{dateMode2}</p>}
      </div>
      <div className={`col-md-9 pb-3 pb-md-5 ps-md-5`}>
        <h5>{workstation}</h5>
        <ul>
          {descriptions.map(description => (
            <li key={description} className="m-0">{description}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
