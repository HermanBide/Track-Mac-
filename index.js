/*https://api.spoonacular.com/mealplanner/generate?apiKey=682df04066714905927b1e93de89eaa9&targetCaleries*/

// const apikey = "682df04066714905927b1e93de89eaa9";
// const url = "https://api.spoonacular.com/mealplanner/generate";
// const IMG_URL = "https://spoonacular.com/cdn/ingredients_100x100";

const mealInput = document.querySelector("#food-search");
console.log(mealInput.value);

const recipeData = async () => {
    try {

        const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=db91a981647d4b7ba8ccf94eb6946d7d&ingredients=${mealInput.value}&number=6`)
        const recipes = response.data;
        console.log(recipes);

        const results = Object.values(recipes)
        console.log(results);

        results.forEach((result) => {
            const divEl = document.createElement('div');

            const foodImg = document.createElement('img');
            foodImg.src = result.image;

            const imgLink = document.createElement('a')
            imgLink.href = result.image;

            imgLink.append(foodImg)

            const titleEl = document.createElement('div');
            titleEl.innerText = result.title;
            divEl.append(titleEl);
            
            const foodCards = document.querySelector('.food-cards');
            divEl.append(imgLink);

            foodCards.append(divEl);
        });
    } catch(error) {
        console.error(error);
    }
}

// const images = document.querySelectorAll('[data.src]');

// const imgOptions = {}
// const imgObserver = new IntersectionObserver(() => {

// }, )






const foodCards = document.querySelector('.food-cards');
const search = document.querySelector('#search')
search.addEventListener('click', (e) => {
    e.preventDefault();
    foodCards.innerHTML = "";
    recipeData();
});


const formEl = document.querySelector('.meal-plan-container');
const fetchMealData = async (e) => {
    try {
        e.preventDefault();
        const calories = document.querySelector('#input').value;
        const diet = document.querySelector('.diet').value;
        const allergens = document.querySelector('#allergens').value;

        const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=db91a981647d4b7ba8ccf94eb6946d7d&targetCaleries=${calories}&diet=${diet}&exclude=${allergens}`) 
        const dayObject = response.data.week;
        console.log(dayObject);
        const days = Object.values(dayObject);


        days.forEach((day) => {
       
            const foodContainer = document.createElement('div');

            const mealTitleEl = document.createElement('div');
            mealTitleEl.innerText = day.meals[1].title;

            const nutrientEl = document.createElement('div');

            const nutrientCalories = document.createElement('p')
            const nutrientProtein = document.createElement('p')
            const nutrientFat = document.createElement('p')
            const nutrientCarbs = document.createElement('p')

            nutrientCalories.innerText = day.nutrients.calories;
            nutrientProtein.innerText = day.nutrients.protein;
            nutrientFat.innerText = day.nutrients.fat; 
            nutrientCarbs.innerText = day.nutrients.carbohydrates;


            const textCal = document.createTextNode("     :Calories");
            const textPro = document.createTextNode("     :Protein");
            const textFat = document.createTextNode("     :Fat");
            const textCarb = document.createTextNode("     :Carbs");
            nutrientCalories.append(textCal)
            nutrientProtein.append(textPro) 
            nutrientFat.append(textFat) 
            nutrientCarbs.append(textCarb)



            const mealImg = document.createElement('p');
            mealImg.innerText = day.meals[1].sourceUrl;

            const mealLink = document.createElement('a')
            mealLink.href = day.meals[1].sourceUrl

            mealLink.append(mealImg)
         
            

            nutrientEl.append(nutrientCalories, nutrientProtein, nutrientFat, nutrientCarbs);




            foodContainer.append(mealTitleEl, nutrientEl, mealLink, '')
            formEl.append(foodContainer);
        })
    } catch(error) {
        console.error(error);
    }
}


const mealForm = document.getElementsByClassName('.form');
const InputEl= document.querySelector('#input').value;

const getMeal = document.querySelector('.form');
getMeal.addEventListener('submit', fetchMealData);

















// make API call with Axios 
//display APi info

// Create Dynamic HTML

// append Food data 

// Step 5: Dynamically search food using HTML form with eventHandler

// Write eventHandler here

// Step 6: Remove previous food data