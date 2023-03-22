import recipes from '@/data/recipes';
import Metadata from './metadata';

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

  if (!recipe) {
    return (
      <div className="m-auto flex h-full content-center justify-center">
        <h1 className="text-2xl">Recipe not found</h1>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-row">
      <main className="flex h-full flex-1">{children}</main>
      <aside className="m-6 h-full w-3/12 min-w-[333px] max-md:hidden">
        <Metadata metadata={recipe.metadata} />
      </aside>
    </div>
  );
}
