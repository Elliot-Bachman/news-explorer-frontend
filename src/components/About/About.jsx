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
      <div className="about__info">
        <h3 className="about__title">About the author</h3>
        <p className="about__paragraph">
          Hello, I'm Elliot Bachman. I'm a full stack engineer proficient in
          JavaScript, React, Express, Node, HTML, CSS.
        </p>
        <p className="about__paragraph">
          I started learning to code at TripleTen Bootcamp. Learning to code has
          been a difficult yet rewarding journey.
        </p>
      </div>
    </section>
  );
}

export default About;
