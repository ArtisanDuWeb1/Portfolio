<template>
  <div id="about" class=" w-full py-16">
    <div class="flex flex-wrap flex-col-reverse md:flex-row relative justify-center">
      <div class="absolute w-[2px] h-[80px] md:h-[150px] secondary -mt-[55px] md:-mt-10 z-20 top-0 left-[50%]"></div>
      <div class="absolute left-[50%] bottom-0 w-[2px] h-[80px] md:h-[150px] secondary -mb-[20px] md:-mb-[100px] z-20"></div>
      <div class="w-full md:w-1/2 img-about grayscale h-[500px] md:h-auto relative">
        <div class="absolute top-0 right-0 darker w-1/2 h-[30px] z-30 opacity-100 md:opacity-0"></div>
        <div class="absolute bottom-0 dark w-1/2 h-[30px] z-30 opacity-100 md:opacity-0"></div>
      </div>
      <div class="w-full md:w-1/2 darker decale px-8 sm:px-12 py-[80px] lg:py-[80px] xl:py-[130px] lg:px-[80px] xl:px-[130px]">
        <div class="absolute top-0 left-0 darker w-1/2 h-[30px] -mt-[30px] z-30 opacity-100 md:opacity-0"></div>
        <mainTitle class="text-left" title="à propos" titleClass="text-dark" subtitle="En savoir plus sur l'artisan du web" /> 
        <p class="text-left mt-12 text-gray-400 lg:text-lg xl:text-xl md:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis metus eget elit pharetra finibus. Aenean mollis pulvinar eros, eget vehicula magna. 
          <br><br>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis metus eget elit pharetra finibus. Aenean mollis pulvinar eros, eget vehicula magna. 
          Integer consequat, nisl eget cursus blandit, ex urna scelerisque est, nec tincidunt tortor dolor nec odio.
        </p>
        <div class="mt-12">
            <buttonMain :styleButton="1" text="En savoir plus"/>
        </div>
      </div>     
    </div>
    <Services class="mt-14"></Services>
    <Competences></Competences>
  </div>
</template>

<script>
import mainTitle from '../partials/Titre.vue'
import Services from '../modules/Services.vue'
import Competences from '../modules/Compétences.vue'
import buttonMain from '../partials/Button.vue'
export default {
    name:"About",
    components:{
        mainTitle,
        buttonMain,
        Competences,
        Services,
    }
}
</script>

<style>
.img-about{
  background-image: url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg');
  background-position: center;
  background-size:cover;
  background-repeat:no-repeat;
}

</style>