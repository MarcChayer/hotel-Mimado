// == Import npm
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// == Import
import './activites.scss';

// == Import images slideshows bloc1
import photo1 from '../../assets/images/activites/bloc1/act1.jpg';
import photo2 from '../../assets/images/activites/bloc1/act2.jpg'; 
import photo3 from '../../assets/images/activites/bloc1/act3.jpg';
import photo4 from '../../assets/images/activites/bloc1/act4.jpg';

// == Import images slideshows bloc2
import photo5 from '../../assets/images/activites/bloc2/act5.jpg';
import photo6 from '../../assets/images/activites/bloc2/act6.jpg';
import photo7 from '../../assets/images/activites/bloc2/act7.jpg';
import photo8 from '../../assets/images/activites/bloc2/act8.jpg';

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
const Activites = () => (
  <div className="restauration">
  <div className="maskLeafBananier">
    <img className="leafBananier" src={feuilleBananier} alt="Image de fond représentant une feuille de bananier."/>
  </div>
  <h1 className="titleRestauration">activités</h1>
  <section className="firstBloc">
    <div className="containerSlide">
      <Fade {...proprietes}>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo1} alt="Photo du bar de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo2} alt="Plage de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo3} alt="Plage de l'hôtel"/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo4} alt="Plage de l'hôtel"/>
          </div>
        </div>
      </Fade>
    </div>
    <div className="paragraphFirstBloc">
      <h2 className="firstTextBloc">Sur site</h2>
      <p className="secondTextBloc">« Juste besoin d’un repos éloigné de la vie citadine. »</p>
      <p className="lastTextBloc">Le plaisir de farnienter sur notre longue plage en sirotant de délicieux cocktails préparés avec soin par vos hôtes...</p>
    </div>
  </section>
  <section className="secondBloc">
    <div className="containerSlide">
      <Fade {...proprietes}>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo5} alt="Vue de la lobë."/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo6} alt="Rocher du loup."/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo7} alt="Photo du départ pour la balade le long de la lobë."/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img className="slideImage" src={photo8} alt="Vue d'une pirogue sur la lobë."/>
          </div>
        </div>
      </Fade>
    </div>
    <div className="paragraphSecondBloc">
      <h2 className="firstTextBloc">Les activités autour du site</h2>
      <p className="secondTextBloc">« Vous souhaitez faire une balade en pirogue sur la rivière « La Lobë » ? C’est possible, ainsi que bien d’autres choses ! »</p>
      <ul className="lastTextBloc">
        <li>- Les magnifiques chutes de la Lobë.</li>
        <li>- Visite des camps pygmés à Campo.</li>
        <li>- Visite du lac et de l'arbre géant.</li>
        <li>- Découverte du Rocher au loup et du village de la protection des tortues à l'entrée de la ville Golf.</li>
        <li>- Balade en forêt.</li>
        <li>- Pêche artisanale.</li>
      </ul>
    </div>
  </section>
  <div className="blocBananier">
    <img className="Bananier" src={Bananier} alt="Photo d'un mariage organisé sur notre plage."/>
  </div>
</div>
);

// == Export
export default Activites;
