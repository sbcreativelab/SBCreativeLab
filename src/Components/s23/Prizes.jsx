import React from 'react'
import './Prizes.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import prizesHeader from '../../images/s23_images/prizes-header.svg'
import boxBackground from '../../images/s23_images/prizes-box-background.svg'
import first from '../../images/s23_images/prizes/prizes-1st.svg'
import firstIntPrize from '../../images/s23_images/prizes/prizes-intermediate-1st.svg'
import firstBegPrize from '../../images/s23_images/prizes/prizes-beginner-1st.svg'
import firstWinPrize from '../../images/s23_images/prizes/prizes-winner-1st.svg'
import second from '../../images/s23_images/prizes/prizes-2nd.svg'
import secondPrize from '../../images/s23_images/prizes/prizes-beginner-intermediate-2nd.svg'
import secondWinPrize from '../../images/s23_images/prizes/prizes-winner-2nd.svg'
import third from '../../images/s23_images/prizes/prizes-3rd.svg'
import prizesLazy from '../../images/s23_images/prizes-lazy.svg'
import prizesLazy1 from '../../images/s23_images/prizes-lazy-1.svg'
import prizesLazy2 from '../../images/s23_images/prizes-lazy-2.svg'
import prizesLazy3 from '../../images/s23_images/prizes-lazy-3.svg'

// export default function Prizes() {
//     const { width } = useWindowDimensions();
//     const PHONE_SCREEN_BREAKPOINT = 600;
//     const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;

//     return (
//         <div className='prizes' id='prizes'>
//             <div className='prizes-background'/>
//             {isPhoneScreen ?
//                 <div className='prizes-frame'>
//                     <img className='prizes-header' src={prizesHeader} alt='prizes' />
//                 </div>
//                 :
//                 <div className='prizes-frame'>
//                     <div className='prizes-header'>
//                         <img src={prizesHeader} alt='prizes' />
//                     </div>
//                     <div className='prizes-grid'>
//                         <div className='prizes-grid-box prizes-grid-box-intermediate'>
//                             <p>Intermediate+</p>
//                             <div className='prizes-desc prizes-intermediate'>
//                                 <img src={boxBackground} />
//                                 <img className='prizes-placement' src={first} />
//                                 <img className='prizes-img' src={firstIntPrize} />
//                                 <p>Anker 20k Portable Charger 325</p>
//                                 <img className='prizes-placement' src={second} />
//                                 <img className='prizes-img' src={secondPrize} />
//                                 <p>$20 Visa Gift Card</p>
//                             </div>
//                         </div>
//                         <div className='prizes-grid-box prizes-grid-box-beginner'>
//                             <p>Beginners</p>
//                             <div className='prizes-desc prizes-beginner'>
//                                 <img src={boxBackground} />
//                                 <img className='prizes-placement' src={first} />
//                                 <img className='prizes-img' src={firstBegPrize} />
//                                 <p>Flower Bouquet Lego Set</p>
//                                 <img className='prizes-placement' src={second} />
//                                 <img className='prizes-img' src={secondPrize} />
//                                 <p>$20 Visa Gift Card</p>
//                             </div>
//                         </div>
//                         <div className='prizes-grid-box prizes-grid-box-winner'>
//                             <p>Winners +<br/>Honorable Mentions</p>
//                             <div className='prizes-desc prizes-winner'>
//                                 <img src={boxBackground} />
//                                 <img className='prizes-placement' src={first} />
//                                 <img className='prizes-img' src={firstWinPrize} />
//                                 <p>90-day free subscription to proto.io </p>
//                                 <img className='prizes-placement' src={second} />
//                                 <img className='prizes-img' src={secondWinPrize} />
//                                 <p>SBCL Stickers!</p>
//                                 <img className='prizes-placement' src={third} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             }
//         </div>
//     )
// }

export default function Prizes() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;

    return (
        <div className='prizes' id='prizes'>
            <div className='prizes-background'/>
            {isPhoneScreen ?
                <div className='prizes-frame'>
                    <div className='prizes-header'>
                        <img src={prizesHeader} alt='prizes' style={{ width: '30%'}} />
                    </div>
                    <div style={{ marginTop: '2em', textAlign: 'center' }}>
                        <img src={prizesLazy1} style={{ marginTop: '1em', width: '100%' }} />
                        <img src={prizesLazy2} style={{ marginTop: '1em', width: '100%' }} />
                        <img src={prizesLazy3} style={{ marginTop: '1em', width: '100%' }} />
                    </div>
                </div>
                :
                <div className='prizes-frame'>
                    <div className='prizes-header'>
                        <img src={prizesHeader} alt='prizes' />
                    </div>
                    <div style={{ marginTop: '4em', textAlign: 'center' }}>
                        <img src={prizesLazy} style={{ width: '100%' }} />
                    </div>
                </div>
            }
        </div>
    )
}