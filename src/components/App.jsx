// Fichero src/components/App.jsx
import "../styles/App.scss";
import logo from "../images/laptop-code-solid.svg";
import adalabLogo from "../images/adalab.png";
import { useState } from "react";

function App() {
  const [nameProject, setNameProject] = useState();
  const [slogan, setSlogan] = useState();
  const [technologies, setTechnologies] = useState();
  const [repo, setRepo] = useState();
  const [demo, setDemo] = useState();
  const [desc, setDesc] = useState();
  const [autor, setAutor] = useState();
  const [job, setJob] = useState();

  const [projectImage, setProjectImage] = useState(null);
  const [autorPhoto, setAutorPhoto] = useState(null);

  function handleNameProject(ev) {
    ev.preventDefault();
    setNameProject(ev.target.value);
  }
  function handleSlogan(ev) {
    ev.preventDefault();
    setSlogan(ev.target.value);
  }
  function handleTechnologies(ev) {
    ev.preventDefault();
    setTechnologies(ev.target.value);
  }
  function handleRepo(ev) {
    ev.preventDefault();
    setRepo(ev.target.value);
  }
  function handleDemo(ev) {
    ev.preventDefault();
    setDemo(ev.target.value);
  }
  function handleDesc(ev) {
    ev.preventDefault();
    setDesc(ev.target.value);
  }
  function handleAutor(ev) {
    ev.preventDefault();
    setAutor(ev.target.value);
  }
  function handleJob(ev) {
    ev.preventDefault();
    setJob(ev.target.value);
  }
  function handleProjectImage(ev) {
    ev.preventDefault();
    if (ev.target.files && ev.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setProjectImage(e.target.result);
      };

      reader.readAsDataURL(ev.target.files[0]);
    }
  }
  function handleAutorPhoto(ev) {
    ev.preventDefault();
    if (ev.target.files && ev.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setAutorPhoto(e.target.result);
      };

      reader.readAsDataURL(ev.target.files[0]);
    }
  }

  return (
    <div className="container">
      <header className="header">
        <a
          className="header__brand"
          href="./"
          title="Haz click para volver a la página inicial"
        >
          <img
            className="header__companyLogo"
            src={logo}
            alt="Logo proyectos molones"
          />
          <h1 className="header__title">Proyectos molones</h1>
        </a>
        <img className="logoSponsor" src={adalabLogo} alt="Logo Adalab" />
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="button--link" href="./">
            Ver proyectos
          </a>
        </section>

        <section className="preview">
          <div className="projectImage">{projectImage}</div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Personal project card
              </span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto">{autorPhoto}</div>
              <p className="card__job">{job}</p>
              <h3 className="card__name">{autor}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{nameProject}</h3>
              <p className="card__slogan">{slogan}</p>
              <h3 className="card__descriptionTitle">Product Description</h3>
              <p className="card__description">{desc}</p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{technologies}</p>

                <a
                  className="icon icon__www"
                  href={demo}
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href={repo}
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>
        <form className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre el proyecto
            </legend>
            <input
              onChange={handleNameProject}
              className="addForm__input"
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del proyecto"
            />
            <input
              onChange={handleSlogan}
              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <div className="addForm__2col">
              <input
                onChange={handleRepo}
                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
              />
              <input
                onChange={handleDemo}
                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
              />
            </div>
            <input
              onChange={handleTechnologies}
              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
            />
            <textarea
              onChange={handleDesc}
              className="addForm__input"
              type="text"
              name="desc"
              id="desc"
              placeholder="Descripción"
              rows="5"
            ></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre la autora
            </legend>
            <input
              onChange={handleAutor}
              className="addForm__input"
              type="text"
              name="autor"
              id="autor"
              placeholder="Nombre"
            />
            <input
              onChange={handleJob}
              className="addForm__input"
              type="text"
              name="job"
              id="job"
              placeholder="Trabajo"
            />
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label className="button">
              Subir foto del proyecto
              <input
                onChange={handleProjectImage}
                className="addForm__hidden"
                type="file"
              />
            </label>
            <label className="button">
              Subir foto de la autora
              <input
                onChange={handleAutorPhoto}
                className="addForm__hidden"
                type="file"
              />
            </label>
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>

      <footer className="footer">
        <img className="logoSponsor" src={adalabLogo} alt="Logo Adalab" />
      </footer>
    </div>
  );
}

export default App;
