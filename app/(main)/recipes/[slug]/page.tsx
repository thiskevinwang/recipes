import recipes from '../../recipes.json';
import Breadcrumbs from './breadcrumbs';

function fetchRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = fetchRecipe(params.slug);
  return (
    <>
      <div className="">
        <Breadcrumbs />
        <section className="px-6">
          <h1 className="text-2xl font-bold">{recipe.name}</h1>
          <h2 className="text-lg text-stone-700 dark:text-stone-200">
            {recipe.description}
          </h2>
        </section>

        <section className="mt-6 border-t border-t-stone-200 px-6 py-6 dark:border-t-stone-700">
          <h3 className="text-lg font-bold">Ingredients</h3>

          <ul className="mt-6">
            {recipe?.ingredients?.map((ingredient) => {
              return (
                <li key={ingredient.name} className="mb-4 flex last:mb-0">
                  <div className="relative flex items-center gap-2">
                    {ingredient.quantity ? (
                      <div className="">
                        <span className="text-stone-500 dark:text-stone-400">
                          {ingredient.quantity}
                        </span>
                      </div>
                    ) : null}

                    {ingredient.unit ? (
                      <div className="">
                        <span className=" text-stone-500 dark:text-stone-400">
                          {ingredient.unit}
                        </span>
                      </div>
                    ) : null}

                    <div className="">
                      <span className="">{ingredient.name}</span>
                    </div>
                    {ingredient.notes ? (
                      <div className="">
                        <span className=" text-stone-500 dark:text-stone-400">
                          ({ingredient.notes})
                        </span>
                      </div>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-6 border-t border-t-stone-200 px-6 py-6 dark:border-t-stone-700">
          <h3 className="text-lg font-bold">Steps</h3>

          <ul className="mt-6 list-none">
            {recipe?.steps?.map((step, i) => {
              return (
                <li key={step.id} className="mb-4 flex last:mb-0 ">
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
        </section>
      </div>
    </>
  );
}
