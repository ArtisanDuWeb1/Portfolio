<template>
    <div id="competences" class="w-full z-20 relative py-16">
        <div class="flex flex-wrap justify-center relative">
            <div class="absolute w-[2px] h-[80px] md:h-[150px] secondary -mt-[55px] md:-mt-10 z-20 top-0 left-[50%]"></div>
            <div class="absolute left-[50%] bottom-0 w-[2px] h-[80px] md:h-[150px] secondary -mb-[20px] md:-mb-[100px] z-20"></div>
            <div class="w-full md:w-1/2 darkest py-[80px] ">
                 <div class="absolute top-0 left-0 darkest w-1/2 h-[30px] -mt-[30px] z-30 opacity-100 md:opacity-0"></div>
                <div class="px-8 md:px-12 lg:px-[60px] xl:px-[80px] mb-10">
                    <Titre class="" title="Compétences" align="left" subtitle="Des compétences à votre service"/>
                    <p class="text-md lg:text-lg xl:text-xl text-gray-400 text-left mt-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis metus eget elit pharetra finibus. Aenean mollis pulvinar eros, eget vehicula magna. 
                        Integer consequat, nisl eget cursus blandit, 
                        ex urna scelerisque est, nec tincidunt tortor dolor nec odio.
                    </p>
                </div>
                
                <div class="p-8 md:px-12 lg:px-[60px] xl:px-[120px] -mt-7">
                    <h6 class=" text-lg md:text-xl xl:text-2xl  mb-2 text-secondary font-bold text-left">Technologies utilisées en développement</h6>
                    <div class="flex flex-wrap">
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-4xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-html5"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">HTML5</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-4xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-css3-alt"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">CSS3</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-4xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-js"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">Javascript</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-4xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-laravel"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">Laravel</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-4xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-vuejs"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">VueJs</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-4xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-php"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">PHP</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in mt-3">
                            <div class="text-4xl lg:text-5xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <i class="fab fa-wordpress"></i>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">Wordpress</span>
                        </div>  
                    </div>
                    <h6 class="text-lg md:text-xl xl:text-2xl  mt-12 mb-2 text-secondary font-bold text-left">Technologies utilisées en conception graphique</h6>
                    <div class="flex flex-wrap">
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in justify-center mt-3">
                            <div class="text-6xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <img src="../assets/ps-logo.png" class="w-[40px] mx-auto"/>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">Photoshop</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in justify-center mt-3">
                            <div class="text-6xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <img src="../assets/illustartor-logo.png" class="w-[40px] mx-auto"/>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">illustrator</span>
                        </div>
                        <div class="flex flex-col group mr-6 hover:scale-110 transition-all easy-in justify-center mt-3">
                            <div class="text-6xl text-white opacity-50 group-hover:opacity-100 transition-all easy-in">
                                <img src="../assets/in-logo.png" class="w-[40px] mx-auto"/>
                            </div>
                            <span class="font-bold text-gray-400 mt-2 group-hover:text-gray-300 transition-all easy-in uppercase text-sm">inDesign</span>
                        </div> 
                    </div>
                </div> 
            </div>
            <div class="w-full md:w-1/2 px-8 lg:px-[80px] xl:px-[120px] darker decale flex items-center py-[80px] pb-[120px] md:pb-24 relative">
                <div class="absolute top-0 right-0 darkest w-1/2 h-[30px]  z-30 opacity-100 md:opacity-0"></div>
                <div class="absolute bottom-0 left-0 dark w-1/2 h-[30px]  z-30 opacity-100 md:opacity-0"></div>
                <div class="flex flex-wrap mt-5">
                    <div class="w-full text-left text-white">
                        <h6 class="text-xl xl:text-2xl   mb-5 text-secondary font-bold">Domaine de compétences</h6>
                        <div class="flex items-center">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-lg">Gestion de projet web</h6>
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
                                <h6 class="uppercase font-medium text-lg">Concetption graphique et webdesign</h6>
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
                                <h6 class="uppercase font-medium text-lg">Applications spécifique et interfaces d'administration</h6>
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
                                <h6 class="uppercase font-medium text-lg">INTÉGRATION HTML / CSS</h6>
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
                                <h6 class="uppercase font-medium text-lg">MISE EN PLACE / MODIFICATION / GESTION DE CMS</h6>
                                <div class="text-md text-gray-400">
                                    Wordpress, Joomla, Prestashop, phpBB, IPBoard
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-lg">Dynamisme des pages par Javascrpit / AJAX</h6>
                                <div class="text-md text-gray-400">
                                    jQuery, VueJs, babel, Inertia
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-5">
                            <div class="">
                                <i class="fas fa-check-circle text-secondary"></i>
                            </div>
                            <div class="ml-3">
                                <h6 class="uppercase font-medium text-lg">Validation W3C, WAI & référencement naturel SEO</h6>
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
                                <h6 class="uppercase font-medium text-lg">CONCEPTION MULTI-PLATEFORMES</h6>
                                <div class="text-md text-gray-400">
                                    Compatible tous supports, tablette & application mobile
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <kinesis-container event="scroll" class="w-full overflow-hidden h-[700px] flex items-center relative">
                <div class="hidden md:inline absolute h-[8px] darker w-[98%] mt-[85px] text-6xl">
                   <div class="absolute right-0 -mt-[29px] -mr-1 font-bold text-darker"> ></div>
                </div>
                <div class=" flex flex-wrap justify-between items-center w-full sm:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto ">
                    <div class="w-full mb-8">
                        <h6 class="text-gray-300 text-6xl uppercase weight-regular bebas">Déroulement d'un projet par étapes</h6>
                    </div>
                    <div class="w-1/2 md:w-auto flex items-center flex-col mt-5">
                        <div class="h-28 w-28 darkest rounded-full flex justify-center items-center text-secondary text-2xl relative">
                            <div class="absolute h-12 w-12 secondary text-black rounded-full bebas left-0 -ml-6 mt-7 flex justify-center items-center text-2xl">
                                1
                            </div>
                            <i class="fas fa-coffee"></i>
                        </div>
                        <div class="text-center mt-4 text-gray-300 font-bold text-xl uppercase">Café</div>
                    </div>
                    <div class="w-1/2 md:w-auto flex items-center flex-col mt-5">
                        <div class="h-28 w-28 darkest rounded-full flex justify-center items-center text-secondary text-2xl relative">
                            <div class="absolute h-12 w-12 secondary text-black rounded-full bebas left-0 -ml-6 mt-7 flex justify-center items-center text-2xl">
                                2
                            </div>
                            <i class="fas fa-edit"></i>
                        </div>
                        <div class="text-center mt-4 text-white font-bold text-xl uppercase">Analyse</div>
                    </div>
                    <div class="w-1/2 md:w-auto flex items-center flex-col mt-5">
                        <div class="h-28 w-28 darkest rounded-full flex justify-center items-center text-secondary text-2xl relative">
                            <div class="absolute h-12 w-12 secondary text-black rounded-full bebas left-0 -ml-6 mt-7 flex justify-center items-center text-2xl">
                                3
                            </div>
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <div class="text-center mt-4 text-white font-bold text-gray-300 text-xl uppercase">Design</div>
                    </div>
                    <div class="w-1/2 md:w-auto flex items-center flex-col mt-5">
                        <div class="h-28 w-28 darkest rounded-full flex justify-center items-center text-secondary text-2xl relative">
                            <div class="absolute h-12 w-12 secondary text-black rounded-full bebas left-0 -ml-6 mt-7 flex justify-center items-center text-2xl">
                                4
                            </div>
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="text-center mt-4 text-gray-300 font-bold text-xl uppercase">Code</div>
                    </div>
                    <div class="w-1/2 md:w-auto flex items-center flex-col mt-5">
                        <div class="h-28 w-28 darkest rounded-full flex justify-center items-center text-secondary text-2xl relative">
                            <div class="absolute h-12 w-12 secondary text-black rounded-full bebas left-0 -ml-6 mt-7 flex justify-center items-center text-2xl">
                                6
                            </div>
                            <i class="fas fa-bug"></i>
                        </div>
                        <div class="text-center mt-4 text-white weight-300 text-xl uppercase">Test</div>
                    </div>
                    <div class="w-1/2 md:w-auto flex items-center flex-col mt-5">
                        <div class="h-28 w-28 darkest rounded-full flex justify-center items-center text-secondary text-2xl relative">
                            <div class="absolute h-12 w-12 secondary text-black rounded-full bebas left-0 -ml-6 mt-7 flex justify-center items-center text-2xl">
                                6
                            </div>
                            <i class="fas fa-paper-plane"></i>
                        </div>
                        <div class="text-center mt-4 text-gray-300 font-bold text-xl uppercase">Livraison</div>
                    </div>
                </div>
        </kinesis-container> 
    </div>
</template>

<script>
import Titre from './Titre.vue'
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
        background-image:url('https://images.assetsdelivery.com/compings_v2/peshkov/peshkov1902/peshkov190200709.jpg');
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
    }


</style>