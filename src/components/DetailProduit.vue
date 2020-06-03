<template>
  <div class="container">
        <h1>detail Produit</h1>
         <ul>
            <li class="card" >
                <img v-bind:src='Produit.image' alt="" height="300" width="300"> 
                 <div class="card-body">
                        <p>{{Produit.marque}}</p>
                        <h1>{{Produit.nomProduits}}</h1>
                        <h2>{{Produit.prix}} Dhs</h2>
                        <p>{{Produit.description}}</p>
                         <span class="btn btn-primary" v-on:click="ajouterPanier(Produit)"><router-link :to="`/panier`" class="dropdown-item">Ajouter Panier</router-link></span>
                 </div>
            </li>
        </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {   
  name: 'DetailProduit',
  data(){
      return{
          Produit: [],
          panier: [],
           modifier : false
      }
  },
  methods: {
                    getProduit(){
                        axios.get('http://localhost:9999/produits/'+ this.$route.params.id)
                        .then(res => this.Produit = res.data )
                        .catch(err  =>  console.log(err))
                    },
                    getPanier(){
                         axios.get('http://localhost:9999/panier')
                        .then(res => this.panier = res.data )
                        .catch(err  =>  console.log(err))
                    },
                    ajouterPanier(Produit){
                                        let  params = {
                                                        "id" : Produit.id,
                                                        "nomProduits" : Produit.nomProduits,
                                                        "marque" : Produit.marque,
                                                        "prix" :Produit.prix,
                                                        "image" :Produit.image,
                                                        "description" :Produit.description,
                                                        "Quantite": 1
                                                      }
                                                    
                                                      if(this.panier.length > 0){
                                                          for (let index = 0; index < this.panier.length; index++) {
                                                              if(this.panier[index].id == params.id){
                                                                  params.Quantite = params.Quantite + 1;
                                                                  params.prix =  params.prix *  params.Quantite
                                                                  this.modifier = true;  
                                                                axios.put('http://localhost:9999/panier/'+ params.id , params)
                                                                    .then(res => this.Produit = res.data )
                                                                    .catch(err  =>  console.log(err))
                                                              }else{
                                                                    axios.post('http://localhost:9999/panier/', params)
                                                                    .then(res => this.Produit = res.data )
                                                                    .catch(err  =>  console.log(err))
                                                              }
                                                              }
                                                              }else{
                                                                      axios.post('http://localhost:9999/panier/', params)
                                                                    .then(res => this.Produit = res.data )
                                                                    .catch(err  =>  console.log(err))
                                                             
                                                              } 
                                                                   
                                                               
                                                             
                                                          }
                                                      
                                                      
                                                    
                       
            },
  created () {
       this.getProduit();
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
     width: 100%;
    float: left;
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
    font-size: 20px;
    font-family: Tahoma, Geneva, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 10px;
    float: left;
}

.card h1{
    color: #7b9c36;
    font-size: 25px;
    text-transform: uppercase;
    font-family: 'FuturaMediumMedium';
    font-weight: bold;
    width: 100%;
    text-align: center;
    float: left;
    height: 80px;
    width: 100%;
}
.card h2 {
    font-weight: normal;
    font-size: 35px;
    color: #000;
    font-family: 'FuturaMediumMedium';
    display: block;
    float: left;
    text-align: center;
    width: 100%;
    font-weight: bold;
}
.card-body{
    float: left;
    width: 100%;
}
ul{
    float: left;
    width: 100%;
}
</style>