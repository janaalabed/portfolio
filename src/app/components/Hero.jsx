import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div>
        <Image
          width={50}
          alt="My photo"
          height={50}
          src="/images/personalPhoto.jpg"
        />
        <h3>Jana Al Abed</h3>
      </div>
      <div>
        <h2>Full Stack developer</h2>
        <p>
          i build digital systems and web applications that solve real world
          problems using modern technologies
        </p>
      </div>
      <div>
        <a href="#Projects">View My Projects</a>
      </div>
    </>
  );
}
