<template>
    <div id="competences" class="w-full z-20 relative pt-16">
        <div class="flex flex-wrap justify-center relative">
            <div class="absolute w-[1px] h-[80px] md:h-[200px] darker -top-[30px] md:-mt-10 z-20  left-[50%] hidden md:block"></div>
            
            <div class="w-full md:w-1/2 darkest py-[80px] md:py-[70px]  lg:py-[80px] 2xl:py-[120px]">
                <div class="absolute top-0 left-0 darkest w-1/2 h-[30px] -mt-[30px] z-30 opacity-100 md:opacity-0"></div>
                <div class="px-8 lg:px-[40px] xl:px-[60px] 2xl:px-[80px] mb-8">
                    <Titre class="" title="Compétences" align="left" titleClass="text-dark" subtitle="Des compétences à votre service"/>
                    <p class="text-md md:text-sm lg:text-md 2xl:text-lg text-gray-400 text-left mt-8">
                       Je me suis spécialisé dans la création de Single Page Application avec VueJS et Laravel. L'utilisation de Bootstrap et TailwindCSS est acquise et quelques projets sur Symfony ont également été réalisés. De mon souci du détail prononcé, découle une forte sensibilité au design ainsi qu'aux performances, ce qui me pousse à tendre vers un rendu toujours plus pointu. Adaptable, je sais partager et apprécier les interactions avec différents corps de métier dans l'objectif d'avancer en équipe. Enfin, mes capacités analytiques peuvent représenter un atout pour la recherche et la mise en place de solutions.
                    </p>
                </div>
                
                <div class="px-8 md:px-8 lg:px-[40px] 2xl:px-[80px] ">
                    <h6 class=" text-lg md:text-xl xl:text-2xl  mb-2 text-secondary font-bold text-left">Technologies utilisées en développement</h6>
                    <div class="flex flex-wrap">
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-3xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-html5"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">HTML5</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-3xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-css3-alt"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">CSS3</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-3xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-js"></i>
                            </div>
                            <span class="text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">Javascript</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-3xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-laravel"></i>
                            </div>
                            <span class="text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">Laravel</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-3xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-vuejs"></i>
                            </div>
                            <span class="text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">VueJs</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-3xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-php"></i>
                            </div>
                            <span class="text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">PHP</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-3xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-wordpress"></i>
                            </div>
                            <span class="text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">Wordpress</span>
                        </div>  
                    </div>
                    <h6 class="text-lg md:text-xl xl:text-2xl  mt-12 mb-2 text-secondary font-bold text-left">Technologies utilisées en conception graphique</h6>
                    <div class="flex flex-wrap">
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in justify-center mt-3">
                            <div class="text-6xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <img src="img/icons/ps-logo.png" class="w-[40px] mx-auto"/>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">Photoshop</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in justify-center mt-3">
                            <div class="text-6xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <img src="img/icons/illustartor-logo.png" class="w-[40px] mx-auto"/>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">illustrator</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in justify-center mt-3">
                            <div class="text-6xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <img src="img/icons/in-logo.png" class="w-[40px] mx-auto"/>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">inDesign</span>
                        </div> 
                    </div>
                </div> 
            </div>
            <div class="w-full md:w-1/2 px-8 lg:px-[40px] xl:px-[60px] 2xl:px-[80px] darker decale flex items-center relative pb-20 pt-8">
            <div class="absolute top-0 left-0 darker w-1/2 h-[30px] -mt-[30px] z-30 opacity-100 md:opacity-0"></div>
            <div class="absolute bottom-0 left-0 darkest w-1/2 h-[30px] -mt-[30px] z-30 opacity-100 md:opacity-0"></div>
                <div class="flex flex-wrap mt-5">
                    <div class="w-full text-left text-white">
                        <h6 class="text-xl xl:text-2xl   mb-5 text-secondary font-bold">Domaine de compétences</h6>
                        <div class="flex items-center">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-md lg:text-lg">Gestion de projet web</h6>
                                <div class="text-md text-gray-400">
                                    Site vitrine, corporate, évènementiel, e-commerce, intranet.    
                                </div>
                            </div>
                        </div>    
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-md lg:text-lg">Concetption graphique</h6>
                                <div class="text-md text-gray-400">
                                    Logos, templates Web, plaquettes publicitaires, cartes de visite, newsletters...
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-md lg:text-lg">Applications spécifique et interfaces d'administration</h6>
                                <div class="text-md text-gray-400">
                                    PHP - MYSQL - LARAVEL - JS - AJAX - VUEJS - SQL                          
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-md lg:text-lg">INTÉGRATION HTML / CSS</h6>
                                <div class="text-md text-gray-400">
                                    Codage à la main respectueux des standards du Web 
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-md lg:text-lg">MISE EN PLACE / MODIFICATION / GESTION DE CMS</h6>
                                <div class="text-md text-gray-400">
                                    Wordpress, Prestashop
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-md lg:text-lg">Dynamisme des pages par Javascrpit / AJAX</h6>
                                <div class="text-md text-gray-400">
                                    VueJs, Inertia
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-md lg:text-lg">Validation W3C, WAI & référencement naturel SEO</h6>
                                <div class="text-md text-gray-400">
                                    Accessibilité & ergonomie des pages web
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-md lg:text-lg">CONCEPTION MULTI-PLATEFORMES</h6>
                                <div class="text-md text-gray-400">
                                    Compatible tous supports, tablette & application mobile
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Titre from '../partials/Titre.vue'
export default {
    name:"Competences",
    components:{
        Titre,
    }
}
</script>

<style>
    #banner-comp{
        background:linear-gradient(354deg, rgba(34,193,195,0) 8%, #0a0a0b 80%),
                linear-gradient(174deg, rgba(34,193,195,0) 41%, #0a0a0b 80%);
        
        height:700px;
 
    }
    .img-bg{
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
    }


</style>