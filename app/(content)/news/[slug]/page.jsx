import { DUMMY_NEWS } from '@/lib/dummy-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

const NewsDetails = ({params}) => {
  const slug = params.slug;
  const news = DUMMY_NEWS.find(item=> item.slug === slug);
  if(!news){
    notFound();
  }
  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${news.slug}/image`}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </Link>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  )
}

export default NewsDetails