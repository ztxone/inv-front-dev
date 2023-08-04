import TagItemSection from '../ui/TagItemSection';
import TagItemContainer from '../ui/TagItemContainer';
import Image from 'next/image';

export default function IntroNews() {
  return (
    <div>
      <div className='container pt-3'>
        <TagItemContainer>
          <TagItemSection text='VR' color='white' onClick />
          <TagItemSection text='Новости' color='white' onClick />
        </TagItemContainer>
        <p className='py-12
        md:text-xl
        xl:w-1/2'>
          Футболка Owo дает ощутимую обратную связь в виртуальной реальности,
          как тактильный жилет, но с электрическим током до предела личной боли.
        </p>
      </div>
      <Image className='w-full aspect-[428/244]
      md:aspect-[834/322]
      lg:aspect-[1920/742]' src='/image/content/new.png' width='428' height='244' alt='' />
    </div>
  );
}
