export const getVideos = (callback) => {
  fetch("/video")
    .then((res) => res.json())
    .then(callback);
};

export const getCategoryTypes = (setCategoryTypes) => {
  fetch("/category_types")
    .then((res) => res.json())
    .then(setCategoryTypes);
};

export const getCategories = (
  setCategories1,
  setCategories2,
  setCategories3
) => {
  fetch("/category")
    .then((res) => res.json())
    .then((res) => {
      setCategories1(res.filter((e) => e.categoryType.id === 1));
      setCategories2(res.filter((e) => e.categoryType.id === 2));
      setCategories3(res.filter((e) => e.categoryType.id === 3));
    });
};
