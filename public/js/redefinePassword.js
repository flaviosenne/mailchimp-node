let pass = document.getElementById("password")
let button = document.getElementById("button-pass")
let uri = window.location.search.slice(1).split('=')
uri = uri[0] == "t" ? uri[1] : null

button.addEventListener('click', event => {
    event.preventDefault()
  
    let fetchData = {
        method: 'POST',
        body: JSON.stringify({ password: pass.value, js: true }),
        headers: { "Content-Type": "application/json" }
    }

    fetch(`/retrivie-password?t=${uri}`, fetchData).then(res => {
        if (res.ok) {
            console.log('Ok')
        }
    })

})