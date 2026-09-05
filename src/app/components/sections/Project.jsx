import Image from "next/image";

import projects from "../../data/projects";
export default function Project() {
  return (
    <>
      {projects.map((item, index) => (
        <div key={index}>
          <Image src={item.imageURL} alt="project image" height={50} width={50}/>
          <h3>{item.Name}</h3>
          <h5>{item.description}</h5>

          <ul>
            {item.stack.map((stackItem, index) => (
              <li key={index}>{stackItem}</li>
            ))}
          </ul>
          <a href={item.liveDemo}>Live Demo</a>
        <a href={item.githubRepo} >Source Code</a>
        </div>
      ))}
    </>
  );
}
