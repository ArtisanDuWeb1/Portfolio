<template>
<div id="home" class="py-18md:py-28">
    <section class="text-gray-600 body-font darkest">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 sm:w-1/4 w-1/2">
                    <h2 class="title-font font-semibold sm:text-4xl text-3xl text-secondary">12</h2>
                    <p class="leading-relaxed">Projets achevés</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                    <h2 class="title-font font-semibold sm:text-4xl text-3xl text-secondary">+12K</h2>
                    <p class="leading-relaxed">heures passées à coder</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                    <h2 class="title-font font-semibold sm:text-4xl text-3xl text-secondary">35</h2>
                    <p class="leading-relaxed">Downloads</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                    <h2 class="title-font font-semibold sm:text-4xl text-3xl text-secondary">4</h2>
                    <p class="leading-relaxed">Products</p>
                </div>
            </div>
        </div>
    </section>
    <section class="body-font mt-0 md:mt-20 pb-24">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-darkest">Bienvenue sur le portfolio
                    <br class="hidden lg:inline-block">de <span class="text-secondary">l'Artisan du Web</span>
                </h1>
                <p class="mb-8 leading-relaxed text-gray-300">
                    Ce dernier est développé avec VueJs et vous permet d'en apprendre un peu plus sur moi et sur ce que je sais faire.
                    <br>
                    Je vous souhaite une agréable visite et reste à votre dispition pour toutes informations complémentaires.
               </p>
                <div class="flex justify-center flex-wrap">
                    <div @click="$parent.swapToComponent('about')">
                        <Button text="En savoir plus" color="darkest" colorText="text-gray-300 group-hover:text-gray-900" class="mr-0 lg:mr-6"></Button>
                    </div>
                    <div @click="$parent.swapToComponent('contact')">
                        <Button text="Me contacter" color="bg-gray-400" colorText="text-darkest"></Button>
                    </div>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-12 md:mt-0 relative">
                <div class="h-full w-full darker mt-16 ml-20 absolute hidden lg:block"></div>
                <img class="object-cover object-center rounded grayscale scale-110 relative " alt="hero" src="img/site/photo-accueil.jpg">
            </div>
        </div>
    </section>
</div>
</template>
<script>
import Button from '../partials/Button.vue'
export default {
    name:"home",
    components:{
        Button,
    },
    methods:{
        btnFunction(el){
            this.$parent.swapToComponent(el);
        }
    }
}
</script>