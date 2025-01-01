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
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-20 px-8">
      {result.map((item) => (
        <div
          key={item.id}
          className="flex bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          {/* Image Section */}
          <div className="w-1/3">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              className="h-full w-full object-cover"
            />
          </div>
  
          {/* Text Section */}
          <div className="w-2/3 p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <p className="text-lg font-bold text-green-600">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};  