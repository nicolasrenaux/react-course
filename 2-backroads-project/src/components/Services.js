import Title from "./Title"
import { servicesData } from "../data"
import Service from "./Service"

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
        <div className="section-center services-center">

          {servicesData.map((service) => {
           return <Service {...service} key={service.id}/>
          })}
        </div>
      </section>
  )
}
export default Services