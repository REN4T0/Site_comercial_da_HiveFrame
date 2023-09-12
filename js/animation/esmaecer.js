// Pegando a DIV onde fica as logos
const elementoAparecendo = document.querySelector('.esmaecer');

// Função da animação das logos
window.addEventListener('scroll', () => {
    const distanciaTopo = elementoAparecendo.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight;

    // Se o elemento estiver mais ou menos na metade da janela, mostra-o
    if (distanciaTopo < alturaJanela / 1.3) {
        elementoAparecendo.style.opacity = '1';
        elementoAparecendo.style.transform = 'translateY(0)';
    }
});


// Selecionando o primeiro hexágono de habilidades
const elementoSurgindo1 = document.querySelector('#habilidade1');
const secao1 = document.querySelector('#colunaHabilidades');

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Temporizando a animação para ela demorar um pouco para aparecer
            setTimeout(() => {
                elementoSurgindo1.style.opacity = '1';
                elementoSurgindo1.style.transform = 'translateX(0)';
            }, 500);
            observer1.unobserve(secao1); // Deixa de observar a seção após a animação ser acionada
        }
    });
});

observer1.observe(secao1);

const elementoSurgindo2 = document.querySelector('#habilidade2');
const secao2 = document.querySelector('#colunaHabilidades');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                elementoSurgindo2.style.opacity = '1';
                elementoSurgindo2.style.transform = 'translateX(0)';
            }, 1000);
            observer2.unobserve(secao2); // Deixa de observar a seção após a animação ser acionada
        }
    });
});

observer2.observe(secao2);

const elementoSurgindo3 = document.querySelector('#habilidade3');
const secao3 = document.querySelector('#colunaHabilidades');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                elementoSurgindo3.style.opacity = '1';
                elementoSurgindo3.style.transform = 'translateX(0)';
            }, 1500);
            observer3.unobserve(secao3); // Deixa de observar a seção após a animação ser acionada
        }
    });
});

observer3.observe(secao3);


// window.addEventListener('scroll', verificaVisibilidade);

