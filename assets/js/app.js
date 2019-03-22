// create a button
document.querySelector('#myDiv').addEventListener(
    'click', event => {
        let btnElem = document.createElement('button')
        btnElem.textContent = 'Click Me'
        btnElem.className = 'hotdog'
        document.querySelector('#btnDiv').append(btnElem)
    }
)