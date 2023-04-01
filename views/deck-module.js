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
            selectedCardsindex:[],
            nbCardsSelected:0,
            connected:'7/8',
            timer:'10.51',
        }
    },
    methods:{
        selected(id){
            if(this.nbCardsSelected>=this.deck.nbCards){
                this.set();
            }
            else{
                if(this.selectedCards[id]!=null){
                    document.querySelector(`#id${id}`).setAttribute("style","border: none;cursor: pointer;");
                    this.nbCardsSelected-=1
                    this.selectedCards[id]=null
                    this.selectedCardsindex.splice(this.selectedCardsindex.indexOf(id),1)
                }
                else{
                    this.selectedCards[id]=this.deck.outputCards[id-1]
                    document.querySelector(`#id${id}`).setAttribute("style","border: 2px solid red; cursor: pointer;");
                    this.nbCardsSelected+=1
                    this.selectedCardsindex.push(id)
                    if(this.nbCardsSelected==this.deck.nbCards){
                        this.set();
                    }
                }
            }
        },
        set(){
            let checkSet=this.deck.checkSet(this.selectedCards);
            if(checkSet){//is set
                
            }
            // remove red outline
            this.selectedCardsindex.forEach((e) => {
                document.querySelector(`#id${e}`).setAttribute("style","cursor: pointer;");
            })
            // flush array
            this.nbCardsSelected=0;
            this.selectedCards.splice(0,this.selectedCards.length+1)
            this.selectedCardsindex.splice(0,this.selectedCardsindex.length+1)
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