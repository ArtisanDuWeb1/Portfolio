<template>
    <div id="portfolio" class="w-full flex flex-wrap relative justify-center mt-24 ">
        <div class="absolute w-[2px] h-[150px] secondary -mt-10 z-20"></div>
        
        <div class="w-full flex">
            <div  class="w-full md:w-1/2 px-8 pb-16 bg-gray-200">
                <div class="px-8 h-72 flex items-center">
                    <Titre title="Les projets" :titleClass="'text-gray-400'" :dark="true" align="left" class="ml-12 mt-7"/>
                </div>
            </div>
            <div  class="hidden md:flex md:w-1/2 0 mt-20 bg-gray-200">
            </div>
        </div>   
        <div class="w-full pb-20 bg-gray-200 px-8 -mt-6">
            <div id="gallery" class="flex flex-wrap">
                <div @click="loadModal(item.id)" v-for="(item ,index) in projets" :id="'projet-'+ item.id" :key="index" :class="[numIsPair(index) ? 'pr-7' : 'mt-24 pl-7' ]" class="opacity-0  w-full md:w-1/2 group  cursor-pointer transition-all easy-in-out duration-900 mb-24">
                    <div :class="'hover:bg-' + item.color + '-300'" class="py-24  bg-gray-300 relative ">
                        <div class="rounded-t-lg bg-gray-400 p-5 w-8/12 mx-auto transition-all easy-in-out duration-900" :class="'group-hover:bg-' + item.color + '-400'">
                            <img :src="'/img/projets/' + item.image[0]" alt="" class="w-full z-0"/>
                        </div>
                        <div class="rounded-b-lg w-9/12 h-6 bg-gray-500 group-hover:bg-green-500 mt-1 mx-auto transition-all easy-in-out duration-900" :class="'group-hover:bg-' + item.color + '-500'"></div>
                        <div class="absolute font-bold text-[2.5rem] bottom-0  text-gray-500 text-left z-30 ml-12 -mb-14">
                            {{item.title}}
                            <div class="text-2xl flex -mt-2 font-thin">
                                <span class="mr-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 19H4C2.9 19 2 18.1 2 17H22C22 18.1 21.1 19 20 19Z" fill="#5a832f"/>
                                        <path opacity="0.3" d="M20 5H4C3.4 5 3 5.4 3 6V17H21V6C21 5.4 20.6 5 20 5Z" fill="#7cb342"/>
                                    </svg>
                                </span>{{item.category}}
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
        <ProjectModal v-show="modal"></ProjectModal>
    </div> 
</template>

