import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import Line from "@/components/ui/Line";

// todo Тестовые данные удалить
const breadCrumbsItems = [
  {
    title: "Заполнить бриф",
  },
];

export default function Brief() {
  return (
    <Layout bg="white" headerBg="white" footerBg="white">
      <TitleSection text="Заполнить бриф" />
      <Line variantColor="grey" />
      <BreadCrumbs links={breadCrumbsItems} />
    </Layout>
  );
}
