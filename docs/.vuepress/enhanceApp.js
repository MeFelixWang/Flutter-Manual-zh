import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true;

export default function ({Vue}) {
    Vue.use(VueClipboard);
}