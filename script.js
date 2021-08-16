var calc1 = () => {
    res1.innerHTML = (i1 * 9.8 * Math.log(mn1 / mk1)) + 'м/с';
};
var calc2 = () => {
    console.log(g2 + ' ' + r2 + ' ' + h2);
    console.log((g2 * r2 ** 2) + ' ' + (r2 + h2));
    var fir = Math.sqrt((g2 * r2 ** 2) / (r2 + h2));
    res2.innerHTML = fir + 'м/с';
};
var calc3 = () => {
    let e = Math.exp((5 * dv3) / (49 * i3));
    let ms3 = 10 * mk3 * ft1 * ( e - 1 ) / ( ft1 * (10 - e) - 9 * md1 * nu1 * e );
	let nk1 = ( nu1 * mk3 + nu1 * ms3 ) / ( ft1 - md1 * nu1 )
    res3.innerHTML = ` Масса баков: <b>${ms3 + 'т'}</b><br> Кол-во двигателей: <b>${nk1}</b>`;

};
var calc4 = () => {
    res4.innerHTML = Math.sqrt(2 * g4 * hn4 * hk4 / (hn4 + hk4)) + 'м/с';
};
var calc5 = () => {
    var formdata = new FormData(document.getElementById('aui'));
    var Idata = formdata.getAll('I');
    var Tdata = formdata.getAll('T');
    if (Idata.length > 0) {
        var upsum = 0;
        var downsum = 0;
        for (let i in Idata) {
            upsum += Number(Tdata[i]);
            downsum += Number(Tdata[i]) / Number(Idata[i]);
        };
        res5.innerHTML = (upsum / downsum) + "с";
    };
};
var calc6 = () => {
    let rsoi1 = l16 * a16 * Math.pow((g16 * r16 * r16) / (g06 * r06 * r06), 0.4);
    let rsoi2 = l26 * a26 * Math.pow((g26 * r26 * r26) / (g06 * r06 * r06), 0.4);
    let vexit = Math.abs(Math.sqrt(g06 * r06 * r06 / (r06 + a16)) - Math.sqrt(g06 * r06 * r06 * (2 / a16 - 2 / (a16 + a26))));
    let ao = g16 * r16 * r16 / (g16 * r16 * r16 * (2 / rsoi1) - vexit * vexit);
    let vadd = Math.sqrt(g16 * r16 * r16 * (2 / (r16 + h16) - 1 / ao)) - Math.sqrt(g16 * r16 * r16 / (r16 + h16));
    let T = Math.PI * Math.sqrt(Math.pow(0.6 * a16 + 0.6 * a26, 3) / (g06 * r06 * r06));
    let startAng = 180 - 180 * T * Math.sqrt(g06 * r06 * r06 / (r06 + a26)) / (Math.PI * (r06 + a26));
    let venter = Math.abs(Math.sqrt(g06 * r06 * r06 / (r06 + a26)) - Math.sqrt(g06 * r06 * r06 * (2 / a26 - 2 / (a16 + a26))));
    let ae = g26 * r26 * r26 / (g26 * r26 * r26 * (2 / rsoi2) - venter * venter);
    let v2 = Math.sqrt(g26 * r26 * r26 * (2 / (r26 + h26) - 1 / ae)) - Math.sqrt(2 * g26 * r26 * r26 / (r26 + h26));
    let v1 = Math.sqrt(g26 * r26 * r26 * (2 / (r26 + h26) - 1 / ae)) - Math.sqrt(g26 * r26 * r26 / (r26 + h26));
    let vland = Math.sqrt(g26 * r26 * r26 / (r26 + h26)) - Math.sqrt(g26 * r26 * r26 * (2 / (r26 + h26) - 2 / (2 * r26 + h26))) + Math.sqrt(g26 * r26 * r26 * (2 / r26 - 2 / (2 * r26 + h26)));
    let e = -((h16 + r16) / ao) + 1;
    let b = Math.sqrt(ao * ao * (e * e - 1));
    let y = (180 / Math.PI) * (Math.PI - Math.atan(b / (-ao)));
    let Td = T / (60 * 60 * 24);
    let Vi = v1 + vadd;
    res6.innerHTML = `Фазовый угол: <b>${startAng + '°'}</b><br>Необходимое ΔV для сближения со вторым телом: <b>${vadd + 'м/с'}</b><br>Угол выброса: <b>${y + '°'}</b><br>Затраты ΔV для выхода на высокую эллиптическую орбиту второго тела: <b>${v2 + 'м/с'}</b><br>Затраты ΔV для выхода на круговую орбиту второго тела: <b>${v1 + 'м/c'}</b><br>Затраты ΔV для посадки на второе тело (в случае отсутствия атмосферы): <b>${vland + 'м/c'}</b><br>Время перелёта: <b>${Td + 'д'}</b><br>Общая ΔV для перелёта: <b>${Vi + 'м/с'}</b>`;
};
var calc7 = () => {
    var formdata = new FormData(document.getElementById('stg'));
    var Idata = formdata.getAll('I');
    var Mdata = formdata.getAll('M');
    var Vdata = formdata.getAll('V');
    if (Idata.length > 0) {
        var lastmass = mk7;
        var arr = [];
        for (let i in Idata) {
            lastmass += Number(Mdata[i]);
            let e = Math.exp((5 * Number(Vdata[i])) / (49 * Number(Idata[i])));
            lastmass += 10 * (e * lastmass - lastmass) / (10 - e);
            arr.push(lastmass);
        };
        var out = '';
        for (let i in arr) {
            let j = arr.length - i;
            out += `${j}) Масса ступени и всех последующих: ${arr[i]}<br>`;
        };
        res7.innerHTML = out;
    };
};
var calc8 = () => {
    var noair = Math.sqrt(2 * g8 * r8**2 * (1 / r8 - 1 / (2 * r8 + h8))) + Math.sqrt(g8 * r8**2 / (r8 + h8)) - Math.sqrt(2 * g8 * r8**2 * (1 / (r8 + h8) - 1 / (2 * r8 + h8)))
    var atmos = Math.sqrt(2 * g8 * r8**2 * (1 / r8 - 1 / (r8 + h8))) + Math.sqrt(g8 * r8**2 / (r8 + h8))
    res8.innerHTML = `С атмосферой: ${atmos}м/с<br>Без атмосферы: ${noair}м/с`;
};
var calc9 = () => {
    res9.innerHTML = (i10 * 9.8 * Math.log( ( mk10 + mb1 ) / ( mk10 + ( mb1 / n1 ) ) )) + 'м/с';
};
var calc10 = () => {
    res10.innerHTML = (i11 * 9.8 * Math.log( mk11 / ( mk11 - mt1 ) )) + 'м/с';
};
var calc11 = () => {
    res11.innerHTML = (i12 * 9.8 * Math.log( ( 100 * mk12 - (100 - y1 ) * mt2 ) / ( 100 * mk12 - (100 - x1 ) * mt2 ) )) + 'м/с';
};
var calc12 = () => {
    var secn = Math.sqrt((2 * g2 * r2 ** 2) / (r2 + h2));
    res12.innerHTML = secn + 'м/с'
}
var calc13 = () => {
    var formdata = new FormData(document.getElementById('mass'));
    var Idata = formdata.getAll('I');
    var Tdata = formdata.getAll('T');
    if (Idata.length > 0) {
        var downsum = 0;
        for (let i in Idata) {
            downsum += Number(Tdata[i]) / Number(Idata[i]);
        };
        res13.innerHTML = `Время работы: <b>${(mt4 / downsum) + 'c'}</b><br> Массовый расход: <b>${downsum + 'т/с'}</b>`;
    };
};
var calc14 = () => {
    var formdata = new FormData(document.getElementById('mast'));
    var Idata = formdata.getAll('I');
    var Tdata = formdata.getAll('T');
    if (Idata.length > 0) {
        var downsum = 0;
        for (let i in Idata) {
            downsum += Number(Tdata[i]) / Number(Idata[i]);
        };
        res14.innerHTML = `Время работы: <b>${(t4 * downsum) + 'т'}</b><br> Массовый расход: <b>${downsum + 'т/с'}</b>`
    }
}

