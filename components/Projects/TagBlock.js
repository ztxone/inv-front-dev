import TagItemSection from '../ui/TagItemSection';

export default function TagBlock({text}) {
  return (
    <div className='container flex flex-wrap pb-7'>
      <TagItemSection text={text} color='white' onClick='' />
      <TagItemSection text={text} color='white' onClick='' />
      <TagItemSection text={text} color='white' onClick='' />
    </div>
  )
}