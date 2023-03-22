export default{
    emits:['selected'],
    props: ['card','id'],
    data: function(){
        return{
            idUsed:"id"+this.id,
            isClicked:false,
        }
    },
    methods:{
        clicked() {
            this.$emit('selected',this.id);
        }
    },
    template:`
    <div v-bind:id="idUsed" v-bind:style="{border: '2px solid black', color: 'red', fontSize: '20px', cursor: 'pointer' }" v-on:click="clicked">
        {{card.attributes}}
    </div>
    `
}