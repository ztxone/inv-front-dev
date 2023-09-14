import {
  exteriorFieldsInputs,
  interiorFieldsInputs,
  modeling,
  productVisualization,
  videoAnimation,
  videoBykey,
} from "./formFieldsCostants";

export const selectFieldsForForm = (category, projectType) => {
  if (!category) return null;

  switch (category.attributes.name) {
    case "Архитектурная визуализация":
      if (projectType?.attributes?.name === "Интерьерная")
        return interiorFieldsInputs;
      if (projectType?.attributes?.name === "Экстерьерная")
        return exteriorFieldsInputs;
      return null;
    case "Продуктовая 3D визуализация":
      return productVisualization;
    case "Моушн & Видеопродакшн":
      if (projectType?.attributes?.name === "3D/Моушн анимация")
        return videoAnimation;
      if (projectType?.attributes?.name === "Видеопродакшн под ключ")
        return videoBykey;
      return null;
    case "3D моделирование":
      return modeling;
    default:
      return null;
  }
};
