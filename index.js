/*https://api.spoonacular.com/mealplanner/generate?apiKey=682df04066714905927b1e93de89eaa9&targetCaleries*/

const apikey = "682df04066714905927b1e93de89eaa9";
const url = "https://api.spoonacular.com/mealplanner/generate";
const IMG_URL = "https://spoonacular.com/cdn/ingredients_100x100";

const mealInput = document.querySelector("#food-search");
console.log(mealInput.value);

const recipeData = async () => {
    try {

        const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=abfa78063913474c9fdee9fdbb2f102e&ingredients=${mealInput.value}&number=6`)
        const recipes = response.data;
        console.log(recipes);

        const results = Object.values(recipes)
        console.log(results);

        results.forEach((result) => {
            const divEl = document.createElement('div');

            const foodImg = document.createElement('img');
            foodImg.src = result.image;

            const titleEl = document.createElement('div');
            titleEl.innerText = result.title;
            divEl.append(titleEl);
            
            const foodCards = document.querySelector('.food-cards');
            divEl.append(foodImg);

            foodCards.append(divEl);
            // foodCards.append(titleEl);
        });
    } catch(error) {
        console.error(error);
    }
}


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

        const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=abfa78063913474c9fdee9fdbb2f102e&targetCaleries=${calories}&diet=${diet}&exclude=${allergens}`) 
        const dayObject = response.data.week;
        console.log(dayObject);
        const days = Object.values(dayObject);
        // console.log(days);

        // if(value === `${calories} ${diet}` - `${allergens}`) {
        //     return (day[].meals, day[].nutrients) 
        // }


        days.forEach((day) => {
       
            const foodContainer = document.createElement('div');

            const mealTitleEl = document.createElement('div');
            mealTitleEl.innerText = day.meals[1].title;

            const nutrientEl = document.createElement('div');
            const nutrientUl = document.createElement('ul');
            const nutrientList = document.createElement('li');
            // const allList = [nutrientListOne, nutrientListTwo, nutrientListThree, nutrientListFour];
            nutrientList.innerText = (day.nutrients.calories, day.nutrients.protein, day.nutrients.fat, day.nutrients.carbohydrates);

            const mealImg = document.createElement('src');
            mealImg.src = day.meals[1].sourceUrl;
            mealImg.innerText = day.meals[1].sourceUrl;

            nutrientUl.append(nutrientList)
            nutrientEl.append(nutrientUl)

            foodContainer.append(mealTitleEl, nutrientEl, mealImg, '')
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