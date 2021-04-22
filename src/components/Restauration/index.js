// == Import npm
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// == Import
import './restauration.scss';

// == Import images slideshows bloc1
import photo1 from '../../assets/images/restauration/bloc1/resto3.jpg';
import photo2 from '../../assets/images/restauration/bloc1/resto1.jpg'; 
import photo3 from '../../assets/images/restauration/bloc1/resto2.jpg';

// == Import images slideshows bloc2
import photo4 from '../../assets/images/restauration/bloc2/bar6.jpg';
import photo5 from '../../assets/images/restauration/bloc2/bar5.jpg';
import photo7 from '../../assets/images/restauration/bloc2/bar2.jpg';
import photo6 from '../../assets/images/restauration/bloc2/bar4.jpg';
// import photo8 from '../../assets/images/restauration/bloc2/bar1.jpg'; 
// import photo9 from '../../assets/images/restauration/bloc2/bar3.jpg';

// == Import images icone
import feuilleBananier from '../../assets/images/leafBanana.svg';
import Bananier from '../../assets/images/treeBanana.svg';

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  canSwipe: true,
  scale: 1,
}

// == Composant
const Restauration = () => (
  <div className="restauration">
  <div className="maskLeafBananier">
    <img className="leafBananier" src={feuilleBananier} alt="Image de fond représentant une feuille de bananier."/>
  </div>
  <h1 className="titleRestauration">restauration &amp; bar</h1>
  <section className="firstBloc">
    <div className="containerSlide">
      <Fade {...proprietes}>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo1} alt="Plage de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo2} alt="Photo de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo3} alt="Photo aérienne de l'hôtel"/>
          </div>
        </div>
      </Fade>
    </div>
    <div className="paragraphFirstBloc">
      <h2 className="firstTextBloc">Notre restaurant</h2>
      <p className="secondTextBloc">« Venez vous régaler et réveiller vos papilles. Nous vous serviront dans une ambiance conviviale des plats Français, Camerounais, Pakistanais, ainsi que de délicieux poissons grillés fraichement pêchés spécialement pour vous. »</p>
      <p className="lastTextBloc">Que ce soit au restaurant de la plage, les pieds dans le sable, ou au restaurant couvert, une cuisine exotique vous accueillera.</p>
    </div>
  </section>
  <section className="secondBloc">
    <div className="containerSlide">
      <Fade {...proprietes}>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo4} alt="Plage de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo5} alt="Photo de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo6} alt="Photo aérienne de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo7} alt="Plage de l'hôtel"/>
          </div>
        </div>
        {/* <div className="each-slide">
          <div>
            <img className="slideImage" src={photo8} alt="Photo de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo9} alt="Photo aérienne de l'hôtel"/>
          </div>
        </div> */}
      </Fade>
    </div>
    <div className="paragraphSecondBloc">
      <h2 className="firstTextBloc">Le bar</h2>
      <p className="secondTextBloc">« Le plaisir de farnienter sur notre longue plage en sirotant de délicieux cocktails préparés avec soin par vos hôtes. »</p>
      <p className="lastTextBloc">Pour manger ou pour boire un verre, nous serons là pour vous accueillir tout du long de la journée.</p>
    </div>
  </section>
  <div className="blocBananier">
    <img className="Bananier" src={Bananier} alt="Image de fond représentant une bananier."/>
  </div>
</div>
);

// == Export
export default Restauration;
