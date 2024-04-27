const addButtons = document.querySelectorAll('.add');
const cancelButtons = document.querySelectorAll('.cancel');
const totalSpan = document.querySelector('.total');
let total = 0;


addButtons.forEach(addButton => {
    addButton.addEventListener('click', () => {
        const card = addButton.closest('.card');
        const price = parseFloat(card.querySelector('p:nth-child(3)').textContent.split(':')[1]);
        total += price;
        totalSpan.textContent = Math.max(total, 0).toFixed(2);
        document.querySelector('.order').style.display = 'block';
    });
});


cancelButtons.forEach(cancelButton => {
    cancelButton.addEventListener('click', () => {
        const card = cancelButton.closest('.card');
        const price = parseFloat(card.querySelector('p:nth-child(3)').textContent.split(':')[1]);
        total -= price;
        totalSpan.textContent = Math.max(total, 0).toFixed(2);
    });
});
