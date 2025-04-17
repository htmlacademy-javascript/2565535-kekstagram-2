const findTemplate = (id) => {
  const template = document.getElementById(id);
  if (!template) {
    throw new Error (`Template not found: ${id}`);
  }
  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error (`Element is not a template: ${id}`);
  }
  return template.content.firstElementChild;
};

const renderPack = (items, makeElement, container) => {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.appendChild(makeElement(item)));
  container.appendChild(fragment);
};

export { findTemplate, renderPack };
