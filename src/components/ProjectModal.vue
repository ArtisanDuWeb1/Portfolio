<template>
  <div class="full-modal ">
        <div class="flex min-h-full max-w-full justify-end relative mt-16 overflow-hidden">
            <div class="w-full h-full z-0 absolute" @click="$parent.toggleModal">

            </div>
            <div id="modal" class="modal w-full md:w-full lg:w-3/4 xl:w-1/2 bg-gray-200 p-6 relative mt-2 sm:mt-2 md:mt-5 lg:mt-8">
            
                <div class="border border-gray-300 absolute p-2 px-5 right-0 mr-3 text-xl hover:bg-gray-300 hover:text- cursor-pointer -mt-2" @click="$parent.toggleModal">
                    <i class="fas fa-times"></i>
                </div>

                <h4 class="text-4xl bebas text-black text-left mb-4">L'artisan du web</h4>

                <div class="flex flex-wrap items-center my-5">
                    <div class="w-full sm:w-full md:w-1/2 p-1">
                        <img src="../assets/capture-portfolio.png" alt="" class="w-full"/>
                    </div>
                    <div class="w-full sm:w-full md:w-1/2 p-1">
                        <img src="../assets/capture_aw2.png" alt="" class="w-full"/>
                    </div>
                </div>

                <div class="flex flex-wrap weight-regular text-black text-left">
                    <div class="w-full sm:w-full md:w-7/12 p-1 ">
                        <h6 class="text-2xl uppercase font-bold mb-1 sm:mb-1 md:mb-4">Développement complet</h6>
                        <p class="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas libero ipsum, et pulvinar sem fringilla id. Cras lobortis nulla ante, et finibus libero convallis eget. Pellentesque ultricies libero tellus. </p>
                        <div class="mt-8 text-md font-bold">
                            <div class="mt-2">
                                <i class="fas fa-check"></i> Création d'un logo et d'illustrations (Illustrator)
                            </div>
                            <div class="mt-2">
                                <i class="fas fa-check"></i> Conception graphique & Webdesign (Photoshop)
                            </div>
                            <div class="mt-2">
                                <i class="fas fa-check"></i> Développement sous Laravel - MySQL
                            </div>
                            <div class="mt-2">
                                <i class="fas fa-check"></i> Interface d'administration
                            </div>
                            <div class="mt-2">
                                <i class="fas fa-check"></i> Animation des pages par Javascript (VueJs / AJAX)
                            </div>
                            <div class="mt-2">
                                <i class="fas fa-check"></i> Site Responsive (compatible tous supports)
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-full md:w-5/12  pl-2  mt-4 sm:mt-3 md:mt-0">
                        <h6 class="text-2xl uppercase font-bold mb-4">Informations</h6>
                        <div class="mb-7">
                            <div class="">
                                <i class="fas fa-calendar-alt"></i> <span class="font-bold">Année :</span> 2020
                            </div>
                            <div class="mt-2">
                                <i class="fas fa-calendar-alt"></i> <span class="font-bold">Catégorie :</span> Site vitrine
                            </div>
                        </div>
                        <div class="flex flex-wrap text-md uppercase">
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                Laravel
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                PHP
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                VueJS
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                Javascript
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                CSS
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                HTML
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                TailwindCSS
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                Photoshop
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                Illustrator
                            </div>
                            <div class="p-1 bg-black text-white mr-2 px-2 mt-2">
                                Illustrator
                            </div>
                        </div>
                        <div class="mt-10">
                            <a href="" class="font-bold uppercase border-black border p-2 px-3 hover:bg-black hover:text-white">
                                Visiter le site
                            </a>
                        </div>
                       
                    </div>
                </div>      
            </div>
        </div>
        
  </div>
</template>

<script>


export default {
    name:"ProjectModal",
    props:[

    ],
    components:{

    },
    data(){
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: false,
                freeScroll: false,
            }
        }
    }
}
</script>

<style>


    .full-modal{
        height:100vh;
        width:100vw;
        background:rgba(0, 0, 0, 0.664);
        position:fixed;
        z-index:49;
        background-size:cover;
        background-repeat:no-repeat;
        background-position:fixed;
        overflow:auto;
        top:0;
    }

    .flickity-page-dots {
        bottom: -22px;
    }
    /* dots are lines */
    .flickity-page-dots .dot {
        height: 4px;
        width: 40px;
        margin: 0;
        border-radius: 0;
    }

</style>
