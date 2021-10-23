import { Link } from "react-router-dom";

import HomeMobiel from "./HomeMobiel";
import "./home.scss";

const Home = () => {
  return (
    <>
      <HomeMobiel />
      <div className="home__container">
        <div className="home__top">
          <div className="left">
            <h3>
              Premium <span>handgemaakte</span> accessoires
            </h3>
            <p>
              Op deze site wil ik graag nieuwe handgemaakte producten met jullie delen Je kan een
              account maken en krijg op de 1e bestelling 10% korting
            </p>
            <div className="buttons">
              <Link to="/login" className="btn login">
                Login
              </Link>
              <Link to="/signup" className="btn registreren">
                Registreren
              </Link>
            </div>
          </div>
          <div className="right">
            <img src="./img/home/sieraden.png" alt="Foto van sieraden" />
          </div>
        </div>
        <div className="home__bot">
          <h3>
            Zoek per <span>Categorie</span>
          </h3>
          <div className="display__products">
            <div className="item">
              <h5>Oorbellen</h5>
              <img src="./img/home/oorbel.png" alt="Foto van oorbellen" />
              <Link to="#">Shop nu</Link>
            </div>
            <div className="item">
              <h5>Armbanden</h5>
              <img src="./img/home/armband.png" alt="Foto van armbanden" />
              <Link to="#">Shop nu</Link>
            </div>
            <div className="item baby">
              <h5>Baby Accessoires</h5>
              <img src="./img/home/leeuw.png" alt="Foto van baby Accessoires" />
              <Link to="#">Shop nu</Link>
            </div>
            <div className="item tassen">
              <h5>Tassen</h5>
              <img src="./img/home/tas.png" alt="Foto van tassen" />
              <Link to="#">Shop nu</Link>
            </div>
            <div className="item waxmelts">
              <h5>Wax melts</h5>
              <img src="./img/home/wax.png" alt="Foto van wax melts" />
              <Link to="#">Shop nu</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
