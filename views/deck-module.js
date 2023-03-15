export default{
    emits:[],
    data: function(){
        return{
            card:new Card({"filling":"empty"}),
            deck : new Deck([0,1,2,3],3),
            id:0,
            selectedCards:[]
        }
    },
    methods:{
        selected(id){
            console.log("selected",id);
            this.selectedCards[id]=this.deck.outputCards[id-1]
        },
        unSelected(id){
            console.log("unSelected",id);
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