<template>
  <div class="full-modal ">
        <div class="flex min-h-full w-full justify-end relative overflow-hidden ">
            <div class="w-full h-full z-0 absolute" @click="closeModal">

            </div>
            <div id="modal" class="modal relative w-full lg:w-3/5 xl:1/2 bg-gray-300 shadow-2xl pb-16 overflow-hidden">
                <div class="border border-gray-300 fixed p-2 px-5 right-0 mr-3 text-xl hover:bg-gray-300 text-gray-300 cursor-pointer -mt-2 z-50" @click="closeModal">
                    <i class="fas fa-times"></i>
                </div>
                <div class="dark relative flex items-center justify-center h-[400px] px-5">
                    <h4 class="text-8xl md:text-9xl bebas text-darker text-center mb-4">{{$parent.projets[$parent.indexModal].title}}</h4>
                </div>
                 <div class="md:-mt-[180px] -mt-[130px] relative">
                    <div class="rounded-t-lg bg-gray-400 p-3 w-8/12 md:w-6/12 mx-auto transition-all easy-in-out duration-900 bg-gray-400 ">
                        <img :src="'/img/projets/' + $parent.projets[$parent.indexModal].image[0]" alt="" class="w-full z-0"/>
                    </div>
                    <div class="rounded-b-lg w-9/12 md:w-7/12 h-4 bg-gray-500 group-hover:bg-green-500 mt-1 mx-auto transition-all easy-in-out duration-900 bg-gray-500"></div>
                </div>
                <div class="flex flex-wrap weight-regular text-black text-left mt-12">
                    <div class="w-full p-1 text-center">
                        <h4 class="text-4xl md:text-4xl font-bold text-darker text-center mb-1">{{$parent.projets[$parent.indexModal].title}}</h4>
                        <h6 class="text-xl  font-bold mb-1 sm:mb-1 md:mb-2 text-gray-500">{{ $parent.projets[$parent.indexModal].category }}</h6>
                        <div class="flex flex-wrap text-md uppercase justify-center mb-12">
                            <div v-for="(label, index) in $parent.projets[$parent.indexModal].labels" :key="index" class="p-1 text-black border border-black mr-2 px-2 mt-2">
                                {{label}}
                            </div>
                        </div>
                        <div class="flex w-full justify-center items-center flex-wrap px-8 md:px-0">
                            <div class="">
                                <div class="relative">
                                    <img :src="'/img/projets/' + $parent.projets[$parent.indexModal].image[0]" alt="" class="rounded-xl w-72 md:w-96 relative z-20"/>
                                    <div class="absolute rounded-full bottom-0 left-0 w-48 h-48 -mb-8 -ml-14" :class="'bg-'+$parent.projets[$parent.indexModal].color+'-300'"></div>
                                </div>
                            </div>
                            <div class="ml-0 md:ml-16 mt-12 md:mt-0">
                                <div class="text-lg font-bold text-left">
                                    <div v-for="(task, index) in $parent.projets[$parent.indexModal].tasks" :key="index" class="mt-2">
                                        <i class="fas fa-check text-secondary mr-2"></i>{{task}}
                                    </div>
                                </div>
                            </div>
                        </div>
                       <p class="text-md text-center lg:text-lg px-8 md:px-24 mt-16">{{ $parent.projets[$parent.indexModal].description }}</p>
                       
                    </div>
                </div>      
            </div>
        </div>
        
  </div>
</template>

<script>

export default {
    name:"ProjectModal",
    props:[

    ],
    components:{

    },
    data(){
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: false,
                freeScroll: false,
            }
        }
    },
    methods:{
        closeModal(){
            if(this.$parent.mute==false){
                this.$parent.toggleModal();
            }
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
        background-size:cover;
        background-repeat:no-repeat;
        background-position:fixed;
        overflow:auto;
        top:0;
        right:0;
    }


</style>
