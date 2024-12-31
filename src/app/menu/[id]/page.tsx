import { menuItems } from "@/app/utils/mock";
import Image from "next/image";
const getmenuItemsDetails = (id: string | number) => {
  const numericId = typeof id === "string" ? parseInt(id, 10) : id; // Ensure `id` is a number
  return menuItems.filter((item) => item.id === numericId);
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // Resolve the params promise
  const { id } = resolvedParams; // Destructure the resolved params

  const result = getmenuItemsDetails(id); // Filter menu items by category

  if (result.length === 0) {
    return <div>No details found for the selected item.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-20 px-4">
      {result.map((item) => (
        <div key={item.id} className="flex justify-between">
          <div>
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}