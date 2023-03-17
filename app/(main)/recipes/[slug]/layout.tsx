import Sidebar from './sidebar';
import recipes from '../../recipes.json';

function fetchRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export default async function RecipeLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const recipe = fetchRecipe(params.slug);
  // put main content in the page

  // put details in the sidebar
  return (
    <div className="flex h-full flex-row">
      <main className="flex h-full flex-1 border-r border-r-stone-200 dark:border-r-stone-700">
        {children}
      </main>
      <aside className=" h-full w-3/12 min-w-[333px] py-6 px-6 dark:border-l-stone-700">
        <Sidebar metadata={recipe?.metadata} />
      </aside>
    </div>
  );
}
