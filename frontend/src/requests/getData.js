import { domain } from "./domain";

export const getCategoryTypes = (setCategoryTypes) => {
  fetch(`${domain}/category_types`)
    .then((res) => res.json())
    .then(setCategoryTypes);
};

export const getCategories = (
  setCategories1,
  setCategories2,
  setCategories3
) => {
  fetch(`${domain}/category`)
    .then((res) => res.json())
    .then((res) => {
      setCategories1(res.filter((e) => e.categoryType.id === 1));
      setCategories2(res.filter((e) => e.categoryType.id === 2));
      setCategories3(res.filter((e) => e.categoryType.id === 3));
    });
};
