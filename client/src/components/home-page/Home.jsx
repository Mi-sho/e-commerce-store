import styles from './Home.module.css'

import HeroSection from './hero-section/HeroSection'
import LatestArticlePosts from './latest-article-posts/LatestArticlePosts'
import LatestItems from './latest-items/LatestItems'


export default function Home() {
    return(
        <>
        <HeroSection />
        <div className={styles["content-home-wrapper"]}>
        <LatestItems />
        <LatestArticlePosts />
        
        </div>
        </>
    )
}