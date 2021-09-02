/*https://api.spoonacular.com/mealplanner/generate?apiKey=682df04066714905927b1e93de89eaa9&targetCaleries*/

const apikey = "682df04066714905927b1e93de89eaa9";
const url = "https://api.spoonacular.com/mealplanner/generate";
const IMG_URL = "https://spoonacular.com/cdn/ingredients_100x100";

const foodCard = document.querySelector('food-cards')



const recipeData = async (food) => {
    try {
        // const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=682df04066714905927b1e93de89eaa9&name")
        const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=d99bae42f1e440d599f4957c65df8ea5&ingredients=${food}&number=4`);
        // const response = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?apiKey=d99bae42f1e440d599f4957c65df8ea5&query=banana&maxFat=25&number=4`);

        const recipes = response.data;
        console.log(recipes);

        const results = Object.values(recipes)
        console.log(results);

        results.forEach((result) => {
            // foodCard.innerText = result.title;
            // console.log(result);

            const divEl = document.createElement('div');

            const foodImg = document.createElement('img')
            foodImg.src = result.image;

            const titleEl = document.createElement('div');
            titleEl.innerText = result.title;
            divEl.append(titleEl);
            
            const foodCards = document.querySelector('.food-cards');
            divEl.append(foodImg);

            foodCards.append(foodImg);
            foodCards.append(titleEl);
        });
    } catch(error) {
        console.error(error);
    }
}
recipeData("chicken");

// const dropdown = document.getElementById("#dropdown");

// const button = document.queryElementById('#search')
// button.addEventListner('click' = (event) => {
//     event.preventDefault()
//     const inputValue = document.querySelector('#food-search').value
//     recipeData(inputValue)
//     Input.value = ""
// })

// dropdown.addEventListener('submit', handleChange);

// const mealList = document.getElementsByClassName('.food-cards')
// const getMeal = () =>{
//     let searchINputText = document.getElementById('#search').value.trim();
//     fetch(recipeData())
//     .then(response => response.json())
//     .then(data => {
//         let html = "";
//         if(data.meals) {
//             data.meals.forEach(meal => {
//                 html += `
//                     <div class="" data-id = "">
//                         <div class="">
//                         <img src="" alt="">
//                         <div>
//                             <h3></h3>
//                         </div>
//                         </div>
//                     </div>
//                 `
//             })
// mealList.classList.remove('not found')
//         } else {
//             html = "sorry, no results"
// mealList.classList.add("not found");
//         }
//         mealList.innerHTML = html;
//     })
// }

// const mealRecipe = (e) => {
//     e.preventDefault();
//     if(e.target.classList.contains("recipe-btn")) {
//         let mealItem = e.target.parentElement.parentElement;
//         axios.get(``)
//         .then(response => response.json())
//         .then(data => mealrecipeModal(data.meal))
//     }
// }

let calories = "";
let diet = "";
let serving = "";
let allergens = "";

const handleSelect = () => {
    calories = document.querySelector('#input').value;
    diet = document.querySelector('.diet').value;
    serving = document.querySelector('#serving-size').value;
    allergens = document.querySelector('#allergens').value;
}

const fetchMealData = async (calories, diet, allergens) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=d99bae42f1e440d599f4957c65df8ea5&targetCaleries=${calories}&diet=${diet}&exclude=${allergens}`) 
        const dayObject = response.data.week;
        console.log(dayObject);
        const days = Object.values(dayObject);
        // console.log(days);

        days.forEach((day) => {
            // return (day.meals[].title, day.nutrients[])
            // day.meals[o].filter((meals) => {
            //     for (let i=0; i<meals.length; i++) {
            //         if(meals[0].serving !== "O serving") {
            //             return (`${calories}`)
            //         }
            //     }
            // });

            console.log(day.meals[2].title, day.nutrients.protein)

            const formEl = document.querySelector('.meal-plan-container');
            const foodContainer = document.createElement('div')

            const mealImg = document.createElement('img')
            mealImg.src = day.meals[1].sourceUrl.image

            const mealTitleEl = document.createElement('h3');
            mealTitleEl.innerText = day.meals[1].title;

            const nutrientEl = document.createElement('p')
            nutrientEl.innerText = day.nutrients

            foodContainer.appendChild(mealImg, mealTitleEl, nutrientEl)
            formEl.append(foodContainer);




            // const foodNutrient = document.createElement("div");
            // foodNutrient.innerHTML = `<div class="row">
            //                             <div class="column four">
            //                                 <img src="${day.meals.sourceURL}" alt="meal-image"/>
            //                             </div>
            //                             <div class="">
            //                                 <h4>${day.meals.title}</h4>
            //                                 <p>${day.meals}</p>
            //                                 <p>${day.nutrients}</p>
            //                             </div>
            //                         </div>;`

        })
    } catch(error) {
        console.error(error);
    }
}
fetchMealData(meals[1]);

// const displayFood = (data) => {
//     let mealInfo = `
//   <img id="food-pic" src="${data.url}" alt="food" style="width: 100px; height: auto;">
//   <h2 id="food-title">${data.title}</h2>
//   <p id="nutrients">${data.nutrients}</p> `
//   document.querySelector('#cards').innerHTML = mealInfo;
// }
// displayFood();

const mealForm = document.getElementsByClassName('.form');
const InputEl= document.querySelector('#input').value;

const generateMeal = () => {
    handleSelect();
    fetchMealData();
}

const getMeal = document.querySelector('sumit');
// const getMealInfo = document.getElementById('#meal-plan-info');

getMeal.document.addEventListener('click', generateMeal());

















// make API call with Axios 
//display APi info

// Create Dynamic HTML

// append Food data 

// Step 5: Dynamically search food using HTML form with eventHandler

// Write eventHandler here

// Step 6: Remove previous food data