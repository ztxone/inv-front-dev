const grey='text-light-grey';
const eclipse='text-eclipse';

export default function Line({variantColor='eclipse'}) {
  return (
    <hr className={`${variantColor==='eclipse'? eclipse:grey
      }  w-full`}></hr>
  )
}