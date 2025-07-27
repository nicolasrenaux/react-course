const Service = (props) => {
  return(
              <article className="service">
            <span className="service-icon">
              <i className={"fas " + props.iconClass + " fa-fw"}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{props.serviceTitle}</h4>
              <p className="service-text">
                {props.serviceText}
              </p>
            </div>
          </article>
            )
}
export default Service