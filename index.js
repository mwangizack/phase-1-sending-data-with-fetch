// Add your code here
function submitData(userName, userEmail){
    return (fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res => res.json())
    .then(data => {
        const div = document.createElement('div')
        div.textContent = data.id
        document.body.appendChild(div)
    })
    .catch(error => {
        const p = document.createElement('p')
        p.textContent = error.message
        document.body.appendChild(p)
    }))
}
