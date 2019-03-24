

let selArr = ['hiking', 'fishing', 'hunting', 'outdoors', 'national-parks', 'explore']

selArr.forEach(
    (sel, i) => {
        let btnElem = document.createElement('button')
        btnElem.textContent = sel
        btnElem.className = sel
        btnElem.id = `btn`
        document.querySelector('#bttns').append(btnElem)
    })

document.addEventListener('click', ({ target }) => {
    document.querySelector('#pics').innerHTML = ''

    let animal = target.className
    fetch(`http://api.giphy.com/v1/gifs/search?q=${animal}&rating=g&api_key=OeBLbdQVfVJi0hB3KDlP2IdhsDjmQetJ&limit=10`)
        .then(r => r.json())
        .then(({ data }) => {
            data.forEach(pic => {
                const url = pic.images.fixed_height.url
                let picElem = document.createElement('img')
                picElem.setAttribute('src', url)
                document.querySelector('#pics').append(picElem)
                console.log(pic);

            })
        })
        .catch(e => console.error(e))


})