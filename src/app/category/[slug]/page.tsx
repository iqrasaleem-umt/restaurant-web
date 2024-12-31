import Menucard from "@/components/menucard";
import { menuItems } from "@/app/utils/mock";
import { MenuItem } from "@/app/utils/types";

// Utility function to filter menu items by category
const getmenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter((item) => item.category === category);
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Resolve the params promise

  const result = getmenuItemsByCategory(slug); // Filter menu items by category

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-10 mt-20 px-4 ">
      {result.map((item) => (
        <Menucard
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.category}
          imageUrl={item.imageUrl}
          id={item.id}
        />
      ))}
    </div>
  );
}

