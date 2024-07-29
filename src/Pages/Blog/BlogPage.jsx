// BlogPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPage.css';
import Neet_Scam from '../../assets/photoes/Neet_Scam.png'
import Infinite_Eduverse from '../../assets/photoes/blog.jpg'

const blogPosts = [
        {
            id: 1,
            image: 'https://www.iitr.ac.in/assets/56f4da26ed956730309fa1488611ee0f13b0ac95ebb1bc9b5d210e31ff70e79c_IITR12.jpg',
            title: 'Inspiring Success: The Journey to IIT Roorkee',
            description: 'The journey to IIT Roorkee begins with the dream of countless JEE aspirants across India. The Joint Entrance Examination (JEE) is not just a test; it\'s a gateway to prestigious institutions like IIT Roorkee, known for its illustrious history, academic excellence, and transformative impact on students\' lives.',
            date: '24th July, 2024',
            author: 'Lakhveer Singh',
            about:"Lakhveer Singh is a BTech student specializing in Computer Science and Engineering (CSE) at IIT Roorkee. Known for his dedication and enthusiasm in the field of technology, Lakhveer is actively involved in various academic and extracurricular activities at the institute. His journey reflects the vibrant and dynamic environment of IIT Roorkee, where students are empowered to excel both academically and personally.",
            content: `<div>
  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Introduction</h3>
  <p>The journey to IIT Roorkee begins with the dream of countless JEE aspirants across India. The Joint Entrance Examination (JEE) is not just a test; it's a gateway to prestigious institutions like IIT Roorkee, known for its illustrious history, academic excellence, and transformative impact on students' lives. As we delve into what makes IIT Roorkee special, let's uncover the journey that awaits those who dare to dream big and work hard.</p>
  
  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">History and Prestige</h3>
  <p>IIT Roorkee traces its origins back to 1847 when it was established as the Thomason College of Civil Engineering, making it one of the oldest technical institutions in India. Over the years, it has evolved into a leading hub of innovation and learning, playing a pivotal role in shaping the engineering landscape of the nation. Renamed as the University of Roorkee in 1949 and later as IIT Roorkee in 2001, the institute has garnered global recognition for its contributions to engineering education and research.</p>
  
  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Academic Excellence</h3>
  <p>At the heart of IIT Roorkee's reputation lies its commitment to academic excellence. The institute offers a diverse range of undergraduate, postgraduate, and doctoral programs across various disciplines of engineering, technology, architecture, and management. The curriculum is designed to foster a deep understanding of theoretical concepts coupled with hands-on practical experience through state-of-the-art laboratories and research facilities.</p>
  <p>The faculty members at IIT Roorkee are renowned experts in their fields, actively engaged in cutting-edge research and innovation. Their mentorship and guidance empower students to explore new frontiers of knowledge and tackle real-world challenges. Additionally, the institute's emphasis on interdisciplinary studies encourages students to collaborate across different domains, fostering a holistic approach to learning.</p>
  
  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Campus Life and Extracurricular Activities</h3>
  <p>Beyond academics, life at IIT Roorkee is vibrant and enriching. The campus buzzes with energy throughout the year, thanks to a myriad of student clubs, cultural festivals, and sports events. These extracurricular activities provide students with opportunities to develop leadership skills, pursue their passions, and forge lifelong friendships.</p>
  <p>From technical societies to performing arts groups, there's something for everyone at IIT Roorkee. Events like Thomso, the annual cultural festival, and Cognizance, the technical festival, showcase the creativity, talent, and ingenuity of the student community. Participation in such events not only enriches the overall college experience but also nurtures a spirit of innovation and entrepreneurship among students.</p>
  
  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Alumni Achievements</h3>
  <p>The success stories of IIT Roorkee alumni serve as a testament to the institute's impact on shaping future leaders and trailblazers. Alumni from IIT Roorkee have made significant contributions across diverse fields, including engineering, business, academia, and public service. From pioneering groundbreaking technologies to leading multinational corporations, their achievements underscore the institute's role in producing global thought leaders and change-makers.</p>
  <p>Notable alumni include Dr. A.P.J. Abdul Kalam, former President of India and renowned aerospace scientist, and Satya Nadella, CEO of Microsoft, among many others. Their journeys from the corridors of IIT Roorkee to the pinnacles of success inspire current students and aspiring JEE candidates to aim high and pursue excellence in their chosen paths.</p>
  
  <h3 style="font-weight: bold; color: #8B0000; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Tips for JEE Aspirants:</h3>
  <ul style="list-style-type: disc; font-size: 1.125rem; font-weight: 500; color: #8B0000; padding-left: 1.25rem;">
    <li>Start Early: Begin your preparation well in advance to cover the vast syllabus systematically.</li>
    <li>Understand Concepts: Focus on building a strong foundation in fundamental concepts rather than rote memorization.</li>
    <li>Practice Regularly: Solve previous years' papers and mock tests to familiarize yourself with the exam pattern and improve time management skills.</li>
    <li>Seek Guidance: Enroll in coaching classes or join study groups to benefit from expert guidance and peer support.</li>
    <li>Stay Motivated: Maintain a positive mindset, stay disciplined, and balance your study schedule with adequate breaks and relaxation.</li>
  </ul>
  
  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Conclusion</h3>
  <p>In conclusion, the journey to IIT Roorkee is a testament to the power of dreams, hard work, and resilience. As you embark on your quest to crack the JEE exam and secure admission to this prestigious institute, remember that every challenge is an opportunity for growth and every setback is a stepping stone to success.</p>
  <p>IIT Roorkee stands as a beacon of excellence, where innovation meets tradition and aspirations turn into achievements. Let the stories of its illustrious history, academic prowess, vibrant campus life, and inspiring alumni fuel your determination to excel. Embrace the journey, believe in yourself, and seize every opportunity to learn, grow, and make a difference in the world.</p>
  <p>As you prepare to script your own success story, remember that the journey doesn't end with admission to IIT Roorkee—it's just the beginning of a transformative chapter in your life. Dare to dream, strive for excellence, and let your journey inspire countless others to reach for the stars.</p>
</div>
`,
           
            
        },
   
    
 
  {
      id: 2,
      image: Neet_Scam,
      title: 'The NEET Scam 2024: Uncovering the Truth Behind the Controversy',
      description: 'The year 2024 has added a dire chapter to the annals of Indian education: the NEET Scam. As one of the most competitive and critical exams for aspiring medical students in India, ',
      date: '21st May, 2022',
      author: 'Bidsuk CEO',
      about:"",
      content: `<div>
 
  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Introduction</h3>
  <p>
    The year 2024 has added a dire chapter to the annals of Indian education: the NEET Scam. As one of the most competitive and critical exams for aspiring medical students in India, the National Eligibility cum Entrance Test (NEET) is the cornerstone for securing admissions into premier medical colleges across the country. However, this year's scandal has sent shockwaves through students, parents, educators, and authorities alike.
  </p>

  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">What Happened?</h3>
  <p>
    It all began with whispers of irregularities surfacing on social media, which soon morphed into a full-blown NEET scam revealed by investigative journalists. The scam involved a sophisticated nexus of agents, dummy candidates, insiders from examination centers, and even some officials from the organizing body. It exposed how these corrupt elements manipulated the system, allowing undeserving candidates to score high marks, thus securing medical seats unfairly.
  </p>

  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Key Revelations</h3>
  <ul style="list-style-type: disc; font-size: 1.125rem; font-weight: 500; color: #8B0000; padding-left: 1.25rem;">
    <li>
      <strong>Substitution of Candidates:</strong> Perhaps the most shocking revelation was the use of 'dummy' candidates. These were individuals who stepped in to take the exam on behalf of registered candidates, ensuring high scores through academic proficiency. The substitution often occurred with sophisticated identity forgeries and the complicity of examination center officials.
    </li>
    <li>
      <strong>Leaked Question Papers:</strong> Authorities also found that NEET question papers were leaked well before the exam date. Select candidates received these papers, giving them an undue advantage over others who had to take the test under fair conditions. Investigations traced these leaks back to compromised printing and distribution channels.
    </li>
    <li>
      <strong>Bribes and Payoffs:</strong> Substantial sums of money changed hands, implicating not just the agents and middlemen but also some officials from the examination governing body. Bribes facilitated everything from the leaking of question papers to the substitution of candidates and manipulation of exam results.
    </li>
  </ul>

  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">The Impact on Students</h3>
  <ul style="list-style-type: disc; font-size: 1.125rem; font-weight: 500; color: #8B0000; padding-left: 1.25rem;">
    <li>
      <strong>Stress and Anxiety:</strong> The immediate fallout has been devastating for honest, hardworking students. Many have expressed profound disappointment and disbelief, questioning the integrity of the examination system. This has led to increased stress and anxiety among students, who are now skeptical of the transparency and fairness of competitive exams.
    </li>
    <li>
      <strong>Calls for Re-Examination:</strong> Several student bodies and educational organizations have called for the annulment of the 2024 NEET exam results and demanded a re-examination. They argue that the results are tainted and do not reflect the true capabilities of the candidates.
    </li>
    <li>
      <strong>Legal Battles:</strong> Parents and affected students have also initiated legal action, seeking justice and accountability. The judiciary is now embroiled in multiple cases aimed at unraveling the full extent of the scam and ensuring that those responsible are held accountable.
    </li>
  </ul>

  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Government and Public Response</h3>
  <ul style="list-style-type: disc; font-size: 1.125rem; font-weight: 500; color: #8B0000; padding-left: 1.25rem;">
    <li>
      <strong>Official Inquiries:</strong> The government has launched a series of inquiries headed by high-level officials and educational experts. These probes aim to identify the loopholes in the current system and recommend comprehensive reforms to prevent such scams in the future.
    </li>
    <li>
      <strong>Public Outcry:</strong> Public sentiment is overwhelmingly against the perpetrators of the scam. Across social media platforms, there have been widespread calls for stringent punishments and systemic reforms. Prominent educationists, activists, and celebrities have also voiced their concerns, adding pressure on the authorities to act swiftly and decisively.
    </li>
    <li>
      <strong>Proposals for Reform:</strong> In light of the scam, several proposals have emerged to reform the NEET examination process. Suggested measures include enhanced biometric verification, the use of blockchain for question paper security, real-time surveillance of examination centers, and severe penalties for any fraudulent activity.
    </li>
  </ul>

  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Moving Forward</h3>
  <p>
    The NEET Scam 2024 has undoubtedly shaken the foundation of India's medical entrance examination system. However, it also presents an opportunity for introspection and reform. The focus should now be on restoring faith in the examination process through transparency, accountability, and technological advancements.
  </p>
  <p>
    By learning from this debacle, we can work towards creating a more robust, fair, and transparent examination system. The aspirations and futures of millions of students depend on it.
  </p>

  <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Call to Action</h3>
  <p>
    If you're a student or parent affected by the NEET Scam 2024, don't hesitate to reach out to support groups and legal experts for guidance. Let your voice be heard through petitions and social media campaigns. Remember, collective action can drive significant change. Let's work together to ensure such a debacle never happens again.
  </p>
</div>`

  },

  {
    id: 3,
    image: Infinite_Eduverse,
    title: 'Why Infinite EduVerse is the Best Choice for NEET and JEE Preparation',
    description: 'Infinite EduVerse stands out as a premier institute for NEET and JEE preparation, offering exceptional resources, faculty, and support systems to ensure student success.',
    date: '29th July, 2024',
    author: 'John Doe, Education Analyst',
    about: "",
    content: `<div>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Introduction</h3>
    <p>
      Infinite EduVerse has emerged as a leading name in the realm of competitive exam preparation, particularly for NEET and JEE. With a commitment to excellence and a student-centric approach, Infinite EduVerse has become the preferred choice for countless aspirants aiming to secure top ranks in these highly competitive exams.
    </p>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Exceptional Faculty</h3>
    <p>
      One of the most significant factors contributing to Infinite EduVerse's success is its team of highly qualified and experienced faculty members. These educators bring a wealth of knowledge and expertise, ensuring that students receive the best guidance and support in their preparation journey.
    </p>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Comprehensive Study Material</h3>
    <ul style="list-style-type: disc; font-size: 1.125rem; font-weight: 500; color: #8B0000; padding-left: 1.25rem;">
      <li>
        <strong>In-depth Coverage:</strong> The study material provided by Infinite EduVerse covers every topic in detail, ensuring students have a thorough understanding of the concepts.
      </li>
      <li>
        <strong>Regular Updates:</strong> The material is regularly updated to reflect the latest exam patterns and syllabus changes, keeping students well-prepared for any new developments.
      </li>
      <li>
        <strong>Practice Questions:</strong> A vast array of practice questions and mock tests are included, enabling students to test their knowledge and improve their problem-solving skills.
      </li>
    </ul>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">State-of-the-Art Infrastructure</h3>
    <ul style="list-style-type: disc; font-size: 1.125rem; font-weight: 500; color: #8B0000; padding-left: 1.25rem;">
      <li>
        <strong>Modern Classrooms:</strong> Equipped with the latest technology, the classrooms at Infinite EduVerse provide an optimal learning environment.
      </li>
      <li>
        <strong>Library and Resources:</strong> The institute boasts a well-stocked library with extensive resources, including reference books, journals, and digital materials.
      </li>
      <li>
        <strong>Online Learning:</strong> Infinite EduVerse offers robust online learning platforms, ensuring students can access quality education from anywhere.
      </li>
    </ul>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Personalized Attention and Mentorship</h3>
    <p>
      At Infinite EduVerse, each student receives personalized attention and mentorship. This individualized approach helps in addressing the unique strengths and weaknesses of every student, providing them with tailored guidance to achieve their goals.
    </p>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Excellent Track Record</h3>
    <ul style="list-style-type: disc; font-size: 1.125rem; font-weight: 500; color: #8B0000; padding-left: 1.25rem;">
      <li>
        <strong>Top Ranks:</strong> Infinite EduVerse has consistently produced top rankers in NEET and JEE, showcasing the effectiveness of its teaching methodology.
      </li>
      <li>
        <strong>High Success Rate:</strong> The institute has a high success rate, with a significant percentage of its students securing admission to prestigious medical and engineering colleges.
      </li>
      <li>
        <strong>Alumni Achievements:</strong> The achievements of its alumni in various fields further highlight the quality of education and training provided by Infinite EduVerse.
      </li>
    </ul>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Holistic Development</h3>
    <p>
      Beyond academics, Infinite EduVerse focuses on the holistic development of its students. It organizes various extracurricular activities, workshops, and seminars to enhance their overall growth and prepare them for future challenges.
    </p>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Student Support Services</h3>
    <ul style="list-style-type: disc; font-size: 1.125rem; font-weight: 500; color: #8B0000; padding-left: 1.25rem;">
      <li>
        <strong>Counseling and Guidance:</strong> Professional counselors are available to provide academic and career guidance, helping students make informed decisions.
      </li>
      <li>
        <strong>Doubt Clearing Sessions:</strong> Regular doubt clearing sessions ensure that students can resolve their queries promptly and effectively.
      </li>
      <li>
        <strong>Peer Support:</strong> The collaborative environment at Infinite EduVerse fosters peer support and encourages healthy competition.
      </li>
    </ul>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Moving Forward</h3>
    <p>
      Infinite EduVerse continues to set new benchmarks in the field of NEET and JEE preparation. With its unwavering commitment to quality education and student success, the institute is poised to remain a top choice for aspirants across the country.
    </p>
    <p>
      By choosing Infinite EduVerse, students are not just preparing for exams; they are building a strong foundation for their future careers. The institute's holistic approach ensures that students are well-equipped to face the challenges ahead and achieve their dreams.
    </p>
  
    <h3 style="font-weight: 600; font-size: 1.5rem; padding-top: 1rem; padding-bottom: 1rem;">Call to Action</h3>
    <p>
      If you are an aspiring NEET or JEE candidate, Infinite EduVerse offers the perfect blend of resources, guidance, and support to help you succeed. Enroll now and take the first step towards realizing your dreams. For more information, visit our website or contact our admissions office today.
    </p>
  </div>`
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
                            <div  dangerouslySetInnerHTML={{ __html: post.content }} ></div>
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
                                <img src={Infinite_Eduverse} alt="" style={{width:"300px", height:"250px"}}/>
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
                                <a href={post.id} className="icon-link gap-1 icon-link-hover text-blue-600 stretched-link">
                                    Continue reading..
                                    <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                              <img src={Neet_Scam} alt="" style={{width:"300px", height:"250px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default BlogPage;
