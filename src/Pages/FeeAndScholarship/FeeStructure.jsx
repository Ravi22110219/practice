import React from 'react';
import styles from './FeeStructure.module.css';

import { FaHandPointRight } from "react-icons/fa";


const FeeStructure = () => {
    window.scrollTo(0, 0);
    return ( 
        <>  
           
           <div className="w-full bg-gray-800 h-40 mt-20 flex items-center justify-center">
            <div className="w-5/6 mx-auto">
                <h1 className="text-center text-white text-4xl">Fee Structure</h1>
            </div>
        </div>
            <div className={styles.feeStructure}>
                <div className={styles.section}>
                    <h2>NEET DIVISION</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>BATCH</th>
                                    <th>FEE</th>
                                    <th>Installment-I @admission time</th>
                                    <th>Installment-II 07-SEPTEMBER-2024</th>
                                    <th>Installment-III 19-NOVEMBER-2024</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>XI FOUNDATION</td>
                                    <td>55000</td>
                                    <td>40%</td>
                                    <td>30%</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td>XII FOUNDATION</td>
                                    <td>55000</td>
                                    <td>40%</td>
                                    <td>30%</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td>TARGET</td>
                                    <td>70000</td>
                                    <td>40%</td>
                                    <td>30%</td>
                                    <td>30%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex'>
                    <FaHandPointRight style={{marginRight:"10px",marginTop:"5px", color:"black"}} />
                    <p className={styles.registrationFee}>Registration fee - 3000</p></div>
                </div>
                <div className={styles.section}>
                    <h2>JEE DIVISION</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>BATCH</th>
                                    <th>FEE</th>
                                    <th>Installment-I @admission time</th>
                                    <th>Installment-II 07-SEPTEMBER-2024</th>
                                    <th>Installment-III 19-NOVEMBER-2024</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>XI FOUNDATION</td>
                                    <td>55000</td>
                                    <td>40%</td>
                                    <td>30%</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td>XII FOUNDATION</td>
                                    <td>55000</td>
                                    <td>40%</td>
                                    <td>30%</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td>TARGET</td>
                                    <td>70000</td>
                                    <td>40%</td>
                                    <td>30%</td>
                                    <td>30%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex'>
                    <FaHandPointRight style={{marginRight:"10px",marginTop:"5px", color:"black"}} />
                    <p className={styles.registrationFee}>Registration fee - 3000</p></div>
                    <div className='flex'>
                    <FaHandPointRight style={{marginRight:"10px",marginTop:"5px", color:"black"}} />
                    <p className={styles.registrationFee}>Test Series (Minor+ Major+ Random+ BioNCE+ RBTS) - 5000</p></div>
                  
                </div>
            </div>
           
        </> 
    );
};

export default FeeStructure;
