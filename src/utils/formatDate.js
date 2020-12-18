const day = ['Domingo', 'Segunda-feira','Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira','Sábado'];
const month = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function formatDate () {
  const today = new Date();

  return `${day[today.getDay()]}, ${today.getDate()} de ${month[today.getMonth()]} de ${today.getFullYear()}`;
}

export default formatDate;
