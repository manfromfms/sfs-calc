var calc1 = () => {
    res1.innerHTML = (i1 * 9.8 * Math.log(mn1 / mk1)) + 'м/с'
}

var calc2 = () => {
    console.log(g2 + ' ' + r2 + ' ' + h2)
    console.log((g2 * r2 ** 2) + ' ' + (r2 + h2))
    var fir = Math.sqrt((g2 * r2 ** 2) / (r2 + h2))
    res2.innerHTML = fir + 'м/с'
}

var calc3 = () => {
    let e = Math.exp((5 * dv3) / (49 * i3))
    let ms3 = 10 * (e * mk3 - mk3) / (10 - e)

    if (ms3 >= 0) {
        res3.innerHTML = 10 * (e * mk3 - mk3) / (10 - e) + 'кг'
    } else {
        res3.innerHTML = 'Ускорение невозможно'
    }
}

var calc4 = () => {
    res4.innerHTML = Math.sqrt(2 * g4 * hn4 * hk4 / (hn4 + hk4)) + 'кг'
}
