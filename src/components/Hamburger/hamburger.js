export default {
    name: 'Hamburger',
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            collapse: this.isCollapse
        }
    },
    methods: {
        // 切换左侧菜单的折叠转台
        handleSildeMenuCollapse() {
            let me = this
            me.collapse = !me.collapse
            this.$emit('update:isCollapse', me.collapse)
        }
    }
}