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
    res4.innerHTML = Math.sqrt(2 * g4 * hn4 * hk4 / (hn4 + hk4)) + 'м/с'
}

var calc5 = () => {
    var formdata = new FormData(document.getElementById('aui'))
    var Idata = formdata.getAll('I')
    var Tdata = formdata.getAll('T')

    var upsum = 0
    var downsum = 0

    for (let i in Idata) {
        upsum += Number(Tdata[i])
        downsum += Number(Tdata[i]) / Number(Idata[i])
    }

    res5.innerHTML = (upsum / downsum) + "т"
}

window.addEventListener("load", (event) => {
    var rand = Math.random()

    if (rand < 0.001) {
        document.getElementById('body').style.backgroundImage = "url(images/bg-tile-2.png)"
    } else {
        document.getElementById('body').style.backgroundImage = "url(images/bg-tile.png)"
    }
})

var addeng = () => {
    var form = document.getElementById('aui')

    form.insertAdjacentHTML("beforeend", '<div class="inform"><table><tr><td><label for="I">УИ двигателя</label></td><td><input type="number" name="I"></td></tr><tr><td><label for="T">Тяга двигателя</label></td><td><input type="number" name="T"></td></tr></table></div>')
}

var removeeng = () => {
    var form = document.getElementById('aui')
    form.removeChild(form.lastChild);
}
