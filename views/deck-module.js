export default{
    emits:[],
    data: function(){
        return{
            card:new Card({"filling":"empty"}),
            deck : new Deck([0,1,2,3],3),
            id:0,
            selectedCards:[],
            nbCardsSelected:0
        }
    },
    methods:{
        selected(id){
            if(this.nbCardsSelected>=this.deck.nbCards){
                document.querySelector(`#id${id}`).setAttribute("style","border: 2px solid black; margin: 20px; color: red; fontSize: 20px; cursor: pointer");
            }
            else{
                this.nbCardsSelected+=1;
                console.log("this.nbCardsSelected",this.nbCardsSelected);
                console.log("selected",id);
                this.selectedCards[id]=this.deck.outputCards[id-1]
                console.log('selectedCards add',this.selectedCards);
                if(this.nbCardsSelected==this.deck.nbCards){
                    this.set();
                    console.log("dqsdgqhj")
                }
            }
        },
        unSelected(id){
            if(this.selectedCards[id]!=null){
                this.selectedCards.splice(id,1);
                this.nbCardsSelected-=1;
                console.log("this.nbCardsSelected",this.nbCardsSelected);
                console.log('selectedCards remove',this.selectedCards);
                console.log("unSelected",id);
            }
        },
        set(){
            console.log("Check Set")
            let checkSet=true;
            if(checkSet){
                this.deck.checkSet(this.selectedCards);
                this.nbCardsSelected=0;
                this.selectedCards.splice(0,this.selectedCards.length+1)
                console.log("this.selectedCards.length",this.selectedCards.length)
            }
        },
    },
    template:`
    <div v-bind:style="{border: '3px solid black', fontSize: '20px', display:'flex', margin:'20px 10em 20px 20px'}">
        <div v-for="n in deck.outputCards.length">
            {{ n }}
            <card-module @selected='selected' @un-selected='unSelected' :id=n :card=this.deck.outputCards[n-1]></card-module>
        </div>
    </div>
    `
}