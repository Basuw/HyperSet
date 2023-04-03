export default {
  data: function() {
    return {
      chronoTime: 0,
      isHyperset: false,
      nbCards: 3,
      attr: [0,1,2,3],
      errorMessage: "",
     // red: "red"
    }
  },
  methods: {
    updateNbCard(nb) {
      console.log(nb);
      this.nbCards = nb

      const card3 = document.querySelector("#card3");
      const card4 = document.querySelector("#card4");
      const card5 = document.querySelector("#card5");

      if(nb == 3) {
        card4.checked = false
        card5.checked = false
      } else if (nb == 4){
        card3.checked = false
        card5.checked = false
      }else {
        card3.checked = false
        card4.checked = false
      }
    },
    updateAttributes(attrNb) {
      console.log(attrNb)
      console.log(this.attr)

      const att1 = document.querySelector("#attr1");
      const att2 = document.querySelector("#attr2");
      const att3 = document.querySelector("#attr3");
      const att4 = document.querySelector("#attr4");
      const att5 = document.querySelector("#attr5");

      if(this.attr.includes(attrNb)) {
        this.attr.splice(this.attr.indexOf(attrNb), 1)
        console.log(this.attr)
        //`att${attrNb}`.checked = false
      } else {
        this.attr.push(attrNb);
      }


      
    },
    startGame: function() {
      console.log('startGame')
      if( this.nbCards <= this.attr.length) {
        try {
          const deck =  new Deck(this.attr, this.nbCards)
          this.$emit('send-deck',deck);
        } catch (EmptyParamterException) {
          this.errorMessage = "Number of attributes must be superior to number of cards"
        }
        
      }
      else this.errorMessage = "Number of attributes must be superior to number of cards"
    }
  },
  template:`
<section>
  <h2 class="title2">Room Creation</h2>

<div class="group">
  <h3 class="title3">Game parameters</h3>
  <div id="game-param">
    <label id="player-slider-label">Chrono: {{ chronoTime }}min</label><br>
    <input type="range" min="0" max="20" value="0" class="slider" id="player-slider" v-model=chronoTime ><br>
    <span>HyperSet</span> <input type='checkbox' v-model=isHyperset /><br>
  </div>
</div>

<div class="group">
  <h3 class="title3">Card number to make a set</h3>
  <div id='card-param' class="param">
    <input id="card3" type='checkbox' v-on:click="updateNbCard(3)" checked=true /> <span>3</span>
    <input id="card4" type='checkbox' v-on:click="updateNbCard(4)" /> <span>4</span>
    <input id="card5" type='checkbox' v-on:click="updateNbCard(5)" /> <span>5</span>
  </div>
</div>

<div class="group">
  <h3 class="title3">Attributes to play with</h3>
  <div id='attributes-param' class="param">
    <input id="attr1" type='checkbox' checked=true @click="updateAttributes(1)" /> <span>number</span>
    <input id="attr2" type='checkbox' checked=true @click="updateAttributes(0)" /> <span>color</span>
    <input id="attr3" type='checkbox' checked=true @click="updateAttributes(2)" /> <span>shape</span>
    <input id="attr4" type='checkbox' checked=true @click="updateAttributes(3)" /> <span>filling</span>
    <input id="attr5" type='checkbox' @click="updateAttributes(4)" /> <span>outline</span>
  </div>
  <span v-bind:style="{color: 'red'}">{{ errorMessage }}</span>
</div>

<input class='button' type="submit" value="Start Game" @click="startGame()" />
</section>
`
}