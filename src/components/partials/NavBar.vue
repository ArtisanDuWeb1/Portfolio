<template>
    <nav id="navbar" class="w-full z-50 top-0 animate__animated animate__fadeInDownBig animate__delay-5s absolute" >
        <div class="w-full relative">
            <div :class="{'pr-4' : $parent.modal }">
                <div class="w-full mx-auto flex justify-between p-3 px-4 lg:px-8 xl:px-12 transition-all easy-in-out duration-700 z-50 relative" :class="{'darkest fixed' : menu}">
                    <div @click="$parent.scrollTo('slider')" class="flex py-3 cursor-pointer ">
                        <img alt="logo" class="w-12 sm:w-12 md:w-16  h-auto" src="img/site/logoAW.png">
                        <div class="flex-col ml-2 lg:flex my-auto text-left text-shadow">
                            <span class="text-white  text-sm sm:text-md md:text-lg lg:text-xl">l'<span class="font-bold text-gray-300">A</span>rtisan<br> du <span class="font-bold text-gray-300">W</span>eb</span>   
                        </div>
                    </div>
                    <div :class="{'h-screen' : menu}" class="hidden md:flex text-gray-400 uppercase text-lg  justify-center font-semibold">
                        <div @click="$parent.swapToComponent('home')" class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            Accueil
                            <div class="absolute h-[2px] w-0 rounded-full secondary mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'home'}"></div>
                        </div>
                        <div @click="$parent.swapToComponent('about')"  class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            à propos
                            <div class="absolute h-[2px] w-0 rounded-full secondary mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'about'}"></div>
                        </div>
                        <div @click="$parent.swapToComponent('portfolio')" class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            Portfolio
                            <div class="absolute h-[2px] w-0 rounded-full secondary mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'portfolio'}"></div>
                        </div>
                        <div @click="$parent.swapToComponent('contact')" class="pl-4 pr-0 xl:pr-4 group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            Contact
                            <div class="absolute h-[2px] w-0 rounded-full secondary mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'contact'}"></div>
                        </div>
                         
                    </div>
                    <div class="flex">
                        <a href="mailto:tonolo.jules@gmail.com" class="flex items-center my-auto mr-3 md:mr-0">
                            <div class="uppercase text-dark hover:text-black secondary flex items-center justify-center font-bold rounded-full text-md  text-center hover:scale-110 transition-all easy-in  w-[43px] h-[43px]">
                                <i class="fas fa-envelope"></i>
                            </div>
                        </a>
                        <div class="my-auto flex md:hidden">
                            <button class="relative group "  @click="switchMenu()">
                                <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[43px] h-[43px] transform transition-all bg-gray-300 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                    <div class="flex flex-col justify-between w-[16px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden">
                                        <div class="darker h-[2px] w-5 transform transition-all duration-300 origin-left" :class="{'translate-x-10': menu }"></div>
                                        <div class="darker h-[2px] w-5 rounded transform transition-all duration-300 delay-75" :class="{'translate-x-10': menu }"></div>
                                        <div class="darker h-[2px] w-5 transform transition-all duration-300 origin-left delay-150" :class="{'translate-x-10': menu }"></div>

                                        <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 -mt-[2px]" :class="{'w-12 translate-x-0' : menu }">
                                            <div class="absolute darker h-[2px] w-4 transform transition-all duration-500 rotate-0 delay-300" :class="{'rotate-45': menu }"></div>
                                            <div class="absolute darker h-[2px] w-4 transform transition-all duration-500 -rotate-0 delay-300 " :class="{'-rotate-45': menu }"></div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                   
                </div>
                <div id="smallMenu" v-show="menu" class="w-full h-screen absolute top-0 text-2xl text-gray-300 mx-auto justify-center font-bold items-center px-8 darkest flex flex-col transition-all easy-in-out z-10 ">
                    <div @click="switchMenu();$parent.swapToComponent('home')" class=" flex items-center justify-center border-white hover:font-bold cursor-pointer mb-10">
                        Accueil
                        <div class="absolute h-[2px] w-0 rounded-full secondary mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'home'}"></div>
                    </div>
                    <div @click="switchMenu();$parent.swapToComponent('about')" class="flex items-center justify-center hover:font-bold cursor-pointer mb-10">
                        À propos
                        <div class="absolute h-[2px] w-0 rounded-full secondary mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'about'}"></div>
                    </div>
                    <div @click="switchMenu();$parent.swapToComponent('portfolio')" class="flex items-center justify-center hover:font-bold cursor-pointer mb-10">
                        Portfolio
                        <div class="absolute h-[2px] w-0 rounded-full secondary mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'portfolio'}"></div>
                    </div>
                    <div @click="switchMenu();$parent.swapToComponent('contact')" class="flex items-center justify-center border-white hover:font-bold cursor-pointer">
                        Contact
                        <div class="absolute h-[2px] w-0 rounded-full secondary mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'contact'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
</template>

<script>
export default {
    name:'Navbar',
    props:[
        'nav'
    ],
    data() {
        return {
            menu:false,
            darkNav:false,
            smallNav:false,         
        }
    },
    methods: {
        switchMenu(){
            if(this.menu){
                document.body.style.position = "";
                this.$parent.animateCSS('#smallMenu', 'fadeOutUpBig').then((message) => {
                    if(message == "Animation ended"){
                        this.menu=!this.menu;
                    }
                })
            }else{
                this.menu=!this.menu;
                document.body.style.position = "fixed";
                this.$parent.animateCSS('#smallMenu', 'fadeInDownBig');
            }
        },
        link(id) {
            if(this.$parent.modal == true){
                this.$parent.toggleModal();
                this.$parent.scrollTo(id);
            }else{
                this.$parent.scrollTo(id);
            }
        },

    }
}
</script>

<style>
    .secondary{
        background-color: #5a832f;
    }
</style>