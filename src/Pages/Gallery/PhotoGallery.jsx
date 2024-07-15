import React, { useState, useEffect } from 'react';
import styles from './PhotoGallery.module.css';
import UpperNav from '../../Components/NavbarSection/UpperNav';
import NavBar from '../../Components/NavbarSection/NavBar';
import FooterSection from '../../Components/Footer/FooterSection';
import { FaHeart, FaDownload } from 'react-icons/fa';
import { GrGallery } from "react-icons/gr";

const photos = [
  { src: 'https://princeschoolsikar.com/assets/result/12-2022.jpg', alt: 'A boy surrounded by beautiful nature' },
  { src: 'https://jpsschooljaisinghpura.github.io/.ac.in/back_to_school_facebook_cover_34.jpg', alt: 'What a beautiful scenery this sunset' },
  { src: 'https://www.w3schools.com/w3images/girl.jpg', alt: 'The Beach. Me. Alone. Beautiful' },
  { src: 'https://www.w3schools.com/w3images/girl_mountain.jpg', alt: 'Quiet day at the beach. Cold, but beautiful' },
  { src: 'https://www.w3schools.com/w3images/man_bench.jpg', alt: 'Waiting for the bus in the desert' },
  { src: 'https://www.w3schools.com/w3images/girl_train.jpg', alt: 'Nature again.. At its finest!' },
  { src: 'https://www.w3schools.com/w3images/girl.jpg', alt: 'Canoeing again' },
  { src: 'https://www.w3schools.com/w3images/closegirl.jpg', alt: 'A girl, and a train passing' },
  { src: 'https://www.w3schools.com/w3images/closegirl.jpg', alt: 'What a beautiful day!' },
  { src: 'https://www.w3schools.com/w3images/natureboy.jpg', alt: 'A boy surrounded by beautiful nature' },
  { src: 'https://www.w3schools.com/w3images/boy.jpg', alt: 'What a beautiful scenery this sunset' },
  { src: 'https://www.w3schools.com/w3images/girl.jpg', alt: 'The Beach. Me. Alone. Beautiful' },
  { src: 'https://www.w3schools.com/w3images/girl_mountain.jpg', alt: 'Quiet day at the beach. Cold, but beautiful' },
  { src: 'https://www.w3schools.com/w3images/man_bench.jpg', alt: 'Waiting for the bus in the desert' },
  { src: 'https://www.w3schools.com/w3images/girl_train.jpg', alt: 'Nature again.. At its finest!' },
  { src: 'https://www.w3schools.com/w3images/girl.jpg', alt: 'Canoeing again' },
  { src: 'https://www.w3schools.com/w3images/closegirl.jpg', alt: 'A girl, and a train passing' },
  { src: 'https://www.w3schools.com/w3images/closegirl.jpg', alt: 'What a beautiful day!' },
  { src: 'https://www.w3schools.com/w3images/natureboy.jpg', alt: 'A boy surrounded by beautiful nature' },
  { src: 'https://www.w3schools.com/w3images/boy.jpg', alt: 'What a beautiful scenery this sunset' },
  { src: 'https://www.w3schools.com/w3images/girl.jpg', alt: 'The Beach. Me. Alone. Beautiful' },
  { src: 'https://www.w3schools.com/w3images/girl_mountain.jpg', alt: 'Quiet day at the beach. Cold, but beautiful' },
  { src: 'https://www.w3schools.com/w3images/man_bench.jpg', alt: 'Waiting for the bus in the desert' },
  { src: 'https://www.w3schools.com/w3images/girl_train.jpg', alt: 'Nature again.. At its finest!' },
  { src: 'https://www.w3schools.com/w3images/girl.jpg', alt: 'Canoeing again' },
  { src: 'https://www.w3schools.com/w3images/closegirl.jpg', alt: 'A girl, and a train passing' },
  { src: 'https://www.w3schools.com/w3images/closegirl.jpg', alt: 'What a beautiful day!' },
];

const PhotoGallery = () => {
    const [modalImageIndex, setModalImageIndex] = useState(null);
    const [gridSize, setGridSize] = useState(3);
    const [likedImages, setLikedImages] = useState(new Array(photos.length).fill(false));
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 13;

    const handleImageClick = (index) => {
        setModalImageIndex(index);
    };

    const handleCloseModal = () => {
        setModalImageIndex(null);
    };

    const handlePrevImage = (e) => {
        if (e) e.stopPropagation();
        setModalImageIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const handleNextImage = (e) => {
        if (e) e.stopPropagation();
        setModalImageIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    const handleGridSizeChange = (e) => {
        setGridSize(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (modalImageIndex !== null) {
            if (e.key === 'ArrowLeft') {
                handlePrevImage();
            } else if (e.key === 'ArrowRight') {
                handleNextImage();
            }
        }
    };

    const handleLikeClick = (index) => {
        setLikedImages((prevLikes) => {
            const newLikes = [...prevLikes];
            newLikes[index] = !newLikes[index];
            return newLikes;
        });
    };

    const handleDownloadClick = (src) => {
        const link = document.createElement('a');
        link.href = src;
        link.download = src.split('/').pop();
        link.click();
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalImageIndex]);

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = photos.slice(indexOfFirstImage, indexOfLastImage);

    const totalPages = Math.ceil(photos.length / imagesPerPage);

    return (
        <>
            <UpperNav />
            <NavBar />
            <div className={styles.blogBanner}>
                <div className={styles.headingBanner}>
                    <h1><GrGallery className={styles.bannerIcon} />Gallery</h1>
                </div>
            </div>
            <div className={`py-4 ${styles.lightGreyBackground} ${styles.contentContainer}`}>
                <div className={styles.gridButtons}>
                    <label htmlFor="gridSizeRange" className="form-label">Grid Size: {gridSize}</label>
                    <input
                        type="range"
                        className="form-range"
                        min="1"
                        max="5"
                        step="1"
                        id="gridSizeRange"
                        value={gridSize}
                        onChange={handleGridSizeChange}
                    />
                </div>

                <div className={styles.photoGrid}>
                    {currentImages.map((photo, index) => (
                        <div className={styles.photoColumn} key={index} style={{ flex: `1 1 calc(${100 / gridSize}% - 1rem)` }}>
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className={styles.photo}
                                onClick={() => handleImageClick(indexOfFirstImage + index)}

                                
                            />
                               <div className={styles.overlay}>
                                <button
                                    className={`${styles.iconButtons} ${likedImages[index] ? styles.liked : ''}`}
                                    onClick={() => handleLikeClick(index)}
                                >
                                    <FaHeart />
                                </button>
                                <button
                                    className={styles.iconButtons}
                                    onClick={() => handleDownloadClick(photo.src)}
                                >
                                    <FaDownload />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.pagination}>
                    <div className={styles.paginationBar}>
                        <button
                            className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ''}`}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            «
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.active : ''}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            »
                        </button>
                    </div>
                </div>
            </div>

            {modalImageIndex !== null && (
                <div className={styles.modal} onClick={handleCloseModal}>
                   <span className={styles.closeButton} onClick={handleCloseModal}>×</span>
                    <button className={`${styles.navButton} ${styles.left}`} onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
                        ‹
                    </button>
                    <button className={`${styles.navButton} ${styles.right}`} onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
                        ›
                    </button>
                    <button className={styles.downloadButton} onClick={() => handleDownloadClick(photos[modalImageIndex].src)}>
                        ↓
                    </button>
                    <div className={styles.modalContent}>
                        <img src={photos[modalImageIndex].src} alt={photos[modalImageIndex].alt} className={styles.modalImage} />
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
};

export default PhotoGallery;
