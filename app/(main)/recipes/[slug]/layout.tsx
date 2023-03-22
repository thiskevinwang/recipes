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
  // put main content in the page

  // put details in the sidebar
  return (
    <div className="flex h-full flex-row">
      <main className="flex h-full flex-1">{children}</main>
      <aside className="m-6 h-full w-3/12 min-w-[333px] max-md:hidden">
        <Metadata metadata={recipe?.metadata} />
      </aside>
    </div>
  );
}
