import { useState } from "react";

function Services() {

  const [index, setIndex] = useState(0);

  const services = [
    {
      title: "Core Equipment",
      image: "/Core Equipment Access.jpg",
    },
    {
      title: "Group Fitness",
      image: "/images/gym2.jpg",
    },
    {
      title: "Personal Training",
      image: "/images/gym3.jpg",
    },
    {
      title: "Energy Drinks",
      image: "/images/gym4.jpg",
    },
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <section className="services">

      <h2 className="services-title">Our Services</h2>

      <div className="slider">

        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>

        <div
          className="slides"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {services.map((service, i) => (
            <div className="slide" key={i}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>

      </div>

    </section>
  );
}

export default Services;