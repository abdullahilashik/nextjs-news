import BackdropDiv from '@/components/news/backdrop-div';
import { DUMMY_NEWS as dummyNews} from '@/lib/dummy-data';
import React from 'react'

const InterceptedImagePreview = ({params}) => {
    const slug = params.slug;
    const newsItem = dummyNews.find(i=> i.slug == slug);    
  return (
    <>
        {/* <div className='modal-backdrop'/> */}
        <BackdropDiv />
        <dialog className='modal' open>
            <div className='fullscreen-image' style={{overflow: 'hidden'}}>
                <img src={`/images/news/${newsItem?.image}`} alt="" style={{backgroundSize: 'cover'}} />
            </div>
        </dialog>
    </>
  )
}

export default InterceptedImagePreview