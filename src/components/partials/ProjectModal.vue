<template>
  <div class="full-modal" id="full-modal" :class="[$parent.loader || $parent.mute ? 'overflow-hidden' : 'overflow-auto']">
        <div class="flex min-h-full w-full justify-end relative" >
            <div class="w-full h-full z-0 absolute" @click="closeModal"></div>
            <div id="modal" class="modal relative w-full lg:w-3/5 xl:1/2 bg-gray-300 shadow-2xl pb-24 overflow-x-hidden">
                <div class="absolute w-full w-full h-screen dark flex items-center justify-center transition-all easy-in-out z-50" v-show="$parent.loader">
                   <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin text-darker fill-green-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
                <div class="fixed px-4 py-3 top-0 text-xl hover:text-red-500 text-gray-300 cursor-pointer z-50 dark transition-all easy-in" @click="closeModal">
                    <i class="fas fa-times"></i>
                </div>
                <div id="modal-banner" class="dark relative flex items-center justify-center h-[280px] md:h-[400px] lg:h-[350px] px-5 ">
                    <h4 class="text-7xl sm:text-7xl md:text-9xl bebas text-darker text-center mb-4 z-40">{{$parent.projets[$parent.indexModal].title}}</h4>
                </div>
                 <div  id="modal-computer" class="md:-mt-[180px] lg:-mt-[160px] -mt-[120px] relative z-40">
                    <div class="rounded-t-lg bg-gray-400 p-2 md:p-3 w-8/12 md:w-6/12 mx-auto transition-all easy-in-out duration-900 bg-gray-400 ">
                        <img :src="'/img/projets/' + $parent.projets[$parent.indexModal].image[0]" alt="" class="w-full z-0"/>
                    </div>
                    <div class="rounded-b-lg w-9/12 md:w-7/12 h-3 md:h-4 bg-gray-500 group-hover:bg-green-500 mt-1 mx-auto transition-all easy-in-out duration-900 bg-gray-500"></div>
                </div>
                <div class="flex flex-wrap weight-regular text-black text-left mt-12 relative z-20">
                    <div class="w-full p-1 text-center">
                        <h4 class="text-3xl md:text-4xl font-bold text-darker text-center mb-1">{{$parent.projets[$parent.indexModal].title}}</h4>
                        <h6 class="text-xl  font-bold mb-1 sm:mb-1 md:mb-2 text-gray-500">{{ $parent.projets[$parent.indexModal].category }}</h6>
                        <div class="flex flex-wrap text-md uppercase justify-center mb-12">
                            <div v-for="(label, index) in $parent.projets[$parent.indexModal].labels" :key="index" class="p-1 text-gray-700 border border-gray-600 mr-2 px-2 mt-2">
                                {{label}}
                            </div>
                        </div>
                       <p class="text-md text-center lg:text-xl px-3 md:px-24 mt-0">{{ $parent.projets[$parent.indexModal].description }}</p>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center items-center mt-10 md:mt-16 z-20 relative">
                    <a v-if="$parent.projets[$parent.indexModal].link" :href="$parent.projets[$parent.indexModal].link" target="_blank" class="mx-2 my-2">
                        <mainButton text="visiter le site" color="darker" colorText="text-gray-300 hover:text-black darker"></mainButton>
                    </a>
                    <div class="mx-2 my-2 text-darker">
                        <button @click="prevProject" class="px-12 py-5 bg-gray-400 text-xl transition-all easy-in-out" :class="[$parent.indexModal == 0 ? 'opacity-50' : 'hover:bg-gray-600 hover:text-gray-300']" :disabled="$parent.indexModal == 0">
                            <i class="fas fa-angle-left"></i>
                        </button>
                        <button @click="nextProject" class="px-12 py-5 bg-gray-400 text-xl ml-1  transition-all easy-in-out" :class="[$parent.indexModal == $parent.projets.length -1 ? 'opacity-50' : 'hover:hover:bg-gray-600 hover:text-gray-300']" :disabled="$parent.indexModal == $parent.projets.length -1">
                            <i class="fas fa-angle-right"></i>
                        </button>
                    </div>
                </div>      
            </div>
        </div>
        
  </div>
</template>

<script>
import mainButton from './Button.vue'
export default {
    name:"ProjectModal",
    props:[

    ],
    components:{
        mainButton,
    },
    data(){
        return {

        }
    },
    methods:{
        closeModal(){
            if(this.$parent.mute==false){
                this.$parent.toggleModal();
            }
        },
        nextProject(){
            document.getElementById('full-modal').scrollTop=0;
            this.$parent.switchLoader();
            this.$parent.indexModal++;
            setTimeout(this.$parent.switchLoader, 400);
        },
        prevProject(){
            document.getElementById('full-modal').scrollTop=0;
            this.$parent.switchLoader();
            this.$parent.indexModal--;
            setTimeout(this.$parent.switchLoader, 400);
        }
    }
}
</script>

<style>

    .full-modal{
        height:100vh;
        width:100vw;
        background:rgba(0, 0, 0, 0.313);
        position:fixed;
        z-index:49;
        top:0;
        right:0;
    }


</style>
