<template>
    <div id="slider" class="h-screen w-full relative overflow-hidden">
        <div class="absolute lg:-left-[80px] md:-left-[105px] w-full md:w-auto top-[120px] md:top-auto md:bottom-[170px] animate__animated animate__fadeInLeft animate__delay-5s z-30 flex md:block justify-center">
            <div class="flex -rotate-0 md:-rotate-90 ">
                <div class="flex text-gray-400" :class="[$parent.currentTab == 'home' ? 'inline' : 'hidden md:flex']">
                    <div class="h-8 w-8 md:w-12 md:h-12 darker flex items-center justify-center rounded-full">
                        <i class="fas fa-code-branch"></i>
                    </div>
                    <div class="my-auto ml-2 md:ml-3 text-md md:text-xl text-gray-300 relative" >
                        <a :href="commitLink" target="_blank" class="font-bold cursor-pointer commit_link">Dernier commit</a> : {{lastCommit}}
                    </div>
                </div>
            </div>
        </div>
        <div @click="$parent.scrollScreen" class="absolute z-30 right-auto md:right-[2px] lg:right-[28px] bottom-[48px] text-xl w-full md:w-auto flex justify-center animate__animated animate__fadeInRight animate__delay-5s">
            <div class="text-gray-300 leading-[23px] text-md md:text-[0.8rem] uppercase p-3 button-scroll cursor-pointer transition-all easy-in-out  items-center ">
                <span>V<br class="hidden md:block">o<br class="hidden md:block">i<br class="hidden md:block">r<br class="hidden md:block"> <br class="hidden md:block">p<br class="hidden md:block">l<br class="hidden md:block">u<br class="hidden md:block">s</span>
                <div class="h-12 w-12 darker flex items-center justify-center rounded-full mt-2 md:mt-3 mx-auto">
                    <i class="fas fa-angle-down"></i>
                </div>
            </div>
            
        </div>
        <kinesis-container id="header-text" class="w-full h-full relative flex justify-center items-center">
  
            <kinesis-element :strength="8" :originX="0"  class="relative flex w-full justify-center h-full items-center z-20" type="translate">
                <div class=" mx-auto  px-8">
                    <h1 id="header-subtitle" v-html="subtitles[getTabIndex]" class="opacity-0 text-4xl lg:text-5xl  text-white text-shadow text-left md:text-center animate__delay-4s"></h1>
                </div>
            </kinesis-element>
            <kinesis-element :strength="5" :originX="5" id="swapper-title"  class="bebas text-[6rem] md:text-[9rem] xl:text-[10rem] 2xl:text-[13rem] absolute font-bold leading-[7rem] md:leading-[11rem] xl:leading-[12rem] z-10 text-darker my-auto" type="translate">
                    <div id="header-title-1" class="relative text-left">
                        <div id="header-cover-title-1" v-html="titles1[getTabIndex]" class="absolute darkest  text-transparent opacity-100">
                        </div>   
                        <span v-html="titles1[getTabIndex]"></span> 
                    </div>
              
                    <div id="header-title-2" class="relative text-right mr-0 md:-mr-12 mt-0 md:-mt-3 animate__delay-2s">
                        <div id="header-cover-title-2" class="absolute darker text-transparent opacity-100">
                            {{ titles2[getTabIndex] }}
                        </div>   
                        {{ titles2[getTabIndex] }}
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
            lastCommit:'',
            commitLink:'',
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
            }else if(this.$parent.currentTab=="about"){
                return 1;
            }else if(this.$parent.currentTab=="competences"){
                return 2;
            }else if(this.$parent.currentTab=="portfolio"){
                return 3;
            }else if(this.$parent.currentTab=="contact"){
                return 4;
            }else{
                return 5;
            }
        }
    },
    methods:{
        getFiles(){
            this.$http({
                method: 'get',
                url: 'https://api.github.com/repos/ArtisanDuWeb1/Portfolio/commits',       
            }).then(
                response => (
                    this.lastCommit = new Date(response.data[0].commit.committer.date).toLocaleDateString("fr"),
                    this.commitLink= response.data[0].html_url
                )
            )
        }
    },
    mounted(){
        this.$parent.animateHeader();
    },
    created(){
        this.getFiles();
    }
}
</script>

<style>
:root {
  --animate-delay: 0.5s;
}

.commit_link:hover{
    color:#5a832f;
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

.button-scroll:hover{
    color:#5a832f;
}

.border-b-secondary{
    border-bottom-color:#5a832f;
}


@media (max-width: 380px) {
    #swapper-title{
        font-size:4rem;
    }
    #header-subtitle{
        font-size:1.8rem;
    }
    #modal-banner{
        height:200px;
    }
    #modal-computer{
        margin-top:-80px;
    }
  }
</style>