<template>
    <div id="slider" class="h-screen w-full relative overflow-hidden">
        <div class="absolute -left-[175px] lg:-left-[130px] bottom-[260px]  z-20 animate__animated animate__fadeInLeft animate__delay-5s hidden md:block ">
            <div class="flex -rotate-90">
                <div class="flex text-gray-300">
                    <div class="h-12 w-12 darker flex items-center justify-center rounded-full">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="my-auto font-medium ml-3">
                        tonolo.jules@gmail.com
                    </div>
                </div>
                <div class="flex text-gray-300 ml-5">
                    <div class="h-12 w-12 darker flex items-center justify-center rounded-full">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="my-auto font-medium ml-3">
                        (+33) 6.24.31.47.16
                    </div>
                </div>
            </div>
        </div>
        <div class=""></div>
        <kinesis-container id="header-text" class="w-full h-full relative flex justify-center items-center">
            <kinesis-element tag="div" :strength="8" id="banner" originX="50" class="w-full h-full absolute opacity-20 mx-auto" type="translate">
                
            </kinesis-element>
            <kinesis-element :strength="14" originX="50"  class="relative flex w-full justify-center h-full items-center z-20" type="translate">
                <div class=" mx-auto  px-8">
                    <h1 id="header-subtitle" v-html="subtitles[getTabIndex]" class="opacity-0 text-4xl lg:text-5xl xl:text-6xl text-white text-shadow text-left md:text-center animate__delay-4s"></h1>
                </div>
                
            </kinesis-element>
            <kinesis-element :strength="10"  class="bebas text-[12rem] lg:text-[14rem] xl:text-[16rem] absolute font-bold leading-[12rem] lg:leading-[14rem] xl:leading-[16rem] z-10 text-darker my-auto" type="translate">
                <div class="-rotate-90 md:rotate-0">
                    <div id="header-title-1" class="relative text-left">
                        <div id="header-cover-title-1"  class="absolute darkest  text-transparent opacity-100">
                            {{ titles1[getTabIndex] }}
                        </div>   
                        {{ titles1[getTabIndex] }}
                    </div>
              
                    <div id="header-title-2" class="relative text-right mr-0 md:-mr-12 mt-0 md:-mt-3 animate__delay-2s">
                        <div id="header-cover-title-2" class="absolute darker text-transparent opacity-100">
                            {{ titles2[getTabIndex] }}
                        </div>   
                        {{ titles2[getTabIndex] }}
                    </div>
                </div>
            </kinesis-element>
            
        </kinesis-container>
    </div>
</template>

<script>
export default {
    name:'Slider',
    data(){
        return {
            titles1:[
                `Jules`,
                `à propos`,
                `compétences`,
                `portfolio`,
                `contact`,
            ],
            titles2:[
                `Tonolo`,
                ``,
                ``,
                ``,
                ``,
            ],
            subtitles:[
                `Développeur <span class='font-semibold'>Web</span><br><span class="text-secondary font-bold">&</span> Web <span class='font-semibold'>Mobile</span>`,
                ``,
                ``,
                ``,
                ``,
                ``,
            ],
        }
    },
    computed:{
        getTabIndex(){
            if(this.$parent.currentTab=="home"){
                return 0;
            } else if(this.$parent.currentTab=="about"){
                return 1;
            } else if(this.$parent.currentTab=="competences"){
                return 2;
            } else if(this.$parent.currentTab=="portfolio"){
                return 3;
            } else if(this.$parent.currentTab=="contact"){
                return 4;
            } else{
                return 5;
            }
        }
    },
    mounted(){
        this.$parent.animateHeader();
    }
}
</script>

<style>
:root {
  --animate-delay: 0.5s;
}

#banner{
    background: linear-gradient(180deg, rgba(34,193,195,0) 70%, #1b1d1f 98%);
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    min-height:110%;
}
.img_slider{
    min-height:110%;
    min-width:110%;
    margin-left:-5%
}

</style>