import { CATEGORIES } from "../constant";
const Category = () => {
  return (
    <section className=' p-4 md:py-6 md:px-12'>
      <div className='grid grid-cols-3 gap-2 md:grid-cols-6 md:justify-between md:gap-2 '>
        {CATEGORIES.map((category) => {
          return (
            <div
              key={category}
              className='border-2 border-neutral-600 text-sm md:text-base  lg:text-md p-1 rounded-md font-semibold text-neutral-600 text-center whitespace-nowrap'
            >
              {category}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
