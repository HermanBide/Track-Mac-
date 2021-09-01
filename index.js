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
            console.log(result);

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


const mealData = async (calories) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=d99bae42f1e440d599f4957c65df8ea5&targetCaleries=${calories}`) 
        const dayObject = response.data.week;
        console.log(dayObject);
        const days = Object.values(dayObject);
        console.log(days);

        days.forEach((day) => {

            console.log(day.meals[2].title, day.nutrients.protein)
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
mealData();

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
const Diet = document.querySelector('#diet').value;
const serving = document.querySelector('#serving-size').value;
const Allergens = document.querySelector('#allergy').value;

const handleSelect = (e) => {
    let select = e.target;
    console.log(select.value);
    let choices=[];
    for(let i=0; i<select.length; i++) {
        choices.push(select[i].value);
    }
    // choices = [].map.call(select, (option) => option.value)
    console.log(choices)


    //  let title = title;
    //  let url = sourceURL;
    // let servings = servings;


    // let nutrients = {
    // let calories = calories;
    // let carbohydrates = carbohydrates;
    // let fat = fat;
    // let protein = protein;
    // }

//     let submit = genMealPlan();
//     if(vegan === ) {

//     } else if (vegetarian) {

//     }else if ( pescatarian) {

//     }else {
//         console.log(classic);
//     }

//     const fetchFood = fetchFood();
}
handleSelect();

const generateMeal = () => {
    mealData()
    handleSelect()
    
}

// const getMeal = document.getElementById('#get-meal');
// const getMealInfo = document.getElementById('#meal-plan-info');

document.getElementById('#diet').document.addEventListener('click', handleSelect);

















// make API call with Axios 
//display APi info

// Create Dynamic HTML

// append Food data 

// Step 5: Dynamically search food using HTML form with eventHandler

// Write eventHandler here

// Step 6: Remove previous food data