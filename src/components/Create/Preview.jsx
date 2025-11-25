import "../../styles/Preview.scss";
import Card from "./Card";

function Preview({ data }) {
  return (
    <section className="preview">
      <div className="projectImage">{data.image}</div>
      <Card
           data = {data}
      />
    </section>
  );
}

export default Preview;
