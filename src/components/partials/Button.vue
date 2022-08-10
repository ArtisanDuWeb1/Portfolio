<template>
    <div class="flex group cursor-pointer" >
        <button class="custom-button relative px-12 py-5 flex justify-center transition-all easy-in-out duration-700" :class="colorText">
            <div class="slice-button h-full w-1/2 absolute left-0 top-0  group-hover:-translate-y-1 transition-all easy-in-out duration-700" :class="color"></div>
            <div class="slice-button h-full w-1/2 absolute right-0 top-0 group-hover:translate-y-1 transition-all easy-in-out duration-700" :class="color"></div>
            <span class="relative uppercase font-semibold transition-all easy-in"  v-html="text"></span>
        </button>
    </div>
</template>

<script>
export default {
    name:'Button',
    props:{ 
        colorText:{
            type: String,
            required:true,
        },
        text:{
            type: String,
            required:true,
        },
        color:{
            type: String,
            required:true,
        },
    }
}
</script>

<style scoped>
    .custom-button:hover>.slice-button{
        background-color:#5a832f;
    }
    .custom-button:hover{
        background-color:#5a832f;
    }
</style>