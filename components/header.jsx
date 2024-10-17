import Link from 'next/link'
import React from 'react'
import NavLink from './news/nav-link';

const Header = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <NavLink href={'/'} label={'Home'} />
          <NavLink href={'/news'} label={'News'} />
          <NavLink href={'/archive'} label={'Archive'} />          
        </ul>
      </nav>
    </header>
  );
}

export default Header