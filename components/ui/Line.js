const grey='border-light-grey';
const eclipse='border-eclipse';

export default function Line({variantColor='eclipse'}) {
  return (
    <hr className={`${variantColor==='eclipse'? eclipse:grey
      } border-1 w-full`}></hr>
  )
}