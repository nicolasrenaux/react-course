import { toursData } from "../data"

const Tours = () => {
  return (
    <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          {toursData.map((tour) =>{
            return(
              <article className="tour-card" key={tour.id}>
            <div className="tour-img-container">
              <img src={tour.image} className="tour-img" alt={tour.title} />
              <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.tourTitle}</h4>
              </div>
              <p>
                {tour.info}
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {tour.tourCountry}
                </p>
                <p>{tour.duration} days</p>
                <p>from ${tour.tourPrice}</p>
              </div>
            </div>
          </article>
            )
          })}
        </div>
      </section>
  )
}
export default Tours