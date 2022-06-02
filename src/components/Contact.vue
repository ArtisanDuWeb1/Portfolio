<template>
  <div id="contact" class="w-full py-16">
    
    <div class="w-full mx-auto flex flex-wrap justify-center pb-16 relative">
        <div class="absolute w-[2px] h-[150px] secondary -mt-10 z-20"></div>
        <div class="absolute bottom-0 w-[2px] h-[150px] secondary -mb-[30px] z-20"></div>
        <div class="w-full md:w-1/2 px-4 md:px-0 opacity-75">
            <GmapMap
                class="w-full md:h-full"
                :center="{lat:49.768344526755534, lng:4.722418372745748}"
                :zoom="9"
                map-type-id="terrain"
                style=""
            >
                <GmapMarker
                    :position="{lat:49.768344526755534, lng:4.722418372745748}"
                    :clickable="true"
                    :draggable="true"
                    @click="center={lat:49.768344526755534, lng:4.722418372745748}"
                />
            </GmapMap>
        </div>
        <div class="w-full md:w-1/2  text-center md:text-left darker decale  px-8 sm:px-12 py-[80px] lg:py-[80px] xl:py-[130px] lg:px-[80px] xl:px-[130px]">
            <mainTitle title="Contactez-moi" subtitle="Je suis disponible du lundi au vendredi " class="mb-12"/>
            <div class="flex mb-5 items-center">
                <div class="w-24 h-24  overflow-hidden rounded-full flex justify-center border-secondary border-4">
                    <img src="../assets/pdp.jpg" alt="" class="w-32">
                </div>
                <div class="text-gray-300 ml-3 text-2xl">
                    <span class="uppercase">Jules Tonolo</span>
                    <div class="text-sm text-gray-400 ">Développeur web et web mobile</div>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="py-3 pr-5 text-white weight-regular">
                    <div class="font-bold text-xl flex items-center">
                        <div class="flex justify-center items-center w-16 h-16 dark rounded-full">
                            <i class="fas fa-mobile  text-secondary"></i>
                        </div>
                        <div class="text-gray-300 ml-3">
                            Telephone
                            <div class="text-sm text-gray-400 ">(+33) 6.24.31.47.16</div>
                        </div>
                    </div>
                </div>
                <div class="py-3 px-5 text-white weight-regular">
                    <div class="font-bold text-xl flex items-center">
                        <div class="flex justify-center items-center w-16 h-16 dark rounded-full">
                            <i class="fas fa-envelope  text-secondary"></i>
                        </div>
                        <div class="text-gray-300 ml-3">
                            E-mail
                            <div class="text-sm text-gray-400 ">tonolo.jules@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div class="py-3 px-5 text-white weight-regular">
                    <div class="uppercase font-bold text-xl flex items-center">
                        <div class="flex justify-center items-center w-16 h-16 dark rounded-full">
                            <i class="fas fa-cog  text-secondary"></i>
                        </div>
                        <div class="text-gray-300 ml-3">
                            S.I.R.E.N
                            <div class="text-sm text-gray-400 ">522 491 000</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mt-10 text-4xl text-gray-300">
                <div class="mr-5">
                    <i class="fab fa-facebook hover:scale-125 opacity-75 hover:opacity-100 transition-all easy-in"></i>
                </div>
                <div class="mr-5">
                    <i class="fab fa-instagram hover:scale-125 opacity-75 hover:opacity-100 transition-all easy-in"></i>
                </div>
                <div class="mr-5">
                    <i class="fab fa-twitter hover:scale-125 opacity-75 hover:opacity-100 transition-all easy-in"></i>
                </div>
                <div class="mr-5">
                    <i class="fab fa-linkedin hover:scale-125 opacity-75 hover:opacity-100 transition-all easy-in"></i>
                </div>
                <div class="mr-5">
                    <i class="fab fa-behance-square hover:scale-125 opacity-75 hover:opacity-100 transition-all easy-in"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-[700px] flex justify-center items-center flex-col">
        <div class="text-darkest text-6xl text-center font-bold mb-10">
            Une <span class="font-bolder text-secondary">idée</span> ou simplement une <span class="font-bolder text-secondary">envie</span> de créer un projet ? 
        </div>
        <main-button :styleButton="1" text="Travaillons ensemble"/>
    </div>
</div>
</template>

<script>
import mainTitle from './Titre.vue'
import MainButton from './Button.vue'
export default {
    name: "Contact",
    components:{
        mainTitle,
        MainButton
    }
}
</script>

<style>

</style>