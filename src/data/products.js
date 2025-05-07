import mesano from '../assets/products/mesano-min.webp';
import sipurak from '../assets/products/sipurak-min.webp';
import crni from '../assets/products/crni-min.webp';
import beli from '../assets/products/beli-min.webp';
import mix from '../assets/products/mesano.png';
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
      name: 'Mlečni kakao krem',
      price: 450,
      image: mix,
      description: `Savršen balans mlečne nežnosti i bogatog kakao ukusa. 
      Mlečni kakao krem oduševljava svakim namazom – idealan za one koji vole slatki spoj topline mleka i karaktera kakaa.`
    },
    {
      id: 4,
      name: 'Kakao krem',
      price: 450,
      image: crni,
      description: `Intenzivan, pun ukus tamnog kakaa stvoren za prave ljubitelje čokolade. 
      Naš kakao krem pruža bogato iskustvo koje se savršeno slaže s tostom, kroasanima ili direktno kašikom.`
    },
    {
      id: 5,
      name: 'Mlečni krem',
      price: 450,
      image: beli,
      description: `Lagani, svileni mlečni krem koji se topi u ustima. 
      Bez kakaa, ali pun mlečne slasti – savršen za decu i sve koji vole čist, kremasti ukus mleka.`
    }
    
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
