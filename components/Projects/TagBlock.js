import TagItemSection from '../ui/TagItemSection';

export default function TagBlock({text}) {
  return (
    <div className='container flex flex-wrap pb-6 pt-1.5 md:pb-0'>
      <TagItemSection text={text} color='white' onClick='' />
      <TagItemSection text={text} color='white' onClick='' />
      <TagItemSection text={text} color='white' onClick='' />
    </div>
  )
}