export default{
    emits:['unSelected','selected'],
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
            // if(!this.isClicked){
            //     this.isClicked=true
            //     document.querySelector(`#${this.idUsed}`).setAttribute("style","border: 2px solid red; margin: 20px; color: red; fontSize: 20px; cursor: pointer");
            //     this.$emit('selected',this.id);
            // }
            // else{
            //     this.isClicked=false
            //     document.querySelector(`#${this.idUsed}`).setAttribute("style","border: 2px solid black; margin: 20px; color: red; fontSize: 20px; cursor: pointer");
            //     this.$emit('unSelected',this.id);
            // }
        }
    },
    template:`
    <div v-bind:id="idUsed" v-bind:style="{border: '2px solid black',margin:'20px', color: 'red', fontSize: '20px', cursor: 'pointer' }" v-on:click="clicked">
        {{card.attributes}}
    </div>
    `
}