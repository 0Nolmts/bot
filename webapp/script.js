document.addEventListener('DOMContentLoaded', function () {
    const categories = [
        { name: 'Автосервіс', subcategories: ['Ремонт', 'Мийка', 'Оренда', 'Автопідбір'] },
        { name: 'Краса та здоров\'я', subcategories: ['Нарощення вій', 'Нарощення волосся', 'Кератин', 'Тату', 'Ламінування брів', 'Депіляція'] },
        { name: 'Будівництво', subcategories: ['Проектування будівель', 'Дизайн інтер\'єру'] },
        { name: 'Домашні послуги', subcategories: ['Прибирання', 'Вигул собак', 'Догляд за домашніми улюбленцями'] },
        { name: 'IT та комп\'ютери', subcategories: ['Ремонт комп\'ютерів', 'Налаштування мережі'] },
        { name: 'Медичні послуги', subcategories: ['Консультації лікарів', 'Стоматологія'] },
        { name: 'Рекламні послуги', subcategories: ['Рекламні послуги та SMM'] }
    ];

    const categoriesContainer = document.getElementById('categories');
    const subcategoriesContainer = document.getElementById('subcategories');

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'btn btn-primary category-btn';
        button.textContent = category.name;
        button.onclick = () => loadSubcategories(category.subcategories);
        categoriesContainer.appendChild(button);
    });

    function loadSubcategories(subcategories) {
        categoriesContainer.classList.add('hidden');
        subcategoriesContainer.innerHTML = '';
        subcategoriesContainer.classList.remove('hidden');

        subcategories.forEach(subcategory => {
            const button = document.createElement('button');
            button.className = 'btn btn-secondary subcategory-btn';
            button.textContent = subcategory;
            button.onclick = () => alert('Ви вибрали підкатегорію: ' + subcategory);
            subcategoriesContainer.appendChild(button);
        });
    }
});
