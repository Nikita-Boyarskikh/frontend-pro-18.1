// We are sure of the existence of the elements with this ids
const field = <HTMLInputElement>document.getElementById('required')!
const error = <HTMLParagraphElement>document.getElementById('error')!

function toggleHidden(element: HTMLElement, hidden: boolean) {
    element.style.display = hidden ? 'none': 'block'
}

function updateError() {
    const hasText = new Boolean(field.value)
    toggleHidden(error, hasText)
}

field.addEventListener('input', updateError)
