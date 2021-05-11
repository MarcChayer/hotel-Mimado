// == Import npm
import React from 'react';
import { Helmet } from 'react-helmet';

// == Import
import feuilleBananier from '../../assets/images/leafBanana.svg';

import './mentionsLegales.scss';

// == Composant
const MentionsLegales = () => (
  <div className="mentionsLegales">
    <Helmet defaultTitle="Hôtel Mimado">
      <title>Hôtel Mimado - Mentions légales</title>
      <meta
        name="description"
        content="Mentions légales."
      />
    </Helmet>
    <div className="maskLeafBananier">
      <img className="leafBananier" src={feuilleBananier} alt="Image de fond représentant une feuille de bananier."/>
    </div>
    <div className="paragrapheMention">
      <h1 className="titleMentions">mentions légales</h1>
      <h2 className="titleParaMentions">Directrice :</h2>
      <p className="textMentions">Michéle Lobe-Manga</p>
      <p className="textMentions--margB">mimadohotel@gmail.com</p>
      <h2 className="titleParaMentions">Propriété</h2>
      <p className="textMentions--margB">Hôtel Mimado et son nom de domaine mimadohotel.com sont la propriété totale et exclusive de la société.</p>
      <h2 className="titleParaMentions">Clause de propriété intellectuelle</h2>
      <p className="textMentions--margB">Le contenu du site est constitué de sa structure générale, des textes, des images fixes. Toute reproduction partielle ou totale du contenu du site sans autorisation préalable écrite de l'Hôtel Mimado est interdite (article L335-2 du Code de la Propriété Intellectuelle).  Toute reproduction du contenu du site sur tous supports, connus ou encore inconnus pour un usage individuel ou professionnel, même sans diffusion est prohibée, y compris pour la diffusion sur l'intranet ou l'extranet d'entreprises ou de collectivités locales. Seuls sont autorisés le stockage des composites aux fins de présentation sur un écran monoposte ou de reproduction en un seul exemplaire, la copie de sauvegarde ou l'impression sur papier. Tout autre usage doit faire l'objet d'une autorisation écrite du propriétaire du site.</p>
      <p className="textMentions--margB">Pour mettre en place un lien avec le site ou pour reproduire un contenu paru sur le site (textes, graphiques, illustrations) sur un support électronique (Web, Intranet, CD-ROM...), adressez votre demande par voie postale à l'Hôtel Mimado. Veuillez décrire le contexte, la durée, l'identité du tiers utilisateur et le territoire géographique d'exploitation. N'oubliez pas de préciser également votre nom, le nom de votre association ou de votre entreprise, l'adresse URL de votre site, ainsi que vos coordonnées incluant votre e-mail.</p>
      <h2 className="titleParaMentions">Modes de paiement acceptés</h2>
      <p className="textMentions">American Express, Visa, MasterCard, Diners Club, Discover, UnionPay Credit Card</p>
    </div>
  </div>
);

// == Export
export default MentionsLegales;
