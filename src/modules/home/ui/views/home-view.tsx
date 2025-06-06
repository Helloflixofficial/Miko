import { CategoriesSection } from "../sections/category-section";

interface HomePageView {
  categoryId?: string;
}

export const HomeView = ({ categoryId }: HomePageView) => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};
