function calculate(formId) {
    const re = Number(document.getElementById(`re${formId}`).value);
    const ra = Number(document.getElementById(`ra${formId}`).value);
    const ce = Number(document.getElementById(`ce${formId}`).value);
    const ca = Number(document.getElementById(`ca${formId}`).value);
    const te = Number(document.getElementById(`te${formId}`).value);
    const ta = Number(document.getElementById(`ta${formId}`).value);

    const eficacia = ra / re;
    const eficiencia = (ra / (ca * ta)) / (re / (ce * te));
    const efectividad = ((getPuntajeEficacia(eficacia * 100) + getPuntajeEficiencia(eficiencia)) / 2) / 5; // /5 es el numero maximo puuntaje

    document.getElementById(`eficacia${formId}`).textContent = `${(eficacia * 100).toFixed(2)}% (${getPuntajeEficacia(eficacia * 100)} puntos)`;
    document.getElementById(`eficiencia${formId}`).textContent = `${(eficiencia).toFixed(2)} (${getPuntajeEficiencia(eficiencia)} puntos)`;
    document.getElementById(`efectividad${formId}`).textContent = `${(efectividad * 100).toFixed(0)}%`;

    document.getElementById(`results${formId}`).classList.remove('hidden');
}

document.getElementById('calcForm1').addEventListener('submit', function (e) {
    e.preventDefault();
    calculate('1');
});

document.getElementById('calcForm2').addEventListener('submit', function (e) {
    e.preventDefault();
    calculate('2');
});

// eficacia recibe un numero que es el porcentaje
function getPuntajeEficacia(porcentaje) {
    if (porcentaje <= 20) return 0;
    if (porcentaje <= 40) return 1;
    if (porcentaje <= 60) return 2;
    if (porcentaje <= 80) return 3;
    if (porcentaje <= 90) return 4;
    return 5;
}

// eficiencia recibe un numero que puede ser decimal
function getPuntajeEficiencia(porcentaje) {
    if (porcentaje > 1) return 5;
    if (porcentaje == 1) return 3;
    if (porcentaje < 1) return 1;
}