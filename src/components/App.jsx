// Fichero src/components/App.jsx
import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";

function App() {
  const [data, setData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: null,
    photo: null,
  });


  function handleData(ev) {
    ev.preventDefault();
    const property = ev.target.id;
    console.log("id", property);
    const value = ev.target.value;
    console.log("valor", value);
    setData({
      ...data,
      [property]: value,
    });
  }

  function handlePhoto(ev) {
    ev.preventDefault();
    if (ev.target.files && ev.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setData({
          ...data,
          photo: e.target.result,
        });
      };

      reader.readAsDataURL(ev.target.files[0]);
    }
  }

  function handleImage(ev) {
    ev.preventDefault();
    if (ev.target.files && ev.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setData({
          ...data,
          image: e.target.result,
        });
      };

      reader.readAsDataURL(ev.target.files[0]);
    }
  }

  return (
    <div className="container">
      <Header/>

      <main className="main">
      <Hero/>

        <section className="preview">
          <div className="projectImage">{data.image}</div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Personal project card
              </span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto">{data.photo}</div>
              <p className="card__job">{data.job === "" ? "Monologuista" : data.job}</p>
              <h3 className="card__name">{data.autor === "" ? "Tomasa" : data.autor}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{data.name === "" ? "Proyect Tomasa" : data.name}</h3>
              <p className="card__slogan">{data.slogan === "" ? "Los chistes de Tomasa" : data.slogan}</p>
              <h3 className="card__descriptionTitle">Product Description</h3>
              <p className="card__description">{data.desc === "" ? "Tomasa es esa leyenda urbana capaz de convertir cualquier sitio en una verbena improvisada. Entra en una habitación y automáticamente sube el volumen de la vida: ni Spotify tiene tanta presencia. Lleva el “modo drama-comedia” activado de fábrica, y cuando intenta ser seria, dura menos que un helado en agosto. Eso sí, cuando Tomasa dice “solo un ratito”, prepárate, porque ese ratito tiene la misma duración que una serie de 8 temporadas." : data.desc}</p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{data.technologies === "" ? "HTML, CSS, JS y React" : data.technologies}</p>

                <a
                  className="icon icon__www"
                  href={data.demo}
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href={data.repo}
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>
        <form className="addForm" onChange={handleData}>
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre el proyecto
            </legend>
            <input

              className="addForm__input"
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del proyecto"
            />
            <input

              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <div className="addForm__2col">
              <input

                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
              />
              <input

                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
              />
            </div>
            <input

              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
            />
            <textarea

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

              className="addForm__input"
              type="text"
              name="autor"
              id="autor"
              placeholder="Nombre"
            />
            <input

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
                onChange={handlePhoto}
                className="addForm__hidden"
                type="file"
              />
            </label>
            <label className="button">
              Subir foto de la autora
              <input
                onChange={handleImage}
                className="addForm__hidden"
                type="file"
              />
            </label>
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
