type Operator = (a: number, b: number) => number
type OperatorsMap = {
    [index: string]: Operator | undefined
}

// We are sure of the existence of a form with this name
const form: HTMLFormElement = document.forms.namedItem('calc')!

function updateForm() {
    const a = <HTMLInputElement>form.elements.namedItem('a')
    const b = <HTMLInputElement>form.elements.namedItem('b')
    const sign = <HTMLSelectElement>form.elements.namedItem('sign')
    const result = <HTMLInputElement>form.elements.namedItem('result')

    const operatorsMap: OperatorsMap = {
        minus: (x, y) => x - y,
        plus: (x, y) => x + y,
        divide: (x, y) => x / y,
        multiply: (x, y) => x * y,
    }
    // We are sure that sign value is one of the declared at the map because sign is a select input
    const operator = operatorsMap[sign.value]!

    result.value = operator(a.value, b.value)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    updateForm()
})

updateForm()
