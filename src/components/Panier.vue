<template>
  <div class="container">
        <h1>Mon Panier</h1>
        <ul>
            <li v-bind:key="produit.id" v-for="produit in panier" class="card" style="width: 18rem;">
                <img v-bind:src='produit.image' alt="" height="190" width="190"> 
                 <div class="card-body">
                        <p>{{produit.marque}}</p>
                        <h1>{{produit.nomProduits}}</h1>
                        <h2>{{produit.prix}} Dhs</h2>
                        <h2>Quantite : {{produit.Quantite}}</h2>
                        <button class="btn btn-danger"  v-on:click="deleteProduit(produit.id)">Supprimer</button>
                 </div>
            </li>
        </ul>
         <!-- <div class="total" >Prix Total : {{total}}</div> -->
        <router-link :to="`/`" class="dropdown-item"><span class="btn btn-primary" style="margin:20px;">Continuer votre achat</span></router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
  name: 'Listeproduits',
  data(){
     
      return{
          panier: [],
           total : 0
      }
  },
  methods: {
                    getPanier(){
                         axios.get('http://localhost:9999/panier')
                        .then(res =>{
                            this.panier = res.data;
                            for (let index = 0; index <this.panier.length; index++) {
                                 this.total += this.panier[index].prix 
                            }
                        })
                        .catch(err  =>  console.log(err))
                    },

                    deleteProduit(id){
                         axios.delete('http://localhost:9999/panier/'+ id)
                                .then(res =>  res.data )
                               .catch(err  =>  console.log(err))

                    }

            },
  created () {
      this.getPanier();
  }
}
</script>
<style scoped>
.container h1{
    text-align: center;
    width: 100%;
    padding: 20px 0;
    font-size: 35px;
    font-weight: bold;
    color:#13688e;
}
.card{
    float: left;
    margin-right: 10px;
    text-align: center;
    padding: 10px;
}
.card img{
    display: block;
    margin:auto;
}
.card p,.card h1,.card h2,.card a{
    width: 100%;
    float: left;
}
.card p{
        text-align: center;
    width: 100%;
    display: block;
    color: #126186;
    font-size: 12px;
    font-family: Tahoma, Geneva, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 10px;
    float: left;
}

.card h1{
    color: #7b9c36;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'FuturaMediumMedium';
    font-weight: bold;
    width: 100%;
    text-align: center;
    float: left;
    height: 80px;
}
.card h2 {
    font-weight: normal;
    font-size: 23px;
    color: #126186;
    font-family: 'FuturaMediumMedium';
    display: block;
    float: left;
    text-align: center;
    width: 100%;
    font-weight: bold;
}
.total{
    float: left;
}
</style>