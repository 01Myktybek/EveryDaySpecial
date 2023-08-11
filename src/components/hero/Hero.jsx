import React, {useEffect, useState} from 'react'
import classes from './hero.module.css'
import meal from '../assets/meal1.jpg' 

const Hero = () => {
  const URL1 = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
  const URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Burger'
  const [chickenRecipe, setChikenRecipe] = useState('')
  const [burgerRecipe, setBurgerRecipe] = useState('')

useEffect(() => {
  const fetchChikenRecipe = async() => {
    try {
      const res = await fetch(URL1)
      const data = await res.json()

      setChikenRecipe(data.meals[0])
    } catch (error) {
      console.error(error)
    }
  }
  fetchChikenRecipe()
}, [])

useEffect(() => {
  const fetchBurgerRecipe = async () => {
    try {
      const res = await fetch(URL2)
      const data = await res.json()

      setBurgerRecipe(data.meals[0])
    } catch (error) {
      console.error(error)
    }
  }
  fetchBurgerRecipe()
}, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>Graving some <br />delicious meals</h2>
          <h5>Feeling the cooking vibe</h5>
          <p className={classes.firstDesc}>
            You've come to the right place for some tasty recipes
          </p>
          <p className={classes.secondDesc}>
            Just see what we have for you
          </p>
          <div className={classes.buttons}>
            <button>Get Started</button>
            <button>Explore recipes</button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={meal} />
          <div className={classes.chikenMeal}>
            <div className={classes.imgContainer}>
              <img src={chickenRecipe?.strMealThumb} />
            </div>
            <h5>{chickenRecipe?.strMeal}</h5>
          </div>
          <div className={classes.burgerMeal}>
            <div className={classes.imgContainer}>
              <img src={burgerRecipe?.strMealThumb} />
            </div>
            <h5>{burgerRecipe?.strMeal}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero