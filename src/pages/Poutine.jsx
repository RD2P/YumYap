import React from 'react'
import poutine from '/assets/poutine.jpg'

const Recipe = () => {
  return (
    <div className='px-10 max-w-4xl mx-auto'>

      <div className="text-3xl font-bold my-8">Classic Poutine</div>
      <img src={poutine} width={500} />
      <p className='max-w-lg '>Poutine is a popular Canadian dish that originated in Quebec. It traditionally consists of crispy French fries topped with cheese curds and smothered in a rich gravy. It's a comforting and indulgent dish that's perfect for a cozy night in or as a unique addition to any gathering.</p>


      <h3>Cooking Time and Servings:</h3>
      <ul>
        <li>Prep Time: 15 minutes</li>
        <li>Cook Time: 20-25 minutes</li>
        <p>Servings:</p>
        <p>This recipe makes approximately 4 servings of classic poutine, but you can adjust the quantities based on your needs. It's a great dish to share with friends or family as a delicious and satisfying snack or side dish.</p>
      </ul>


      <h3>Ingredients:</h3>
      <ul>
        <li>4 large potatoes, washed and cut into fries</li>
        <li>2 cups cheese curds</li>
        <li>Gravy (you can use store-bought or make your own)</li>
        <li>4 oz (115g) pancetta or bacon, diced</li>
        <li>Gravy (you can use store-bought or make your own)
          <ul>
            <li>2 tablespoons unsalted butter</li>
            <li>2 tablespoons all-purpose flour</li>
            <li>2 cups beef or chicken broth</li>
            <li>Salt and pepper to taste</li>
          </ul>
        </li>

      </ul>

      <h3>Instructions</h3>
      <ol>
        <li>Preheat your oven to 450°F (230°C) and line a baking sheet with parchment paper.</li>
        <li>Spread the cut potatoes in a single layer on the baking sheet. Drizzle with olive oil, season with salt and pepper, and toss to coat evenly.</li>
        <li>Bake the fries in the preheated oven for 20-25 minutes or until golden brown and crispy, flipping them halfway through.</li>
        <li>While the fries are baking, prepare the gravy. In a saucepan, melt the butter over medium heat. Add the flour and whisk constantly until the mixture turns golden brown, about 2-3 minutes.</li>
        <li>Gradually whisk in the broth, making sure there are no lumps. Bring the mixture to a boil, then reduce the heat and simmer for 5-7 minutes, or until the gravy has thickened. Season with salt and pepper to taste.</li>
        <li>Once the fries are done, remove them from the oven and transfer them to a serving dish. Sprinkle the cheese curds over the hot fries.</li>
        <li>Pour the hot gravy over the fries and cheese curds, ensuring that the cheese begins to melt.</li>
        <li>Serve immediately, allowing the cheese to melt further in the hot gravy.</li>
        <p>Enjoy your homemade poutine!</p>
      </ol>

      <h3>Nutritional Information (per serving):</h3>
      <ul>
        <li>Calories: 550-650 kcal</li>
        <li>Fat: 30-40g</li>
        <li>Carbohydrates: 50-60g</li>
        <li>Protein: 20-25g</li>
      </ul>
    </div>
  )
}

export default Recipe
