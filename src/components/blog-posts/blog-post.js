import React from 'react';
import ProjectTags from '../projects/project-tags'

const BlogPost = (props) => {
  const { title, url, description, tag_list } = props
  return (
    <article className="border-t-4 border-pink relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-md mb-6">
      <div className="lg:flex-1">
        {url && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            <h3 className="font-bold">{title}</h3>
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <p className='inline-block font-medium text-xs'>Tags:</p>
        <ul className="pl-2 inline-block">
          {tag_list && <ProjectTags tags={tag_list} />}
        </ul>
      </div>
    </article> 
  );
};
export default BlogPost;