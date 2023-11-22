import Banner from "../components/Banner/Banner";
import Moutain from "../img/b9995860bb6384a77ca7dc9bf52da3be.jpg";
import Dropdown from "../components/Dropdown/Dropdown";

function About() {
  return (
    <>
      <Banner img={Moutain} id="highest" alt="Montagnes" />
      <div className="dropdowns" id="desktop__display">
        <Dropdown title="Fiabilité">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
            nobis sit inventore cum asperiores reprehenderit illo dolores ad
            nostrum perferendis, incidunt distinctio adipisci provident
            veritatis. Maxime, aut hic? Nobis ratione dolorum eveniet dolor
            doloremque eius nostrum mollitia amet nemo.
          </p>
        </Dropdown>
        <Dropdown title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Dropdown>
        <Dropdown title="Services">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
            nobis sit inventore cum asperiores reprehenderit illo dolores ad
            nostrum perferendis, incidunt distinctio adipisci provident
            veritatis. Maxime, aut hic? Nobis ratione dolorum eveniet dolor
            doloremque eius nostrum mollitia amet nemo.
          </p>
        </Dropdown>
        <Dropdown title="Sécurité">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur obcaecati amet qui deleniti nemo optio ab molestias
            quisquam sit animi consequuntur, magnam ex nisi. Placeat odio
            tenetur a dolores quo, amet saepe inventore ab porro.
          </p>
        </Dropdown>
      </div>
    </>
  );
}

export default About;
