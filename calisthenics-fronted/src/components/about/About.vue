<template>
    <div class="about row">
        <div class="col-4 offset-1">
            <h1 v-if="aboutTitle != null">
                {{aboutTitle}}
            </h1>

             <p v-if="about != null">
                 {{about}}
             </p>
        </div>

        <div class="col-4 offset-1">
             <img class="about__image" src="../../assets/images/about-image.jpg" alt="About image">
        </div>
       

    </div>
</template>

<script src="./About.ts"></script>
<style lang="scss" src="./About.scss" scoped></style>
