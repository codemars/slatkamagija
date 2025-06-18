import mesano from '../assets/products/mesano-min.webp';
import sipurak from '../assets/products/sipurak-min.webp';
import crni from '../assets/products/crni-min.webp';
import beli from '../assets/products/beli-min.webp';
import mix from '../assets/products/mesano.webp';

const products = [
  {
    id: 1,
    name: 'Marmelada od Šipurka',
    slug: 'marmelada-od-sipurka',
    price: 500,
    image: sipurak,
    description: `Otvorite vrata nezaboravnog ukusa sa našom marmeladom od divljeg šipurka. Spoj autentičnih sastojaka, ljubavi prema tradiciji i savremenih tehnika donosi vam deliciju koja budi sećanja na detinjstvo i domaće slatke trenutke.`,
    hoverImage: sipurak,
  },
  {
    id: 2,
    name: 'Mešana marmelada',
    slug: 'mesana-marmelada',
    price: 300,
    image: mesano,
    description: `Otvorite teglicu punu raznovrsnog voćnog ukusa! Naša mešana marmelada donosi savršen balans prirodne slatkoće i arome, 
    idealna za sve prilike – od doručka do deserta.`
  },
  {
    id: 3,
    name: 'Mlečni kakao krem',
    slug: 'mlecni-kakao-krem',
    price: 450,
    image: mix,
    description: `Savršen balans mlečne nežnosti i bogatog kakao ukusa. 
    Mlečni kakao krem oduševljava svakim namazom – idealan za one koji vole slatki spoj topline mleka i karaktera kakaa.`
  },
  {
    id: 4,
    name: 'Kakao krem',
    slug: 'kakao-krem',
    price: 450,
    image: crni,
    description: `Intenzivan, pun ukus tamnog kakaa stvoren za prave ljubitelje čokolade. 
    Naš kakao krem pruža bogato iskustvo koje se savršeno slaže s tostom, kroasanima ili direktno kašikom.`
  },
  {
    id: 5,
    name: 'Mlečni krem',
    slug: 'mlecni-krem',
    price: 450,
    image: beli,
    description: `Lagani, svileni mlečni krem koji se topi u ustima. 
    Bez kakaa, ali pun mlečne slasti – savršen za decu i sve koji vole čist, kremasti ukus mleka.`
  }
];

export default products;
