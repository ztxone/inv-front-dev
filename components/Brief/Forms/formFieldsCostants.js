const interiorSelectOptions = [
  { attributes: { Title: "Квартира" } },
  { attributes: { Title: "Частный дом" } },
  { attributes: { Title: "Кафе" } },
  { attributes: { Title: "Ресторан" } },
  { attributes: { Title: "Офисное Помещение" } },
  { attributes: { Title: "Другое" } },
];

export const interiorFieldsInputs = [
  {
    type: "input",
    label: { htmlFor: "ProjectName", text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      name: "ProjectName",
      error: "This field is required",
    },
  },
  {
    type: "select",
    label: { htmlFor: "object", text: "Объект визуализации", required: true },
    input: {
      name: "ProjectName",
      options: interiorSelectOptions,
    },
  },
  {
    type: "input",
    label: { htmlFor: "project", text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      name: "ProjectDates",
      error: "This field is required",
    },
  },
  {
    type: "counter",
    label: {
      htmlFor: "",
      text: "Общее количество необходимых ракурсов",
      required: false,
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "square",
      text: "Площадь помещений визуализации",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите площадь",
      pattern: true,
      name: "ProjectSquare",
      error: "This field is required",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "ProjectResolution",
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      name: "ProjectResolution",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Extra",
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      name: "Extra",
      error: "",
    },
  },
];

const exteriorSelectOptions = [
  { attributes: { Title: "Частный дом" } },
  { attributes: { Title: "Многоквартирный жилой дом" } },
  { attributes: { Title: "Коттеджный поселок" } },
  { attributes: { Title: "Жилой комплекс" } },
  { attributes: { Title: "Офисное здание" } },
  { attributes: { Title: "Здание общепита" } },
];

const exteriorClassOptions = [
  { attributes: { Title: "Комфорт класса" } },
  { attributes: { Title: "Бизнес класса" } },
  { attributes: { Title: "Элит класса" } },
];

const exteriorModelOptions = [
  { attributes: { Title: "Есть" } },
  { attributes: { Title: "Нет" } },
  { attributes: { Title: "Требует доработки" } },
];

const exteriorSeasonOptions = [
  { attributes: { Title: "Весна" } },
  { attributes: { Title: "Лето" } },
  { attributes: { Title: "Осень" } },
  { attributes: { Title: "Зима" } },
];

const yesNoOptions = [
  { attributes: { Title: "Да" } },
  { attributes: { Title: "Нет" } },
];

export const exteriorFieldsInputs = [
  {
    type: "input",
    label: { htmlFor: "ProjectName", text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      name: "ProjectName",
      error: "This field is required",
    },
  },
  {
    type: "select",
    label: { htmlFor: "object", text: "Объект визуализации", required: true },
    input: {
      name: "VisualizationObject",
      options: exteriorSelectOptions,
    },
  },
  {
    type: "select",
    label: { htmlFor: "3dModel", text: "3D модель здания", required: true },
    input: {
      name: "3dModel",
      options: exteriorModelOptions,
    },
  },
  {
    type: "input",
    label: { htmlFor: "project", text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      name: "ProjectDates",
      error: "This field is required",
    },
  },
  {
    type: "select",
    label: {
      htmlFor: "ClassProperty",
      text: "Класс недвижимости",
      required: true,
    },
    input: {
      name: "3dModel",
      options: exteriorClassOptions,
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "mapLink",
      text: "Местоположение обьекта",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите местоположение обьекта",
      pattern: false,
      name: "mapLink",
      error: "",
    },
  },
  {
    type: "counter",
    label: {
      htmlFor: "",
      text: "Общее количество необходимых ракурсов",
      required: false,
    },
  },

  {
    type: "select",
    label: {
      htmlFor: "Season",
      text: "Время года",
      required: true,
    },
    input: {
      name: "Season",
      options: exteriorSeasonOptions,
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "HeightPointView",
      text: "Количество ракурсов с высоты птичьего полета",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество ракурсов",
      pattern: false,
      name: "HeightPointView",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "NightPointView",
      text: "Количество ночных/вечерних изображений",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество изображений",
      pattern: false,
      name: "NightPointView",
      error: "",
    },
  },

  {
    type: "input",
    label: {
      htmlFor: "MorningPointView",
      text: "Количество утренних/дневных изображений",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество изображений",
      pattern: false,
      name: "MorningPointView",
      error: "",
    },
  },
  {
    type: "select",
    label: {
      htmlFor: "Movie",
      text: "Фотосъемка для рендеринга",
      required: false,
    },
    input: {
      name: "Movie",
      options: yesNoOptions,
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "ProjectResolution",
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      name: "ProjectResolution",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Extra",
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      name: "Extra",
      error: "",
    },
  },
];

export const productVisualization = [
  {
    type: "input",
    label: { htmlFor: "ProjectName", text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      name: "ProjectName",
      error: "This field is required",
    },
  },
  {
    type: "select",
    label: { htmlFor: "object", text: "Объект визуализации", required: true },
    input: {
      name: "VisualizationObject",
      options: exteriorSelectOptions,
    },
  },
  {
    type: "select",
    label: { htmlFor: "3dModel", text: "3D модель здания", required: true },
    input: {
      name: "3dModel",
      options: exteriorModelOptions,
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "ProjectQuantity",
      text: "Клоличество продуктов",
      required: true,
    },
    input: {
      type: "number",
      placeholder: "Введите количество продуктов",
      pattern: true,
      name: "ProjectQuantity",
      error: "This field is required",
    },
  },

  {
    type: "input",
    label: { htmlFor: "project", text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      name: "ProjectDates",
      error: "This field is required",
    },
  },

  {
    type: "select",
    label: {
      htmlFor: "RenderOpacity",
      text: "Рендер на прозрачном фоне",
      required: false,
    },
    input: {
      name: "RenderOpacity",
      options: yesNoOptions,
    },
  },
  {
    type: "select",
    label: {
      htmlFor: "RenderNoOpacity",
      text: "Рендер продукта в интерьере",
      required: false,
    },
    input: {
      name: "RenderNoOpacity",
      options: yesNoOptions,
    },
  },
  {
    type: "counter",
    label: {
      htmlFor: "",
      text: "Общее количество ракурсов на продукт",
      required: false,
    },
  },

  {
    type: "input",
    label: {
      htmlFor: "ProjectResolution",
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      name: "ProjectResolution",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Extra",
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      name: "Extra",
      error: "",
    },
  },
];

