<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>New Item  {{ $route.params.id }}  </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

 
        <ion-grid>
  <ion-row>
    <ion-col>
       <ion-list inset="true"  >
          <ion-list-header color="danger">Basic</ion-list-header>
          <ion-accordion-group   >
            <ion-accordion  value="colors">
              <ion-item slot="header">
                <ion-label>Colors</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Red</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Green</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Blue</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="shapes">
              <ion-item slot="header">
                <ion-label>Shapes</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Circle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Triangle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Square</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Numbers</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>1</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>2</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>3</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>
        </ion-list>
    </ion-col>
    <ion-col size="6">
        <ion-item style="" >
            
            A thing in the middle
        </ion-item>
    </ion-col>
    <ion-col>
          <ion-list inset="true">
          <ion-list-header>Custom Icon</ion-list-header>
          <ion-accordion-group>
            <ion-accordion value="colors" toggle-icon="arrow-down-circle">
              <ion-item slot="header">
                <ion-label>Colors</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Red</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Green</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Blue</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="shapes" toggle-icon="arrow-down-circle">
              <ion-item slot="header">
                <ion-label>Shapes</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Circle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Triangle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Square</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="numbers" toggle-icon="arrow-down-circle">
              <ion-item slot="header">
                <ion-label>Numbers</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>1</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>2</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>3</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>
        </ion-list>

    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
        <ion-list inset="true">
          <ion-list-header>Open Accordion</ion-list-header>
          <ion-accordion-group value="colors">
            <ion-accordion value="colors">
              <ion-item slot="header">
                <ion-label>Colors</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Red</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Green</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Blue</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="shapes">
              <ion-item slot="header">
                <ion-label>Shapes</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Circle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Triangle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Square</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Numbers</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>1</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>2</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>3</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>
        </ion-list>

    </ion-col>
    <ion-col>
           <ion-list inset="true">
          <ion-list-header>Managing State</ion-list-header>
          <ion-accordion-group id="state" value="numbers">
            <ion-accordion value="colors">
              <ion-item slot="header">
                <ion-label>Colors</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Red</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Green</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Blue</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="shapes">
              <ion-item slot="header">
                <ion-label>Shapes</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Circle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Triangle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Square</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Numbers</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>1</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>2</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>3</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>
        </ion-list>
    </ion-col>
    <ion-col size="auto">
      <div>
        <ion-input placeholder="Variable width input"></ion-input>
      </div>
    </ion-col>
    <ion-col>  
        <ion-list inset="true">
          <ion-list-header>Multiple Accordions</ion-list-header>
          <ion-accordion-group multiple="true" id="multiple">
            <ion-accordion value="colors">
              <ion-item slot="header">
                <ion-label>Colors</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Red</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Green</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Blue</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="shapes">
              <ion-item slot="header">
                <ion-label>Shapes</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Circle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Triangle</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Square</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
            <ion-accordion value="numbers">
              <ion-item slot="header">
                <ion-label>Numbers</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>1</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>2</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>3</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
          </ion-accordion-group>
        </ion-list>
    </ion-col>
  </ion-row>
</ion-grid>

       
        <div class="ion-padding-start ion-padding-end ion-padding-bottom">
          <ion-button expand="block" onclick="logAccordionGroup()">Log Value of Accordion Group</ion-button>
          <ion-button expand="block" onclick="closeAccordions()">Close Accordion</ion-button>
        </div>
        <ion-item v-for="item of items" :key="item.id">
            <ion-label>{{ item.value }}</ion-label>
        </ion-item>
        <ion-button v-for="item of items" :key="item.id">
            {{ item.id }}
            {{item.value}}
        </ion-button>

    </ion-content>
  </ion-page>
</template>

<script>
  import { IonBackButton, IonButtons, IonContent, IonHeader,IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'JacksPage',
    components: {
      IonBackButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
    setup() {
      const items = ([
        { id: 0, value: 'Item 0' },
        { id: 1, value: 'Item 1' },
        { id: 2, value: 'Item 2' },
        
      ]);
      
      return { items }
    }
  });

</script>