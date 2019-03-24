

let selArr = ['hiking', 'fishing', 'hunting', 'outdoors', 'national-parks', 'explore']

selArr.forEach(
    (sel, i) => {
        let btnElem = document.createElement('button')
        btnElem.textContent = sel
        btnElem.className = sel
        btnElem.id = `btn`
        document.querySelector('#bttns').append(btnElem)
    })

let toggle = false;

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
                let picElem = document.createElement('img')
                let hElem = document.createElement('div')
                
                // set attributes for the images
                picElem.setAttribute('id', 'gifPic')
                picElem.setAttribute('src', url)
                picElem.setAttribute('data-static', url_stat)
                picElem.setAttribute('data-animated', url)

                hElem.innerHTML = `<h3>${pic.rating}</h3>`

                document.querySelector('#pics').append(picElem)
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