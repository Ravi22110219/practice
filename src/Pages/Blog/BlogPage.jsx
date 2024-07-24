import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPage.css';

const blogPosts = [
    {
        id: 1,
        image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
        title: 'Blog title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
        date: '21st May, 2022',
        author: 'admin',
        content: 'Full content of the blog post...'
    },
    {
      id: 1,
      image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
      title: 'Blog title goes here',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
      date: '21st May, 2022',
      author: 'admin',
      content: 'Full content of the blog post...'
  },
  {
    id: 2,
    image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
    title: 'Blog title goes here',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
    date: '21st May, 2022',
    author: 'admin',
    content: 'Full content of the blog post...'
},
{
  id: 3,
  image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
  title: 'Blog title goes here',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
  date: '21st May, 2022',
  author: 'admin',
  content: 'Full content of the blog post...'
},

    // Add more blog posts as needed
];

const BlogPage = () => {
    window.scrollTo(0, 0);
    const { postId } = useParams();
    const post = blogPosts.find(post => post.id === parseInt(postId));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <>
            <div className='py-4'></div>
            <div className="blogBanner">
                <div className="headingBanner">
                    <h1 style={{fontSize: "calc(18px + 1vw)", display: "flex", justifyContent: "center", alignContent: "center"}}>
                        {post.title}
                    </h1>
                </div>
            </div>

            <main className="container my-3 pl-[3.5%] pr-[3.5%]">
                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-3 fst-italic border-bottom font-bold text-blue-950">
                            From the InfiniteEduVerse
                        </h3>

                        <article className="blog-post">
                            <h2 className="display-5 link-body-emphasis p-3 mb-1">{post.title}</h2>
                            <hr className='mb-4'/>
                            <p className="blog-post-meta">{post.date} by <a href="#" className='text-red-500 '>{post.author}</a></p>
                            <p className='text-lg font-medium pb-3'>{post.description}</p>
                            <hr className='mb-4'/>
                            <div className="blogImage">
                                <img src={post.image} className="pb-3" alt={post.title} />
                            </div>
                            <p>{post.content}</p>
                        </article>
                    </div>

                    <div className="col-md-4">
                        <div className="position-sticky" style={{top: '2rem'}}>
                            <div className="p-4 mb-3 bg-body-tertiary rounded">
                                <h4 className="fst-italic text-red-500 text-xl font-bold">About</h4>
                                <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic text-red-500 text-xl font-bold">Monthly Blog</h4>
                                <ol className="list-unstyled mb-0 text-direction-flex text-blue-900">
                                    <li><a href="#">March 2021</a></li>
                                    <li><a href="#">February 2021</a></li>
                                    <li><a href="#">January 2021</a></li>
                                    {/* Add more months */}
                                </ol>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic text-red-500 text-xl font-bold">Elsewhere</h4>
                                <ol className="list-unstyled text-blue-950">
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href='https://google.com' target='main'>Google</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2 my-5">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                                <h3 className="mb-0">Featured post</h3>
                                <div className="mb-1 text-body-secondary">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src="https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Round-4-Seat-Allotment-Released.jpg" alt="" style={{width:"300px", height:"250px"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                                <h3 className="mb-0">Post title</h3>
                                <div className="mb-1 text-body-secondary">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src="https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg" alt="" style={{width:"300px", height:"250px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default BlogPage;
