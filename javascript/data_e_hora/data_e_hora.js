function dados(){
    var agora = new Date;
    var ano = agora.getFullYear;
    var mes = agora.getMonth;
    var dia = agora.getDate;
    var seman = agora.getDay;
    var horas = agora.getHours;
    var minutos = agora.getMinutes;
    var segundos = agora.getSeconds;
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    var resultado = document.getElementById("resultado");

    resultado.innerHTML = `Hoje é dia ${dia}, ${seman[semana]}, 
    do mês ${mes[meses]}, do ano ${ano}. <br />
    Hora: ${horas}.<br /> 
    Minutos: ${minutos}. <br />
    Segundos: ${segundos}`;

}