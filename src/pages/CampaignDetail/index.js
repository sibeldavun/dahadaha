import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';
import ReturnBackButton from '../../components/ReturnBackButton';

function CampaignDetail() {
    const { id } = useParams();
    const [details, setDetails] = useState({ PromotionDetailItems: [] });


    useEffect(() => {
        document.title = "Promotion Detail"
        fetchData();
        // eslint-disable-next-line
    }, [])


    const fetchData = async () => {
        const { data } = await axios.get(`https://api.extrazone.com/promotions?Id=${id}`, { headers: { 'X-Country-Id': 'TR', 'X-Language-Id': 'TR' } })
        setDetails(data)
    }


    return (
        <div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.imageBox}>
                        <div className={styles.returnBackBox}><ReturnBackButton /></div>
                        <input className={styles.image} type="image" src={details.ImageUrl} alt="Image" loading="lazy" />
                        <input className={styles.brandLogo} type="image" src={details.BrandIconUrl} alt="Brand Image" loading="lazy" />
                        <div className={styles.remainingTextBox}>{details.RemainingText}</div>
                    </div>
                    <div className={styles.descriptionBox}>
                        <div className={styles.title} dangerouslySetInnerHTML={{ __html: details.Title }}></div>
                        <div dangerouslySetInnerHTML={{ __html: details.Description }}></div>
                        <div className={styles.buttonBox}>
                            <button className={styles.button}><div dangerouslySetInnerHTML={{ __html: details.BrandPromotionCardParticipationText }}></div></button>
                        </div>
                    </div>
                </div>
                <div className={styles.promotionBox}>

                    <span className={styles.promotionTitle}>{details.DetailItemTitle}</span>
                    <div className={styles.promotionDetailItems}>
                        {
                            details.PromotionDetailItems.map((item, index) => {
                                return (
                                    <div className={styles.promotionDetailItem} key={index}>
                                        <input className={styles.promotionImage} type="image" src={item.ImageUrl} alt="Promotion Image" loading="lazy" />
                                        <div className={styles.promotionItemTitle}>{item.Title} </div>
                                        <div className={styles.promotionItemDescription} >{item.Description} </div>
                                    </div>

                                )
                            })

                        }
                    </div>
                </div>

            </div>
        </div>


    )
};
export default CampaignDetail;