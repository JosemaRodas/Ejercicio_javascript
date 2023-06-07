const arrayForm = document.getElementById('arrayForm');
const resultElement = document.getElementById('result');
const valuesList = document.getElementById('valuesList');

arrayForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const arraySize = parseInt(document.getElementById('arraySize').value);
  if (arraySize <= 0) {
    resultElement.textContent = 'El tamaño del array debe ser mayor a cero.';
    return;
  }

  const miArray = generateRandomArray(arraySize);

  const suma = miArray.reduce((acc, curr) => acc + curr, 0);
  const promedio = suma / miArray.length;
  const maximo = obtenerMaximo(miArray);
  const minimo = obtenerMinimo(miArray);
  const promediore = promedio.toFixed(2);

  resultElement.textContent = ` MÁXIMO: ${maximo}, MÍNIMO: ${minimo}`;
  
  displayValues(miArray);
});

function generateRandomArray(size) {
  const randomArray = [];
  for (let i = 0; i < size; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    randomArray.push(randomNum);
  }
  return randomArray;
}

function obtenerMaximo(array) {
  return Math.max(...array);
}

function obtenerMinimo(array) {
  return Math.min(...array);
}

function displayValues(array) {
  valuesList.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos valores

  array.forEach(value => {
    const li = document.createElement('li');
    li.textContent = value;
    valuesList.appendChild(li);
  });
}
