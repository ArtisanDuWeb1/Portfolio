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
                    <h1 v-html="subtitles[getTabIndex]" class="typing text-4xl lg:text-5xl xl:text-6xl text-white text-shadow text-left md:text-center animate__fadeInUp animate__delay-5s"></h1>
                </div>
                
            </kinesis-element>
            <kinesis-element :strength="10"  class="bebas text-[12rem] lg:text-[14rem] xl:text-[16rem] absolute font-bold leading-[12rem] lg:leading-[14rem] xl:leading-[16rem] z-10 text-darker my-auto header-animated" type="translate">
                <div class="-rotate-90 md:rotate-0">
                    <div class="relative text-left -ml-16 animate__animated animate__backInLeft header-animated">
                        <div class="absolute darkest  text-transparent  animate__animated animate__lightSpeedOutLeft animate__delay-3s header-animated">
                            {{ titles1[getTabIndex] }}
                        </div>   
                        {{ titles1[getTabIndex] }}
                    </div>
              
                    <div class="relative text-right mr-0 md:-mr-12 mt-0 md:-mt-3 animate__animated animate__backInRight animate__delay-2s header-animated">
                        <div class="absolute darker  animate__animated animate__lightSpeedOutLeft animate__delay-4s animate__fast text-transparent header-animated">
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
    props:[],
    data(){
        return {
            titles1:[
                `Sites`,
                `à propos`,
                `compétences`,
                `portfolio`,
                `contact`,
            ],
            titles2:[
                `Internet`,
                ``,
                ``,
                ``,
                ``,
            ],
            subtitles:[
                `<span class='font-semibold'>Création de site </span> vitrine, E-commerce,<br> corporate <span class="text-secondary font-bold">&</span> évenementiel`,
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