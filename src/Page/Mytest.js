import React, { useState, useEffect } from 'react';

function Image({ photoUrl }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(photoUrl)
      .then(response => response.json())
      .then(data => setImageUrl(data.guid.rendered))
      .catch(error => console.error(error));
  }, [photoUrl]);

  return (
    <>
      {imageUrl && <img class="card-img-top rounded" src={imageUrl} alt="example" />}
    </>
  );
}

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://web-global.ru/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(posts => {
        const parsedPosts = posts.map(post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          photo: 'https://web-global.ru/wp-json/wp/v2/media/' + post.featured_media,
        }));
        setPosts(parsedPosts);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='row d-flex flex-wrap justify-content-between'>
      {posts.map(post => (
        <div class="col-md-4 card" key={post.title}>
          <Image photoUrl={post.photo} />
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text" >{post.excerpt}</p>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
            <a href={post.link}>Read More</a>
          </div>
        </div>

      ))
      }
    </div >
  );
}

export default Post;
