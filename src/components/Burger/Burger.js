

import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger =(props) => {
   
   const sttyle={
   	   height:'700px'
   }



   return(

        // <BurgerIngredients type='bread-top'/>
        <div style={sttyle}>
        <BurgerIngredients type='bread-bottom'/>
        <BurgerIngredients type='bacon'/>
        <BurgerIngredients type='meat'/>
        <BurgerIngredients type='salad'/>
        <BurgerIngredients type='cheese'/>
        <BurgerIngredients type='bread-top'/>
         </div>
   	)

}

export default burger;