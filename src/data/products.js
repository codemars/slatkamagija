import mesano from '../assets/products/mesano-min.png';
import sipurak from '../assets/products/sipurak-min.png';
import crni from '../assets/products/crni-min.png';
import beli from '../assets/products/beli-min.png';

/* import chocholate from '../assets/products/chocholate.png';
import juice_mix from '../assets/products/juice_mix.png'; */


const products = [
    {
      id: 1,
      name: 'Marmelada od Šipurka',
      price: 500,
      image: sipurak,
      description: `Otvorite vrata nezaboravnog ukusa sa našom marmeladom od divljeg šipurka. Spoj autentičnih sastojaka, ljubavi prema tradiciji i savremenih tehnika donosi vam deliciju koja budi sećanja na detinjstvo i domaće slatke trenutke.`,
      hoverImage: sipurak,
    },
    {
      id: 2,
      name: 'Mešana marmelada',
      price: 300,
      image: mesano,
      description: `Otvorite teglicu punu raznovrsnog voćnog ukusa! Naša mešana marmelada donosi savršen balans prirodne slatkoće i arome, 
      idealna za sve prilike – od doručka do deserta.`
    },
    {
      id: 3,
      name: 'Kakao krem',
      price: 450,
      image: crni,
      description: `Zaronite u poseban svet slatkog užitka s našim kakaom kremom. 
      Ovaj jedinstveni spoj intenzivnog kakaa i sočnog lešnika čini ovu kremu neodoljivom poslasticom. 
      Svaki zalogaj je čaroban, pružajući vam izuzetno iskustvo koje se pamti.`
    },
    {
      id: 4,
      name: 'Mlečni kakao krem',
      price: 450,
      image: beli,
      description: `Nežna kombinacija mleka i kakaoa donosi savršeno kremast užitak. 
      Naš mlečni kakao krem je prava uteha za vaša čula – idealan za jutarnje palačinke ili večernje uživanje.`
    },
   /*  {
      id: 5,
      name: 'Magična čokolada',
      price: 600,
      image: chocholate,
      description: `Uživajte u jednostavnoj, a neodoljivoj radosti čokolade. 
      Svaki zalogaj otkriva slatku harmoniju kvalitetnih sastojaka, pružajući trenutke uživanja bez premca. 
      Bilo da istražujete tamnu čokoladnu magiju ili uživate u klasičnoj mlečnoj verziji, naša kolekcija će zadovoljiti vaše nepce.`
    },
    {
      id: 6,
      name: 'Kašasti Voćni nektar',
      price: 220,
      image: juice_mix,
      description: `Zaronite u svet voćnih nektara s našim raznovrsnim kolekcijama, gde se spoj sočnosti i prirodne slasti stvara čaroban ukusni doživljaj. 
      U našim nektarima, poput "Voćnog Dueta" s jabukom i višnjom, ili miksom od pomorandže, limuna, jabuke i šargarepe, otkrijte harmoniju ukusa koja budi sva vaša čula. 
      Bez dodatih veštačkih sastojaka, naši nektari su prirodna poslastica koja donosi voćnu radost u svaki gutljaj.`
    }, */
  ];
  
export default products;
