<template>
    <div class="w-full flex items-center">
        <div class="w-full" :class="{'text_center' : align == 'center','text-left' : align == 'left','text-right' : align == 'right','text-center md:text-left' : align == 'mix'}">
            <h2 class="uppercase bebas text-5xl sm:text-5xl md:text-6xl lg:text-7xl " :class="titleClass"> {{ title }}</h2>
            <h4 class="text-xl sm:text-2xl lg:text-3xl "  :class="{'text-gray-300' : !dark, 'text-gray-500' : dark, subtitleClass}"> {{ subtitle }}</h4>
            <div class="h-2 mx-auto mt-7 relative flex w-full" :class="{'justify-center' : align == 'center','justify-start' : align == 'left','justify-end' : align == 'right', 'justify-center md:justify-start': align == 'mix'}">
                <div class="w-16 mr-2 rounded-full secondary"></div>
                <div class="w-2 mr-2 rounded-full secondary" ></div>
                <div class="w-2 mr-2 rounded-full secondary" ></div>
                <div class="w-2 mr-2 rounded-full secondary"></div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name:"mainTitle",
    props:[
     'title',
     'subtitle',
     'dark',
     'align',
     'titleClass',
     'subtitleClass'
    ]
}
</script>
