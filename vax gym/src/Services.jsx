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
      image: "/Group Fitness Classes.jpg",
    },
    {
      title: "Personal Training",
      image: "/Personalized Training.jpg",
    },
    {
      title: "Wellness and Recovery Amenities",
      image: "Wellness and Recovery Amenities.jpg",
    },
    {
      title: "Specialty Programs",
      image: "/Specialty Programs.jpg",
    },
    {
      title: "Tech and Modern Amenities",
      image: "/Tech and Modern Amenities.jpg",
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

      <h1 className="services-title">Our Services</h1>

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