document.addEventListener('DOMContentLoaded', function() {

    const personagens = {
      "Mario": {
        imagem: "https://play.nintendo.com/images/Masthead_Mario_HeroPose-updated2021.b19a16e5.ed4a1562.png",
        descricao: "Mario é um encanador italiano e personagem principal da franquia. Ele é conhecido por sua coragem, habilidades de salto e capacidade de usar power-ups. Mario frequentemente salva a Princesa Peach do vilão Bowser e protege o Reino dos Cogumelos."
      },
      "Luigi": {
        imagem: "https://play.nintendo.com/images/Masthead_luigi.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        descricao: "Luigi é um personagem fictício da franquia de jogos de plataforma Nintendo. Ele é conhecido por sua habilidade de salto, sua capacidade de escalar paredes e sua personalidade amigável. Luigi é o personagem principal da franquia de jogos de plataforma Super Mario Bros."
      },
      "Princesa Peach": {
        imagem: "https://play.nintendo.com/images/Masthead_Peach.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        descricao: "Princesa Peach é a governante do Reino dos Cogumelos. Embora frequentemente retratada como uma donzela em perigo, Peach também demonstra poderes mágicos e habilidades atléticas em vários jogos. Ela é conhecida por sua bondade e vestido rosa icônico."
      },
      "Toad": {
        imagem: "https://play.nintendo.com/images/Masthead_Toad.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        descricao: "Toad é uma espécie de criatura em forma de cogumelo e também o nome de um personagem específico. Os Toads são cidadãos leais do Reino dos Cogumelos e frequentemente ajudam Mario em suas aventuras, oferecendo itens e conselhos."
      },
  
      "Princesa Daisy": {
        imagem: "https://play.nintendo.com/images/Masthead_Daisy.06328198.0a17f5ff.png",
        descricao: "Princesa Daisy é a governante de Sarasaland. Ela é conhecida por sua personalidade enérgica e destemida. Daisy é muito atlética e frequentemente participa de eventos esportivos da série Mario, como Mario Tennis e Mario Golf."
      },
      "Bowser": {
        imagem: "https://play.nintendo.com/images/Masthead_Bowser.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        descricao: "Bowser é o principal antagonista da série Mario. Ele é o rei dos Koopas, uma raça de tartarugas com espinhos. Bowser frequentemente sequestra a Princesa Peach na esperança de governar o Reino dos Cogumelos. Apesar de ser o vilão, às vezes ele se alia a Mario contra ameaças maiores."
      },
      "Cappy": {
        imagem:
          "https://play.nintendo.com/images/masthead-img-cappy_T78O2mT.17345b15.9afde10b.png",
        descricao: "Cappy é um personagem introduzido em Super Mario Odyssey. Ele é um espírito que habita o chapéu de Mario, dando-lhe a habilidade de capturar e controlar inimigos. Cappy ajuda Mario a resgatar sua irmã Tiara e a Princesa Peach de Bowser."
      },
  
      "Gooba": {
        imagem: "https://play.nintendo.com/images/Masthead_Goomba.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        descricao: "Os Goombas são inimigos comuns na série Mario. Eles parecem cogumelos marrons com pernas e sobrancelhas franzidas. Goombas são facilmente derrotados ao pular em suas cabeças, fazendo deles um dos primeiros inimigos que os jogadores encontram em muitos jogos."
  
      },
      "Rosalina": {
        imagem: "https://play.nintendo.com/images/Masthead_Rosalina.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        descricao: "Rosalina é uma misteriosa observadora das estrelas que viaja pelo cosmos em seu Observatório Cometa. Ela cuida de criaturas chamadas Lumas. Rosalina possui poderes mágicos poderosos e tem uma história de fundo trágica, tendo deixado seu lar para viver entre as estrelas."
      },
      "Yoshi": {
        imagem:
          "https://play.nintendo.com/images/Masthead_yoshi.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        descricao: "Yoshi é um dinossauro amigável que serve como companheiro e montaria para Mario. Ele pode comer inimigos com sua língua longa e transformá-los em ovos, que podem ser usados como projéteis. Yoshi vem em várias cores e tem sua própria série de jogos."
      }
    };
  
  
    const galeriaItens = document.querySelectorAll('.galeria-item');
  
    const modal = document.getElementById('personagemModal');
  
    const modalClose = document.querySelector('.modal-close');
  
    const personagemNome = document.getElementById('personagem-nome');
  
    const personagemInfo = document.getElementById('personagemInfo');
  
    const personagemImg = document.getElementById('personagemImg');
  
  
    galeriaItens.forEach(item => {
      item.addEventListener("click", function() {
        const nome = this.querySelector('p').textContent;
  
  
  
        if (personagens[nome]) {
          personagemNome.textContent = nome;
          personagemInfo.textContent = personagens[nome].descricao;
          personagemImg.src = personagens[nome].imagem;
          personagemImg.alt = nome;
  
  
          modal.style.display = 'block';
        } else {
          console.log('Personagem não encontrado', nome);
        }
      });
    })
  
    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
  
  
  
      }
    });
  });