import { Link } from 'react-router'
import styles from './About.module.css'

export default function About() {
    return(
        <>
        <div className={styles["about-us-container"]}>
            <section className={styles["who-are-we-container"]}>
                <div className={styles["about-img-wrapper"]}>
                    <img src="/images/about-us-img/antique-440337_1920.jpg" alt="" className={styles["who-are-we-img"]} />
                </div>
                <div className={styles["about-description"]}>
                     <h2 className={styles["who-are-we-title"]}>About</h2>
                     <div className={styles["description-about-section"]}>
                     <p>Welcome to Antique World, where history meets artistry.</p>
                     <p>Nestled in the heart of Sofia, our shop is a haven for collectors, art enthusiasts, and those who appreciate the timeless beauty of antique pieces. We specialize in carefully curated artworks, from classic paintings and rare sculptures to vintage prints and unique decorative treasures.</p>
                     <p>At Antique World, we believe that antique art isn’t just about collecting—it’s about connecting with the past and bringing its beauty into the present. Whether you're an experienced collector or simply looking for a unique piece to adorn your home, we’re here to help you find something truly special.</p>
                     </div>
                </div>

        
            </section>
        <section className={styles["restorer-container"]}>
                <div className={styles["restorer-img-wrapper"]}>
                    <img src="/images/about-us-img/image-asset.jpeg" alt="" className={styles["restorer-img"]}/>
                </div>
                <div className={styles["restorer-description"]}>
                     <h2 className={styles["restorer-title"]}>Art Restoration & Conservation</h2>
                     <div className={styles["description-about-section"]}>
                      <p>At Antique World, we don’t just curate antique art—we also preserve it for generations to come. Our expert restoration services bring new life to aged, damaged, or timeworn artworks while maintaining their historical integrity.</p>
                                 <p>We specialize in:</p>
                                 <ul className={styles["list-about-section"]}>
                                   <li>Cleaning and removing years of dirt and discoloration</li>
                                   <li>Repairing tears, cracks, and flaking paint</li>
                                   <li>Retouching faded colors while preserving authenticity</li>
                                   <li>Frame restoration and conservation</li>
                                 </ul>
                                 <p>If you have a cherished artwork in need of expert restoration, we’d love to help. Don't hesitate to <Link to="/contact-us">contact us</Link>.</p>
                     </div>
                </div>

        
        </section>

        <section className={styles["sell-your-art-container"]}>
        <div className={styles["sell-your-art-img-wrapper"]}>
                    <img src="/images/about-us-img/vincentas-liskauskas-TPhZnl2NEws-unsplash.jpg" alt="" className={styles["sell-your-art-img"]} />
                </div>
                <div className={styles["sell-your-art-description"]}>
                     <h2 className={styles["sell-your-art-title"]}>Sell Your Art & Antiques</h2>
                     <div className={styles["description-about-section"]}>
                     <p>Have a treasured artwork or antique piece you’re ready to part with?</p>
                     <p>At Antique World, we offer a trusted and seamless process for selling fine art, vintage collectibles, and antique masterpieces. Whether you're downsizing, handling an estate, or simply looking for a new home for your cherished piece, we’re here to help.</p>
                     <p>We evaluate each item with care, considering its history, condition, and market value. Our team works with private collectors, auction houses, and art enthusiasts to ensure your piece finds the right buyer at a fair price.</p>
                     <p>Interested in selling? Don't hesitate to <Link to="/contact-us">contact us</Link>. Let’s preserve the beauty of your art while finding it a new place to be admired.</p>
                     </div>
        
                </div>


        </section>
        </div>
        </>
    )
}