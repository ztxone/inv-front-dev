import {Container} from 'postcss';
import Title from '../../ui/Title';
import BreadCrumbs from '../../ui/Breadcrumbs';
// import Tag from './Tag';
// import IntroButton from './IntroButton';
// import IntroItem from './IntroItem';
import IntroSlides from '../../ui/InroSlides';
import IntroDescription from '../../ui/IntroDescription';
import IntroCost from '@/components/ui/IntroCost';

export default function Intro( {info} ) {
	
	const aboutPurpose = JSON.parse(info.attributes.AboutPurpose);
	const aboutOpportunities = JSON.parse(info.attributes.AboutOpportunities);
	//console.log(aboutPurpose.blocks[0].data.text);
  return (
    <div className='container border-t border-light-grey pt-20 pb-15 px-3.8 lg:max-w-[1746px]'>
      <Title text={info.attributes.Title} variant='white' />

      <div className='border-t border-light-grey mt-10 py-5'>
        <BreadCrumbs item1='Главная' link1='/index' itemLast={info.attributes.Title} />
      </div>
      <div className='lg:flex flex-wrap justify-between pb-15'>
      <IntroDescription title='наша основная цель' text={aboutPurpose.blocks[0].data.text}></IntroDescription>
      <IntroSlides />
      <IntroDescription title='наши возможности' text={aboutOpportunities.blocks[0].data.text}></IntroDescription>
      </div>

      <IntroCost/>
    </div>
  );
}
