<template>
  <div id="contact" class="w-full pt-16">
    
    <div class="w-full mx-auto flex flex-wrap justify-center relative flex-wrap-reverse">
        
        <div class="w-full md:w-1/2  h-[500px] md:h-auto relative">
            <div class="absolute top-0 right-0 darker w-1/2 h-[30px]  z-30 opacity-100 md:opacity-0"></div>
            <div class="img-contact grayscale w-full h-full"></div>
        </div>
        <div class="w-full md:w-1/2 darker decale  px-8 sm:px-12 py-[80px] lg:py-[100px] xl:py-[120px] 2xl:py-[150px] lg:px-[80px] xl:px-[100px] 2xl:px-[130px]">
            <div class="absolute bottom-0 left-0 darkest w-1/2 h-[30px] -mt-[30px] z-30 opacity-100 md:opacity-0"></div>
            <mainTitle title="Contactez-moi" class="mb-16" titleClass="text-dark" align="left"/>
            <div class="flex justify-center md:justify-start flex-wrap flex-col">
                <div class="absolute top-0 right-0 dark w-1/2 h-[30px]  z-30 opacity-100 md:opacity-0"></div>
                <div class="text-left ml-4 md:ml-0">
                    <div class="py-3 text-white weight-regular">
                        <div class="font-bold text-xl flex items-center">
                            <div class="flex justify-center items-center w-16 h-16 dark rounded-full">
                                <i class="fas fa-mobile  text-secondary"></i>
                            </div>
                            <div class="text-gray-300 ml-4">
                                Telephone
                                <div class="text-sm text-gray-400 ">(+33) 6.24.31.47.16</div>
                            </div>
                        </div>
                    </div>
                    <div class="py-3 text-white weight-regular">
                        <div class="font-bold text-xl flex items-center">
                            <div class="flex justify-center items-center w-16 h-16 dark rounded-full">
                                <i class="fas fa-envelope  text-secondary"></i>
                            </div>
                            <div class="text-gray-300 ml-4">
                                E-mail
                                <div class="text-sm text-gray-400 ">tonolo.jules@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div class="py-3 text-white weight-regular">
                        <div class="uppercase font-bold text-xl flex items-center">
                            <div class="flex justify-center items-center w-16 h-16 dark rounded-full">
                                <i class="fas fa-cog  text-secondary"></i>
                            </div>
                            <div class="text-gray-300 ml-4">
                                S.I.R.E.N
                                <div class="text-sm text-gray-400 ">522 491 000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center items-center flex-col darkest py-[150px] md:py-[200px]">
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 class="text-3xl font-bold text-black sm:text-4xl">
                <span class="block text-gray-300">
                    N'hésitez pas à <span class="text-secondary">m'envoyer un mail</span> pour de plus amples informations !
                </span>
            </h2>
            <div class="lg:mt-0 lg:flex-shrink-0">
                <div class="mt-8 inline-flex rounded-md ">
                  <a href="mailto:tonolo.jules@gmail.com">
                    <MainButton color="dark" colorText="text-black dark" text="Me contacter"/>
                  </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import mainTitle from '../partials/Titre.vue'
import MainButton from '../partials/Button.vue'
export default {
    name: "Contact",
    components:{
        mainTitle,
        MainButton
    }
}
</script>

<style>
    .img-contact{
        background-image: url('../../../public/img/site/photo-contact.jpg');
        background-position: center;
        background-size:cover;
        background-repeat:no-repeat;
    }
</style>