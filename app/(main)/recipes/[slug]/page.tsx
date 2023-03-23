import recipes from '@/data/recipes';

import Breadcrumbs from './breadcrumbs';
import Metadata from './metadata';

function fetchRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = fetchRecipe(params.slug);
  if (!recipe) {
    return <div className="w-full">Recipe not found</div>;
  }

  return (
    <>
      <div className="w-full">
        <Breadcrumbs />
        <section className="px-6">
          <h1 className="text-2xl font-bold">{recipe.name}</h1>
          <h2 className="text-lg text-stone-700 dark:text-stone-300">
            {recipe.description}
          </h2>
        </section>

        <section className="mt-6 p-6 md:hidden">
          <Metadata metadata={recipe.metadata} />
        </section>

        <section className="mt-6 p-6">
          <h3 className="text-lg font-bold">Ingredients</h3>

          <ul className="mt-2 rounded-lg bg-stone-100 py-6 pl-6 dark:bg-stone-700">
            {recipe?.ingredients?.map((ingredient) => {
              return (
                <li
                  key={ingredient.name}
                  className={
                    'mb-4 flex border-b border-b-stone-300 pb-4 pr-4 last:mb-0 last:border-b-0 last:pb-0 dark:border-b-stone-500'
                  }
                >
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

        <section className="mt-6 p-6">
          <h3 className="text-lg font-bold">Steps</h3>

          <ul className="mt-2 rounded-lg bg-stone-100 py-6 pl-6 dark:bg-stone-700">
            {recipe?.steps?.map((step, i) => {
              return (
                <li
                  key={step.id}
                  className={
                    'mb-4 flex border-b border-b-stone-300 pb-4 pr-4 last:mb-0 last:border-b-0 last:pb-0 dark:border-b-stone-500'
                  }
                >
                  <div data-step={i + 1}>
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
