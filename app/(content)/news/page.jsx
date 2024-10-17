import Link from 'next/link'
import React from 'react'

import { DUMMY_NEWS } from '@/lib/dummy-data'
import NewsList from '@/components/news/news-list';

const NewsLanding = () => {
    const news = DUMMY_NEWS;
  return (
    <>        
        <NewsList news={news} />
    </>
  )
}

export default NewsLanding