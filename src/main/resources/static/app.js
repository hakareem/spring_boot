let addresses = {}

const save = function (event) {
  console.log('inside??')
  event.preventDefault()

  const data = {
    id: document.getElementById('id').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    address1: document.getElementById('address1').value,
    address2: document.getElementById('address2').value,
    city: document.getElementById('city').value,
  }

  const method = data.id ? 'PUT' : 'POST'

  fetch('/addresses', {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((address) => {
      addresses[address.id] = address
      const el = document.getElementById(address.id)
      if (el) {
        let output = `<td><a href="#${address.id}">${address.email}</a></td<td>${address.phone}</td><td>${address.address1}</td>`
        el.innerHTML = output
      } else {
        let output = `<tr id="${address.id}"><td><a href="#${address.id}">${address.email}</a></td<td>${address.phone}</td><td>${address.address1}</td></tr>`
        document.getElementById('addressBody').innerHTML += output
      }
      console.log(output)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

const form = document.getElementById('form')
form.addEventListener('submit', save)

fetch('/addresses')
  .then((res) => res.json())
  .then((data) => {
    let tbData = ''
    for (let i = 0; i < data.length; i++) {
      let address = data[i]
      addresses[address.id] = address
      let output = `<tr id="${address.id}"><td><a href="#${address.id}">${address.email}</a></td><td>${address.phone}</td><td>${address.address1}</td></tr>`
      tbData += output
    }
    console.log(tbData)
    document.getElementById('addressBody').innerHTML = tbData
  })

window.addEventListener(
  'hashchange',
  function (event) {
    const hash = window.location.hash
    console.log(hash)

    const id = hash.substring(1)
    const address = addresses[id]
    console.log(address)

    document.getElementById('id').value = address.id
    document.getElementById('email').value = address.email
    document.getElementById('phone').value = address.phone
    document.getElementById('address1').value = address.address1
    document.getElementById('address2').value = address.address2
    document.getElementById('city').value = address.city
  },
  false
)