<script >
import Titre from '../partials/Titre.vue'
import ProjectModal from '../partials/ProjectModal.vue'
export default {
    name:"Portfolio",
    components:{
        Titre,
        ProjectModal,
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data () {
        return {
            indexModal:0,
            modal:false,
            mute:false,
            animated:[],
            projets:[
                {
                    id:"0",
                    title: "l'Artisan du Web",
                    category: "Site web",
                    labels:[
                        'laravel',
                        'php',
                        'vuejs'
                    ],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas libero ipsum, et pulvinar sem fringilla id. Cras lobortis nulla ante, et finibus libero convallis eget. Pellentesque ultricies libero tellus.',
                    tasks:[
                        "Création d'un logo et d'illustrations (Illustrator)",
                        "Conception graphique & Webdesign (Photoshop)",
                        "Développement sous Laravel - MySQL",
                        "Interface d'administration",
                    ],
                    image:[
                        'capture-portfolio.png',
                        ],
                    color:'green',
                },
                {
                    id:"1",
                    title: "l'Artisan du Web",
                    category: "Site web",
                    labels:[
                        'laravel',
                        'php',
                        'vuejs'
                    ],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas libero ipsum, et pulvinar sem fringilla id. Cras lobortis nulla ante, et finibus libero convallis eget. Pellentesque ultricies libero tellus.',
                    tasks:[
                        "Création d'un logo et d'illustrations (Illustrator)",
                        "Conception graphique & Webdesign (Photoshop)",
                        "Développement sous Laravel - MySQL",
                        "Interface d'administration",
                    ],
                    image:[
                        'capture-portfolio.png',
                        ],
                    color:'green',
                },
                {
                    id:"2",
                    title: "Carologie",
                    category: "Site web",
                    labels:[
                        'PHP',
                        'HTML/CSS'
                    ],
                    description: "J'ai réalisé ce projet en août 2019 lors d'un hackaton qui se déroulait dans l'incubateur RimbaudTech à Charleville-Mézières. L'objectif du concours était d'utiliser une base de données construite à partir d'études démographiques et historiques de Charleville, effectuées par les chercheurs du CNRS de la Sorbonne à Paris, pour créer un site ou une application originale. Nous avons donc proposé Carologie qui est un projet de site internet accessible sur tout support permettant de savoir qui habitait à l'adresse que vous renseignez à la période que vous sélectionnez. Elle donne également des stastistiques sur les voisins et les gens du quartier à la même époque. Le projet est arrivé en 2ème position.",
                    tasks:[
                        "Création d'un logo et d'illustrations (Illustrator)",
                        "Conception graphique & Webdesign (Photoshop)",
                        "Développement sous Laravel - MySQL",
                        "Interface d'administration",
                    ],
                    image:[
                        "carologie.png"
                    ],
                    color:'red',
                    
                },
                {
                    id:"3",
                    title: "Biskit",
                    category: "Site web",
                    labels:[
                        'laravel',
                        'php',
                        'vuejs'
                    ],
                    description: "Ce projet est la version améliorée d'un exercice scolaire réalisé lors de ma formation. Je l'ai repris en utilisant VueJs ainsi que VueCli pour la première fois. J'envisage de le déployer en application mobile à l'aide de Vue native.",
                    tasks:[
                        "Création d'un logo et d'illustrations (Illustrator)",
                        "Conception graphique & Webdesign (Photoshop)",
                        "Développement sous Laravel - MySQL",
                        "Interface d'administration",
                    ],
                    image:[
                        "biskit1.png"
                    ],
                    color:'blue',
                    
                },
                {
                    id:"4",
                    title: "Étoile Champenoise",
                    category: "Site web / Web app",
                    labels:[
                        'PHP',
                        'Bootsrap'
                    ],
                    description: "Ce projet a été réalisé pour l'entreprise l'Etoile Champenoise basée à Donchery. L'objectif initial était de refaire la partie front-end d'une application interne à l'entreprise permettant d'obtenir facilement et rapidement des informations relatives aux colis ou aux partenaires de l'entreprise. Nous avons d'abord recréé entièrement la partie front-end du site en utilisant Bootstrap puis nous avons refait nous-même toute la partie back-end, en PHP et MySql pour la base de données, car cela nous semblait moins long que d'essayer d'intégrer la version déjà existante qui n'était pas commentée et difficile de compréhension. A la demande de la société nous avons également ajouté des fonctionalités : une interface permettant de gérer des messages journaliers et mensuels directement depuis le site et nous avons créer une page d'accueil visible par tous sans nécessité de connexion en guise de site vitrine de l'entreprise.",
                    tasks:[
                        "Développement d'une page vitrine",
                        "Développement sous PHP - MySQL",
                        "Interface d'administration",
                    ],
                    image:[
                        "etoilechamp.png"
                    ],
                    color:'blue',
                    
                },
            ]
        }
    },
    methods: {
        numIsPair(n) {
            return (n & 1) ? false : true;
        },
        toggleModal (){
            const scrollY= window.scrollY;
            this.mute=true;
            if(this.modal){
                this.$parent.animateCSS('#modal', 'slideOutRight').then((message) => {
                    if(message == "Animation ended"){
                        const topY = document.body.style.top;
                        this.modal = !this.modal
                        document.body.style.position = ""
                        document.body.style.top = "";
                        document.body.style.paddingRight = "0px";
                        window.scrollTo(0, parseInt(topY || '0') * -1)
                        this.mute=false;
                    }
                })
            }else{
                this.modal = !this.modal
                this.$parent.animateCSS('#modal', 'slideInRight');
                document.body.style.position = "fixed";
                document.body.style.top = "-" +  scrollY + "px";
                document.body.style.paddingRight = "15px"; 
                this.mute=false;
            }
        },
        loadModal(id){
            if(this.mute==false){
                this.indexModal = id;
                this.toggleModal();
            } 
        },
        handleScroll(){
            const gallery = document.getElementById('gallery').children;
            
            for (let i = 0; i < gallery.length; i++) {
                if(gallery[i].offsetTop +300 < window.scrollY && this.animated.findIndex(element => element == gallery[i].id) == -1){
                    this.$parent.animateCSS('#'+ gallery[i].id, 'fadeIn').then((message) => {
                        if(message == "Animation ended"){
                           gallery[i].style.opacity = "100%";
                        }
                    })
                    this.animated.push(gallery[i].id);
                }
            }
        }
    },
    computed:{
        GetPairProjects(){
            return this.projets.filter(projet => this.numIsPair(projet.id))
        },
        GetUnpairProjects(){
            return this.projets.filter(projet => this.numIsPair(projet.id)==false)
        }
    }
}
</script>

<style>
    .bg-black-opacity{
        background-color:rgba(0, 0, 0, 0.699)
    }

</style>