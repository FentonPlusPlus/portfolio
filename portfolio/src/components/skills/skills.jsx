import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Techstack</h2>
      <span className="section__subtitle"></span>

      <div className="skills__container container grid">
        <div><p>
          JavaScript/TypeScript
        </p>
        </div>
        <div><p>
          Node.js
        </p>
        </div>
        <div><p>
          React.js
        </p>
        </div>
        <div><p>
          Next.js
        </p>
        </div>
      </div>
      <div className="skills__container container grid">
      <div><p>
          Java
        </p>
        </div>
        <div><p>
          HTML
        </p>
        </div>
        <div><p>
          CSS
        </p>
        </div>
        <div><p>
          Express.js
        </p>
        </div>
      </div>
      <div className="skills__container container grid">
      <div><p>
          MySQL
        </p>
        </div>
        <div><p>
          PostgreSQL
        </p>
        </div>
        <div><p>
          NoSQL
        </p>
        </div>
        <div><p>
          0Auth
        </p>
        </div>
      </div>
      <div className="skills__container container grid">
      <div><p>
          JUnit
        </p>
        </div>
        <div><p>
          Jest
        </p>
        </div>
        <div><p>
          Supertest
        </p>
        </div>
        <div><p>
          Cypress
        </p>
        </div>
      </div>
      <div className="skills__container container grid">
      <div><p>
          Tailwind
        </p>
        </div>
        <div><p>
          Deployment - AWS Amplify, Vercel, Netlify
        </p>
        </div>
        <div><p>
          UI-UX - Figma
        </p>
        </div>
      </div>
      <div className="skills__div container grid">
      </div>
    </section>
    
  );
};

export default Skills;
