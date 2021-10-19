import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '.././components/Header'
import Footer from '.././components/Footer';
import Image from 'next/image'
import DisqusComments from '.././components/Blog'


function PhotoAlbum() {
  
    return (
        <>
        <div className={styles.container}>
        
            <Head>
                <title>Photo Album - Antonia & Clark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

         <main className={styles.main}>
          <Header />
            <div className={styles.grid}>
              <div className={styles.photocard}>
                <div className={styles.welcometext}>
                  <h3 className={styles.phototitle}>Photo Album</h3>
                    <p className={styles.phototext}>We chose a few of our favorite moments to share with you guys</p>
                </div>

                <div className={styles.photoalbum}>
                   <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark1.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark2.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark3.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark4.webp" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark6.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark7.jpeg" alt="Antonia and Clark" width="250" height="250" />
                  </div>
               
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark10.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div> 
                
                   </div>
                  <div className={styles.photoblog}>
                    <DisqusComments />
                  </div>
              </div>
            </div>
                  </main>
        <Footer />
        </div> 
    </>
  )
}

export default PhotoAlbum;


// import React from "react"
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
//  import styles from '../styles/Home.module.css'

// export default (props) => {
//   const [currentSlide, setCurrentSlide] = React.useState(0)
//   const [sliderRef, slider] = useKeenSlider({
//     initial: 0,
//     slideChanged(s) {
//       setCurrentSlide(s.details().relativeSlide)
//     },
//   })

//   return (
//     <>
//       <div className="navigation-wrapper">
//         <div ref={sliderRef} className="keen-slider">
//           <div className="keen-slider__slide number-slide1">1</div>
//           <div className="keen-slider__slide number-slide2">2</div>
//           <div className="keen-slider__slide number-slide3">3</div>
//           <div className="keen-slider__slide number-slide4">4</div>
//           <div className="keen-slider__slide number-slide5">5</div>
//           <div className="keen-slider__slide number-slide6">6</div>
//         </div>
//         {slider && (
//           <>
//             <ArrowLeft
//               onClick={(e) => e.stopPropagation() || slider.prev()}
//               disabled={currentSlide === 0}
//             />
//             <ArrowRight
//               onClick={(e) => e.stopPropagation() || slider.next()}
//               disabled={currentSlide === slider.details().size - 1}
//             />
//           </>
//         )}
//       </div>
//       {slider && (
//         <div className="dots">
//           {[...Array(slider.details().size).keys()].map((idx) => {
//             return (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   slider.moveToSlideRelative(idx)
//                 }}
//                 className={"dot" + (currentSlide === idx ? " active" : "")}
//               />
//             )
//           })}
//         </div>
//       )}
//     </>
//   )
// }

// function ArrowLeft(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow arrow--left" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//     </svg>
//   )
// }

// function ArrowRight(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow arrow--right" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//     </svg>
//   )
// }

