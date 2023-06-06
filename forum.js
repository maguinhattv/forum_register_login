


//------------------------------------------------------------------------------------//
let buttonsResposta = document.querySelectorAll('.thread button');

for (let i = 0; i < buttonsResposta.length; i++) {
  buttonsResposta[i].addEventListener('click', () => {
    let respostas = document.querySelectorAll('.respostas');
    respostas[i].style.display = 'block';
  });
}

let forms = document.querySelectorAll('form');

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', (e) => {
    e.preventDefault();
    let conteudo = document.querySelectorAll('textarea')[i];
    
    // Verifica se o conteúdo contém caracteres especiais usando uma expressão regular
    if (/[%&$# ]/.test(conteudo.value)) {
      alert('Você não pode usar caracteres especiais.');
      return; // Retorna para evitar a inserção do conteúdo inválido
    }
    
    let resposta = '<p>' + conteudo.value + '</p><hr>'; // Adiciona a tag <hr> após a resposta
    forms[i].insertAdjacentHTML('beforebegin', resposta);
    conteudo.value = '';
  });
}





