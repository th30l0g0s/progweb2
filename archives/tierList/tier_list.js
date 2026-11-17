import { getNode, getNodes, forEach, on, delegateOn, swapNodes } from './dom.js';

const tmplItem = getNode('article.item', getNode('#item-template').content).cloneNode(true);

on('#add-item-form', 'submit', (form, event) => {
  event.preventDefault();
  const labelItem = getNode('#item-name').value
  getNode('#item-name').value = '';
  const clone = tmplItem.cloneNode(true);
  getNode('.item-name', clone).textContent = labelItem;
  getNode('#tier-s').append(clone);
})