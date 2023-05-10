import { getStrapiMedia } from "lib/media";
import Image from 'next/image';
import Title from '@/components/ui/Title';
import ProjectItem from '@/components/ui/ProjectItem';
import Tag from '@/components/ui/Tag';
import Marquee from '@/components/ui/Marquee';

export default function Projects( {projects }) {
	return (
		<section className='bg-whisper rounded-5xl pb-7 pt-16 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-36 lg:pb-9 lg:rounded-7xl'>
		  <div className='container'>
			<div className='px-3.8 lg:px-24.5 lg:pb-20'>
			  <div className='flex flex-wrap justify-between lg:items-center lg:flex-nowrap lg:gap-20 lg:pb-[26px]'>
				<Title text="/ Проекты" variant='black'></Title>
				<p className='order-last tracking-tight pb-[27px] pt-10  text-black w-full md:pr-[50%] md:pb-[16px] lg:order-none lg:m-0 lg:p-0 lg:text-xl lg:w-[30%] lg:ml-auto'>
				  Мы&nbsp;работаем с&nbsp;ведущими
				  компаниями и&nbsp;брендами из&nbsp;различных отраслей.
				  При создании могут решаться уникальные задачи, но&nbsp;это всегда проекты с&nbsp;характером
				</p>
				<Title text="® /. 22" variant='black'></Title>
			  </div>

			  {projects.length > 0 && (
			  <ul className='pt-15 border-t border-black-russian md:pt-10 lg:grid grid-cols-2 gap-x-7 lg:pt-12'>
				{projects.map((project, i) => (<></>	))}
				<ProjectItem name='Екатерининская улица Мурино'>
				  {
					<div className='aspect-[398/302] md:aspect-[805/483] overflow-hidden 
					bg-gradient-to-r from-chetwode-blue to-lucky-point rounded-l15 pl-9 pt-[17px]
					md:pl-0
					lg:aspect-[858/483]'>
					  <div className='flex gap-1 md:pl-9'>
						<Tag text='3D анимация' />
						<Tag text='МОДЕЛИРОВАНИЕ' />
					  </div>
					  <div className='flex overflow-hidden pt-9 gap-2 md:justify-center'>
						<Image className='rounded-l15 mr-[21px] md:mr-0' width='230' height='322'
						  src='/image/content/murino-11.png' />
						<Image className='rounded-l15' width='230' height='322' src='/image/content/murino-13.png' />
						<Image className='rounded-l15' width='230' height='322' src='/image/content/murino-12.png' />
					  </div>
					</div>
				  }
				</ProjectItem>
				
	
				<ProjectItem name='Жилой комплекс «ТАЙМ»'>
				  {
					<div className='aspect-[398/557] relative py-5 px-9
					md:aspect-[804/858]
					lg:aspect-square'>
					  <div className='z-20 relative flex gap-1'>
						<Tag text='3D анимация' />
						<Tag text='МОДЕЛИРОВАНИЕ' />
					  </div>
					  <div className='absolute top-0 bottom-0 left-0 right-0'>
						<Image className='w-full h-full obj rounded-l15 object-cover' width='230'
						  height='322' src='/image/content/time.png' />
					  </div>
					</div>
				  }
				</ProjectItem>
	
				<ProjectItem name='3D презентация ЖК «АВИАТОР»'>
				  <div className='bg-cornflower-blue rounded-l15 aspect-[398/300] relative py-5 px-9
				   md:aspect-[804/480]
				   lg:aspect-[858/643] lg:-mt-36'>
					<Tag text='3D анимация' />
					<div className='h-[117px] absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-1/2
					md:w-[216px] md:top-[45%]'>
					  <Image src='/image/content/logo1.png'  width='610' height='440' className='w-[154px] h-[117px] md:w-full md:h-auto' />
					</div>
				  </div>
				</ProjectItem>
	
				<ProjectItem name='Агрохолдинг «ЮБИЛЕЙНЫЙ»'>
				  <div className='aspect-[398/550] md:aspect-[803/643] relative
				  lg:aspect-[858/643] lg:pb-0 lg:mt-47'>
					<div className='absolute pt-5 px-9'>
					  <Tag text='3D анимация' />
					</div>
	
					<div className='overflow-hidden rounded-l15 h-full'>
					  <Image className='max-w-none h-full 
					  md:w-full' width='610' height='440' src='/image/content/anniversary.png' />
					</div>
				  </div>
				</ProjectItem>
	
				<ProjectItem name='Конвейер ПТЗ'>
				  <div className='bg-gulf-blue rounded-l15 aspect-[398/300] px-9 relative flex
				  md:aspect-[804/858]
				  lg:aspect-square lg:-mt-33'>
					<div className='absolute pt-5'>
					  <Tag text='3D анимация' />
					</div>
					<div className='self-end overflow-hidden aspect-[336/280] pt-9
					md:aspect-[635/527] md:self-center md:w-full'>
					  <Image className='w-full h-full' width='635' height='527' src='/image/content/ptz.png' />
					</div>
				  </div>
				</ProjectItem>
	
				<ProjectItem name='Рекламный ролик «MEATBROTHERS»'>
				  <div className='bg-baker-chocolate rounded-l15 aspect-[398/487] px-9 relative flex
				  md:aspect-[804/487]
				  lg:aspect-[857/487] lg:mt-60'>
					<div className='absolute pt-5'>
					  <Tag text='3D анимация' />
					</div>
					<div className='self-center aspect-square md:m-auto'>
					  <Image width='420' height='420' src='/image/content/meatbrothers.png' />
					</div>
				  </div>
				</ProjectItem>
			  </ul>
			  )}

			  <div className='text-center pb-9 md:flex md:flex-col md:items-center md:pt-5
			  lg:pt-20'>
				<p className='font-interTight font-semibold text-6xl text-black opacity-5
				lg:text-6.5xl'>More</p>
				<button className='button-all -mt-3.8 bg-whisper relative z-10 font-medium
				md:max-w-[351px]
				lg:pt-10 lg:pb-11 lg:rounded-5xl'>Вcе проекты
				  <span className='bg-royal-blue rounded-full w-[37px] h-[37px] flex 
			  justify-center items-center text-white ml-5'>&#8250;</span></button>
			  </div>
			</div>
		  </div>
		  <Marquee item1='Визуализация^' item2='Motion*' item3='3D моделирование' />
		</section>
	  )
}


  


    

