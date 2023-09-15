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
    name: "ProjectName",
    type: "input",
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "select",
    name: "object",
    label: { text: "Объект визуализации", required: true },
    input: {
      options: interiorSelectOptions,
    },
  },
  {
    type: "input",
    name: "ProjectDates",
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,

      error: "This field is required",
    },
  },
  {
    type: "counter",
    name: "counter",
    label: {
      text: "Общее количество необходимых ракурсов",
      required: false,
    },
  },
  {
    name: "ProjectSquare",
    type: "input",
    label: {
      text: "Площадь помещений визуализации",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите площадь",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    name: "ProjectResolution",
    type: "input",
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,

      error: "",
    },
  },
  {
    type: "input",
    name: "Extra",
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      error: "",
    },
  },
];

const exteriorSelectOptions = [
  // { attributes: { Title: "Частный дом" } },
  // { attributes: { Title: "Многоквартирный жилой дом" } },
  // { attributes: { Title: "Коттеджный поселок" } },
  // { attributes: { Title: "Жилой комплекс" } },
  // { attributes: { Title: "Офисное здание" } },
  // { attributes: { Title: "Здание общепита" } },
  { attributes: { Title: "Коммерческая недвижимость" } },
  { attributes: { Title: "Продукт" } },
  { attributes: { Title: "Ландшафт" } },
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
    name: "ProjectName",
    type: "input",
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    name: "VisualizationObject",
    type: "select",
    label: { text: "Объект визуализации", required: true },
    input: {
      options: exteriorSelectOptions,
    },
  },
  {
    name: "3dModel",
    type: "select",
    label: { text: "3D модель здания", required: true },
    input: {
      options: exteriorModelOptions,
    },
  },
  {
    name: "ProjectDates",
    type: "input",
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "select",
    name: "ClassProperty",
    label: {
      text: "Класс недвижимости",
      required: true,
    },
    input: {
      options: exteriorClassOptions,
    },
  },
  {
    type: "input",
    name: "mapLink",
    label: {
      text: "Местоположение обьекта",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите местоположение обьекта",
      pattern: false,
      error: "",
    },
  },
  {
    type: "counter",
    name: "counter",
    label: {
      text: "Общее количество необходимых ракурсов",
      required: false,
    },
  },
  {
    type: "select",
    name: "Season",
    label: {
      text: "Время года",
      required: true,
    },
    input: {
      options: exteriorSeasonOptions,
    },
  },
  {
    type: "input",
    name: "HeightPointView",
    label: {
      text: "Количество ракурсов с высоты птичьего полета",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество ракурсов",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "NightPointView",
    label: {
      text: "Количество ночных/вечерних изображений",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество изображений",
      pattern: false,
      error: "",
    },
  },

  {
    type: "input",
    name: "MorningPointView",
    label: {
      text: "Количество утренних/дневных изображений",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество изображений",
      pattern: false,
      error: "",
    },
  },
  {
    type: "select",
    name: "Movie",
    label: {
      text: "Фотосъемка для рендеринга",
      required: false,
    },
    input: {
      options: yesNoOptions,
    },
  },
  {
    type: "input",
    name: "ProjectResolution",
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "Extra",
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      error: "",
    },
  },
];

export const productVisualization = [
  {
    type: "input",
    name: "ProjectName",
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "select",
    name: "VisualizationObject",
    label: { text: "Объект визуализации", required: true },
    input: {
      options: exteriorSelectOptions,
    },
  },
  {
    type: "select",
    name: "3dModel",
    label: { text: "3D модель здания", required: true },
    input: {
      options: exteriorModelOptions,
    },
  },
  {
    type: "input",
    name: "ProjectQuantity",
    label: {
      text: "Клоличество продуктов",
      required: true,
    },
    input: {
      type: "number",
      placeholder: "Введите количество продуктов",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: "ProjectDates",
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "select",
    name: "RenderOpacity",
    label: {
      text: "Рендер на прозрачном фоне",
      required: false,
    },
    input: {
      options: yesNoOptions,
    },
  },
  {
    type: "select",
    name: "RenderNoOpacity",
    label: {
      text: "Рендер продукта в интерьере",
      required: false,
    },
    input: {
      options: yesNoOptions,
    },
  },
  {
    type: "counter",
    name: "counter",
    label: {
      text: "Общее количество ракурсов на продукт",
      required: false,
    },
  },

  {
    type: "input",
    name: "ProjectResolution",
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "Extra",
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
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
    name: "ProjectName",
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "select",
    name: "VideoType",
    label: {
      text: "Тип видеоролика",
      required: true,
    },
    input: {
      options: videoTypesProdyction,
    },
  },

  {
    type: "select",
    name: "FilmType",
    label: {
      htmlFor: "FilmType",
      text: "Вид видеоролика",
      required: true,
    },
    input: {
      options: filmTypesProdyction,
    },
  },
  {
    type: "input",
    name: "AdvertisedProuct",
    label: {
      text: "Рекламируемый товар/услуга/продукт",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Введите тип",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "input",
    name: "ProjectDates",
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "input",
    name: "DescriptionProuct",
    label: {
      text: "Описание товар/услуга/продукт",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите тип",
      pattern: false,
      error: "",
    },
  },

  {
    type: "input",
    name: "Chronometry",
    label: {
      text: "Хронометраж видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый хронометраж",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "Budget",
    label: {
      text: "Бюджет на создание видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый бюджет",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "Materials",
    label: {
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "ExampleLink",
    label: {
      text: "Ссылка на пример видеоролика:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите ссылку на пример видеоролика",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "ProjectResolution",
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "Extra",
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
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
    name: "ProjectName",
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: "AnimationTask",
    label: {
      text: "Задача анимации",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Введите задача анимации",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "input",
    name: "ProjectDates",
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: "Chronometry",
    label: {
      text: "Хронометраж видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый хронометраж",
      pattern: false,
      error: "",
    },
  },
  {
    type: "select",
    name: "Scenario",
    label: {
      text: "Наличие сценария",
      required: true,
    },
    input: {
      options: scenarioOptions,
    },
  },
  {
    type: "input",
    name: "Budget",
    label: {
      text: "Бюджет на создание видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый бюджет",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "Materials",
    label: {
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "ExampleLink",
    label: {
      text: "Ссылка на пример видеоролика:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите ссылку на пример видеоролика",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "ProjectResolution",
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: "Extra",
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
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
    name: "ProjectName",
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "counter",
    name: "counter",
    label: {
      htmlFor: "",
      text: "Количество необходимых моделей",
      required: true,
    },
  },

  {
    type: "input",
    name: "Task",
    label: {
      text: "Модель чего нужно создать",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Опишите модель",
      pattern: true,
      error: "",
    },
  },

  {
    type: "input",
    name: "ProjectDates",
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: "Materials",
    label: {
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      error: "",
    },
  },

  {
    type: "select",
    name: "TechnicalRequirements",
    label: {
      text: "Технические требования",
      required: true,
    },
    input: {
      options: requirementsOptions,
    },
  },
];
