
//  array of interests 
let selArr = ['hiking', 'fishing', 'hunting', 'outdoors', 'national-parks', 'explore']
// function to create buttons from an array
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
// function to add a button from an input
let addBtn = () => {
    document.querySelector('#bttns').innerHTML = ''
    selArr.push(document.querySelector('#catInput').value)
    document.querySelector('#catInput').value =''
    arry()
    
}
// load the buttons
arry()

// I couldnt think of a name better than toggle
let toggle = false;
// click event listener 
document.addEventListener('click', ({ target }) => {
    // if statement to determine if the target.id id a button or a picture
    if (target.id === 'btn') {
        // clear the pictures
        document.querySelector('#pics').innerHTML = ''
        let pic = target.className
        fetch(`https://api.giphy.com/v1/gifs/search?q=${pic}&rating=g&api_key=OeBLbdQVfVJi0hB3KDlP2IdhsDjmQetJ&limit=10`)
            .then(r => r.json())
            .then(({ data }) => {
        
                // load the static image first: url_stat
                data.forEach(pic => {
                    let url = pic.images.fixed_height.url
                    let url_stat = pic.images.fixed_height_still.url
                    // create the div to place the gifs into
                    let docElem = document.createElement('div')
                    // set the image id
                    docElem.id = 'picDiv-item-item'
                    // set the inner HTML to an h3 tag above the image
                    docElem.innerHTML = `
                <h3>Rating: ${pic.rating}</h3>
                <img id="gifPic" src="${url_stat}" data-static="${url_stat}" data-animated="${url}" data-toggle="${toggle}">
                `
                    // append the div element
                    document.querySelector('#pics').append(docElem)
                })
            })
    } else if (target.id === 'gifPic') {
        toggle = !toggle
        // if it is true
        if (toggle) {
            // set the src path to the animated url
            target.setAttribute('src', target.dataset.animated)
            // console.log(target.dataset.animated);
            
        } else {
            // set the src path to the static url
            target.setAttribute('src', target.dataset.static)
        }  
    }
})

