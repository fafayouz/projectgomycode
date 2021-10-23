import React from 'react';
import './Services.css';
import digital from './marketing.png'
import Data from './Data'
import { Link } from 'react-router-dom';


const Services = () => {

    return (
        <>
            <div className="Services-Container">
                <div id="Services--id"  className="Services-Title">
                    <h1>خدمات التسويق الإلكتروني</h1>
                </div>
                <div className="Services">
                    <div className="Digital-Marketing">
                        <div className="Digital-Marketing-Img">
                            <img src={digital} alt="تسويق إلكتروني" />
                        </div>
                        <div className="Digital-Marketing-Content">
                                <h1>: تسويق إلكتروني</h1>
                                <p>ويعرف أيضا باسم التسويق الرقمي  أو التسويق عبر الشبكة ويشمل جميع الأساليب والممارسات ذات الصلة بعالم التسويق عبر شبكة (الإنترنت). <br/> نحن نمتلك جميع المؤهلات و الإستراتجيات التي تساعدك في إكتساب المزيد من العملاء و الوصول إلى أكبر قدر ممكن من المهتمين .   </p>
                        </div>
                    </div>
                    <div className="Services-Card-Container">
                    {Data.map((info , index) => {
                            return(
                                <div key={info.id} className="Services-Card">
                            <div className="Services-Image">
                                <img src={info.image} alt={info.alt} />
                            </div>
                            <h2> {info.title} </h2>
                            <div className="Paragraphe-Box">
                            
                            <p className="Paragraphe">
                                {info.description}
                            </p>
                            </div>
                            <Link to={info.slug} className="Card-btn">
                                <span >
                                قراءة المزيد
                                </span>
                             </Link>   
                            </div>
                           
                            )
                        })} 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services


