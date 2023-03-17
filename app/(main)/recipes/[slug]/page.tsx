import recipes from '../../recipes.json';

function fetchRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = fetchRecipe(params.slug);

  return (
    <div className="">
      <h1 className="text-2xl font-bold">{recipe.name}</h1>
      <h2 className="text-lg text-stone-700 dark:text-stone-200">
        {recipe.description}
      </h2>

      <h3 className="mt-6 mb-2 border-t border-t-stone-200 pt-2 text-lg font-bold dark:border-t-stone-700">
        Ingredients
      </h3>

      <h3 className="mt-6 mb-2 border-t pt-2 text-lg font-bold dark:border-t-stone-700">
        Steps
      </h3>

      <ul>
        {recipe?.steps?.map((step, i) => {
          return (
            <li key={step.id} className="mb-4 flex ">
              <div
                data-step={i + 1}
                className={
                  'relative flex gap-4' +
                  ' ' +
                  'before:ml-[0.2rem] before:mt-0 before:flex before:h-[clamp(1.8rem,5vw,1.8rem)] before:shrink-0 before:grow-0 before:basis-[clamp(1.8rem,5vw,1.8rem)] before:content-center before:justify-center before:rounded-[50%] before:border before:border-stone-200 before:bg-stone-100 before:text-stone-500 before:content-[attr(data-step)] before:dark:border-stone-700 dark:before:bg-stone-800 dark:before:text-stone-300' +
                  ' ' +
                  'after:content=[""] after:absolute after:top-[35px] after:left-[0] after:bottom-[clamp(0.25rem,2vw,0rem)] after:z-[1] after:w-[1px] after:translate-x-[calc(clamp(2rem,5vw,2.2rem)/2)] after:transform after:bg-stone-200 dark:after:bg-stone-700'
                }
              >
                <div className="w-full">
                  <h3 className="font-semibold">{step.name}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
