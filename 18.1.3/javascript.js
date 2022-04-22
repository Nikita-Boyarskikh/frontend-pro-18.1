const field = document.getElementById('required')
const error = document.getElementById('error')

function toggleHidden(element, hidden) {
  element.style.display = hidden ? 'none': 'block'
}

function updateError() {
  const hasText = new Boolean(field.value)
  toggleHidden(error, hasText)
}

field.addEventListener('input', updateError)
