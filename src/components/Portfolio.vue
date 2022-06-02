<template>
    <div id="portfolio" class="w-full flex flex-wrap relative justify-center">
        <div class="absolute w-[2px] h-[150px] secondary -mt-10 z-20"></div>
        <div class="absolute bottom-0 w-[2px] h-[150px] secondary -mb-[100px] z-20"></div>
        <div class="w-full md:w-1/2 bg-gray-300 pb-16">
            <div class="px-8 md:px-12 lg:px-[60px] xl:px-[80px] pt-8 md:pt-12 lg:pt-[80px]">
              <Titre title="Portfolio" subtitle="Une partie des projets sur lesquels j'ai travaillé" :dark="true" align="left" class=" mt-5"/>
            </div>
           
        </div>
        <div class="w-full md:w-1/2 mx-auto pb-16 bg-gray-300 mt-12 pt-0 md:pt-10">
            
        </div>
        <div class="w-full bg-gray-300 px-8 md:px-12 lg:px-[60px] xl:px-[80px] pb-24 relative">
            <div class="">
                <div class="flex flex-row ">
                    <div class="w-[700px] mx-3">
                        <kinesis-container  class=" group cursor-pointer opacity-100  transition-all easy-in relative">
                            <div @click="$parent.toggleModal" class="absolute left-0 right-0 bottom-0 top-0 z-30"></div>
                            <div class="absolute flex z-30 right-0  mt-12 md:mt-16  items-center mr-10 ">
                                    <div class="h-[4px] w-[30px] lg:w-0 secondary rounded-full transition-all easy-in group-hover:w-[30px] "></div>
                                    <div class="text-gray-300 font-bold text-xl opacity-100 lg:opacity-0 transition-all easy-in-out group-hover:opacity-100 duration-900 ml-2">Voir le projet</div>
                            </div>
                            <kinesis-element  :strength="10"  type="depth" class="bg-gray-400 mx-auto transition-all ease-in-out duration-600 rounded-t-xl w-full flex relative justify-start items-end relative p-4">
                                <div class="relative z-10">
                                    <img src="../assets/capture-portfolio.png" alt="" class="w-full z-0">
                                </div>
                            </kinesis-element>
                            <div class=" uppercase text-3xl font-bold text-dark text-left z-30 font-bold mt-5 text-center">
                                l'Artisan du Web
                                <div class="h-[4px] md:h-[8px] w-[150px] lg:w-0 secondary rounded-full transition-all easy-in group-hover:w-[150px] mt-1 mx-auto"></div>
                            </div>      
                        </kinesis-container>
                    </div>
                    <div class="w-[700px] mx-3">
                        <kinesis-container  class=" group cursor-pointer opacity-100  transition-all easy-in relative">
                            <div @click="$parent.toggleModal" class="absolute left-0 right-0 bottom-0 top-0 z-30"></div>
                            <div class="absolute flex z-30 right-0  mt-12 md:mt-16  items-center mr-10 ">
                                    <div class="h-[4px] w-[30px] lg:w-0 secondary rounded-full transition-all easy-in group-hover:w-[30px] "></div>
                                    <div class="text-gray-300 font-bold text-xl opacity-100 lg:opacity-0 transition-all easy-in-out group-hover:opacity-100 duration-900 ml-2">Voir le projet</div>
                            </div>
                            <kinesis-element  :strength="10"  type="depth" class="bg-gray-400 mx-auto transition-all ease-in-out duration-600 rounded-t-xl w-full flex relative justify-start items-end relative p-4">
                                <div class="relative z-10">
                                    <img src="../assets/capture-portfolio.png" alt="" class="w-full z-0">
                                </div>
                            </kinesis-element>
                            <div class=" uppercase text-3xl font-bold text-dark text-left z-30 font-bold mt-5 text-center">
                                l'Artisan du Web
                                <div class="h-[4px] md:h-[8px] w-[150px] lg:w-0 secondary rounded-full transition-all easy-in group-hover:w-[150px] mt-1 mx-auto"></div>
                            </div>      
                        </kinesis-container>
                    </div>
                    <div class="w-[700px] mx-3">
                        <kinesis-container  class=" group cursor-pointer opacity-100  transition-all easy-in relative">
                            <div @click="$parent.toggleModal" class="absolute left-0 right-0 bottom-0 top-0 z-30"></div>
                            <div class="absolute flex z-30 right-0  mt-12 md:mt-16  items-center mr-10 ">
                                    <div class="h-[4px] w-[30px] lg:w-0 secondary rounded-full transition-all easy-in group-hover:w-[30px] "></div>
                                    <div class="text-gray-300 font-bold text-xl opacity-100 lg:opacity-0 transition-all easy-in-out group-hover:opacity-100 duration-900 ml-2">Voir le projet</div>
                            </div>
                            <kinesis-element  :strength="10"  type="depth" class="bg-gray-400 mx-auto transition-all ease-in-out duration-600 rounded-t-xl w-full flex relative justify-start items-end relative p-4">
                                <div class="relative z-10">
                                    <img src="../assets/capture-portfolio.png" alt="" class="w-full z-0">
                                </div>
                            </kinesis-element>
                            <div class=" uppercase text-3xl font-bold text-dark text-left z-30 font-bold mt-5 text-center">
                                l'Artisan du Web
                                <div class="h-[4px] md:h-[8px] w-[150px] lg:w-0 secondary rounded-full transition-all easy-in group-hover:w-[150px] mt-1 mx-auto"></div>
                            </div>      
                        </kinesis-container>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Titre from './Titre.vue'
export default {
    name:"Portfolio",
    components:{
        Titre,
    },
    data () {
        return {
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: true,
                pageDots: true,
                wrapAround: true,
                freeScroll: true
                // any options from Flickity can be used
            }
        }
    },
    created() {
    },
    methods: {
        toggleModal(){
            console.log("ok");
        }
    },
}
</script>

<style>
    .bg-black-opacity{
        background-color:rgba(0, 0, 0, 0.699)
    }
    #banner-portfolio{
         background:linear-gradient(6deg, rgba(34,193,195,0) 8%, #0a0a0b 80%),
                linear-gradient(186deg, rgba(34,193,195,0) 41%, #0a0a0b 80%);
        height:700px;
    }
</style>