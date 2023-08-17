const numberInput = document.querySelector('#number');
const btnTabuada = document.querySelector('#btnTabuada');
const tabuadaList = document.querySelector('#tabuadaList');

btnTabuada.onclick = () => {
    const number = parseInt(numberInput.value);
    if (isNaN(number)) {
        return alert('Digite um número válido!');
    }

    generateTabuada(number);
};

function generateTabuada(number) {
    tabuadaList.innerHTML = ''; // Limpa a lista de tabuada

    for (let i = 1; i <= 10; i++) {
        const result = number * i;

        const li = document.createElement('li');
        li.textContent = `${number} x ${i} = ${result}`;
        tabuadaList.appendChild(li);
    }
}

