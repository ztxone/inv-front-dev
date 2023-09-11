const grey = 'bg-light-grey';
const eclipse = 'bg-eclipse';

export default function Line({variantColor = 'eclipse'}) {
  return (
    <div
      className={`${variantColor === 'eclipse' ? eclipse : grey} hidden h-px
    md:block
    lg:mx-21`}
    ></div>
  );
}
