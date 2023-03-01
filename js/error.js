const loadMeals = (searchText)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayMeals(data.meals))
   }
   const displayMeals=meals=>{
       // console.log(meals);
       //step1;container
       const mealsContainer=document.getElementById('meal-container');
       meals.forEach(meal =>{
   console.log(meal)
   //step2;create child for each element
   const mealDiv=document.createElement('div')
   mealDiv.classList.add('col');
   //step3;set contain of the child
   mealDiv.innerHTML=`
   <div class="card">
                       <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                       <div class="card-body">
                           <h5 class="card-title">${meal.strMeal}</h5>
                           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                               additional content. This content is a little bit longer.</p>
                       </div>
                       <button onclick="exampleModal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
     DetailsMeal
   </button>
   
                   </div>`
   //step4;append child
   mealsContainer.appendChild(mealDiv)
       })
   }
   
   const searchMeal=()=>{
     const searchText=document.getElementById('search-field').value;
     console.log(searchText)
     loadMeals(searchText)
   }
   const exampleModal= idMeal=>{
   const url=`www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayExampleModal(data.meals[0]));
   .catch(error=>{
console.log(error)
   })
   }
   const displayExampleModal=meal=>{
     document.getElementById('exampleModalLabel').innerText=meal.strMeal;
    const imgBody=document.getElementById('img-body').innerHTML=`
    <img class="img-fluid" src="${meal.strMealThumb}">`
   }
   loadMeals('chicken');