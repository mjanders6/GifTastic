

let selArr = ['hiking', 'fishing', 'hunting', 'outdoors', 'national-parks', 'explore']

selArr.forEach(
    (sel, i) => {
        let btnElem = document.createElement('button')
        btnElem.textContent = sel
        btnElem.className = sel
        btnElem.id = `${sel}-${i}`
        document.querySelector('#bttns').append(btnElem)
    })