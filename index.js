/*https://api.spoonacular.com/mealplanner/generate?apiKey=682df04066714905927b1e93de89eaa9&targetCaleries*/

const apikey = "682df04066714905927b1e93de89eaa9";
const url = "https://api.spoonacular.com/mealplanner/generate";
const IMG_URL = "https://spoonacular.com/cdn/ingredients_100x100";

const foodCard = document.querySelector('food-cards')



const recipeData = async () => {
    try {
        // const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=682df04066714905927b1e93de89eaa9&name")
        const response = await axios.get("https://api.spoonacular.com/recipes/findByIngredients?apiKey=9543388b460742e1827706a4eebc91f3&ingredients=food");

        const recipes = response.data;
        console.log(recipes);

        const results = Object.values(recipes)
        console.log(results);

        results.forEach((result) => {
            // foodCard.innerText = result.title;
            console.log(result);

            // const {title, image, imageType} = result;
            // const foodNutrient = document.createElement("p");
            // foodNutrient.innerText = result.nutrients;

            // const foodEl = document.querySelector('food-cards');
            // const foodDiv = documents.querySelector('#cards');
            // const containerEl = document.createElement('div');
            // const objEl = document.createElement('div');
            // objEl.classList.add('#cards');       
            // objEl.innerHTML = `<img src="${result.image}" alt="${result.imageType}">
            // <h3>${result.title}</h3>`;

            // const foodImage = document.createElement('img');
            // foodImage.src = result.image;
            // const foodTitle = document.createElement("h2");
            // foodTitle.innerText = result.title;
            
            // containerEl.append(foodImage, foodTitle);
            // foodDiv.append(containerEl)
            // foodEl.append(foodDiv);

            // foodDiv.append(foodImage, foodTitle);
            // foodCard.appendChild(objEl);
        });
    } catch(error) {
        console.error(error);
    }
}
recipeData();

const dropdown = document.getElementById("#dropdown");
const handleChange = (event) => {
    event.preventDefault()
    const input = document.querySelector('search-bar').value
    recipeData(input)
    Input.value = ""
}

dropdown.addEventListener('submit', handleChange);












const genMealPlan = async (calories) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=9543388b460742e1827706a4eebc91f3&targetCaleries=${calories}`) 
        const dayObject = response.data.week;
        console.log(dayObject);
        const days = Object.values(dayObject);
        console.log(days);
        //turn dayObject into array
        //for each item in the array 
        // create element for giving days calories
        // give element food information

        days.forEach((day) => {
            const foodNutrient = document.createElement("div");
            foodNutrient.innerHTML = `<div class="row">
                                        <div class="column four">
                                            <img src="${day.meals.sourceURL}" alt="meal-image"/>
                                        </div>
                                        <div class="">
                                            <h4>${day.meals.title}</h4>
                                            <p>${day.meals}</p>
                                            <p>${day.nutrients}</p>
                                        </div>
                                    </div>;`
        })
    } catch(error) {
        console.error(error);
    }
}
genMealPlan();

     // const foodDiv = document.querySelector('#cards')
            // const foodImage = document.createElement('img')
            // foodImage.src = meals.url;
            // const foodtitle = document.createElement("h2");
            // foodtitle.innerText = meals.title;
            // const foodNutrient = document.createElement("p");
            // foodNutrient.innerText = meals.nutrients;
            // foodDiv.append(foodImage, foodtitle);


// const displayFood = (data) => {
//     let mealInfo = `
//   <img id="food-pic" src="${data.url}" alt="food" style="width: 100px; height: auto;">
//   <h2 id="food-title">${data.title}</h2>
//   <p id="nutrients">${data.nutrients}</p> `
//   document.querySelector('#cards').innerHTML = mealInfo;
// }
// displayFood();

// const generate = () => {
//     if()
//     const fetchFood = fetchFood();
// }

const dropdown = document.getElementById("#dropdown");
const handleChange = (event) => {
    event.preventDefault()
    const input = document.querySelector('search-bar').value
    recipeData(input)
    Input.value = ""
}

dropdown.addEventListener('submit', handleChange);

const getMeal = document.getElementById('#get-meal');
const getMealInfo = document.getElementById('#meal-plan-info');

getMeal.addEventListener('click', genMealPlan());











// const foodData = async () => {

// }









// make API call with Axios 
//display APi info

// Create Dynamic HTML

// append Food data 

// Step 5: Dynamically search food using HTML form with eventHandler

// Write eventHandler here

// Step 6: Remove previous food data