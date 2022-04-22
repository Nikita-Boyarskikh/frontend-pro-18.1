const form = document.forms.namedItem('calc')

function updateForm() {
  const a = form.elements.namedItem('a')
  const b = form.elements.namedItem('b')
  const sign = form.elements.namedItem('sign')
  const result = form.elements.namedItem('result')

  const operatorsMap = {
    minus: (x, y) => x - y,
    plus: (x, y) => x + y,
    divide: (x, y) => x / y,
    multiply: (x, y) => x * y,
  }
  const operator = operatorsMap[sign.value]

  result.value = operator(a.value, b.value)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  updateForm()
})

updateForm()
