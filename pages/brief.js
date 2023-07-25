import Layout from '@/components/layout';
import useTranslation from 'next-translate/useTranslation';
import {fetchAPI} from 'lib/api';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import Line from '@/components/ui/Line';
import FormBrief from '@/components/Brief/FormBrief';

// todo Тестовые данные удалить
const breadCrumbsItems=[
  {
    title: 'Заполнить бриф',
  },
];

export default function Brief() {
  return (
    <Layout bg='white' headerBg='white' footerBg='white'>
      <TitleSection text='Заполнить бриф' />
      <Line variantColor='grey' />
      <BreadCrumbs links={breadCrumbsItems} />
      <FormBrief />
      <Line variantColor='grey' />
    </Layout>
  );
}