const videoTypesProdyction = [
  { attributes: { Title: "Имиджевый" } },
  { attributes: { Title: "Продуктовый" } },
  { attributes: { Title: "Акционный (промо)" } },
  { attributes: { Title: "Презентация" } },
];

const filmTypesProdyction = [
  { attributes: { Title: "2D-графика" } },
  { attributes: { Title: "3D-графика" } },
  { attributes: { Title: "Мультипликация" } },
  { attributes: { Title: "Смешанный" } },
];

export const videoBykey = [
  {
    type: "input",
    label: { htmlFor: "ProjectName", text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      name: "ProjectName",
      error: "This field is required",
    },
  },

  {
    type: "select",
    label: {
      htmlFor: "VideoType",
      text: "Тип видеоролика",
      required: true,
    },
    input: {
      name: "VideoType",
      options: videoTypesProdyction,
    },
  },

  {
    type: "select",
    label: {
      htmlFor: "FilmType",
      text: "Вид видеоролика",
      required: true,
    },
    input: {
      name: "FilmType",
      options: filmTypesProdyction,
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "AdvertisedProuct",
      text: "Рекламируемый товар/услуга/продукт",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Введите тип",
      pattern: true,
      name: "AdvertisedProuct",
      error: "This field is required",
    },
  },
  {
    type: "input",
    label: { htmlFor: "project", text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      name: "ProjectDates",
      error: "This field is required",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "DescriptionProuct",
      text: "Описание товар/услуга/продукт",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите тип",
      pattern: false,
      name: "DescriptionProuct",
      error: "",
    },
  },

  {
    type: "input",
    label: {
      htmlFor: "Chronometry",
      text: "Хронометраж видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый хронометраж",
      pattern: false,
      name: "Chronometry",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Budget",
      text: "Бюджет на создание видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый бюджет",
      pattern: false,
      name: "Budget",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Materials",
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      name: "Materials",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "ExampleLink",
      text: "Ссылка на пример видеоролика:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите ссылку на пример видеоролика",
      pattern: false,
      name: "ExampleLink",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "ProjectResolution",
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      name: "ProjectResolution",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Extra",
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      name: "Extra",
      error: "",
    },
  },
];

const scenarioOptions = [
  { attributes: { Title: "Да" } },
  { attributes: { Title: "Нет" } },
  { attributes: { Title: "Доработать" } },
];

export const videoAnimation = [
  {
    type: "input",
    label: { htmlFor: "ProjectName", text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      name: "ProjectName",
      error: "This field is required",
    },
  },

  {
    type: "input",
    label: {
      htmlFor: "AnimationTask",
      text: "Задача анимации",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Введите задача анимации",
      pattern: true,
      name: "AnimationTask",
      error: "This field is required",
    },
  },
  {
    type: "input",
    label: { htmlFor: "project", text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      name: "ProjectDates",
      error: "This field is required",
    },
  },

  {
    type: "input",
    label: {
      htmlFor: "Chronometry",
      text: "Хронометраж видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый хронометраж",
      pattern: false,
      name: "Chronometry",
      error: "",
    },
  },
  {
    type: "select",
    label: {
      htmlFor: "Scenario",
      text: "Наличие сценария",
      required: true,
    },
    input: {
      name: "Scenario",
      options: scenarioOptions,
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Budget",
      text: "Бюджет на создание видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый бюджет",
      pattern: false,
      name: "Budget",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Materials",
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      name: "Materials",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "ExampleLink",
      text: "Ссылка на пример видеоролика:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите ссылку на пример видеоролика",
      pattern: false,
      name: "ExampleLink",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "ProjectResolution",
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      name: "ProjectResolution",
      error: "",
    },
  },
  {
    type: "input",
    label: {
      htmlFor: "Extra",
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      name: "Extra",
      error: "",
    },
  },
];

const requirementsOptions = [
  { attributes: { Title: "Инженерная CAD модель" } },
  { attributes: { Title: "Для печати/фрезеровки" } },
  { attributes: { Title: "Для визуализации" } },
];

export const modeling = [
  {
    type: "input",
    label: { htmlFor: "ProjectName", text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      name: "ProjectName",
      error: "This field is required",
    },
  },
  {
    type: "counter",
    label: {
      htmlFor: "",
      text: "Количество необходимых моделей",
      required: true,
    },
  },

  {
    type: "input",
    label: {
      htmlFor: "Task",
      text: "Модель чего нужно создать",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Опишите модель",
      pattern: true,
      name: "Task",
      error: "",
    },
  },

  {
    type: "input",
    label: { htmlFor: "project", text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      name: "ProjectDates",
      error: "This field is required",
    },
  },

  {
    type: "input",
    label: {
      htmlFor: "Materials",
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      name: "Materials",
      error: "",
    },
  },

  {
    type: "select",
    label: {
      htmlFor: "TechnicalRequirements",
      text: "Технические требования",
      required: true,
    },
    input: {
      name: "TechnicalRequirements",
      options: requirementsOptions,
    },
  },
];
