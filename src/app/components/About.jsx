export default function About() {
  function downloadCv() {
    alert("the download cv button is clicked!");
  }
  return (
    <>
      <div>
        {" "}
        <h2>About Me</h2>
        <p>
          this is my about me section.currently i dont have an insight what it
          should include, what to mention what to highlight but i know it gonna
          reflect my experience within the past year.{" "}
        </p>
        <a href="/resume/Jana AL Abed CV.pdf" download="Jana Al Abed CV">
          download the cv
        </a>
      </div>
    </>
  );
}
