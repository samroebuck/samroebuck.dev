import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import BlogPost from './blog-post';


const BlogPosts = () => {
    const [posts, setPosts] = useState({
      loading: true,
      articles: ['a post'],
    });
  
    useEffect(() => {
      const apiUrl = `https://dev.to/api/articles?username=samroebuck_`;

      const fetchPosts = async () => {
        await axios.get(apiUrl).then((post) => {
          const allPosts = post.data.slice(0, 4);
          setPosts({ loading: false, articles: allPosts });
        });
      };

      fetchPosts();

      }, [setPosts]);
    

    return (
        <>  
          <div className='flex justify-between mt-12 items-baseline'>
              <h2 className="font-header font-semibold text-front text-2xl uppercase mb-3">
                Recent blog posts
              </h2>
              <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href="https://dev.to/samroebuck_"
              rel="noreferrer noopener"
              target="_blank"
            >
              Check out all my posts on dev.to
            </a>
          </div>
            {posts.articles.map((article, i) => (
              <BlogPost key={`${i}`} {...article} />
            ))}
      </>
    );
  }

export default BlogPosts;