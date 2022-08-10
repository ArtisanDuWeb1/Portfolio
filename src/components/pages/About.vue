<template>
  <div id="about" class=" w-full pt-16">
    <div class="flex flex-wrap flex-col-reverse md:flex-row relative justify-center">
      <div class="absolute w-[1px] h-[80px] md:h-[200px] darker -top-[30px] md:-mt-10 z-20  left-[50%]"></div>
      <div class="absolute w-[1px] h-[100px] darker secondary -bottom-[120px] md:-mt-10 z-20  left-[50%] hidden md:block"></div>
      <div class="w-full md:w-1/2   h-[500px] md:h-auto relative">
        <div class="grayscale img-about h-full"></div>
        <div class="absolute top-0 right-0 darker w-1/2 h-[30px] z-30 opacity-100 md:opacity-0"></div>
        <div class="absolute bottom-0 dark w-1/2 h-[30px] z-30 opacity-100 md:opacity-0"></div>
      </div>
      <div class="w-full md:w-1/2 darker decale px-8 sm:px-12 md:px-8 py-[90px] md:py-[60px] lg:py-[80px] xl:py-[100px] 2xl:py-[150px] lg:px-[60px] 2xl:px-[100px]">
        <div class="absolute top-0 left-0 darker w-1/2 h-[30px] -mt-[30px] z-30 opacity-100 md:opacity-0"></div>
        <mainTitle class="text-left" title="Qui suis-je ?" titleClass="text-dark" subtitle="En savoir plus sur l'artisan du web" /> 
        <p class="text-left mt-12 text-gray-400 xl:text-md 2xl:text-lg text-md md:text-sm ">
          Jules Tonolo, 25 ans, développeur web et web mobile junior avec un profil full stack.
          J'ai reçu, en 2019 par le biais de la formation Simplon, une certification Opquast avancée ainsi qu'un diplôme niveau bac+2 à ce titre.
          <br><br>
          En 2021, je décide de créer ma micro-entreprise de développement web : l'Artisan du web.
          Le terme artisan signifie beaucoup pour moi, car il représente parfaitement ce que j'affectionne dans le développement : 
          le codage à la main et les projets sur mesure. Au fil des années, j'ai développé une véritable passion pour les nouvelles technologies
          Internet, informatique en général et les défis qu'elles peuvent représenter. 
          Désormais, l'envie de travailler en équipe a émergé. En effet, avide de progression, 
          avoir l'opportunité d'échanger diverses connaissances dans ce domaine par le biais de réalisation de projets en commun, est une nouvelle source de motivation. 
        </p>
        <div class="mt-12">
          <div @click="$parent.scrollTo('services')">
            <mainButton color="dark" colorText="text-darkest" text="En savoir plus"/>
          </div>
        </div>
      </div>     
    </div>
    <Services class="mt-14"></Services>
    <Competences></Competences>
    <div class="darkest py-[150px] md:py-[200px]">
        <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 class="text-3xl font-bold text-black dark:text-white sm:text-4xl">
                <span class="block">
                    Envie de voir ce que ça donne ?
                </span>
                <span class="block text-secondary">
                    C'est par ici que ca se passe.
                </span>
            </h2>
        </div>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md ">
              <a @click="$parent.swapToComponent('portfolio')">
                <mainButton color="dark" colorText="text-black dark" text="Voir les projets"/>
              </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import mainTitle from '../partials/Titre.vue'
import Services from '../modules/Services.vue'
import Competences from '../modules/Compétences.vue'
import mainButton from '../partials/Button.vue'
export default {
    name:"About",
    components:{
        mainTitle,
        mainButton,
        Competences,
        Services,
    }
}
</script>

<style>
.img-about{
  background-image: url('../../../public/img/site/photo-about.jpg');
  background-position: center;
  background-size:cover;
  background-repeat:no-repeat;
}

</style>