<template>
    <nav id="navbar" class="w-full z-50 top-0 animate__animated animate__fadeInDownBig animate__delay-5s absolute" :class="{'darker' : menu}">
        <div class="w-full">
            <div :class="{'pr-4' : $parent.modal }">
                <div class="w-full mx-auto flex justify-between p-3 px-4 lg:px-8 xl:px-12 ">
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
                            <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-70 text-transparent" :class="{'w-5' : $parent.currentTab == 'contact'}"></div>
                        </div>
                         
                    </div>
                    <div class="flex">
                        <div class="py-1 flex items-center my-auto ml-8">
                            <button type="button" class="uppercase text-dark hover:text-black secondary focus:ring-4 font-bold rounded-full text-md p-2 px-3 text-center hover:scale-110 transition-all easy-in"><i class="fas fa-envelope"></i></button>
                        </div>
                        <div @click="menu=!menu" :class="{'bg-white text-black' : menu}" class="p-3 border-white border text-white flex md:hidden items-center justify-center my-auto rounded-full relative text-lg ml-4">
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                   
                </div>
                <div v-if="menu" class="w-full uppercase text-xl text-white mx-auto justify-center font-bold border-t border-gray-900 px-8">
                    <div @click="$parent.swapToComponent('home')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'home'}" class="border-b border-gray-900 py-10 flex items-center justify-center border-white hover:font-bold cursor-pointer">Accueil</div>
                    <div @click="$parent.swapToComponent('about')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'competences'}" class="border-b border-gray-900 py-10 h-full flex items-center justify-center border-gray-300 hover:font-bold cursor-pointer">À propos</div>
                    <div @click="$parent.swapToComponent('portfolio')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'portfolio' || $parent.modal}" class="border-b border-gray-900 py-10 flex items-center justify-center border-white hover:font-bold cursor-pointer">Portfolio</div>
                    <div @click="$parent.swapToComponent('contact')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'contact'}" class="py-10 flex items-center justify-center border-white hover:font-bold cursor-pointer">Contact</div>
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
            smallNav:false,         
        }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            if(this.$parent.modal == false){
                if(window.scrollY > 600){
                    this.smallNav=true;
                }
                else{
                    this.smallNav=false;
                }
            }
        },
        link(id) {
            if(this.$parent.modal == true){
                this.$parent.toggleModal();
                this.$parent.scrollTo(id);
            }else{
                this.$parent.scrollTo(id);
            }
        }
    }
}
</script>

<style>
    .bg-2{
        background-color:rgba(0, 0, 0, 0.247);
    }
</style>