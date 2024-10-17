import { DUMMY_NEWS as dummyNews} from '@/lib/dummy-data';
import React from 'react'

const ImagePreview = ({params}) => {
    const slug = params.slug;
    const newsItem = dummyNews.find(i=> i.slug == slug);    
  return (
    <div className='fullscreen-image'>
        <img src={`/images/news/${newsItem?.image}`} alt="" />
    </div>
  )
}

export default ImagePreview