<template>
  <div class="container">
        <h1>Liste Produits</h1>
        <ul>
            <li v-bind:key="produit.id" v-for="produit in listeProduits" class="card" style="width: 18rem; float:left">
                <img v-bind:src='produit.image' alt="" height="190" width="190"> 
                 <div class="card-body">
                        <p>{{produit.marque}}</p>
                        <h1>{{produit.nomProduits}}</h1>
                        <h2>{{produit.prix}} Dhs</h2>
                        <router-link :to="`/produit/${produit.id}`" class="dropdown-item"><span class="btn btn-primary">Voir Detail</span></router-link>
                 </div>
            </li>
        </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
  name: 'Listeproduits',
  data(){
      return{
          listeProduits: []
      }
  },
  methods: {
                    getListeProduit(){
                        axios.get('http://localhost:9999/produits')
                        .then(res => this.listeProduits = res.data )
                        .catch(err  =>  console.log(err))
                    }
            },
  created () {
      this.getListeProduit();
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

</style>