import Link from 'next/link'
import React from 'react'

const NewsList = ({news}) => {
  return (
    <ul className='news-list'>
            {
                news.map(newsItem => (
                    <li key={newsItem.id}>
                        <Link href={`/news/${newsItem.slug}`}>
                            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                            <h4>{newsItem.title}</h4>
                        </Link>
                        
                    </li>
                ))
            }
        </ul>
  )
}

export default NewsList