import Hero from "../Layout/Hero.jsx";
import { Link } from "react-router";

function LandingPages() {
  return (
    <Hero>
      <>
        <Link className="button--link" to="./create">
          Ver proyectos
        </Link>
      </>
    </Hero>
  );
}
export default LandingPages;
