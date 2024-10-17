import NewsList from '@/components/news/news-list';
import { getLatestNews } from '@/lib/news';
import React from 'react'

const DefaultArchive = () => {
  const latestNews = getLatestNews();
  return <div>
    <h4>Latest News</h4>
    <NewsList news={latestNews} />
  </div>;
}

export default DefaultArchive