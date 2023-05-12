import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/' className='block mr-auto lg:mr-3.8'>
        <Image width="102" height="35" src="/image/logo.png"
          alt="Invert studio" />
    </Link>
  );
}