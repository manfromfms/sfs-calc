//description
desc.onclick = (event) => {
    desc.style.borderBottomColor = '#4CAF50'

    delta.style.borderBottomColor = 'black'
    first.style.borderBottomColor = 'black'
    fuel.style.borderBottomColor = 'black'
    height.style.borderBottomColor = 'black'


    descdiv.style.display = 'block'
    deltadiv.style.display = 'none'
    firstdiv.style.display = 'none'
    fueldiv.style.display = 'none'
    heightdiv.style.display = 'none'

}

//delta
delta.onclick = (event) => {
    delta.style.borderBottomColor = '#FF851B'

    desc.style.borderBottomColor = 'black'
    first.style.borderBottomColor = 'black'
    fuel.style.borderBottomColor = 'black'
    height.style.borderBottomColor = 'black'

    descdiv.style.display = 'none'
    deltadiv.style.display = 'block'
    firstdiv.style.display = 'none'
    fueldiv.style.display = 'none'
    heightdiv.style.display = 'none'
}

//first
first.onclick = (event) => {
    first.style.borderBottomColor = '#A5260A'

    desc.style.borderBottomColor = 'black'
    delta.style.borderBottomColor = 'black'
    fuel.style.borderBottomColor = 'black'
    height.style.borderBottomColor = 'black'

    descdiv.style.display = 'none'
    deltadiv.style.display = 'none'
    firstdiv.style.display = 'block'
    fueldiv.style.display = 'none'
    heightdiv.style.display = 'none'

}

//fuel
fuel.onclick = (event) => {
    fuel.style.borderBottomColor = '#7FFFD4'

    desc.style.borderBottomColor = 'black'
    delta.style.borderBottomColor = 'black'
    first.style.borderBottomColor = 'black'
    height.style.borderBottomColor = 'black'

    descdiv.style.display = 'none'
    deltadiv.style.display = 'none'
    firstdiv.style.display = 'none'
    fueldiv.style.display = 'block'
    heightdiv.style.display = 'none'
}
height.onclick = (event) => {
    height.style.borderBottomColor = '#FF3FB0'

    desc.style.borderBottomColor = 'black'
    delta.style.borderBottomColor = 'black'
    first.style.borderBottomColor = 'black'
    fuel.style.borderBottomColor = 'black'

    descdiv.style.display = 'none'
    deltadiv.style.display = 'none'
    firstdiv.style.display = 'none'
    fueldiv.style.display = 'none'
    heightdiv.style.display = 'block'
}
