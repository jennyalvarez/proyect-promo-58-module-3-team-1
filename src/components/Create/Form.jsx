import "../../styles/Form.scss";
import InputGroupText from "./InputGroupText";

function Form({ changeData }) {
  function handleData(ev) {
    ev.preventDefault();
    const property = ev.target.id;
    const value = ev.target.value;
    changeData(property, value);
  }
  return (
    <form className="addForm" onChange={handleData}>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <InputGroupText
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
        />
        <InputGroupText name="slogan" id="slogan" placeholder="Slogan" />
        <div className="addForm__2col">
          <InputGroupText
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
          />
          <InputGroupText type="url" name="demo" id="demo" placeholder="Demo" />
        </div>
        <InputGroupText
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
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <InputGroupText name="autor" id="autor" placeholder="Nombre" />
        <InputGroupText name="job" id="job" placeholder="Trabajo" />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label className="button">
          Subir foto del proyecto
          <input
            // onChange={handlePhoto}
            className="addForm__hidden"
            type="file"
          />
        </label>
        <label className="button">
          Subir foto de la autora
          <input
            //  onChange={handleImage}
            className="addForm__hidden"
            type="file"
          />
        </label>
        <button className="button--large">Guardar proyecto</button>
      </fieldset>
    </form>
  );
}

export default Form;
