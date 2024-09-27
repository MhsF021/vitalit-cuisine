// Função para expandir as divs de refeição
document.querySelectorAll('.meal-option').forEach(meal => {
    meal.addEventListener('click', () => {
        meal.classList.toggle('expanded');
    });
});

// Função para exibir a refeição personalizada em uma janela modal
document.getElementById('preference-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const likes = Array.from(document.querySelectorAll('input[name="likes"]:checked')).map(el => el.value);
    const dislikes = Array.from(document.querySelectorAll('input[name="dislikes"]:checked')).map(el => el.value);
    const restrictions = Array.from(document.querySelectorAll('input[name="restrictions"]:checked')).map(el => el.value);

    let mealPlan = '<h3>Plano de Refeições Personalizado</h3>';

    if ((likes != 0 || dislikes != 0) && restrictions == 0) {
        if (likes.includes('Frango') || likes.includes('Ovos')) {
            if (likes.includes('Peixe')) {
                mealPlan += '<p><strong>09h → </strong> Ovos mexidos com peito de peru e patê de atum<br>';
                mealPlan += '<strong>12h → </strong> Arroz integral, peito de frango grelhado e ovos cozidos, salada e feijão<br>';
                mealPlan += '<strong>15h → </strong> Frango desfiado com pão integral e patê de atum<br>';
                mealPlan += '<strong>18h → </strong> Peixe cozido com legumes<br>';
                mealPlan += '<strong>21h → </strong> Iogurte natural com frutas (overnight)</p>';

            } else {
                mealPlan += '<p><strong>09h → </strong> Ovos mexidos com peito de peru<br>';
                mealPlan += '<strong>12h → </strong> Arroz integral, peixe e ovos cozidos, salada e feijão<br>';
                mealPlan += '<strong>15h → </strong> Frango desfiado com pão integral e patê de atum<br>';
                mealPlan += '<strong>18h → </strong> Sopa de frango com legumes<br>';
                mealPlan += '<strong>21h → </strong> Iogurte natural com frutas (overnight)</p>';
            }
        }

        if (likes.includes('Carne Vermelha') || likes.includes('Tapioca')) {
            if (likes.includes('Frango') || likes.includes('Ovos') || likes.includes('Peixe')) {
                mealPlan += '<p><strong>09h → </strong> Tapioca recheada com carne desfiada e creme de ricota.<br>';
                mealPlan += '<strong>12h → </strong> Bife grelhado com arroz integral e salada de rúcula com ovos cozidos.<br>';
                mealPlan += '<strong>15h → </strong> Wrap de carne vermelha magra com vegetais e creme de ricota.<br>';
                mealPlan += '<strong>18h → </strong> Sopa de legumes com carne e frango desfiados.<br>';
                mealPlan += '<strong>21h → </strong> Iogurte natural com frutas (overnight)</p>';

            } else {
                mealPlan += '<p><strong>09h → </strong> Omelete recheado com carne desfiada e tomate.<br>';
                mealPlan += '<strong>12h → </strong> Bife grelhado com arroz integral e salada de rúcula.<br>';
                mealPlan += '<strong>15h → </strong> Wrap de carne vermelha magra com vegetais.<br>';
                mealPlan += '<strong>18h → </strong> Sopa de legumes com carne desfiada.<br>';
                mealPlan += '<strong>21h → </strong> Iogurte natural com frutas (overnight)</p>';
            }
        }
    }

    if (restrictions.includes('Glúten')) {
        mealPlan += '<p><strong>09h → </strong> Omelete com espinafre e tomate <br>';
        mealPlan += '<strong>12h → </strong> Salada de quinoa com frango grelhado <br>';
        mealPlan += '<strong>15h → </strong> Palitos de cenoura com homus <br>';
        mealPlan += '<strong>18h → </strong> Sopa de legumes com frango desfiado <br>';
        mealPlan += '<strong>21h → </strong> Salada de frutas</p>'
    }

    if ((restrictions.includes('Lactose')) && (!restrictions.includes('Sem Glúten'))) {
        mealPlan += '<p><strong>09h → </strong> Tapioca recheada com ovos e espinafre <br>';
        mealPlan += '<strong>12h → </strong> Filé de peixe grelhado com salada de folhas verdes <br>';
        mealPlan += '<strong>15h → </strong> Frutas frescas com castanhas <br>';
        mealPlan += '<strong>18h → </strong> Omelete com vegetais, sem queijo <br>';
        mealPlan += '<strong>21h → </strong> Salada de frutas</p>'
    }

    if (likes == 0 && dislikes == 0 && restrictions == 0) {
        mealPlan += '<p>Não foi possível gerar uma lista devido à ausência ou excesso de marcações</p>'
        mealPlan += '<p>Por favor, preencha corretamento os blocos.</p>'
    }

    // Exibir div de refeições
    document.getElementById('meal-plan').innerHTML = mealPlan;
    document.getElementById('modal').style.display = 'flex';

});

// botão de fechar a div de refeições
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
