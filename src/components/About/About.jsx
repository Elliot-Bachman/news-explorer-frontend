import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img
          src="/assets/images/Self-Picture.jpg"
          alt="Author portrait"
          className="about__image"
        />
      </div>
      <div className="about__text-wrapper">
        <div className="about__info">
          <h3 className="about__title">About the author</h3>
          <p className="about__paragraph">
            My name is Elliot Bachman. I am an upcoming full stack software
            engineer proficient in JavaScript, React, Express, Node, HTML, CSS.
            I am currently enrolled in the Full Stack Developer program at
            TripleTen. I look forward to learning more about software
            development in the future!
          </p>
          <p className="about__paragraph">
            I look forward to learning more about software development in the
            future!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
