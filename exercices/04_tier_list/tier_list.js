// TP 4 — DOM et délégation d'évènements (tier list)
// Lancer : dans ce dossier, `php -S 127.0.0.1:8080` puis ouvrir http://127.0.0.1:8080/tier_list.html

import { getNode, on, delegateOn, swapNodes } from './dom.js';

// Modèle de carte, créé une seule fois et jamais modifié : on le clone à chaque ajout
const tmplItem = getNode('article.item', getNode('#item-template').content).cloneNode(true);
const TIERS = ['S', 'A', 'B', 'C', 'D'];

// 1) Ajout d'une carte
// On écoute « submit » (pas « click ») : ça couvre le bouton Add ET la touche Entrée
on('#add-item-form', 'submit', (form, evt) => {
  evt.preventDefault(); // empêche le rechargement de la page
  const input = getNode('#item-name', form);
  const name = input.value.trim();
  if (name === '') return;

  const item = tmplItem.cloneNode(true);
  getNode('.item-name', item).textContent = name; // textContent : pas d'injection HTML
  getNode('#tier-s').append(item);

  form.reset();
  input.focus();
});

// Déplace la carte vers la catégorie voisine (offset -1 = monter, +1 = descendre)
function moveTier(item, offset) {
  const tier = item.closest('.tier');
  const index = TIERS.indexOf(tier.dataset.tier) + offset;
  if (index < 0 || index >= TIERS.length) return; // déjà en S ou en D
  getNode(`.tier[data-tier="${TIERS[index]}"] .items`).append(item);
}

// 2) 3) 4) Un seul écouteur délégué sur #tiers.
// delegateOn cherche button[data-action] avec closest() depuis evt.target :
// un clic sur le <span> à l'intérieur du bouton remonte donc jusqu'au bouton.
// Ça marche aussi pour les cartes ajoutées après coup, puisque l'écouteur est sur le parent.
delegateOn('#tiers', 'button[data-action]', 'click', (button) => {
  const item = button.closest('.item');

  switch (button.dataset.action) {
    case 'delete':
      if (confirm('Delete this item?')) item.remove();
      break;
    case 'up':
      moveTier(item, -1);
      break;
    case 'down':
      moveTier(item, 1);
      break;
    case 'previous': {
      const prev = item.previousElementSibling;
      if (prev) swapNodes(item, prev);
      break;
    }
    case 'next': {
      const next = item.nextElementSibling;
      if (next) swapNodes(item, next);
      break;
    }
  }
});
