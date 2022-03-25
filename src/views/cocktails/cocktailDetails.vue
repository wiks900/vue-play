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
     
        


        <ion-grid>
        <ion-row>
          <ion-col  size="12" size-sm="4" >
            <!-- //:src=" 'something'" -->
              <img   :src="CocktailDetails.strDrinkThumb"  />
          </ion-col>
          <ion-col  size="12"  size-sm="4" >
              <ion-title> {{CocktailDetails.strDrink}} - <small> {{CocktailDetails.strIBA}}</small></ion-title>
              <br/>
              
              <ion-label>Glass: {{CocktailDetails.strGlass}}</ion-label>  <br/>
              <ion-label>Alcoholic?: {{CocktailDetails.strAlcoholic}}</ion-label>  <br/><br/><br/>
              <ion-label>Instructions</ion-label>

              <ion-item  size="12"> {{ CocktailDetails.strInstructions}} </ion-item>

  <br/>
               <ion-title>All Details</ion-title>
          <ion-accordion-group>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Category Filter </ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item v-for="( subitem, key) of CocktailDetails" :key="key" >
              <p>  {{key}} - {{subitem}}</p>
                </ion-item>
              
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>      



          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col  size="4" >
             
             <!-- {{ CocktailDetails }} -->


      

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
        { id: 0, postcode: 'CT8 8JH', name:'Mums' },
        { id: 1, postcode: 'CT12 5FE', name:'Work' },
        { id: 2, postcode: 'CT11 7LN', name:'Home' },
        { id: 3, postcode: 'CT9 5NE', name:'Staci' },
        
      ]);
   
    const router = useRouter();
    
  

      return { items , router }
    },
  
  data() {

    // var Searchvalue = 1;

    return {
      CocktailDetails: { id: 0, strInstructions: '',strDrink: '', strIBA: '',strDrinkThumb: null },
      Searchvalue: '',
    }
  },
  methods: {


    searchCocktailById(search: string) {
      
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

      // this.Searchvalue = postcode;
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+search)
      .then(res => {
        console.log(res.data.drinks)
          this.CocktailDetails = res.data.drinks[0]
        //  return (CocktailDetails)
      });
    },
   
   
  },
  created() {
        var cocktailid = this.$route.params.id;
       this.searchCocktailById(cocktailid.toString());

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
