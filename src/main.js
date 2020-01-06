// --- Vue Disqus ---
import VueDisqus from 'vue-disqus'
// --- FontAwesome SVG ---
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faFacebookF, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faFilePdf, faMapMarkerAlt,  faPhoneAlt, faArrowRight, faChevronUp, faClock, faInfoCircle, faCheck, faEnvelope, faSearch, faSadTear, faCaretDown, faLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
  faCheckCircle,
  faFilePdf,
  faInstagram,
  faFacebook,
  faFacebookF, 
  faLinkedin, 
  faTwitter,
  faWhatsapp,
  faPhoneAlt, 
  faArrowLeft,
  faArrowRight, 
  faChevronUp, 
  faClock, 
  faInfoCircle, 
  faCheck,
  faSearch,
  faSadTear,
  faCaretDown,
  faLink, 
  faEnvelope,
  faMapMarkerAlt)

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  Vue.filter('postExcerpt', function(value, totalChars) {
    if (!value) return ''
    value = value.toString()
    return value.substring(0, totalChars) + "..."    
  })  
  
  head.htmlAttrs = { lang: "pt-br" }
  
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Fonte Imagem: A clínica referência em diagnóstico por imagem no Rio de Janeiro`,
  })

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Fonte Imagem: A clínica referência em diagnóstico por imagem no Rio de Janeiro`,
  })  

  router.beforeEach((to, from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })  

  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueDisqus)
  require('typeface-montserrat')
}
