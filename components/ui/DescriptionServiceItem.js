export default function DescriptionServiceItem({textPart1, textPart2}) {
  return (
    <p className='bg-inherit text-lg pt-7 flex flex-col'>
      {textPart1} <span className='pt-1'>{textPart2}</span>
    </p>
  );
}
