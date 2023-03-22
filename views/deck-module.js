export default{
    emits:[],
    props:{
        deckR:Deck,
    },
    data: function(){
        return{
            card:new Card({"filling":"empty"}),
            id:0,
            deck : new Deck([0,1,2,3],3),
            selectedCards:[],
            nbCardsSelected:0,
            width:'12%'
        }
    },
    methods:{
        selected(id){
            if(this.nbCardsSelected>=this.deck.nbCards){
                this.set();
                console.log("deb")
            }
            else{
                if(this.selectedCards[id]!=null){
                    console.log("deselec")
                    document.querySelector(`#id${id}`).setAttribute("style","border: 2px solid black; color: red; fontSize: 20px; cursor: pointer; width:100%; height:100%");
                    this.nbCardsSelected-=1
                    this.selectedCards[id]=null
                }
                else{
                    console.log("Selec")
                    this.selectedCards[id]=this.deck.outputCards[id-1]
                    document.querySelector(`#id${id}`).setAttribute("style","border: 2px solid red; color: red; fontSize: 20px; cursor: pointer; width:100%; height:100%");
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
    <div v-bind:style="{border: '3px solid black', fontSize: '20px', display:'flex', 'flex-wrap':'wrap',margin:'20px 10em 20px 20px'}">
        <div class="Cardframe" v-bind:style="{ width:'12%', height:'15rem', margin:'2% 2% 2% 2%'}" v-for="n in deck.outputCards.length">
            <card-module @selected='selected' :id=n :card=this.deck.outputCards[n-1]></card-module>
        </div>
    </div>
    `
}