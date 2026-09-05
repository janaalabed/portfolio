import skills from "../../data/skills";

export default function Skills() {
  return (
    <>
      <section id="skills">
        {skills.map((item, index) => (
          <div key={index}>
            <h3>item.category</h3>
            {item.skills.map((skill, index) => (
              <ul key={index}>
                <li>{skill}</li>
              </ul>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
