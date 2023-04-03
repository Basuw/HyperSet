export default{
    emits:[],
    props:{
        deck:Deck,
        idRoom:String,
        mode:Boolean,//true for chrono
        hyperSet:Boolean,
    },
    data: function(){
        return{
            card:new Card({"filling":"empty"}),
            id:0,
            //deck : new Deck([2,0,1],3),
            selectedCards:[],
            selectedCardsindex:[],
            nbCardsSelected:0,
            connected:'7/8',
            timer:'10.51',
            win:false,
        }
    },
    methods:{
        selected(id){
            if(this.nbCardsSelected>=this.deck.nbCards){
                this.set();
            }
            else{// pas suffisament de cartes pour un set
                if(this.selectedCards[id]!=null){// carte déja selectionnée
                    document.querySelector(`#id${id}`).setAttribute("style","border: none;cursor: pointer;");
                    this.nbCardsSelected-=1
                    delete this.selectedCards[id]//pb
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
            console.log("this.selectedCards",this.selectedCards)
            let checkSet=this.deck.checkSet(this.selectedCards);
            if(checkSet==2){//is set
                this.win=true;
            }
            // remove red outline
            this.selectedCardsindex.forEach((e) => {
                document.querySelector(`#id${e}`).setAttribute("style","cursor: pointer;");
            })
            // flush array
            this.nbCardsSelected=0;
            this.selectedCards=[]
            this.selectedCardsindex=[]
        },
    },
    template:`
    <div class="description">
        <h2>Room: {{idRoom}}</h2>
        <h2 v-if="mode">{{timer}}</h2>
        <h2 v-else="!mode"> Remaining cards: {{deck.remainingCards.length}}/{{deck.allCards.length}}</h2>
        <h2>Players: {{connected}}</h2>
    </div>
    
    <div v-if="!win" v-bind:style="{border: '3px solid black', fontSize: '20px', display:'flex', 'flex-wrap':'wrap',margin:'1rem 17vw 20px 17vw'}">
            <card-module @selected='selected' :id=n :card=this.deck.outputCards[n-1] v-for="n in deck.outputCards.length"/>
    </div>
    <div  v-if="win">
        <h2>Félicitations, vous venez de gagner la partie ! 🎉</h2>
    </div>
    `
}