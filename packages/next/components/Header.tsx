import Image from 'next/image'
import Logo from '../public/logo.svg'
import Link from 'next/link'

export default function Header({ subTitle = '' }: { subTitle?: string }) {
  return (
    <header>
      <Link href="/" className="flex justify-center mt-6 items-center">
        <Image src={Logo} alt="logo" width={60} height={60} />
        <h1 className="text-6xl pl-3 leading-normal">TodoList</h1>
        {subTitle ? (
          <h2 className="text-xl leading-normal align-baseline self-start">
            {subTitle}
          </h2>
        ) : null}
      </Link>
    </header>
  )
}
