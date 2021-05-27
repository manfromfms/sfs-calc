//description
desc.onclick = (event) => {
    desc.style.borderBottomColor = '#4CAF50'

    delta.style.borderBottomColor = 'black'
    first.style.borderBottomColor = 'black'


    descdiv.style.display = 'block'
    deltadiv.style.display = 'none'
    firstdiv.style.display = 'none'

}

//delta
delta.onclick = (event) => {
    delta.style.borderBottomColor = '#FF851B'

    desc.style.borderBottomColor = 'black'
    first.style.borderBottomColor = 'black'

    descdiv.style.display = 'none'
    deltadiv.style.display = 'block'
    firstdiv.style.display = 'none'
}

//first
first.onclick = (event) => {
    first.style.borderBottomColor = '#A5260A'

    desc.style.borderBottomColor = 'black'
    delta.style.borderBottomColor = 'black'

    descdiv.style.display = 'none'
    deltadiv.style.display = 'none'
    firstdiv.style.display = 'block'
}
