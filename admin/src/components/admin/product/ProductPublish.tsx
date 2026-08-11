import type { Product } from "@/types/product";
import { createProduct } from "@/lib/product-api";
import { useState } from "react";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function ProductPublish({
  product,
}: Props) {
  const [bulkCount, setBulkCount] = useState(1);

  async function save() {
    try {
      for (let i = 0; i < bulkCount; i++) {
        const payload = { ...product };
        if (i > 0) {
          payload.name = `${product.name} (Copy ${i})`;
          payload.slug = `${product.slug}-copy-${i}`;
          payload.sku = `${product.sku}-COPY-${i}`;
        }
        await createProduct(payload);
      }
      alert(`Successfully saved ${bulkCount} product(s)`);
    } catch (err) {
      console.error(err);
      alert("Error saving products. Some may have been created.");
    }
  }

  return (

    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">

        Publish

      </h2>

      <div className="space-y-4">

        <label className="flex flex-col gap-2 font-medium mb-4">
          Quantity to create
          <input
            type="number"
            min="1"
            max="100"
            value={bulkCount}
            onChange={(e) => setBulkCount(Math.max(1, Number(e.target.value)))}
            className="border border-border p-2 rounded max-w-[120px]"
          />
        </label>

        <label className="flex gap-2">

          <input
            type="checkbox"
            checked={product.featured}
            readOnly
          />

          Featured Product

        </label>

        <label className="flex gap-2">

          <input
            type="checkbox"
            checked={product.newArrival}
            readOnly
          />

          New Arrival

        </label>

        <label className="flex gap-2">

          <input
            type="checkbox"
            checked={product.bestSeller}
            readOnly
          />

          Best Seller

        </label>

      </div>

      <button
        onClick={save}
        className="mt-8 rounded-lg bg-black px-8 py-3 text-white"
      >
        Save Product
      </button>

    </div>

  );

}