import React from 'react';

const BlogPost = (props) => {
  const { title, url, description } = props
  return (
    <article className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-md mb-6">
      <div className="lg:flex-1">
        <h3 className="font-bold">{title}</h3>
        {url && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {url}
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
      </div>
    </article> 
  );
};
export default BlogPost;