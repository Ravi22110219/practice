import React, { useState } from 'react';
import styles from './BlogHomePage.module.css';
import { FaCalendar, FaUser } from 'react-icons/fa';

const BlogHomePage = () => {
    const [currentItem, setCurrentItem] = useState(4);
    const [searchQuery, setSearchQuery] = useState('');

    const blogPosts = [
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Blog title goes here',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Blog title goes here',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Blog title goes here',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Blog title goes here',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Blog title goes here',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Blog title goes here',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Blog title goes here',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Ram Seeta k ',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci!',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
            image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
            title: 'Blog title goes here',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci! lormas dasfkj  sfnaj  jansf ndjosafnasl odmaomconadmo safnsadaldma ada csfd aosdcmoasco',
            date: '21st may, 2022',
            author: 'admin'
        },
        {
          image: 'https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Final-Round-Seat-Allotment-Released.jpg',
          title: 'Blog title goes here',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, adipisci! lormas dasfkj  sfnaj  jansf ndjosafnasl odmaomconadmo safnsadaldma ada csfd aosdcmoasco',
          date: '21st may, 2022',
          author: 'admin'
      },
    ];

    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const loadMore = () => {
        setCurrentItem(prev => prev + 4);
    };

    const showLess = () => {
        setCurrentItem(4);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className={styles.container}>
            <header className={styles.sectionHeader}>
               
                <h1>You can search here</h1>
            </header>

            <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={handleSearch}
                className={styles.searchBar}
            />

            <div className={styles.boxContainer}>
                {filteredPosts.slice(0, currentItem).map((post, index) => (
                    <div className={styles.box} key={index}>
                        <div className={styles.image}>
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className={styles.content}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <a href="#" className={styles.btn}>read more</a>
                            <div className={styles.icons}>
                                <div className='flex align-middle'>
                                    <FaCalendar className='mr-2' color='crimson' /> <span className='text-black'>{post.date} </span>
                                </div>
                                <div className='flex align-middle'>
                                    <FaUser className='mr-2' color='crimson' /> <span className='text-black'>{post.author} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.buttonsContainer}>
                {currentItem < filteredPosts.length && (
                    <div id="load-more" className={styles.loadMore} onClick={loadMore}>load more</div>
                )}
                {currentItem > 4 && (
                    <div id="show-less" className={styles.showLess} onClick={showLess}>show less</div>
                )}
            </div>
        </div>
    );
};

export default BlogHomePage;
