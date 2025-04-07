import styles from './ArticleDetails.module.css';

export default function ArticleDetails() {
    return(
        <>
       <div className={styles["article-container"]}>
    <div className={styles["article-header"]}>
        <h1 className={styles["article-title"]}>The Art of Timeless Design</h1>
        <div className={styles["article-meta"]}>
            <span className={styles["author"]}>By John Doe</span>
            <span className={styles["date"]}>March 29, 2025</span>
        </div>
    </div>
    <div className={styles["article-image-container"]}>
        <img 
            src="/tempPics/imad-alassiry-GeqhIp6D84s-unsplash.jpg" 
            alt="Example of timeless design" 
            className={styles["article-image"]}
        />
        <p className={styles["image-caption"]}>The Barcelona Pavilion by Mies van der Rohe - a classic example of timeless architecture</p>
    </div>
    <div className={styles["article-content"]}>
        <p>
            Timeless design is about creating aesthetics that withstand the test of time. Whether in fashion, architecture, or digital media, certain principles guide designs that remain relevant across generations.
        </p>
        <p>
            One crucial aspect of timeless design is simplicity. Overly complicated styles often become outdated quickly, whereas clean lines and balanced compositions remain pleasing to the eye for decades.
        </p>
        <p>
            Another key factor is functionality. When form follows function, design not only looks good but also serves a purpose, making it valuable in the long run.
        </p>
    </div>
    <div className={styles["article-button"]}>
        <button className={styles["like-button"]}>Like</button>
    </div>
</div>
        </>
    )
}