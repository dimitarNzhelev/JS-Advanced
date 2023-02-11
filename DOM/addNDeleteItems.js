function addNDelete () {
    let inputEl = document.getElementById('newItemText');
    let items = document.getElementById('items');

    let newEl = document.createElement('li');
    newEl.textContent = inputEl.value;

    let delEl = document.createElement('a');
    delEl.href = '#';
    delEl.textContent = '[Delete]';
    delEl.addEventListener('click', (e) =>
    {
        e.currentTarget.parrentElement.remove();
    })

    newEl.appendChild(delEl);
    items.appendChild(newEl);
}