<template>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cocktails</title>
    </head>

    <body class="d-flex align-content-center">
        <section class="mt-0">
            <div class="d-flex align-items-center title-container">
                <h1 class="first-main-title text-white pe-4 pb-2 fw-bolder">Cocktail</h1>
                <h1 class="main-title text-white fw-lighter">Bar</h1>
            </div>

            <p class="home-description text-white fw-medium">
                Benvenuti nel nostro cocktail bar, dove l'eleganza si unisce all'innovazione per offrirvi un'esperienza
                unica. Con cocktail artigianali e un'atmosfera raffinata, ogni sorso è un viaggio sensoriale. Venite a
                scoprire il gusto della nostra creatività in ogni bicchiere.
            </p>
            <button type="button" class="index-btn btn btn-primary" @click="navigateToCocktails">
                <a href="#" class="justify-content-center">
                    <h2>
                        MENU
                    </h2>
                </a>
            </button>
            <div>
                <button type="button" class="index-btn btn btn-primary" @click="navigateToContact">
                    <a href="#" class="justify-content-center">
                        <h2>
                            Contact
                        </h2>
                    </a>
                </button>
            </div>
            <div>
                <button type="button" class="index-btn btn btn-primary" @click="navigateToAbout">
                    <a href="#" class="justify-content-center">
                        <h2>About Us</h2>
                    </a>
                </button>
            </div>

        </section>
    </body>

    </html>
</template>
    
<style scoped>

.title-container{
    height: 200px;
}
.bg-image{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    overflow: hidden;
}

.first-main-title{
    padding-top: 140px;
    padding-left: 92px;
    font-size: 70px;
    box-sizing: border-box;
}

.main-title{
    font-size: 85px;
    padding-top: 125px;
    font-weight: 100;
    box-sizing: border-box;
}

.home-description{
    width: 670px;
    height: 260px;
    letter-spacing: 1.7px;
    padding-left: 95px;
    line-height: 40px;
}

.index-btn{
    width: 280px;
    height: 100px;
    border-radius: 0;
    margin-left: 95px;
    height: 100%;
    vertical-align: middle;
    background-color: #c6c6c6;
    opacity: 50%;
    text-align: center;
    transition: cubic-bezier(.22, .61, .36, 1);
    transition-duration: .3s;
    
    a{
        all: unset;
        box-sizing: border-box;

    &:hover{
        background-color: #76ac00;
        opacity: 90%;    
    }
    
    }

        h2{
            color: black;
            font-weight: 100;
            letter-spacing: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 5px;
        }
    }

.index-btn:hover{
    background-color: #76ac00;
    opacity: 100%;
    border: none;
}

.index-btn {
    height: 65px;
    margin-bottom: 2rem;
}

section {
    margin-top: 15rem;
}
</style>
    
<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const navigateToCocktails = () => {
            router.push('/cocktails');
        };

        const navigateToContact = () => {
            router.push('/contactUs');
        };

        const navigateToAbout = () => {
            router.push('/about-us');
        };

        return {
            navigateToCocktails,
            navigateToContact,
            navigateToAbout,
        };
    },
};
</script>