// BlogPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPage.css';

const blogPosts = [
        {
            id: 1,
            image: 'https://www.iitr.ac.in/assets/56f4da26ed956730309fa1488611ee0f13b0ac95ebb1bc9b5d210e31ff70e79c_IITR12.jpg',
            title: 'Inspiring Success: The Journey to IIT Roorkee',
            description: 'The journey to IIT Roorkee begins with the dream of countless JEE aspirants across India. The Joint Entrance Examination (JEE) is not just a test; it\'s a gateway to prestigious institutions like IIT Roorkee, known for its illustrious history, academic excellence, and transformative impact on students\' lives.',
            date: '24th July, 2024',
            author: 'Lakhveer Singh',
            about:"Lakhveer Singh is a BTech student specializing in Computer Science and Engineering (CSE) at IIT Roorkee. Known for his dedication and enthusiasm in the field of technology, Lakhveer is actively involved in various academic and extracurricular activities at the institute. His journey reflects the vibrant and dynamic environment of IIT Roorkee, where students are empowered to excel both academically and personally.",
            content: `
            <h1 className='text-2xl font-semibold'>Introduction</h1>
            The journey to IIT Roorkee begins with the dream of countless JEE aspirants across India. The Joint Entrance Examination (JEE) is not just a test; it's a gateway to prestigious institutions like IIT Roorkee, known for its illustrious history, academic excellence, and transformative impact on students' lives. As we delve into what makes IIT Roorkee special, let's uncover the journey that awaits those who dare to dream big and work hard.
            <br>
            <span className='text-black'>History and Prestige</span><br>
            IIT Roorkee traces its origins back to 1847 when it was established as the Thomason College of Civil Engineering, making it one of the oldest technical institutions in India. Over the years, it has evolved into a leading hub of innovation and learning, playing a pivotal role in shaping the engineering landscape of the nation. Renamed as the University of Roorkee in 1949 and later as IIT Roorkee in 2001, the institute has garnered global recognition for its contributions to engineering education and research.
    
            <h2 className="text-xl font-semibold text-red-700">Academic Excellence</h2>
            At the heart of IIT Roorkee's reputation lies its commitment to academic excellence. The institute offers a diverse range of undergraduate, postgraduate, and doctoral programs across various disciplines of engineering, technology, architecture, and management. The curriculum is designed to foster a deep understanding of theoretical concepts coupled with hands-on practical experience through state-of-the-art laboratories and research facilities.
    
            The faculty members at IIT Roorkee are renowned experts in their fields, actively engaged in cutting-edge research and innovation. Their mentorship and guidance empower students to explore new frontiers of knowledge and tackle real-world challenges. Additionally, the institute's emphasis on interdisciplinary studies encourages students to collaborate across different domains, fostering a holistic approach to learning.
    
            <h2 className="text-xl font-semibold text-red-700">Campus Life and Extracurricular Activities</h2>
            Beyond academics, life at IIT Roorkee is vibrant and enriching. The campus buzzes with energy throughout the year, thanks to a myriad of student clubs, cultural festivals, and sports events. These extracurricular activities provide students with opportunities to develop leadership skills, pursue their passions, and forge lifelong friendships.
    
            From technical societies to performing arts groups, there's something for everyone at IIT Roorkee. Events like Thomso, the annual cultural festival, and Cognizance, the technical festival, showcase the creativity, talent, and ingenuity of the student community. Participation in such events not only enriches the overall college experience but also nurtures a spirit of innovation and entrepreneurship among students.
    
            <h2 className="text-xl font-semibold text-red-700">Alumni Achievements</h2>
            The success stories of IIT Roorkee alumni serve as a testament to the institute's impact on shaping future leaders and trailblazers. Alumni from IIT Roorkee have made significant contributions across diverse fields, including engineering, business, academia, and public service. From pioneering groundbreaking technologies to leading multinational corporations, their achievements underscore the institute's role in producing global thought leaders and change-makers.
    
            Notable alumni include Dr. A.P.J. Abdul Kalam, former President of India and renowned aerospace scientist, and Satya Nadella, CEO of Microsoft, among many others. Their journeys from the corridors of IIT Roorkee to the pinnacles of success inspire current students and aspiring JEE candidates to aim high and pursue excellence in their chosen paths.
    
            <h2 className="text-xl font-semibold text-red-700">About the Author</h2>
        
            <h1 className="text-xl font-semibold text-red-700">Conclusion</h1>
            In conclusion, the journey to IIT Roorkee is a testament to the power of dreams, hard work, and resilience. As you embark on your quest to crack the JEE exam and secure admission to this prestigious institute, remember that every challenge is an opportunity for growth and every setback is a stepping stone to success.
    
            IIT Roorkee stands as a beacon of excellence, where innovation meets tradition and aspirations turn into achievements. Let the stories of its illustrious history, academic prowess, vibrant campus life, and inspiring alumni fuel your determination to excel. Embrace the journey, believe in yourself, and seize every opportunity to learn, grow, and make a difference in the world.
    
            As you prepare to script your own success story, remember that the journey doesn't end with admission to IIT Roorkee—it's just the beginning of a transformative chapter in your life. Dare to dream, strive for excellence, and let your journey inspire countless others to reach for the stars.
            `
        },
   
    
 
  {
      id: 2,
      image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
      title: 'Blog title goes here',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
      date: '21st May, 2022',
      author: 'admin',
      about:"",
      content: 'Full content of the blog post...'
  },
  {
      id: 3,
      image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
      title: 'Blog title goes here',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
      date: '21st May, 2022',
      author: 'admin',
      about:"",
      content: 'Full content of the blog post...'
  },
  {
      id: 4,
      image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
      title: 'Blog title goes here',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
      date: '21st May, 2022',
      author: 'admin',
      about: "",
      content: 'Full content of the blog post...'
  },
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
                            <div className='text-sm font-medium pb-3'>{post.description}</div>
                            <hr className='mb-4'/>
                            <div className="blogImage">
                                <img src={post.image} className="pb-3" alt={post.title} />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>
                    </div>

                    <div className="col-md-4">
                        <div className="position-sticky" style={{top: '2rem'}}>
                            <div className="p-4 mb-3 bg-body-tertiary rounded">
                                <h4 className="fst-italic text-red-500 text-xl font-bold">About</h4>
                                <p className="mb-0">{post.about}</p>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic text-red-500 text-xl font-bold">Monthly Blog</h4>
                                <ol className="list-unstyled mb-0 text-direction-flex text-blue-900">
                                    <li><a href="#">March 2021</a></li>
                                    <li><a href="#">February 2021</a></li>
                                    <li><a href="#">January 2021</a></li>
                                    <li><a href="#">March 2021</a></li>
                                    <li><a href="#">February 2021</a></li>
                                    <li><a href="#">January 2021</a></li>
                                    <li><a href="#">March 2021</a></li>
                                    <li><a href="#">February 2021</a></li>
                                    <li><a href="#">January 2021</a></li>
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
