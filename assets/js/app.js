

let selArr = ['hiking', 'fishing', 'hunting', 'outdoors', 'national-parks', 'explore']


let arry = _ => {
    selArr.forEach(
        (sel, i) => {
            let btnElem = document.createElement('button')
            btnElem.textContent = sel
            btnElem.className = sel
            btnElem.id = `btn`
            document.querySelector('#bttns').append(btnElem)
        })
}

let addBtn = () => {
    document.querySelector('#bttns').innerHTML = ''
    selArr.push(document.querySelector('#catInput').value)
    document.querySelector('#catInput').value =''
    arry()
    
}

let toggle = false;
arry()
document.addEventListener('click', ({ target }) => {
    document.querySelector('#pics').innerHTML = ''
    if (target.id === 'btn') {
        let pic = target.className
        fetch(`http://api.giphy.com/v1/gifs/search?q=${pic}&rating=g&api_key=OeBLbdQVfVJi0hB3KDlP2IdhsDjmQetJ&limit=10`)
            .then(r => r.json())
            .then(({ data }) => {

                data.forEach(pic => {
                    const url = pic.images.fixed_height.url
                    const url_stat = pic.images.fixed_height_still.url
                    let docElem = document.createElement('div')

                    docElem.innerHTML = `
                <h3>${pic.rating}</h3>
                <img id="gif" src="${url_stat}" data-still="${url_stat}" data-animated="${url}">
                `
                    document.querySelector('#pics').append(docElem)
                })

            })

    } else if (target.id === 'gifPic') {
        console.log(target);

        toggle = !toggle
        if (toggle) {
            target.setAttribute('src', target.dataset.animated)

        } else {
            target.setAttribute('src', target.dataset.static)

        }

    }



})

