var btn = document.querySelector(".no");
var position = 0;
var isAnimating = false;

btn.addEventListener("click", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

btn.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

const sim = document.getElementById('yes');

sim.addEventListener("click", () => {

let timerInterval
Swal.fire({
  title: 'Obrigado 😍',
  html: 'Querido momo, quero expressar o quanto sinto pelas minhas ações recentes e como isso afetou você. Entendo que minhas atitudes foram decepcionantes e quero que saiba que sinto muito profundamente por isso. Reconheço que errei, e a última coisa que gostaria era causar mágoa a você, principalmente pelo fato de você ser a pessoa mais incrível desse mundo e merece apenas amor e carinho. Eu me arrependo sinceramente e compreendo a gravidade das minhas ações. Estou assumindo total responsabilidade por meus erros e a trabalhar para melhorar como pessoa e como namorado. Você significa muito muito muito pra mim, e a ideia de magoar essa pessoa tão especial é dolorosa demais. Comprometo-me a aprender com essa situação e trabalhar ativamente para ser uma pessoa melhor para você e para nossa relação. Você merece toda felicidade e respeito, e farei o possível e o impossível para que isso aconteça. Peço desculpas sinceramente por qualquer dor que causei a ti. Valorizo muito nosso relacionamento e estou determinado a fazer o que for preciso para seguirmos em frente, mais unidos do que nunca. Eu farei tudo que for preciso pra envelhecer ao teu lado minha pitiquinha, desde a primeira vez que te vi eu soube que era teu de corpo e alma! Você é a coisa mais preciosa desse mundo e eu te amo com toda minha alma minha juia! com carinho, seu princeso gutavo. 💘',
  timer: 20000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

});
