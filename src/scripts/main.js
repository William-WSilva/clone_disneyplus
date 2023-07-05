document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    const tabsContainer = document.querySelectorAll("[data-tab-id]");
    const questions = document.querySelectorAll("[data-faq-question]");

    const alturaHero = document.querySelector(".hero").clientHeight;
    window.addEventListener("scroll", function(){
        const scrollAtual = window.scrollY;

        if(scrollAtual < alturaHero){
            ocultarElementosDoHeader();
        }else{
            exibeElementosDoHeader();
        }
    })
    
    


    // seção de atrações, programação das abas
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            esconderTodasAbas();
            aba.classList.add("shows__list--is-active");
            removerBotaoAtivo();
            botao.target.classList.add("shows__tabs__button--is-active");
            console.log(botao.target.dataset.tabButton);
        })
    }

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", abriFecharAnswer)
        
    }
})

function ocultarElementosDoHeader(){
    const header = document.querySelector(".header");
    header.classList.add("header--is-hidden");
}
function exibeElementosDoHeader(){
    const header = document.querySelector(".header");
    header.classList.remove("header--is-hidden");
}


function abriFecharAnswer(elemento) {
    const classe = "faq__questions__item--is-open";
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removerBotaoAtivo(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("shows__tabs__button--is-active");
    }
}

function esconderTodasAbas(){
    const tabsContainer = document.querySelectorAll("[data-tab-id]");
    
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove("shows__list--is-active");
    }
}

