import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import TagItemSection from "@/components/ui/TagItemSection";
import TagItemContainer from '@/components/ui/TagItemContainer';

export default function IntroProjects() {
  return (
    <div
      className="pb-15
    md:pb-[28px]"
    >
      <TitleSection text="Портфолио" />
      <BreadCrumbs
        item1="Главная"
        link1="/index"
        // itemLast={projects.attributes.Title}
        itemLast="Портфолио"
      />
      <TagItemContainer>
        <TagItemSection text="Архитектурная 3D визуализация" color="blue" onClick />
        <TagItemSection text="Продуктовая 3D визуализация" color="white" onClick />
        <TagItemSection text="Моушн & Видеопродакшн" color="white" onClick />
        <TagItemSection text="3D моделирование" color="white" onClick />
      </TagItemContainer>
    </div>
  );
}
