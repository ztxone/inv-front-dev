import {
  ANIMATION,
  EXTERIOR,
  INTERIOR,
  VIDEO_KEY,
} from "@/components/Brief/Forms/formFieldsCostants";

/*const VISION_EXTERIOR_RU = "vision-exterior_ru";
const VISUAL_INTERIOR_RU = "visual-interior_ru";
const VISUAL_PREDMET_RU = "visual-predmet_ru";
const ARCHITECTURE_ANIMATION_RU = "architecture_animation_ru";
const MOTION_RU = "motion_ru";
const VIDEO_3D_RU = "3d_videos_ru";*/
const VISION_EXTERIOR_RU = "4"; //Экстерьерная Визуализация
const VISUAL_INTERIOR_RU = "5"; //Интерьерная визуализация
const VISUAL_PREDMET_RU = "6"; //Предметная 3D визуализация
const ARCHITECTURE_ANIMATION_RU = "2"; //Архитектурная анимация
const MOTION_RU = "1"; //Моушн Графика
const VIDEO_3D_RU = "3"; //3D Анимационные видео ролики
const selectedProject = [
  { attributes: { name: INTERIOR } },
  { attributes: { name: EXTERIOR } },
  { attributes: { name: ANIMATION } },
  { attributes: { name: VIDEO_KEY } },
];

export const getCategoryProject = (serviceId, categories) => {
  console.log(categories);
  let selectCategory = categories[0];
  let selectProject = selectedProject[1];
  switch (serviceId) {
    case VISION_EXTERIOR_RU:
      return { selectCategory, selectProject };
    case VISUAL_INTERIOR_RU:
      selectCategory = categories[0];
      selectProject = selectedProject[0];
      return { selectCategory, selectProject };
    case VISUAL_PREDMET_RU:
      selectCategory = categories[1];
      selectProject = selectedProject[0];
      return { selectCategory, selectProject };
    case MOTION_RU:
      selectCategory = categories[2];
      selectProject = selectedProject[2];
      return { selectCategory, selectProject };
    case ARCHITECTURE_ANIMATION_RU:
      selectCategory = categories[2];
      selectProject = selectedProject[3];
      return { selectCategory, selectProject };
    case VIDEO_3D_RU:
      selectCategory = categories[2];
      selectProject = selectedProject[3];
      return { selectCategory, selectProject };
    default:
      return { selectCategory, selectProject };
      break;
  }
};
