<template>
    <nav id="navbar" class="w-full z-50 top-0 animate__animated animate__fadeInDownBig animate__delay-5s absolute">
        <div class="w-full">
            <div :class="{'pr-4' : $parent.modal }">
                <div class="w-full mx-auto flex justify-between p-3 px-4 lg:px-8 xl:px-12 ">
                    <div @click="$parent.scrollTo('slider')" class="flex py-3 cursor-pointer ">
                        <img alt="logo" class="w-12 sm:w-12 md:w-16  h-auto" src="../assets/logoAW.png">
                        <div class="flex-col ml-2 lg:flex my-auto text-left text-shadow">
                            <span class="text-white  text-sm sm:text-md md:text-lg lg:text-xl">l'<span class="font-bold text-gray-300">A</span>rtisan<br> du <span class="font-bold text-gray-300">W</span>eb</span>   
                        </div>
                    </div>
                    <div class=" hidden md:flex text-gray-400 uppercase text-lg  justify-center font-semibold">
                        <div @click="$parent.swapToComponent('home')" class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            Accueil
                            <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'services'}"></div>
                        </div>
                        <div @click="$parent.swapToComponent('about')"  class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            à propos
                            <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'about'}"></div>
                        </div>
                        <div @click="$parent.swapToComponent('competences')" class="group px-4 h-full flex items-center border-white hover:font-bold cursor-pointer justify-center hover:text-white transition-all easy-in">
                            Compétences
                             <div class="absolute h-[2px] w-0 rounded-full bg-gray-400 mt-9 transition-all easy-in group-hover:w-20 group-hover:bg-white duration-700 text-transparent" :class="{'w-5' : $parent.currentTab == 'competences'}"></div>
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
                   <div class="py-1 flex items-center my-auto ml-8">
                            <button type="button" class="uppercase text-dark hover:text-black secondary focus:ring-4 font-bold rounded-full text-md p-2 px-3 text-center hover:scale-110 transition-all easy-in"><i class="fas fa-envelope"></i></button>
                        </div>
                    <div @click="menu=!menu" :class="{'bg-white text-black' : menu}" class="p-3 border-white border text-white flex md:hidden items-center justify-center my-auto rounded-full relative text-lg">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
                <div v-if="menu" class="w-full bg-black uppercase text-xl text-white mx-auto bg-black justify-center pb-12">
                    <div @click="link('services')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'services'}" class="py-3 flex items-center justify-center border-white hover:font-bold cursor-pointer">Services</div>
                    <div @click="$parent.scrollTo('competences')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'competences'}" class="py-3 h-full flex items-center justify-center border-gray-300 hover:font-bold cursor-pointer">Compétences</div>
                    <div @click="$parent.scrollTo('portfolio')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'portfolio' || $parent.modal}" class="py-3 flex items-center justify-center border-white hover:font-bold cursor-pointer">Portfolio</div>
                    <div @click="$parent.scrollTo('tarifs')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'tarifs'}" class="py-3 flex items-center justify-center border-white hover:font-bold cursor-pointer">Tarifs</div>
                    <div @click="$parent.scrollTo('contact')" :class="{'bg-white text-black font-bold' : $parent.currentTab == 'contact'}" class="py-3 flex items-center justify-center border-white hover:font-bold cursor-pointer">Contact</div>
                    <div class="w-full py-3 flex justify-center">
                        <button type="button" class="uppercase text-white text-black bg-white focus:ring-0 font-bold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 my-3">Demander un devis</button>
                    </div>
                    <div class="w-full">
                        <div class="">

                        </div>
                    </div>
                    <div class="flex justify-center text-2xl text-white my-3">
                        <div class="px-2">
                            <i class="fab fa-facebook"></i>
                        </div>
                        <div class="px-2">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div class="px-2">
                            <i class="fab fa-behance"></i>
                        </div>
                        <div class="px-2">
                            <i class="fab fa-twitter"></i>
                        </div>
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