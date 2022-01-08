var switchCalc = (num) => {
    menuOpen();
    var child = document.querySelector('#stuff').children

    for (let i in child) {
        if (i == num) {
            child[i].style.display = 'block'
        } else {
            child[i].style.display = 'none'
        }
    }
}
switchCalc(0)