window.addEventListener("load", (event) => {
    var rand = Math.random();
    if (rand < 0.001) {
        document.getElementById('body').style.backgroundImage = "url(images/bg-tile-2.png)";
    } else {
        document.getElementById('body').style.backgroundImage = "url(images/bg-tile.png)";
    };
});
var addeng5 = () => {
    var form = document.getElementById('aui');
    form.insertAdjacentHTML("beforeend", '<div class="inform"><table><tr><td><label for="I">УИ двигателя</label></td><td><input value="0" type="number" name="I"></td></tr><tr><td><label for="T">Тяга двигателя</label></td><td><input value="0" type="number" name="T"></td></tr></table></div>');
};
var removeeng5 = () => {
    var form = document.getElementById('aui');
    form.removeChild(form.lastChild);
};
var addstg7 = () => {
    var form = document.getElementById('stg');
    form.insertAdjacentHTML("beforeend", '<div class="inform"><table><tr><td><label for="I">УИ двигателя</label></td><td><input value="0" type="number" name="I"></td></tr><tr><td><label for="M">Дополнительная масса ступени</label></td><td><input value="0" type="number" name="M"></td></tr><tr><td><label for="V">Дельта скорости</label></td><td><input value="0" type="number" name="V"></td></tr></table></div>');
};
var removestg7 = () => {
    var form = document.getElementById('stg');
    form.removeChild(form.lastChild)
}
var addeng9 = () => {
    var form = document.getElementById('mass');
    form.insertAdjacentHTML("beforeend", '<div class="inform"><table><tr><td><label for="I">УИ двигателя</label></td><td><input value="0" type="number" name="I"></td></tr><tr><td><label for="T">Тяга двигателя</label></td><td><input value="0" type="number" name="T"></td></tr></table></div>');
};
var removeeng9 = () => {
    var form = document.getElementById('mass');
    form.removeChild(form.lastChild);
};
var addeng11 = () => {
    var form = document.getElementById('mast');
    form.insertAdjacentHTML("beforeend", '<div class="inform"><table><tr><td><label for="I">УИ двигателя</label></td><td><input value="0" type="number" name="I"></td></tr><tr><td><label for="T">Тяга двигателя</label></td><td><input value="0" type="number" name="T"></td></tr></table></div>');
};
var removeeng11 = () => {
    var form = document.getElementById('mast');
    form.removeChild(form.lastChild)
}