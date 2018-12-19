import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true;
export default ({Vue}) => {
    Vue.use(VueClipboard);
}
