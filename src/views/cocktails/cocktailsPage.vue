<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title ><span  class="capitalize"  > </span></ion-title>
      </ion-toolbar>
    </ion-header>
    
    
    <ion-content :fullscreen="true">
 

    <ion-title>Ingredient Filter</ion-title>
          <ion-accordion-group>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Ingredient Filter </ion-label>
              </ion-item>
              

              <ion-list slot="content">
                <ion-item v-for="( item,key ) of ingredients" :key="key"  @click="searchCocktailIngredient(item.strIngredient1)" >
                <p>  {{item.strIngredient1}} </p>
                </ion-item>
              
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>


   <ion-title>Alcholic Filter</ion-title>
          <ion-accordion-group>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Alcoholic Filter </ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item v-for="( item,key ) of alcoholicfilters" :key="key"  @click="searchAlcoholic(item.strAlcoholic)" >
                <p>  {{item.strAlcoholic}}  </p>
                </ion-item>
              
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>

           <ion-title>Category Filter</ion-title>
          <ion-accordion-group>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Category Filter </ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item v-for="( item,key ) of CategoryFilters" :key="key"  @click="searchByCategory(item.strCategory)" >
                <p>  {{item.strCategory}} </p>
                </ion-item>
              
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>



  <ion-grid>
    <ion-row>
      <ion-col  size="12" size-sm="4" >
        <!-- <ion-card v-for="( item, key) of Cocktails" :key="key"  :href="'cocktailDetails/'+item.idDrink"> -->
        <ion-card :v-if="item.idDrink == 15300"   v-for="( item, key) of Cocktails" :key="key"  :href="'cocktailDetails/'+item.idDrink"   >
          <img :src="item.strDrinkThumb" />
          <ion-card-header>
            <ion-card-subtitle>{{item.strAlcoholic}}</ion-card-subtitle>
            <ion-card-title>{{item.strDrink}} 
              <!-- {{item.idDrink}}  -->

              <!-- {{item}} -->
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <!-- {{item}} -->
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>  
        


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
import axios from "axios";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    
  },
    setup() {
      const items = ([
        { id: 0, name:'Gin' },
        { id: 1,  name:'Rum' },
        { id: 2, name:'Vodka' },
        { id: 3, name:'Tequila' },
        
      ]);
   
    const router = useRouter();
    
  

      return { items , router }
    },
  
  data() {

    // var Searchvalue = 1;

    return {
      Cocktails: null,
      Searchvalue: '',
      ingredients: null,
      alcoholicfilters: null,
      CategoryFilters: null,
    }
  },
  methods: {

    GetCocktailIngredients() {
      
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

      // this.Searchvalue = postcode;
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then(res => {
        console.log('ingredients')
        console.log(res.data.drinks)
          this.ingredients = res.data.drinks
         
      });
    },

GetAlcoholicFilters() {
      
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

      // this.Searchvalue = postcode;
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
      .then(res => {
        console.log('alcoholic filters')
        console.log(res.data.drinks)
          this.alcoholicfilters = res.data.drinks
         
      });
    },
    GetCategoryFilters() {
      
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

      // this.Searchvalue = postcode;
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(res => {
        console.log('category Filters')
        console.log(res.data.drinks)
          this.CategoryFilters = res.data.drinks
         
      });
    },

    searchCocktailName(search: string) {
      
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

      // this.Searchvalue = postcode;
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(res => {
        console.log(res.data.drinks)
          this.Cocktails = res.data.drinks
         
      });
    },
    
    searchAlcoholic(search: string) {
      
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

      // this.Searchvalue = postcode;
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='+search)
      .then(res => {
        console.log(res.data.drinks)
          this.Cocktails = res.data.drinks
         
      });
    },
    
    searchByCategory(search: string) {
      
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

      // this.Searchvalue = postcode;
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+search)
      .then(res => {
        console.log(res.data.drinks)
          this.Cocktails = res.data.drinks
         
      });
    },
   searchCocktailIngredient(search: string) {
      
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    console.log('www.thecocktaildb.com/api/json/v1/1/filter.php?i='+search)
      // this.Searchvalue = postcode;
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+search)
      .then(res => {
        console.log(res.data.drinks)
          this.Cocktails = res.data.drinks
         
      });
    },
   
  },
  created() {
    this.GetCocktailIngredients();
    this.GetAlcoholicFilters();
    this.GetCategoryFilters();
    // this.searchCocktailName('margarita');

  },



   
});


</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
