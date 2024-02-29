<template>
  <div class="container">
    <div class="background-image">
      <h1 class="about-title">Chi siamo</h1>
      <p class="about-p">Benvenuti a Silk Touch Lounge Bar, l'epitome dell'eleganza dei cocktail nel cuore di Roma. I
        nostri esperti barman creano cocktail unici e pieni di sapore, garantendo che ogni visita sia un'esperienza
        indimenticabile. Immergetevi nella nostra atmosfera chic e accogliente, perfetta per serate intime o incontri
        vivaci con gli amici. Con un impegno per un servizio impeccabile e un menu accuratamente curato di drink
        signature, Silk Touch vi invita a gustare momenti straordinari e l'arte dell'indulgenza. Cin cin a serate
        indimenticabili a Silk Touch Lounge Bar.</p>
    </div>
    <div class="green-bar"></div>
  </div>
</template>



<style scoped>
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../final_landing_page_mockup.png');
  background-size: cover;
  z-index: 1;
}

.green-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 85px;
  height: 100%;
  background-image: url('../assets/lato.png');
  background-size: contain;
  z-index: 2;
}

.about-title {
  color: white;
  padding-left: 7rem;
  padding-top: 9rem;
  font-size: 100px;
}

.about-p {
  color: white;
  padding-top: 4rem;
  padding-left: 7rem;
  padding-right: 45rem;
  line-height: 45px;
  font-size: 15px;
}


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
