export const SITE_URL = "https://slatkamagija.online";

const routeEntries = [
  {
    path: "/",
    title: "Slatka Magija - Domaci dzemovi, marmelade i mlečni kakao krem",
    description:
      "Domaci dzemovi, marmelade i kremovi iz Kragujevca. Slatka Magija pravi proizvode od prirodnih sastojaka, bez industrijskog ukusa.",
    heading: "Domaci ukusi iz Slatke Magije",
    body:
      "Slatka Magija nudi domace marmelade, dzemove i kremove pripremljene sa paznjom, za svakodnevni dorucak, palacinke i kolace.",
    type: "website",
  },
  {
    path: "/proizvodi",
    title: "Proizvodi | Slatka Magija",
    description:
      "Pogledajte ponudu domacih proizvoda: marmelada od sipurka, mesana marmelada, kakao krem, mlecni kakao krem i mlecni krem.",
    heading: "Nasi proizvodi",
    body:
      "Pregled svih proizvoda iz ponude Slatke Magije sa ukusima, opisima i stranicama za svaki pojedinacni proizvod.",
    type: "website",
  },
  {
    path: "/proizvodi/marmelada-od-sipurka",
    title: "Marmelada od sipurka | Slatka Magija",
    description:
      "Domaca marmelada od sipurka sa punim vocnim ukusom i tradicionalnom pripremom. Pogledajte detalje proizvoda Slatka Magija.",
    heading: "Marmelada od sipurka",
    body:
      "Tradicionalna domaca marmelada od divljeg sipurka, puna vocnog ukusa i pogodna za dorucak, palacinke i poslastice.",
    type: "product",
  },
  {
    path: "/proizvodi/mesana-marmelada",
    title: "Mesana marmelada | Slatka Magija",
    description:
      "Mesana marmelada Slatka Magija spaja vise vocnih ukusa u jednoj teglici. Pogledajte opis i detalje proizvoda.",
    heading: "Mesana marmelada",
    body:
      "Mesana marmelada sa izbalansiranim vocnim ukusom, pogodna za dorucak, kolace i svakodnevne slatke obroke.",
    type: "product",
  },
  {
    path: "/proizvodi/mlecni-kakao-krem",
    title: "Mlecni kakao krem | Slatka Magija",
    description:
      "Mlecni kakao krem sa blagom mlecnom notom i punim ukusom kakaa. Pogledajte detalje proizvoda Slatka Magija.",
    heading: "Mlecni kakao krem",
    body:
      "Kremast namaz sa spojem mleka i kakaa, namenjen ljubiteljima blagih i bogatih slatkih ukusa.",
    type: "product",
  },
  {
    path: "/proizvodi/kakao-krem",
    title: "Kakao krem | Slatka Magija",
    description:
      "Kakao krem intenzivnog cokoladnog ukusa iz ponude Slatka Magija. Pogledajte opis, stranicu proizvoda i detalje.",
    heading: "Kakao krem",
    body:
      "Bogati kakao krem za tost, peciva, palacinke i slatke obroke, sa izrazenim ukusom tamnog kakaa.",
    type: "product",
  },
  {
    path: "/proizvodi/mlecni-krem",
    title: "Mlecni krem | Slatka Magija",
    description:
      "Mlecni krem glatke teksture i blagog ukusa, idealan za decu i ljubitelje kremastih namaza bez kakaa.",
    heading: "Mlecni krem",
    body:
      "Nezan i kremast mlecni namaz bez kakaa, pogodan za svakodnevni dorucak i slatke obroke.",
    type: "product",
  },
  {
    path: "/recepti",
    title: "Recepti | Slatka Magija",
    description:
      "Ideje za pripremu poslastica uz proizvode Slatke Magije. Pogledajte recepte za palacinke i kiflice.",
    heading: "Recepti sa nasim proizvodima",
    body:
      "Inspiracija za domace recepte i posluzenje uz marmelade i kremove iz ponude Slatke Magije.",
    type: "article",
  },
  {
    path: "/recepti/palacinke",
    title: "Palacinke | Recepti | Slatka Magija",
    description:
      "Recept za palacinke uz domace namaze i marmelade Slatke Magije. Jednostavna ideja za posluzenje i dorucak.",
    heading: "Palacinke",
    body:
      "Jednostavan recept za palacinke koje se odlicno slazu uz domace marmelade i kremove iz ponude Slatke Magije.",
    type: "article",
  },
  {
    path: "/recepti/kiflice",
    title: "Kiflice | Recepti | Slatka Magija",
    description:
      "Recept za kiflice koje mozete posluziti uz slatke namaze i marmelade Slatke Magije.",
    heading: "Kiflice",
    body:
      "Mekane kiflice kao domaca ideja za posluzenje uz vocne marmelade i slatke kremove.",
    type: "article",
  },
  {
    path: "/kontakt",
    title: "Kontakt | Slatka Magija",
    description:
      "Kontaktirajte Slatku Magiju za porudzbine i pitanja. Lokacija je Kragujevac, Srbija, a porucivanje je moguce i putem Instagrama.",
    heading: "Kontakt i porucivanje",
    body:
      "Informacije za kontakt, lokaciju i porucivanje proizvoda Slatke Magije putem telefona i drustvenih mreza.",
    type: "website",
  },
];

export const prerenderRoutes = routeEntries.map((entry) => ({
  ...entry,
  canonical: entry.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${entry.path}`,
}));

export function getRouteSeo(pathname) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return (
    prerenderRoutes.find((entry) => entry.path === normalizedPath) ||
    prerenderRoutes.find((entry) => entry.path === "/")
  );
}
