import { HashLink } from "react-router-hash-link";
import Layout from "components/Layout";
import Card from "components/Card";
import Button from "components/Button";
import { pricing } from "contants/pricing";
import heroCover from "assets/hero-cover.svg";
import aboutCover from "assets/about-cover.jpg";
import contactCover from "assets/contact-cover.jpg";
import styles from "pages/home/Home.module.scss";

const Homepage = () => {
  return (
    <Layout>
      <div id="hero" className={styles.hero}>
        <div className={styles.heroText}>
          <h3>KeDA</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing ept. Facips,
            dolores!
          </p>
          <div className={styles.heroBtn}>
            <HashLink smooth to="/#pricing">
              <Button title="Explore now" />
            </HashLink>
          </div>
        </div>
        <div className={styles.heroCover}>
          <img src={heroCover} alt="hero" className={styles.heroImg} />
        </div>
      </div>

      <div id="about" className={styles.about}>
        <div className={styles.aboutText}>
          <div className={styles.aboutTitle}>
            <h3>About Us</h3>
          </div>
          <div className={styles.aboutDesc}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing ept. Molptia,
              unde.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing ept. Nesciunt
              quidem odio, iure ipsum ex maiores voluptatum asperiores vero esse
              adipisci?
            </p>
          </div>
        </div>
        <div className={styles.aboutCover}>
          <img src={aboutCover} alt="about" className={styles.aboutCoverImg} />
        </div>
      </div>

      <div id="pricing" className={styles.pricing}>
        <div className={styles.pricingText}>
          <h3>Pricing</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            error modi possimus voluptatem doloremque recusandae?
          </p>
        </div>
        <div className={styles.prices}>
          {pricing.map((price) => {
            return (
              <Card
                key={price.id}
                pricingName={price.name}
                pricingValue={price.price}
                pricingDesc={price.desc}
              />
            );
          })}
        </div>
      </div>

      <div id="contact" className={styles.contact}>
        <div className={styles.contactText}>
          <div className={styles.contactTitle}>
            <h3>Contact us</h3>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Telephone</p>
              <p className={styles.contactDetailsValue}>4400 - 88 - 823</p>
            </div>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Email</p>
              <p className={styles.contactDetailsValue}>info@keda.com</p>
            </div>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Instagram</p>
              <p className={styles.contactDetailsValue}>KeDA</p>
            </div>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Facebook</p>
              <p className={styles.contactDetailsValue}>KeDA</p>
            </div>
          </div>
        </div>
        <div className={styles.contactCover}>
          <img
            className={styles.contactCoverImg}
            src={contactCover}
            alt="contact"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
