import "./css/LandingPage.css";
import logo from "./assets/logo.webp";

const LandingPage = () => {
  return (
    <>
      {/* First Section - Text Left, Image Right */}
      <section className="section-container">
        <div className="main-text">
          <h1>Fitness as a Challenging Game</h1>
          <h4>
            Challenge yourself to complete daily workouts and quests <br /> in
            real life to level up in the virtual game.
          </h4>
        </div>
        <div className="app-image">
          <img src={logo} alt="Fitness Game App" />
        </div>
      </section>

      {/* Second Section - Image Left, Text Right */}
      <section className="section-container reverse">
        <div className="app-image">
          <img src={logo} alt="Fitness Game App" />
        </div>
        <div className="main-text">
          <h1>Level Up Your Fitness Journey</h1>
          <h4>
            Stay motivated, track your progress, and compete with friends <br />
            as you transform fitness into an exciting adventure.
          </h4>
        </div>
      </section>
    </>
  );
};

export default LandingPage;