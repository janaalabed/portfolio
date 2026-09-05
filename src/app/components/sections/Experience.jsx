import experiences from "../../data/experience";
export default function Experience() {
  return (
    <>
      <section id="experience">
        {experiences.map((item, index) => (
          <div key={index}>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
            <p>{item.companyName}</p>
            <ul>
              {item.bullets.map((bulletItem, bulletIndex) => (
                <li key={bulletIndex}>{bulletItem}</li>
              ))}
            </ul>
          </div>
        ))}
        ;
      </section>
    </>
  );
}
