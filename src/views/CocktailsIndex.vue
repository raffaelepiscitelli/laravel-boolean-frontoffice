
<template>
    <main>
        <div class="container mt-5">
            <h1 class="title-cocktails mt-5 fw-bold pb-4">
                Cocktails
            </h1>
    <div class="row">
        <div class="col-4 mt-2 mb-4 vh-50" v-for="cocktail in cocktails" :key="cocktail.id">
            <div class="card my-card rounded-0">
                <img :src="cocktail.image" class="items-img card-img-top" alt="Cocktail Image">
                <div class="card-body">
                <h5 class="card-title text-center fs-3 fw-semibold">{{ cocktail.name }}</h5>
                <p class="card-text card-description">{{ cocktail.description }}</p>
                <p class="card-text">{{ cocktail.price }}€</p>
                <p class="card-text mb-2">{{ cocktail.alcohol_content}}°</p>
            </div>
        </div>
        </div>
    </div>
   </div>

</main>
</template>

<script>
import axios from 'axios';

   

export default {
    name: 'CocktailsIndex',
    data(){
       return {
        cocktails: [],
       }
    },

    methods:{
        getCocktails(){
            axios.get('http://127.0.0.1:8000/api/cocktails',{
                params: {
                }
            })
            .then((response)=>{
                console.log(response);
                this.cocktails = response.data.results
            })
            .catch(function(error){
                console.log(error);
            })
            .finally(function(){

            });
        }
    },

    created(){
        this.getCocktails();
    }

}
</script>

<style scoped>

.card-description{
    border-left: 4px solid #8cff00;
    padding-left: 1rem;
}

.items-img{
    height: 310px;
}
.my-card{
    height: 500px;
}
.title-cocktails{
    color: white;
} 

.card {
  transition: all 0.2s ease-in-out; 
}

.card:hover {

  transform: scale(1.05); 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
  
}

</style>