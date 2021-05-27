var calc1 = () => {
    res1.innerHTML = (i1 * 9.8 * Math.log(mn1/mk1)) + 'м/с'
}

var calc2 = () => {
    console.log(g2 + ' ' + r2 + ' ' + h2)
    console.log((g2 * r2**2) + ' ' + (r2 + h2))
    var fir = Math.sqrt((g2 * r2**2) / (r2 + h2))
    res2.innerHTML = fir + 'м/с'
}
