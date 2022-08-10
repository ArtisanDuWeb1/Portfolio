<template>
    <div class="w-full">
        <footer class="z-20 relative">
            <div class="flex justify-between flex-wrap-reverse">
                <div class="darker w-full md:w-1/2 p-16 mt-0 md:-mt-12 relative">
                    <div @click="$parent.scrollTo('slider')" class="flex py-3 cursor-pointer items-center">
                        <img alt="logo" class="w-12 sm:w-12 md:w-16  h-auto" src="img/site/logoAW.png">
                        <div class="flex-col ml-2 lg:flex text-left text-shadow josefin">
                            <span class="text-white  text-sm sm:text-md md:text-lg lg:text-xl">l'<span class="font-bold text-gray-300">A</span>rtisan<br> du <span class="font-bold text-gray-300">W</span>eb</span>   
                        </div>
                    </div>
                </div>
                <div class="bg-gray-300 w-full md:w-1/2  p-16">
                    <div class="flex mt-4 space-x-6 justify-center md:justify-end sm:mt-0 text-3xl md:text-2xl text-gray-600">
                        <a href="https://github.com/ArtisanDuWeb1" target="_blank" class="mr-2">
                            <i class="fab fa-github-square  hover:scale-125 opacity-75 hover:opacity-100 transition-all easy-in"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jules-tonolo-646693185/" target="_blank">
                            <i class="fab fa-linkedin hover:scale-125 opacity-75 hover:opacity-100 transition-all easy-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
   
</template>

<script>
export default {
    name:"Footer",

}
</script>

<style>

</style>