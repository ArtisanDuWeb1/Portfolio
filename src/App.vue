<template>
  <div id="app" class="dark z-0 w-full overflow-hidden" :class="{'h' : modal}">
    <NavBar/>
    <Slider/>
    <component :is="currentTab"></component>
    <Footer/>
  </div>
</template>

<script>

import NavBar from './components/partials/NavBar.vue'
import Slider from './components/modules/Slider.vue'
import Portfolio from './components/pages/Portfolio.vue'
import Contact from './components/pages/Contact.vue'
import Footer from './components/partials/Footer.vue'
import About from './components/pages/About.vue'
import Home from './components/pages/Home.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Slider,
    Portfolio,
    Contact,
    Footer,
    About,
    Home
  },
  data() {
      return {
        currentTab:'home',
        modal:false,
        mute:false,
      }
  },
  computed:{
  },
  methods: {
    animateCSS(element, animation, prefix = 'animate__'){
      return new Promise((resolve) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);

      node.classList.add(`${prefix}animated`, animationName);

      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
      })
    },
    swapToComponent(component){
      if(component != this.currentTab && this.mute===false){
        window.scroll({
          top: 0,
          behavior:'smooth',
        });
        this.animateCSS('#header-text', 'fadeOut').then((message) => {
          if(message == "Animation ended"){
            this.currentTab = component;
            this.animateHeader();
          }
        })
      }
    },
    animateHeader(){
      this.mute=true;
      document.getElementById('header-cover-title-1').style.opacity = 100;
      document.getElementById('header-cover-title-2').style.opacity = 100;

      this.animateCSS( '#header-title-1' , 'backInLeft').then((message) => {
        if(message == "Animation ended"){
          this.animateCSS('#header-cover-title-1','lightSpeedOutLeft').then((message) => {
            if(message == "Animation ended"){
              document.getElementById('header-cover-title-1').style.opacity = 0;
              this.mute=false;
            }
          });
        }
      });
      this.animateCSS('#header-title-2', 'backInRight').then((message) => {
        if(message == "Animation ended"){
          this.animateCSS('#header-cover-title-2','lightSpeedOutRight').then((message) => {
            if(message == "Animation ended"){
              document.getElementById('header-cover-title-2').style.opacity = 0;
            }
          });
        }
      });
      this.animateCSS('#header-subtitle','fadeInUp').then((message) => {
        if(message == "Animation ended"){
          document.getElementById('header-subtitle').style.opacity = 100;
          
        }
      });
    },
    scrollScreen(){
      const el = screen.height-130;
      window.scroll({
        top: el,
        behavior: "smooth"
      })
    },
    scrollTo(id){
      const el = document.getElementById(id).offsetTop;
      window.scroll({
        top: el,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Khand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@100;300;400&family=Staatliches&display=swap');

#app {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight:100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.light{
    background-color:#99a1a6;
}
.text-light{
    color:#99a1a6;
}
.secondary{
  background-color: #5a832f;
}
.text-secondary{
  color: #5a832f;
}
.border-secondary{
  border-color:#5a832f;
}
.dark{
    background-color:#1b1d1f;
}
.darker{
    background-color: #0f1011;
}
.darkest{
    background-color:#0a0a0b;
}
.text-dark{
    color:#1b1d1f;
}
.text-darker{
    color:#0f1011;
}
.text-darkest{
    color:#0a0a0b;
}
.weight-light{
  font-weight:300;
}
.weight-regular{
  font-weight:400;
}
.gradient-radial{
  background:linear-gradient(180deg, rgba(34,193,195,0) 70%, rgb(255, 255, 255) 100%);
}
.shizuru{
  font-family: 'Staatliches', cursive;
}
.text-shadow{
  text-shadow: 1px 1px 2px black;
}
.condensed{
  font-family: 'Roboto Condensed', sans-serif;
}
.bebas{
font-family: 'Bebas Neue', cursive;
}
.decale{
  margin-top:60px;
  margin-bottom:-60px;
}
@media (max-width: 750px) {
  .decale{
    margin-top:0px;
    margin-bottom:0px;
  }
}
</style>
