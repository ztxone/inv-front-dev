import Layout from '@/components/layout';
import {fetchAPI} from 'lib/api';
import IntroCost from '@/components/ui/IntroCost';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import ProjectsList from '@/components/Projects/ProjectsList';
import BlogsBlockList from '@/components/Blogs/BlogsBlockList';
import Wrapper from '@/components/ui/Wrapper';
import Line from '@/components/ui/Line';
import IntroError from '@/components/ui/IntroError';

export default function Error({}) {
  const {t} = useTranslation('common');

  return (
    <>
      <Wrapper color='black' position='bottom'>
        <IntroError />
      </Wrapper>
    </>
  );
}

// export async function getStaticProps({locale}) {
//   const [ErrorRes, projectsRes] = await Promise.all([
//     fetchAPI('/error', {
//       populate: '*',
//       locale: locale,
//     }),
//     fetchAPI('/projects', {
//       sort: ['ListPosition:asc'],
//       populate: {
//         Poster: '*',
//         tags: '*',
//       },
//       fields: ['title', 'slug'],
//       pagination: {
//         start: 0,
//         limit: 6,
//       },
//     }),
//   ]);

//   return {
//     props: {
//       about: ErrorRes.data,
//       projects: projectsRes.data,
//     },
//     revalidate: 1,
//   };
// }

Error.getLayout = function getLayout(page) {
  return (
    <Layout bg='grey' headerBg='black' footerBg='white' pillowColor={'grey'}>
      {page}
    </Layout>
  );
};
