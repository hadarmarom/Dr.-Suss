export default {
    props: ['desc'],
    template: `
    <p @click="isShowMore = !isShowMore">Description: {{getDescription}} </p>
    `,
    computed: {
        getDescription() {
            if (this.desc.length < 100) return this.desc;
            else if (this.isShowMore) return this.desc;
            return `${this.desc.substring(0,100)}  press for more info`;
        }
    },
    data() {
        return {
            isShowMore: false,
        }
    },
    created(){
        this.isShowMore = false;
    }
}