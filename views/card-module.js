export default{
    emits:['selected'],
    props: ['card','id'],
    data: function(){
        return{
            idUsed:"id"+this.id,
            isClicked:false,
            svgCard: CardToHtml.create(this.card)
        }
    },
    methods:{
        clicked() {
            this.$emit('selected',this.id);
        },
    },
    
    // display svg card on component apparition
    mounted() {
        const cardDiv = document.querySelector(`#${this.idUsed}`);
        cardDiv.appendChild(this.svgCard);
    },

    // change svg card when card object is updated
    beforeUpdate() {
        this.svgCard = CardToHtml.create(this.card)
        const cardDiv = document.querySelector(`#${this.idUsed}`);
        cardDiv.querySelector('.card').remove();
        cardDiv.appendChild(this.svgCard);
    },
    template:`
    <div v-bind:id="idUsed" v-on:click="clicked">
    </div>
    `
}