import React from 'react'
let diets = ["omnivore", "vegetarian", "vegan", "pussy"]

function PopulateDiet() {
     return diets.map(diet => {
         return <option value = {
             diet
         } > {
             diet
         } </option>;
     })
}

export default PopulateDiet