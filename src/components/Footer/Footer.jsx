import K from "../../img/VectorK.png";
import House from "../../img/VectorHouse.png";
import S from "../../img/VectorS.png";
import A from "../../img/VectorA.png";

function Footer() {
  return (
    <footer>
      <div>
        <img src={K} alt="" />
        <img src={House} alt="" />
        <img src={S} alt="" />
        <img src={A} alt="" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
