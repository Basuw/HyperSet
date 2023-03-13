export default{
    emits:[],
    data: function(){
        return{
            card:new Card({"filling":"empty"})
        }
    },
    methods:{
        clicked:function () {
            
        }
    },
    template:`
    <div v-bind:style="{border: '3px solid black', fontSize: '20px', display:'flex', margin:'20px 10em 20px 20px'}">
        <div v-for="n in 10">
            {{ n }}
            <card-module :card={card}></card-module>
        </div>
    </div>
    `
}