var menu = true;
var menuOpen = () => {
    if(!menu) {
        document.getElementById('everything').style.display = 'none';
        document.getElementById('switch').style.display = 'flex';
        menu = true;
    } else {
        document.getElementById('everything').style.display = 'flex';
        document.getElementById('switch').style.display = 'none';
        menu = false;
    }
}

var showCalc = false;
var calcSwitch = (btn) => {
    if(showCalc) {
        showCalc = !showCalc;
        document.querySelector('.calculator').style.display = 'none';
        btn.style.border = '2px solid red';
    } else {
        showCalc = !showCalc;
        document.querySelector('.calculator').style.display = 'flex';
        btn.style.border = '2px solid green';
    }
}

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
var calc7 = () => {
    var formdata = new FormData(document.getElementById('stg'));
    var Idata = formdata.getAll('I');
    var Mdata = formdata.getAll('M');
    var Vdata = formdata.getAll('V');
    var Tdata = formdata.getAll('T');
    var TWRdata = formdata.getAll('TWR');
    if (Idata.length > 0) {
        var lastmass = mk7;
        var M = 0;
        var sum = 0;
        var arr = [];
        var arrN = [];
        var arrM = [];
        for (let i in Idata) {
            let e = Math.exp((5 * Number(Vdata[i])) / (49 * Number(Idata[i])));
            M = 10 * lastmass * Tdata[i] * ( e - 1 ) / ( Tdata[i] * (10 - e) - 9 * Mdata[i] * TWRdata[i] * e );
            arrN.push(( TWRdata[i] * lastmass + TWRdata[i] * M ) / ( Tdata[i] - Mdata[i] * TWRdata[i] ));
            arrM.push(M);
            lastmass += 10 * lastmass * Tdata[i] * ( e - 1 ) / ( Tdata[i] * (10 - e) - 9 * Mdata[i] * TWRdata[i] * e )+ Mdata[i] * ( TWRdata[i] * lastmass + TWRdata[i] * M ) / ( Tdata[i] - Mdata[i] * TWRdata[i] );
            arr.push(lastmass);
			sum += Number(Vdata[i]);
            };
        var out = `<b>Общая Дельта-V: ${sum} м/с <br> Общая масса ракеты: ${lastmass} т </b> <hr>`;
        for (let i in arr) {
            let j = arr.length - i;
            out += `<strong> ${j}. Общая масса: ${arr[i]} т<br> Кол-во двигателей: ${arrN[i]}<br> Масса баков: ${arrM[i]} т</strong><hr>`;
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
var calc20 = () => {
    var nG = 6.67430 * Math.pow(10, -11);
    var massp = ( g20 * r20 ** 2 ) / nG;
    var gravp = g20 * r20 ** 2;
	var gheight = gravp / ( Math.pow(( r20 + h20 ) , 2 ));
	var areadensity =  g20 / ( nG * Math.PI );
	var rll = 2 * Math.PI * r20;
	var firstv20 = Math.sqrt(( gravp ) / ( r20 + h20 ));
    var secv20 = Math.sqrt(2) * firstv20;
    var per20 = 2 * Math.PI * Math.sqrt(( a20 ** 3 ) / ( g020 * r020 ** 2 ));
	var orbsp20 = Math.sqrt( ( g020 * r020 ** 2 ) / a20 );
    var soi20 = a20 * Math.pow(( gravp )/( g020 * r020 ** 2 ) , 0.4)
    res20.innerHTML = `Масса: ${massp} кг<br>Гравитационный параметр: ${gravp} м^3/с^2<br>Гравитационный параметр: ${gheight} м^3/с^2<br>Поверхностная плотность: ${areadensity} кг/м^2<br>Длина окружности: ${rll} м<br>Первая космическая скорость на высоте: ${firstv20} м/с<br>Вторая космическая скорость на высоте: ${secv20} м/с<br>Период оборота: ${per20} с<br>Орбитальная скорость: ${orbsp20} м/с<br>Радиус сферы влияния: ${soi20} м`
};
var calc21 = () => {
	var v21 = Math.sqrt( v121 ** 2 + v221 ** 2 );
	var r21 = Math.sqrt( r121 ** 2 + r221 ** 2 );
	var energy21 = v21 ** 2 / 2 - g21 * ra21 ** 2 / r21;
	var a21 = -g21 * ra21 ** 2/( 2 * energy21 );
	var e121=( ( v21 ** 2 - g21 * ra21 ** 2 / r21 ) * r121 - ( r121 * v121 + r221 * v221 ) *v121 )/( g21 * ra21 ** 2); 
	var e221=( ( v21 ** 2 - g21 * ra21 ** 2 / r21 ) * r221 - ( r121 * v121 + r221 * v221 ) *v221 )/( g21 * ra21 ** 2);
	var e21 = Math.sqrt( e121 ** 2 + e221 ** 2 );
	var b21 = a21 * Math.sqrt( 1 - e21 ** 2 );
	var dp21 = a21 * ( 1 - e21 );
	var da21 = a21 * ( 1 + e21 );
	var EcA21 = Math.acos( ( 1 - r21 / a21 )/ e21 );
	var TrA21 = ( 2 * Math.PI - Math.acos( ( e121 * r121 + e221 * r221 )/( e21 * r21 ))) * 180 / Math.PI;
	var MeA21 = ( EcA21 - e21 * Math.sin( EcA21 ));
	var T21 = 2 * Math.PI * Math.sqrt( a21 ** 3 /( g21 * ra21 ** 2 ));
	var w21=( Math.acos( r221 / r21 ) + TrA21 - 2 * Math.PI ) * 180 / Math.PI
	res21.innerHTML = `Скорость: ${v21} м/с<br>Расстояние от центра: ${r21} м<br>Орбитальная энергия: ${energy21} Дж<br>Эксцентриситет: ${e21}<br>Большая полуось: ${a21} м<br>Перицентр(от центра): ${dp21} м<br>Апоцентр(от центра): ${da21} м<br>Орбитальный период: ${T21} с<br>Истинная аномалия: ${TrA21}°<br>Эксцентричная аномалия: ${EcA21}<br>Средняя аномалия: ${MeA21}<br>Долгота перицентра: ${w21}°`
};
var calc22 = () => {
	var n22 = ( m022 * ( v022 ** 2 - v22 ** 2 ) )/( m022 * v22 ** 2 - 0.4 * v022 ** 2 )
	var n221 = Math.round(n22)
	var v221 = Math.sqrt(((m022 + 0.4 * n221) * v022 ** 2)/((m022 * (1 + n221))))
	res22.innerHTML = `Для торможения до ${v22} м/с нужно ${n22} шт., округляя до ${n221}, вы затормозите до ${v221} м/с`
}
var calc23 = () => {
	var k23 = m23 * g23 / (  rho23 * v23 ** 2  )
	res23.innerHTML = `Коэффициент(коэфф. сопротивления формы * площадь попер. сечения): ${k23}`
}
var calc88 = () => {
    var formdata = new FormData(document.getElementById('map'));
	var namedata = formdata.getAll('name');
    var R2data = formdata.getAll('R2');
    var G2data = formdata.getAll('G2');
    var A2data = formdata.getAll('A2');
    var H2data = formdata.getAll('H2');	
	
	if (R2data.length > 0) {
	var vaddx = [];
	var startAngx = [];
	var v2x = [];
    var v1x = [];
    var vlandx = [];
    var yx = [];
    var Tdx = [];
    var Vix = [];
	var venterx = [];
	
	for (let i in namedata) {
	let rsoi1 =  A1 * Math.pow((G1 * R1 * R1) / (grod * rrod * rrod), 0.4);
    let rsoi2 =  Number(A2data[i]) * Math.pow((Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i])) / (grod * rrod * rrod), 0.4);
    let vexit = Math.abs(Math.sqrt(grod * rrod * rrod / (A1)) - Math.sqrt(grod * rrod * rrod * (2 / A1 - 2 / (A1 + (Number(A2data[i]))))));
    let ao = G1 * R1 * R1 / (G1 * R1 * R1 * (2 / rsoi1) - vexit * vexit);
    let vadd = Math.round(Math.sqrt(G1 * R1 * R1 * (2 / (R1 + H1) - 1 / ao)) - Math.sqrt(G1 * R1 * R1 / (R1 + H1)));
    let T = Math.PI * Math.sqrt(Math.pow(0.6 * A1 + 0.6 * Number(A2data[i]), 3) / (grod * rrod * rrod));
    let startAng = Math.round((Math.PI - Math.PI * Math.sqrt( Math.pow((0.5* A1 + 0.5 * Number(A2data[i]))/(Number(A2data[i])) , 3) )) * 180/ Math.PI);
    let venter = Math.round(Math.abs(Math.sqrt(grod * rrod * rrod / (rrod + Number(A2data[i]))) - Math.sqrt(grod * rrod * rrod * (2 / Number(A2data[i]) - 2 / (A1 + Number(A2data[i]))))));
    let ae = Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) / (Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) * (2 / rsoi2) - venter * venter);
    let v2 = Math.round(Math.sqrt(Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) * (2 / (Number(R2data[i]) + Number(H2data[i])) - 1 / ae)) - Math.sqrt(2 * Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) / (Number(R2data[i]) + Number(H2data[i]))));
    let v1 = Math.round(Math.sqrt(Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) * (2 / (Number(R2data[i]) + Number(H2data[i])) - 1 / ae)) - Math.sqrt(Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) / (Number(R2data[i]) + Number(H2data[i]))));
    let vland = Math.round(Math.sqrt(Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) / (Number(R2data[i]) + Number(H2data[i]))) - Math.sqrt(Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) * (2 / (Number(R2data[i]) + Number(H2data[i])) - 2 / (2 * Number(R2data[i]) + Number(H2data[i])))) + Math.sqrt(Number(G2data[i]) * Number(R2data[i]) * Number(R2data[i]) * (2 / Number(R2data[i]) - 2 / (2 * Number(R2data[i]) + Number(H2data[i])))));
    let e = -((H1 + R1) / ao) + 1;
    let y = Math.round((180 / Math.PI) * Math.atan(Math.sqrt(e ** 2 - 1)));
    let Td = Math.round(T / (60 * 60 * 24));
    let Vi = v1 + vadd;
	vaddx.push(vadd);
	startAngx.push(startAng);
	v2x.push(v2);
	v1x.push(v1);
	vlandx.push(vland);
	yx.push(y);
	Tdx.push(Td);
	Vix.push(Vi);
	venterx.push(venter);
	};
        var mapout = `<b>Расчёт</b> <br>`;
        for (let i in vaddx) {
            let j = vaddx.length - i;
		mapout += `<strong> ${j}. ${namedata[i]} <br>  Фазовый угол: <b>${startAngx[i]} °</b><br>Необходимое ΔV для сближения со вторым телом: <b>${vaddx[i]} м/с</b><br>Угол выброса: <b>${yx[i]} °</b><br> Входная скорость ${venterx[i]} м/с <br>Затраты ΔV для выхода на высокую эллиптическую орбиту второго тела: <b>${v2x[i]}м/с</b><br>Затраты ΔV для выхода на круговую орбиту второго тела: <b>${v1x[i]} м/c</b><br>Затраты ΔV для посадки на второе тело (в случае отсутствия атмосферы): <b>${vlandx[i]}  м/c</b><br>Время перелёта: <b>${Tdx[i]} д</b><br>Общая ΔV для перелёта: <b>${Vix[i]} м/с </b> </strong><hr>`;
        };
		
    res88.innerHTML = mapout;
};
};
var calc111 = () => {
    var formdata = new FormData(document.getElementById('dop'));
	var namessdata = formdata.getAll('namess');
    var R2tdata = formdata.getAll('R2t');
    var G2tdata = formdata.getAll('G2t');
    var A2tdata = formdata.getAll('A2t');
    var H2tdata = formdata.getAll('H2t');	
	
	if (R2tdata.length > 0) {
	var pa2x = [];
	var pa3x = [];
	var pa6x = [];
    var pa7x = [];
    var pa8x = [];
    var pa9x = [];
	var pa4x = [];
	
	for (let i in namessdata) {
    let pa1 =  Number(A2tdata[i]) * Math.pow((Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i])) / (Gt * Rt * Rt), 0.4);
    let pa2 =  Math.round(Math.abs(Math.sqrt(Gt * Rt * Rt / ( A1t)) - Math.sqrt(Gt * Rt * Rt * (2 / A1t - 2 / (A1t + Number(A2tdata[i]))))));
    let pa3 = Math.round((Math.PI - Math.PI * Math.sqrt( Math.pow((0.5* A1t + 0.5 * Number(A2tdata[i]))/(Number(A2tdata[i])) , 3) )) * 180/ Math.PI);
    let pa4 = Math.round(Math.abs(Math.sqrt(Gt * Rt * Rt / (Rt + Number(A2tdata[i]))) - Math.sqrt(Gt * Rt * Rt * (2 / Number(A2tdata[i]) - 2 / (A1t + Number(A2tdata[i]))))));
    let pa5 = Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) / (Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) * (2 / pa1) - pa4 * pa4);
    let pa6 = Math.round(Math.sqrt(Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) * (2 / (Number(R2tdata[i]) + Number(H2tdata[i])) - 1 / pa5)) - Math.sqrt(2 * Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) / (Number(R2tdata[i]) + Number(H2tdata[i]))));
    let pa7 = Math.round(Math.sqrt(Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) * (2 / (Number(R2tdata[i]) + Number(H2tdata[i])) - 1 / pa5)) - Math.sqrt(Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) / (Number(R2tdata[i]) + Number(H2tdata[i]))));
    let pa8 = Math.round(Math.sqrt(Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) / (Number(R2tdata[i]) + Number(H2tdata[i]))) - Math.sqrt(Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) * (2 / (Number(R2tdata[i]) + Number(H2tdata[i])) - 2 / (2 * Number(R2tdata[i]) + Number(H2tdata[i])))) + Math.sqrt(Number(G2tdata[i]) * Number(R2tdata[i]) * Number(R2tdata[i]) * (2 / Number(R2tdata[i]) - 2 / (2 * Number(R2tdata[i]) + Number(H2tdata[i])))));
    let pa9 = pa7 + pa2;
	pa2x.push(pa2);
	pa3x.push(pa3);
	pa6x.push(pa6);
	pa7x.push(pa7);
	pa8x.push(pa8);
	pa9x.push(pa9);
	pa4x.push(pa4);
	};
        var dopout = `<b>Расчёт</b> <br>`;
        for (let i in pa2x) {
            let j = pa2x.length - i;
		dopout += `<strong> ${j}. ${namessdata[i]} <br>  Фазовый угол: <b>${pa3x[i]} °</b><br>Необходимое ΔV для сближения со вторым телом: <b>${pa2x[i]} м/с</b><br> Входная скорость ${pa4x[i]} м/с <br>Затраты ΔV для выхода на высокую эллиптическую орбиту второго тела: <b>${pa6x[i]}м/с</b><br>Затраты ΔV для выхода на круговую орбиту второго тела: <b>${pa7x[i]} м/c</b><br>Затраты ΔV для посадки на второе тело (в случае отсутствия атмосферы): <b>${pa8x[i]}  м/c</b><br>Общая ΔV для перелёта: <b>${pa9x[i]} м/с </b> </strong><hr>`;
        };
		
    res111.innerHTML = dopout;
};
};
var calc99 = () => {
    var formdata = new FormData(document.getElementById('sput'));
	var namesdata = formdata.getAll('names');
    var Rsdata = formdata.getAll('Rs');
    var Gsdata = formdata.getAll('Gs');
    var Asdata = formdata.getAll('As');
    var Hsdata = formdata.getAll('Hs');	
	
	if (Rsdata.length > 0) {
	var vtormy = [];
	var v2py = [];
    var v1py = [];
    var vlan2dy = [];
	var venty = [];
	
	for (let i in namesdata) {
    let rsol2 =  Number(Number(Asdata[i])) * Math.pow((Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i])) / (gspu * rspu * rspu), 0.4);
	let an2 = Number(gspu * rspu * rspu / (gspu * rspu * rspu  * (2 / 100000000000)  - vh * vh));
	let vtorm = Math.round(Math.sqrt(gspu * rspu * rspu * (2 / (rspu + perd) - 1 / an2)) - Math.sqrt(gspu * rspu * rspu * (2 / (rspu + perd) - 2 / ( rspu + perd + Number(Asdata[i])))));
    let vent = Math.round(Math.abs(Math.sqrt(gspu * rspu * rspu / ( Number(Asdata[i]))) - Math.sqrt(gspu * rspu * rspu * (2 / Number(Asdata[i]) - 2 / (rspu + perd + Number(Asdata[i]))))));
    let aep2 = Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) / (Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) * (2 / rsol2) - vent * vent);
    let v2p = Math.round(Math.sqrt(Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) * (2 / (Number(Rsdata[i]) + Number(Hsdata[i])) - 1 / aep2)) - Math.sqrt(2 * Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) / (Number(Rsdata[i]) + Number(Hsdata[i]))));
    let v1p = Math.round(Math.sqrt(Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) * (2 / (Number(Rsdata[i]) + Number(Hsdata[i])) - 1 / aep2)) - Math.sqrt(Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) / (Number(Rsdata[i]) + Number(Hsdata[i]))));
    let vlan2d = Math.round(Math.sqrt(Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) / (Number(Rsdata[i]) + Number(Hsdata[i]))) - Math.sqrt(Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) * (2 / (Number(Rsdata[i]) + Number(Hsdata[i])) - 2 / (2 * Number(Rsdata[i]) + Number(Hsdata[i])))) + Math.sqrt(Number(Gsdata[i]) * Number(Rsdata[i]) * Number(Rsdata[i]) * (2 / Number(Rsdata[i]) - 2 / (2 * Number(Rsdata[i]) + Number(Hsdata[i])))));
	vtormy.push(vtorm);
	v2py.push(v2p);
	v1py.push(v1p);
	vlan2dy.push(vlan2d);
	venty.push(vent);
	}
        var sputout = `<b>Расчёт</b> <br>`;
        for (let i in vtormy) {
            let j = vtormy.length - i;
		sputout += `<strong> ${j}.  ${namesdata[i]} <br>Необходимое ΔV для сближения со спутником: <b>${vtormy[i]} м/с</b><br> Входная скорость ${venty[i]} м/с <br>Затраты ΔV для выхода на высокую эллиптическую орбиту спутника: <b> ${v2py[i]} м/с</b><br>Затраты ΔV для выхода на круговую орбиту спутника: <b>${v1py[i]} м/c</b><br>Затраты ΔV для посадки на спутник (в случае отсутствия атмосферы): <b>${vlan2dy[i]}  м/c</b> </strong><hr>`;
        };
		
    res99.innerHTML = sputout;
}
};
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
    form.insertAdjacentHTML("beforeend", '<div class="inform"><table><tr><td> <label for="I">УИ двигателя</label> </td><td> <input type="number" name="I"> </td></tr><tr><td> <label for="M">Масса одного двигателя</label> </td><td> <input type="number" name="M"> </td></tr><tr><td> <label for="T">Тяга одного двигателя</label> </td><td> <input type="number" name="T"> </td></tr><tr><td> <label for="TWR">ТВР</label> </td><td> <input type="number" name="TWR"> </td></tr><tr><td> <label for="V">Дельта-V</label> </td><td> <input type="number" name="V"> </td></tr></table></div>');
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
};
var addmap = () => {
    var form = document.getElementById('map');
    form.insertAdjacentHTML("beforeend", '<div class="inform" id="example"> <table><tr><td><lable for="name">Название</lable></td><td> <input type="text" name="name" </td></tr><tr><td><lable for="G2">Ускорение свободного падения на поверхности конечного тела</lable></td><td> <input type="number" name="G2" </td></tr><tr><td><lable for="R2">Радиус конечного тела</lable></td><td> <input type="number" name="R2" </td></tr><tr><td><lable for="A2">Радиус орбиты конечного тела</lable></td> <td> <input type="number" name="A2" </td></tr><tr><td><lable for="H2">Радиус орбиты аппарата у конечного тела</lable></td><td> <input type="number" name="H2" </td></tr></table></div>');
};
var removemap = () => {
    var form = document.getElementById('map');
    form.removeChild(form.lastChild)
};
var addsput = () => {
    var form = document.getElementById('sput');
    form.insertAdjacentHTML("beforeend", '<div class="inform" id="example"><table> <tr> <td> <lable for="name">Название</lable> </td> <td> <input type="text" name="names" </td> </tr><tr> <td> <lable for="Gs">Ускорение свободного падения на поверхности спутника</lable> </td> <td> <input type="number" name="Gs" </td> </tr> <tr>  <td>  <lable for="Rs">Радиус спутника</lable> </td><td> <input type="number" name="Rs" </td> </tr> <tr><td>   <lable for="As">Радиус орбиты спутника</lable> </td> <td> <input type="number" name="As" </td></tr><tr> <td>   <lable for="Hs">Радиус орбиты аппарата у спутника</lable> </td> <td> <input type="number" name="Hs" </td></tr></table></div>');
};
var removesput = () => {
    var form = document.getElementById('sput');
    form.removeChild(form.lastChild)
};
var adddop = () => {
    var form = document.getElementById('dop');
    form.insertAdjacentHTML("beforeend", '<div class="inform" id="example"> <table><tr><td><lable for="namess">Название</lable></td><td> <input type="text" name="namess" </td></tr><tr><td><lable for="G2t">Ускорение свободного падения на поверхности конечного тела</lable></td><td> <input type="number" name="G2t" </td></tr><tr><td><lable for="R2t">Радиус конечного тела</lable></td><td> <input type="number" name="R2t" </td></tr><tr><td><lable for="A2t">Радиус орбиты конечного тела</lable></td> <td> <input type="number" name="A2t" </td></tr><tr><td><lable for="H2t">Радиус орбиты аппарата у конечного тела</lable></td><td> <input type="number" name="H2t" </td></tr></table></div>');
};
var removedop = () => {
    var form = document.getElementById('dop');
    form.removeChild(form.lastChild)
}
