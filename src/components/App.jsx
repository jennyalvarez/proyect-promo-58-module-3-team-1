// Fichero src/components/App.jsx
import "../styles/App.scss";
import { useState } from "react";
import Header from "./Layout/Header.jsx";
import Footer from "./Layout/Footer.jsx";
import Hero from "./Layout/Hero.jsx";
import Preview from "./Create/Preview.jsx";
import Form from "./Create/Form.jsx";

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
    image: null, // Imagen de la Autora
    photo: null, // Imagen del proyecto
  });

  function changeData(property, value) {
    setData({
      ...data,
      [property]: value,
    });
    console.log([property], value);
  }
 
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Hero />

        <Preview data={data} />

        <Form changeData={changeData} data= {data} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
