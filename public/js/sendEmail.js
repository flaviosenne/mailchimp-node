let button = document.getElementById("button-email")
        let email = document.getElementById("email")
        let success = document.getElementById("success")
        let error = document.getElementById("error")

        button.addEventListener('click', event => {
            event.preventDefault()

            if (email.value == null || email.value == "") {
                error.style.display = 'block'
                setInterval(() => {
                    error.style.display = 'none'
                }, 3000)
            } else {
                let fetchData = {
                    method: 'POST',
                    body: JSON.stringify({ email: email.value, js: true }),
                    headers: { "Content-Type": "application/json" }
                }

                fetch('/subscribe', fetchData).then(res => {
                    if (res.ok) {
                        console.log('Ok')
                    } else {
                        error.style.display = 'block'
                        setInterval(() => {
                            error.style.display = 'none'
                        }, 3000)
                    }
                })
            }
        })