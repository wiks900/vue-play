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
 

        <ion-button @click="GetCustomers()">Click Me</ion-button>

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
            <ion-card-title>{{item.strDrink}} {{item.idDrink}} </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <!-- {{item}} -->
            sjjsd
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

    GetCustomers() {
      
      let config = {
        headers: {
          'Access-Control-Allow-Origin': 'Accept',
        }
      }

      let data = {
        // 'HTTP_CONTENT_LANGUAGE': self.language
      }



      // this.Searchvalue = postcode;
       axios.get('https://dev.drinkwarehouseuk.co.uk/web-connector/DevAPI/FetchCustomers' ,  config )
      // axios.get('https://api.postcodes.io/postcodes/CT88JH')
      .then(res => {
        console.log('ingredients')
        console.log(res)
          // this.ingredients = res.data.drinks
         
      });
    },

   
  },
  created() {
    // this.GetCustomers();
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
