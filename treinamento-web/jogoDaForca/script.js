var comparaPalavra;
var letrasAcertadas = 0;
var contaErros = 0;

function inicia() {
  const jogarButton = document.querySelector('[value="JOGAR"]');
  const iniciarButton = document.querySelector('[value="INICIAR"]');
  const letraInput = document.querySelector('[name="letra"]');
  const formEl = document.querySelector("form");
  const palavraInput = document.querySelector('[name="palavra"]');
  formEl.setAttribute('disabled', true);
  palavraInput.setAttribute('disabled', true);
  iniciarButton.setAttribute('disabled', true);
  jogarButton.removeAttribute('disabled');
  letraInput.removeAttribute('disabled');
}

function jogar() {
  var i = 0;
  const letraInput = document.querySelector('[name="letra"]');
  var liEl = null;
  var letra = letraInput.value;
  var posicao = 0;

  if (letra !== '') {
    if (comparaPalavra.indexOf(letra) !== -1) {
      document.getElementById('letra').value = "";
      while (i < comparaPalavra.length) {
        posicao = comparaPalavra.indexOf(letra, i)
        if (posicao !== -1) {
          liEl = document.getElementById(posicao);
          liEl.innerHTML = letra;
        }
        i++;
      }
      setTimeout(() => {
        verificaFimDeJogo();
      }, 100)
    } else {
      document.getElementById('letra').value = "";
      contaErros++;
      if (contaErros === 1) {
        const imgEl = document.querySelector('#cabeca');
        imgEl.style.display = "block"
      } else if (contaErros === 2) {
        const imgEl = document.querySelector('#corpo');
        imgEl.style.display = "block"
      } else if (contaErros === 3) {
        const imgEl = document.querySelector('#bracoEsq');
        imgEl.style.display = "block"
      } else if (contaErros === 4) {
        const imgEl = document.querySelector('#bracoDir');
        imgEl.style.display = "block"
      } else if (contaErros === 5) {
        const imgEl = document.querySelector('#pernaEsq');
        imgEl.style.display = "block"
      } else if (contaErros === 6) {
        const imgEl = document.querySelector('#pernaDir');
        imgEl.style.display = "block"
      }
      setTimeout(() => {
        verificaFimDeJogo();
      }, 100)
    }
  } else {
    alert("INSIRA UMA LETRA!!");
  }
}

function verificaFimDeJogo() {
  const jogarButton = document.querySelector('[value="JOGAR"]');
  const iniciarButton = document.querySelector('[value="INICIAR"]');
  const letraInput = document.querySelector('[name="letra"]');
  var lis = document.querySelectorAll('li');
  const ulEl = document.querySelector(".palavra-adivinhar ul");
  if (contaErros === 6) {
    alert("DEU FORCA!!!")
    const imgEl = document.querySelectorAll('.boneco')
    imgEl.forEach(img => {
      img.style.display = "none";
    })
    for (var i = 0; li = lis[i]; i++) {
      li.parentNode.removeChild(li);
    }
    contaErros = 0;
    jogarButton.setAttribute('disabled', true);
    letraInput.setAttribute('disabled', true);
    iniciarButton.removeAttribute('disabled');
    addSubmits(ulEl)
  }
  for (var i = 0; i < lis.length; i++) {
    if (lis[i].innerText === '_') {
      return;
    }
  }
  alert("PARABÉNS!!")
  for (var i = 0; li = lis[i]; i++) {
    li.parentNode.removeChild(li);
  }
  jogarButton.setAttribute('disabled', true);
  letraInput.setAttribute('disabled', true);
  iniciarButton.removeAttribute('disabled');
  addSubmits(ulEl)
}

/**
* Variável que armezena o novo indice
*/
let novoId = 0;

/**
* Executa o submit do formulário da página
* @param {Event} event Evento de submit
*/
const onSubmit = (event) => {
  event.preventDefault();
  const ulEl = document.querySelector('.palavra-adivinhar ul');

  if (ulEl) {
    const submitedValue = {
      categoria: event.target.categoria.value,
      palavra: event.target.palavra.value
    };

    // Trabalhando com promises sem uso do async/await
    putData(novoId, submitedValue);
  }
};

/**
* Consulta dados na API
* @returns {Promise<{ categoria: string, palavra: string }[]>} Lista de submissões
*/
const getData = () =>
  fetch('')
    .then(response => response.json())
    .catch(err => console.error(err));


/**
* Adiciona item na lista do html
* @param {{ categoria: string, palavra: string }} item
* @param {HTMLUListElement} ulEl 
*/
const addListItem = (item, ulEl) => {
  var liEl = document.createElement("li");
  var count = 0;
  for (let i = 0; i < item.palavra.length; i++) {
    liEl = document.createElement("li");
    liEl.id = count;
    count++;
    liEl.innerHTML = `_`;
    ulEl.appendChild(liEl);
  }
}

/**
* Adiciona lista de submits consultada
* @param {HTMLUListElement} ulEl 
*/
const addSubmits = async (ulEl) => {
  // Trabalhando com promises usando async/await
  const result = await getData();

  // Se result existir e tiver elementos no array
  if (result && result.length) {
    novoId = result.length;
    do {
      item = result[Math.floor(Math.random() * result.length)];
      comparaPalavra = item.palavra;
    } while (item === null);
    addListItem(item, ulEl);
  }
}

/**
* Envia dados para API
* @param {number} novoIndice
* @param {{ categoria: string, palavra: string }} novaSubmissao
* @returns {Promise<{ categoria: string, palavra: string }>} Nova submissão
*/
const putData = (novoIndice, novaSubmissao) =>
  fetch(`${novoIndice}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novaSubmissao)
  })
    .then(response => response.json())
    .catch(err => console.error(err));

const onLoad = () => {
  const formEl = document.querySelector("form");
  const ulEl = document.querySelector(".palavra-adivinhar ul");
  if (formEl)
    formEl.addEventListener('submit', onSubmit);
  // verifica o elemento buscado
  if (ulEl)
    addSubmits(ulEl);
  // remove evento do documento
  document.removeEventListener('DOMContentLoaded', onLoad);
};


document.addEventListener('DOMContentLoaded', onLoad);