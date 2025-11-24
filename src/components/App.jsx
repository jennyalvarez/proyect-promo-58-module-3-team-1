// Fichero src/components/App.jsx
import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import Preview from "./Preview.jsx";
import Form from "./Form.jsx";

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

  function changeData(property, value) {
    setData({
      ...data,
      [property]: value,
    });
  }
  /*
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
*/
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Hero />

        <Preview data={data} />

        <Form changeData={changeData} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
