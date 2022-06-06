import Vue from 'vue'
import App from './App.vue'
import VueKinesis from 'vue-kinesis'
import VueTypedJs from 'vue-typed-js'
import * as VueGoogleMaps from 'vue2-google-maps'
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCmMW-NUnWkaYKDf-sSZ7P51ZF21R1ey_U',
    libraries: 'places,drawing', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  installComponents: true,
})
Vue.use(VueTypedJs)
Vue.use(VueKinesis)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')

