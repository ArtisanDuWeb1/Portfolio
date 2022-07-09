<template>
    <nav id="navbar" class="w-full z-50 top-0 animate__animated animate__fadeInDownBig animate__delay-5s absolute" >
        <div class="w-full">
            <div :class="{'pr-4' : $parent.modal }">
                <div class="w-full mx-auto flex justify-between p-3 px-4 lg:px-8 xl:px-12 transition-all easy-in-out duration-700 z-50 relative" :class="{'darkest' : menu}">
                    <div @click="$parent.scrollTo('slider')" class="flex py-3 cursor-pointer ">
                        <img alt="logo" class="w-12 sm:w-12 md:w-16  h-auto" src="img/site/logoAW.png">
                        <div class="flex-col ml-2 lg:flex my-auto text-left text-shadow">
                            <span class="text-white  text-sm sm:text-md md:text-lg lg:text-xl">l'<span class="font-bold text-gray-300">A</span>rtisan<br> du <span class="font-bold text-gray-300">W</span>eb</span>   
                        </div>
                    </div>
                    <div class=" hidden md:flex text-gray-400 uppercase text-lg  justify-center font-semibold">
                        <div @click="$parent.swapToComponent('home')" class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            Accueil
                            <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'home'}"></div>
                        </div>
                        <div @click="$parent.swapToComponent('about')"  class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            à propos
                            <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'about'}"></div>
                        </div>
                        <div @click="$parent.swapToComponent('portfolio')" class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            Portfolio
                            <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'portfolio'}"></div>
                        </div>
                        <div @click="$parent.swapToComponent('contact')" class="pl-4 pr-0 xl:pr-4 group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            Contact
                            <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'contact'}"></div>
                        </div>
                         
                    </div>
                    <div class="flex">
                        <div class="flex items-center my-auto mr-3 md:mr-0">
                            <button type="button" class="uppercase text-dark hover:text-black secondary focus:ring-4 font-bold rounded-full text-md  text-center hover:scale-110 transition-all easy-in  w-[43px] h-[43px]"><i class="fas fa-envelope"></i></button>
                        </div>
                        <div class="my-auto flex md:hidden">
                            <button class="relative group "  @click="switchMenu()">
                                <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[43px] h-[43px] transform transition-all bg-gray-300 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                    <div class="flex flex-col justify-between w-[16px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden">
                                        <div class="darker h-[2px] w-5 transform transition-all duration-300 origin-left" :class="{'translate-x-10': this.menu }"></div>
                                        <div class="darker h-[2px] w-5 rounded transform transition-all duration-300 delay-75" :class="{'translate-x-10': this.menu }"></div>
                                        <div class="darker h-[2px] w-5 transform transition-all duration-300 origin-left delay-150" :class="{'translate-x-10': this.menu }"></div>

                                        <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 -mt-[2px]" :class="{'w-12 translate-x-0' : this.menu }">
                                            <div class="absolute darker h-[2px] w-4 transform transition-all duration-500 rotate-0 delay-300" :class="{'rotate-45': this.menu }"></div>
                                            <div class="absolute darker h-[2px] w-4 transform transition-all duration-500 -rotate-0 delay-300 " :class="{'-rotate-45': this.menu }"></div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                   
                </div>
                <div id="smallMenu"  class="w-full uppercase text-xl text-white mx-auto justify-center font-bold  px-8 relative -translate-y-[150%] darker py-20 transition-all easy-in-out duration-700 z-10" :class="{'translate-y-0' : menu}" >
                    <div @click="switchMenu();$parent.swapToComponent('home')" class="py-10 flex items-center justify-center border-white hover:font-bold cursor-pointer">
                        Accueil
                        <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'home'}"></div>
                    </div>
                    <div @click="switchMenu();$parent.swapToComponent('about')" class="py-10 h-full flex items-center justify-center hover:font-bold cursor-pointer">
                        À propos
                        <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'about'}"></div>
                    </div>
                    <div @click="switchMenu();$parent.swapToComponent('portfolio')" class="py-10 flex items-center justify-center hover:font-bold cursor-pointer">
                        Portfolio
                        <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'portfolio'}"></div>
                    </div>
                    <div @click="switchMenu();$parent.swapToComponent('contact')" class="py-10 flex items-center justify-center border-white hover:font-bold cursor-pointer">
                        Contact
                        <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'contact'}"></div>
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
            this.menu=!this.menu;
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
    .bg-2{
        background-color:rgba(0, 0, 0, 0.247);
    }
</style>