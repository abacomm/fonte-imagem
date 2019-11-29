// --- Vue Disqus ---
import VueDisqus from 'vue-disqus'
// --- FontAwesome SVG ---
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faChevronUp, faClock, faInfoCircle, faCheck, faEnvelope, faSearch, faSadTear, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
  faInstagram, 
  faFacebook, 
  faLinkedin, 
  faTwitter, 
  faArrowRight, 
  faChevronUp, 
  faClock, 
  faInfoCircle, 
  faCheck,
  faSearch,
  faSadTear,
  faCaretDown, 
  faEnvelope)

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "pt-br" }
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueDisqus)
  require('typeface-montserrat')
}
