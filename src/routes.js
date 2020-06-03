import  Listeproduits from "./components/Listeproduits";
import  DetailProduit from "./components/DetailProduit";
import  Panier from "./components/Panier";
export const routes = [
    {path:'/', component: Listeproduits},
    { path: '/produit/:id', component: DetailProduit },
    { path: '/panier', component: Panier }
  ];
