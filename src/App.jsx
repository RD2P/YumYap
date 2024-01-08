import Header from '../components/Header'
import './index.css'
import carbonara from './assets/carbonara.jpg'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Header />

      <div className='px-10 mt-11'>
        <div className="text-3xl font-bold my-8">Spaghetti Carbonara</div>
        <img src={carbonara} width={500} />
        <p className='max-w-lg '>Spaghetti Carbonara is a classic Italian pasta dish that's quick, easy, and delicious. Originating in Rome, this dish is known for its creamy sauce and savory pancetta.</p>

        <h3>Cooking Time and Servings:</h3>
        <ul>
          <li>Prep Time: 10 minutes</li>
          <li>Cook Time: 10 minutes</li>
          <li>Total Time: 20 minutes</li>
          <li>Yield: 2 servings</li>
        </ul>


        <h3>Ingredients:</h3>
        <ul>
          <li>8 oz (225g) spaghetti</li>
          <li>2 large eggs</li>
          <li>1/2 cup (50g) grated Parmesan cheese</li>
          <li>4 oz (115g) pancetta or bacon, diced</li>
          <li>2 cloves garlic, minced</li>
          <li>Salt and black pepper</li>
          <li>Fresh parsley, chopped (for garnish)</li>
        </ul>
        <h3>Instructions</h3>
        <ol>
          <li>Cook spaghetti in a large pot of boiling salted water until al dente. Reserve 1/2 cup of pasta water, then drain the spaghetti.</li>
          <li>In a bowl, whisk together eggs, Parmesan cheese, salt, and pepper.</li>
          <li>In a separate pan, cook pancetta over medium heat until crispy. Add garlic and cook for another minute.</li>
          <li>Add cooked spaghetti to the pan with pancetta and garlic. Remove from heat and quickly stir in the egg mixture, tossing to coat the pasta evenly. If the sauce is too thick, add some of the reserved pasta water.</li>
          <li>Serve immediately, garnished with chopped parsley.</li>
        </ol>

        <h3>Tips and Variations:</h3>


        For a twist, try adding peas or mushrooms to the dish.
        Make sure to toss the pasta quickly with the egg mixture off the heat to avoid scrambling the eggs.

        <h3>Nutritional Information (per serving):</h3>
        <ul>
          <li>Calories: 650</li>
          <li>Fat: 32g</li>
          <li>Carbohydrates: 52g</li>
          <li>Protein: 36g</li>
        </ul>
      </div>

    </div>
  )
}

export default App
