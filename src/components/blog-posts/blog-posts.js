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
          const allPosts = post.data;
          setPosts({ loading: false, articles: allPosts });
        });
      };
      fetchPosts();

      }, [setPosts]);
    

    return (
        <>
            <h2 className="font-header font-semibold text-front text-lg uppercase mb-3">
                Blog posts
            </h2>
            {posts.articles.map((article, i) => (
              <BlogPost key={`${i}`} {...article} />
            ))}
      </>
    );
  }

export default BlogPosts;