import React from 'react';

import styles from './CoursesAndBatches.module.css';
import { FaYoutube } from 'react-icons/fa';
import Slider from '../../Components/SliderSection/Slider';

const CoursesAndBatchesNEET = () => {
    window.scroll(0, 0);
    const batches = [
        { courseName: 'Foundation', batchName: 'Aayushmaan', startDate: '1st june 2024' },
        { courseName: '12th Batch', batchName: 'Sanghrsh', startDate: '15th Feb 2024' },
        { courseName: 'Targat', batchName: 'Lakshay', startDate: '1st july' },
    ];

    const chemistryPlaylists = [
        'https://www.youtube.com/embed/videoseries?si=ACy2FMOucH0A6xwF&amp;list=PL1am-5G-TLEbk82HEXHnbCYd0CoMTIZZ7',
        "https://www.youtube.com/embed/videoseries?si=EW-Aa0MP-EfleUNq&amp;list=PL1am-5G-TLEbL1b5CoMlCLwwndRTyxWFw",
        "https://www.youtube.com/embed/videoseries?si=wlWMddM_HBCtrI7_&amp;list=PL1am-5G-TLEb_XRV9IdMaj62RnRi4MiiH" 
    ];
    const physicsPlaylists = [
        "https://www.youtube.com/embed/videoseries?si=AbGbG4RgO5S7VS2u&amp;list=PL1am-5G-TLEZIP4ofEBJXJoSlSldRG-lq",
        "https://www.youtube.com/embed/videoseries?si=7ZUSVM8qqjLjCS7i&amp;list=PL1am-5G-TLEZcH1rQZh3jNADABGx34C0_",
        "https://www.youtube.com/embed/videoseries?si=H4KMf8W0-I1S1R3o&amp;list=PL1am-5G-TLEaUx8gGfjuTjH0ovq3jn62H"
    ];
    const BioPlaylists = [
        "https://www.youtube.com/embed/videoseries?si=XTDcN7Kk2G0nOwq4&amp;list=PL1am-5G-TLEaScAiUhN4BzJBlbu5rLmoG",
        "https://www.youtube.com/embed/videoseries?si=BRXb99S1NUCGEAjz&amp;list=PL1am-5G-TLEbe2Y80M7kZGMU0h6qRd76i",
        "https://www.youtube.com/embed/videoseries?si=Ju3qF-RPAT49kjTP&amp;list=PL1am-5G-TLEbrN3MV9trRi262GoDmVp_Z" 
    ];

    return (
        <div className='mb-8'>
          
            <Slider />
            <div className={styles.blogBanner}>
                <div className={styles.headingBanner}>
                    <h1>NEET UG(PMT) Courses and Batches</h1>
                </div>
            </div>
            <div className={styles.coursesContainer}>
                {batches.map((batch, index) => (
                    <div key={index} className={styles.courseBatch}>
                        <h3>{batch.courseName}</h3>
                        <p><strong>Batch:</strong> {batch.batchName}</p>
                        <p><strong>Start Date:</strong> {batch.startDate}</p>
                    </div>
                ))}
            </div>
            <header className={styles.sectionHeader}>
                <h3>Chemistry</h3>
                <h1>Best Chemistry Courses On Youtube</h1>
            </header>
            <div className={styles.sliderContainer}>
            
                {chemistryPlaylists.map((chemistryPlaylists, index) => (
                    <div key={index} className={styles.sliderItem}>
                        <iframe
                            className={styles.playlistVideo}
                            src={chemistryPlaylists}
                            title={`YouTube playlist ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                <button className={styles.moreVideosButton}>
                    <FaYoutube /> More Videos
                </button>
            </div>

            <header className={styles.sectionHeader}>
                <h3>Physics</h3>
                <h1>Learn Physic From Best Teachers</h1>
            </header>
            <div className={styles.sliderContainer}>
            
                {physicsPlaylists.map((physicsPlaylists, index) => (
                    <div key={index} className={styles.sliderItem}>
                        <iframe
                            className={styles.playlistVideo}
                            src={physicsPlaylists}
                            title={`YouTube playlist ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                <button className={styles.moreVideosButton}>
                    <FaYoutube /> More Videos
                </button>
            </div>
            <header className={styles.sectionHeader}>
                <h3>Biology</h3>
                <h1>Bio With Best</h1>
            </header>
            <div className={styles.sliderContainer}>
            
                {BioPlaylists.map((BioPlaylists, index) => (
                    <div key={index} className={styles.sliderItem}>
                        <iframe
                            className={styles.playlistVideo}
                            src={BioPlaylists}
                            title={`YouTube playlist ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                <button className={styles.moreVideosButton}>
                    <FaYoutube /> More Videos
                </button>
            </div>
           
       
        </div>
    );
};

export default CoursesAndBatchesNEET;
