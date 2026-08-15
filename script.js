(() => {
  const input = document.getElementById('commandSearch');
  const clear = document.getElementById('clearSearch');
  const cards = [...document.querySelectorAll('.command-card')];
  const sections = [...document.querySelectorAll('[data-section]')];
  const result = document.getElementById('searchResult');
  const noResults = document.getElementById('noResults');

  if (!input) return;

  const normalize = (value) => value
    .toLocaleLowerCase('fr')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const filter = () => {
    const query = normalize(input.value.trim());
    let visible = 0;

    cards.forEach((card) => {
      const haystack = normalize(card.textContent + ' ' + card.dataset.command + ' ' + card.dataset.category);
      const show = !query || haystack.includes(query);
      card.hidden = !show;
      if (show) visible += 1;
    });

    sections.forEach((section) => {
      section.hidden = !section.querySelector('.command-card:not([hidden])');
    });

    result.textContent = `${visible} commande${visible > 1 ? 's' : ''} affichée${visible > 1 ? 's' : ''}`;
    noResults.hidden = visible !== 0;
    clear.classList.toggle('visible', input.value.length > 0);
  };

  input.addEventListener('input', filter);
  clear.addEventListener('click', () => {
    input.value = '';
    input.focus();
    filter();
  });

  filter();
})();