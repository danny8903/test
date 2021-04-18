import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

import './Home.scss';

function Home() {
  return (
    <div className="content-container" tabIndex="0">
      <div className="content">
        <div className="imgwrap">
          <div className="img">
            <img className="img-inner" src={img1} alt="img1" />
          </div>

          <div className="img">
            <img className="img-inner" src={img2} alt="img2" />
          </div>
          <div className="img">
            <img className="img-inner" src={img3} alt="img3" />
          </div>
        </div>
        <article>
          <h3 className="title-main">Lorem Ipsum</h3>
          <p className="title-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            leo fermentum, rhoncus diam non, gravida orci. Phasellus id
            fermentum.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Home;
