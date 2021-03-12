import React,{ memo } from 'react';
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const truncate = (text) => {
  return text.length > 14 ? text.substring(0, 14) + "..." : text;
}


const PostListView = memo(({ post }) => {
  const { image, text, tags, likes, publishDate, owner } = post;
  const { t: translation  } = useTranslation();

  return (
    <div className='bg-white rounded shadow p-3 h-100 image-container'>
      <img src={image} className='mb-3' alt={text} width="250" />
      <div className="d-flex my-2 mx-n1">
      {tags.map((tag) => (
        <div key={`${tag}`} className="badge badge-pill badge-pink ml-1">{tag}</div>
        ))}
       </div>
      <div className='h6 mt-2 mb-0 text-truncate'>{ truncate(`${text}`) }</div>
      <div className="d-flex justify-content-between border-top pt-2 mt-2">
        <div>{likes} { translation('likes') }</div>
        <div className="text-muted text-right">{ publishDate } </div>
        </div>
      <div className='border-top mt-2 pt-2 text-left'>
        <div className='out-a small pointer text-underline right'>
        <Link className="nav-link out-a" to={`/profile/${owner.id}`} >{ translation('view_post')} </Link>
        </div>
      </div>
    </div>
  );
});

export default PostListView;
