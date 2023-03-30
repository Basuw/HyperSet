export default{
    emits:[],
    props:{
        deckR:Deck,
        idRoom:String,
        mode:Boolean//true for chrono
    },
    data: function(){
        return{
            card:new Card({"filling":"empty"}),
            id:0,
            deck : new Deck([0,1,2,3],3),
            selectedCards:[],
            nbCardsSelected:0,
            connected:'7/8',
            timer:'10.51',
        }
    },
    methods:{
        selected(id){
            console.log(id);
            if(this.nbCardsSelected>=this.deck.nbCards){
                this.set();
                console.log("deb")
            }
            else{
                if(this.selectedCards[id]!=null){
                    console.log("deselec")
                    document.querySelector(`#id${id}`).setAttribute("style","border: none;cursor: pointer;");
                    this.nbCardsSelected-=1
                    this.selectedCards[id]=null
                }
                else{
                    console.log("Selec")
                    this.selectedCards[id]=this.deck.outputCards[id-1]
                    document.querySelector(`#id${id}`).setAttribute("style","border: 2px solid red; cursor: pointer;");
                    this.nbCardsSelected+=1
                    if(this.nbCardsSelected==this.deck.nbCards){
                        console.log("this.selectedCards.length",this.selectedCards.length)
                        this.set();
                    }
                }
            }
        },
        set(){
            console.log("Check Set")
            let checkSet=true;
            if(checkSet){
                console.log("this.selectedCards.length",this.selectedCards.length)
                this.deck.checkSet(this.selectedCards);
                this.nbCardsSelected=0;
                this.selectedCards.splice(0,this.selectedCards.length+1)
            }
        },
    },
    template:`
    <div class="description">
        <h2>Room: {{idRoom}}</h2>
        <h2 v-if="mode">{{timer}}</h2>
        <h2 v-else="!mode"> Remaining cards: {{deck.remainingCards.length}}/{{deck.allCards.length}}</h2>
        <h2>Players: {{connected}}</h2>
    </div>
    
    <div v-bind:style="{border: '3px solid black', fontSize: '20px', display:'flex', 'flex-wrap':'wrap',margin:'1rem 18rem 20px 20px'}">
            <card-module @selected='selected' :id=n :card=this.deck.outputCards[n-1] v-for="n in deck.outputCards.length"/>
    </div>
    `
}