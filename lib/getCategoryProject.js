import {
  ANIMATION,
  EXTERIOR,
  INTERIOR,
  VIDEO_KEY,
} from "@/components/Brief/Forms/formFieldsCostants";

const VISION_EXTERIOR_RU = "vision-exterior_ru";
const VISUAL_INTERIOR_RU = "visual-interior_ru";
const VISUAL_PREDMET_RU = "visual-predmet_ru";
const selectedProject = [
  { attributes: { name: INTERIOR } },
  { attributes: { name: EXTERIOR } },
  { attributes: { name: ANIMATION } },
  { attributes: { name: VIDEO_KEY } },
];

export const getCategoryProject = (value, categories) => {
  let selectCategory = categories[0];
  let selectProject = selectedProject[1];
  switch (value) {
    case VISION_EXTERIOR_RU:
      return { selectCategory, selectProject };
    case VISUAL_INTERIOR_RU:
      selectCategory = categories[0];
      selectProject = selectedProject[1];
      return { selectCategory, selectProject };
    case VISUAL_PREDMET_RU:
      selectCategory = categories[2];
      selectProject = undefined;
      return { selectCategory, selectProject };
    default:
      return { selectCategory, selectProject };
      break;
  }
};
