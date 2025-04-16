function calculate(formId) {
    const re = Number(document.getElementById(`re${formId}`).value);
    const ra = Number(document.getElementById(`ra${formId}`).value);
    const ce = Number(document.getElementById(`ce${formId}`).value);
    const ca = Number(document.getElementById(`ca${formId}`).value);
    const te = Number(document.getElementById(`te${formId}`).value);
    const ta = Number(document.getElementById(`ta${formId}`).value);

    const eficacia = ra / re;
    const eficiencia = (ra / (ca * ta)) / (re / (ce * te));
    const efectividad = (getPuntaje(eficacia * 100) + getPuntaje(eficiencia * 100)) / 2;

    document.getElementById(`eficacia${formId}`).textContent = `${(eficacia * 100).toFixed(2)}% (${getPuntaje(eficacia * 100)} puntos)`;
    document.getElementById(`eficiencia${formId}`).textContent = `${(eficiencia * 100).toFixed(2)}% (${getPuntaje(eficiencia * 100)} puntos)`;
    document.getElementById(`efectividad${formId}`).textContent = `${efectividad.toFixed(2)} puntos`;
    
    document.getElementById(`results${formId}`).classList.remove('hidden');
}

document.getElementById('calcForm1').addEventListener('submit', function(e) {
    e.preventDefault();
    calculate('1');
});

document.getElementById('calcForm2').addEventListener('submit', function(e) {
    e.preventDefault();
    calculate('2');
});

function getPuntaje(porcentaje) {
    if (porcentaje <= 20) return 5;
    if (porcentaje <= 40) return 4;
    if (porcentaje <= 60) return 3;
    if (porcentaje <= 80) return 2;
    if (porcentaje <= 90) return 1;
    return 0;
}