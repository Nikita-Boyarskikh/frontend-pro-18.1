const greeting = document.getElementById('greeting')

function getUser() {
  // Fetch user from API for example
  return {
    name: "Николай",
    surname: "Коперник",
    // ...
  }
}

const user = getUser()
greeting.innerText = `Привет, ${user.surName}!`
