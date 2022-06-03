<template>
    <div id="portfolio" class="w-full flex flex-wrap relative justify-center mt-">
        <div class="absolute w-[2px] h-[150px] secondary -mt-10 z-20"></div>
        <div class="absolute bottom-0 w-[2px] h-[150px] secondary -mb-[100px] z-20"></div>
        <div class="w-full md:w-1/2 bg-gray-200 px-8 pb-16">
            <div class="px-8 h-72 flex items-center">
              <Titre title="Les projets" :titleClass="'text-gray-400'" :dark="true" align="left" class="ml-12 mt-7"/>
            </div>
            <div @click="$parent.toggleModal" class="relative w-full group py-24 hover:bg-green-300 bg-gray-300 cursor-pointer transition-all easy-in-out duration-900 mb-36">
                <div class="rounded-t-lg bg-gray-400 group-hover:bg-green-400 p-5 w-8/12 mx-auto transition-all easy-in-out duration-900">
                    <img src="../assets/capture-portfolio.png" alt="" class=" z-0"/>
                </div>
                <div class="rounded-b-lg w-9/12 h-6 bg-gray-500 group-hover:bg-green-500 mt-1 mx-auto transition-all easy-in-out duration-900"></div>
                 <div class="absolute font-bold text-[2.5rem] bottom-0  text-gray-500 text-left z-30 ml-12 -mb-14">
                    l'Artisan du Web
                    <div class="text-2xl flex -mt-2 font-thin">
                        <span class="mr-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M20 19H4C2.9 19 2 18.1 2 17H22C22 18.1 21.1 19 20 19Z" fill="#5a832f"/>
                                <path opacity="0.3" d="M20 5H4C3.4 5 3 5.4 3 6V17H21V6C21 5.4 20.6 5 20 5Z" fill="#7cb342"/>
                            </svg>
                        </span>Site web
                    </div>
                </div>      
            </div>
            <div @click="$parent.toggleModal" class="relative w-full group py-24 hover:bg-green-300 bg-gray-300 cursor-pointer transition-all easy-in-out duration-900">
                <div class="rounded-t-lg bg-gray-400 group-hover:bg-green-400 p-5 w-8/12 mx-auto transition-all easy-in-out duration-900">
                    <img src="../assets/capture-portfolio.png" alt="" class=" z-0"/>
                </div>
                <div class="rounded-b-lg w-9/12 h-6 bg-gray-500 group-hover:bg-green-500 mt-1 mx-auto transition-all easy-in-out duration-900"></div>
                 <div class="absolute font-bold text-[2.5rem] bottom-0  text-gray-500 text-left z-30 ml-12 -mb-14">
                    l'Artisan du Web
                    <div class="text-2xl flex -mt-2 font-thin">
                        <span class="mr-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M20 19H4C2.9 19 2 18.1 2 17H22C22 18.1 21.1 19 20 19Z" fill="#5a832f"/>
                                <path opacity="0.3" d="M20 5H4C3.4 5 3 5.4 3 6V17H21V6C21 5.4 20.6 5 20 5Z" fill="#7cb342"/>
                            </svg>
                        </span>Site web
                    </div>
                </div>      
            </div>
        </div>
        <div class="w-full md:w-1/2  pb-20 bg-gray-200 mt-20 px-8">
            <div class="px-8 h-72 flex items-center"></div>
            <div @click="$parent.toggleModal" class="relative w-full group py-24 hover:bg-red-300 bg-gray-300 mt-5 cursor-pointer transition-all easy-in-out duration-900">
                <div class="rounded-t-lg bg-gray-400 group-hover:bg-red-400 p-5 w-8/12 mx-auto transition-all easy-in-out duration-900">
                    <img src="../assets/capture-portfolio.png" alt="" class=" z-0"/>
                </div>
                <div class="rounded-b-lg w-9/12 h-6 bg-gray-400 group-hover:bg-red-400 mt-1 mx-auto transition-all easy-in-out duration-900"></div>
                <div class="absolute font-bold text-[2.5rem] bottom-0  text-gray-500 text-left z-30 ml-12 -mb-14">
                    l'Artisan du Web
                    <div class="text-2xl flex -mt-2 font-thin">
                        <span class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M20 19H4C2.9 19 2 18.1 2 17H22C22 18.1 21.1 19 20 19Z" fill="#5a832f"/>
                                <path opacity="0.3" d="M20 5H4C3.4 5 3 5.4 3 6V17H21V6C21 5.4 20.6 5 20 5Z" fill="#7cb342"/>
                            </svg>
                        </span>Site web
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