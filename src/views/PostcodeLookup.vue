<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title ><span  class="capitalize"  >{{ Searchvalue }} </span></ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-item>
         Do some Lookup About {{ Searchvalue }} 
      </ion-item>
        <!-- <ion-button v-for="item of items" :key="item.id"  :href="'PostcodeLookup/'+item.postcode" > -->
        <ion-button v-for="item of items" :key="item.id"  @click="searchpostcode(item.postcode)" >
           {{item.name}} {{item.postcode}}
        </ion-button>
        
        <br/><br/>
      <ion-button v-for="item of months" :key="item.id"  @click="searchcrimedata(postcodedata.latitude, postcodedata.longitude, item.dateval)" >
           {{item.name}} {{item.dateval}}
        </ion-button>

       <!--  <ion-item>
        <p> {{crimedata}} </p>
        </ion-item>
         -->
       <ion-item>
        <!-- <p> {{weatherdata}} </p> -->
        </ion-item>
      
        <br/><br/><br/>
        
        <ion-title>Postcode Search Results</ion-title>
          <ion-accordion-group>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Show Postcode Data</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item v-for="( item, key) of postcodedata" :key="item.id"  >
                <p> {{ key.replaceAll('_' , ' ') }} -  {{item}} </p>
                </ion-item>
              
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>

        <br/><br/><br/>

        <ion-title>Nearby Crime Search Results</ion-title>
        <ion-item v-for="( item) of crimedata" :key="item.id"  >
        

          <ion-accordion-group>
            <ion-accordion value="numbe2rs">
              <ion-item slot="header">
                <ion-label>{{item.category.replaceAll('-' , ' ')}} {{item.location.street.name}}</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item v-for="( subitem, key) of item" :key="key"  >
                <p> {{ key.replaceAll('_' , ' ') }} - {{subitem}} </p>
                </ion-item>
              
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>

        </ion-item>



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
        { id: 4, postcode: 'CT7 9SE', name:'Matt' },
        
      ]);
        
    const months = ([
        { id: 0, dateval: '2021-01', name:'Jan 21' },
        { id: 1, dateval: '2021-02', name:'Feb 21' },
        { id: 2, dateval: '2021-03', name:'Mar 21' },
        { id: 3, dateval: '2021-04', name:'Apr 21' },
        { id: 4, dateval: '2022-01', name:'Jan 22' },
        { id: 5, dateval: '2022-02', name:'Feb 22' },
        
      ]);

    const router = useRouter();
    
  

      return { items , router, months }
    },
  
  data() {

    // var Searchvalue = 1;

    return {
      postcodedata: null,
      crimedata: null ,
      weatherdata: null ,
      Searchvalue: '',
     sendButtonDisable : false
    }
  },
  methods: {

    // var vm = this.postcodedata

    addTodo() {
      // this.$router.push({path: '/todos/add'})
    },
    searchpostcode(postcode: string) {
      // alert('something');
   

      this.Searchvalue = postcode;
      axios.get('https://api.postcodes.io/postcodes/'+postcode)
      .then(res => {
          this.postcodedata = res.data.result
          this.searchcrimedata(res.data.result.latitude, res.data.result.longitude, '2021-01')
          this.searchweather(res.data.result.latitude, res.data.result.longitude)
       
      });
    },
    searchcrimedata(latitude: string,longitude: string,dateval: string) {
      // alert('something');
        axios.get('https://data.police.uk/api/crimes-street/all-crime?date='+dateval+'&lat='+latitude+'&lng='+longitude)
      .then(res => {
          this.crimedata = res.data
          // console.log(this.crimedata)
        });
      
      
    },
    searchweather(latitude: string,longitude: string) {
      // alert('something');
      //https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
        axios.get('https://www.7timer.info/bin/astro.php?&ac=0&unit=metric&output=json&tzshift=0&lat='+latitude+'&lon='+longitude)
        .then(res => {
            this.weatherdata = res.data
            console.log(res.data)
          });
      
      
    },
   
  },
  created() {
    // axios.get('https://api.postcodes.io/postcodes/'+this.$route.params.id)
    //   .then(res => this.postcodedata = res.data.result);
    var postcode = this.$route.params.id;
    // console.log(postcode);
    this.searchpostcode(postcode.toString());
    //  console.log(this.postcodedata); 
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
