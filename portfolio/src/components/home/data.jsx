const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Fenton Hutson
      </h1>
      <h2 className="home__subtitle">
        Software Developer
      </h2>
      <p className="home__description">
        Passionate about interactivity and user created experiences in tech. 
        Fascinated by the architecture of software and the possibilities within it.
      </p>

      <a href="#contact" className="button button--flex">
        Get in touch
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 24 24" 
          class="button__icon"
          width="24"
          height="24"
          fill='#97C3FF'>
          <path d="M20.83,15.831c-0.12,0.41-0.47,0.71-0.89,0.77l-7.51,1.18l-5.63,4.66c-0.2,0.16-0.45,0.25-0.7,0.25 c-0.16,0-0.32-0.03-0.47-0.11C5.25,22.401,5,22.011,5,21.591V3.361c0-0.43,0.26-0.83,0.65-1c0.39-0.18,0.86-0.11,1.18,0.18 l13.68,12.15C20.82,14.981,20.95,15.421,20.83,15.831z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Data;
