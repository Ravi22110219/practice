import React from 'react';
import styles from './GalleryHome.module.css';
import bootstrapLogo from '../../assets/photoes/logo.png'; // Update this path
import UpperNav from '../../Components/NavbarSection/UpperNav';
import NavBar from '../../Components/NavbarSection/NavBar';
import FooterSection from '../../Components/Footer/FooterSection';
import { GrGallery } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { IoLocation } from "react-icons/io5";



const GalleryHome = () => {
    const cards = [
        {
            title: "Short title, long jacket",
            image: 'https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
            location: "Earth-Event",
            time: "3d"
        },
        {
            title: "Much longer title that wraps to multiple lines",
            image: 'https://plus.unsplash.com/premium_photo-1682001801155-25a2e5c1c49a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
            location: "Creative",
            time: "4d"
        },
        {
            title: "Another longer title belongs here",
            image: 'https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
            location: "Result Celebration",
            time: "5d"
        }
    ];

    return (
      <>
        <UpperNav />
        <NavBar />
        
        <div className='py-4'></div>
        
        <div className={styles.blogBanner}>
            <div className={styles.headingBanner}>
                <h1><GrGallery className={styles.bannerIcon} />Gallery</h1>
            </div>
        </div>

        <div className={`container px-4 py-5 ${styles.customCards}`} id="custom-cards">
            <h2 className="pb-2 border-bottom">Custom cards</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {cards.map((card, index) => (
                    <div className="col" key={index}>
                        <div 
                            className={`card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg ${styles.card}`}
                            style={{ backgroundImage: `url('${card.image}')` }}
                        >
                            <div className={`d-flex flex-column h-100 p-5 pb-3 ${styles.cardContent}`}>
                                <h3 className={`pt-5 mt-5 mb-4 ${styles.cardTitle}`}>{card.title}</h3>
                                <ul className={`d-flex list-unstyled mt-auto ${styles.cardList}`}>
                                    <li className={`me-auto ${styles.cardListItem}`}>
                                        <img src={bootstrapLogo} alt="Bootstrap" width="32" height="32" />
                                    </li>
                                    <li className={`d-flex align-items-center me-3 ${styles.cardListItem}`}><IoLocation style={{marginRight:"10px"}}/>
                                       
                                        <small>{card.location}</small>
                                    </li>
                                    <li className={`d-flex align-items-center ${styles.cardListItem}`}><SlCalender  style={{marginRight:"10px"}}/>

                                       


                                        <small>{card.time}</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <FooterSection />
      </>
    );
};

export default GalleryHome;
