// Pobieranie węzłów
const noBtn = document.querySelector(".optionNo");
const yesBtn = document.querySelector(".optionYes");
const questionSection = document.querySelector(".question");
const offerSection = document.querySelector(".offer");
const imgContainer = document.querySelector(".imgContainer");
const offers = document.querySelectorAll(".offer>div");
const confirmBtn = document.querySelector(".offer button");
const responseSection = document.querySelector(".response")

let noBtnHoverCounter = 0;

// Funkcja zmieniająca pozycje przycisku No po najechaniu 3 razy 
const changeButtonPosition = function(){
    if(noBtnHoverCounter < 3){
        noBtn.classList.remove("animationNo");
        noBtn.classList.add("jump");

        const viewPortHeight = window.visualViewport.height;
        const viewPortWidth = window.visualViewport.width;
        const btnHeight = noBtn.offsetHeight;
        const btnWidth = noBtn.offsetWidth;

        noBtn.style.top = `${Math.random()*(viewPortHeight-btnHeight).toFixed()}px`;
        noBtn.style.left = `${Math.random()*(viewPortWidth-btnWidth).toFixed()}px`;
    }else{
        imgContainer.style.zIndex = "1";
        noBtn.classList.add("noMove");
    }

    noBtnHoverCounter++;
}

// Funkcja przełączająca sekcje z zaproszenia na propozycje
const acceptDate = function(){
    questionSection.classList.add("inactive");
    offerSection.classList.remove("inactive");
    responseSection.classList.add("inactive");
}

// Funkcja zaznaczająca wybraną opcje
const markOffer = function() {
    if(this.classList.contains("mark")){
        this.classList.remove("mark");
    }else{
        offers.forEach(e => e.classList.remove('mark'));
        this.classList.add("mark");
    }
}

const confirmOffer = function(){
    questionSection.classList.add("inactive");
    offerSection.classList.add("inactive");
    responseSection.classList.remove("inactive");
}

// Nasłuchiwania
noBtn.addEventListener("mouseover", changeButtonPosition);
noBtn.addEventListener("click", changeButtonPosition);
yesBtn.addEventListener("click", acceptDate);
offers.forEach(e => e.addEventListener("click", markOffer));
confirmBtn.addEventListener("click", confirmOffer);

