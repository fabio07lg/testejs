var btn=document.querySelector('button');
btn.addEventListener('click', clicou_em_acendar_lamapada);

var flag_lampada = false;

function clicou_em_acendar_lamapada() {
    flag_lampada = !flag_lampada;
    var circle=document.querySelector('circle');
    if (flag_lampada)
    {
      btn.textContent = 'apagar lâmpada';
      circle.classList.remove('apagada');
      circle.classList.add('acendida');
    }
    else {
      circle.classList.add('apagada');
      circle.classList.remove('acendida');
      btn.textContent = 'acender lâmpada';
    }
}