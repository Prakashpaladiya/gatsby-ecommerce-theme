import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Your Orders</span>
            <div className={styles.subSection}>
              <h3>Deliveries</h3>
              <p>
                To review the status of your order please visit the "My Orders"
                section of your Sunspel Account. You should receive an email
                notification when your package is dispatched. Please check your
                email inbox and your junk filter.
              </p>
              <p>
                We dispatch all orders within 24 hours of being placed. During
                our sale periods it can get very busy in our factory, orders may
                take a little longer to be dispatched so please add five working
                days just in case.
              </p>
              <p>
                If there’s something you want to know about your order, please
                get in touch with us at paladiyaprakash1996@gmail.com or call us
                on +91 72650 58399.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Returns & Exchanges</h3>
              <p>
                To review the status of your order please visit the "My Orders"
                section of your Sunspel Account. You should receive an email
                notification when your package is dispatched. Please check your
                email inbox and your junk filter.
              </p>
              <p>
                We dispatch all orders within 24 hours of being placed. During
                our sale periods it can get very busy in our factory, orders may
                take a little longer to be dispatched so please add five working
                days just in case.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Payment</span>
            <div className={styles.subSection}>
              <h3>Shipping Rates</h3>
              <p>
                To review the status of your order please visit the "My Orders"
                section of your Sunspel Account. You should receive an email
                notification when your package is dispatched. Please check your
                email inbox and your junk filter.
              </p>
              <p>
                We dispatch all orders within 24 hours of being placed. During
                our sale periods it can get very busy in our factory, orders may
                take a little longer to be dispatched so please add five working
                days just in case.
              </p>
              <p>
                If there’s something you want to know about your order, please
                get in touch with us at paladiyaprakash1996@gmail.com  call us on
                +91 72650 58399.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Currency</h3>
              <p>
                Our website automatically selects the currency that matches your
                delivery location. You can change this manually in the top left
                hand corner of the page.
              </p>
              <p>
                For deliveries to the India, we will bill you in Indian Rupee Only.
              </p>
              <p>
                Standard rate GST is included in all orders to the India
                Orders.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Suspect Fraud?</h3>
              <p>
                Given our high levels of security, it’s very unlikely fraudulent
                use of your card will take place on our website. But if a
                fraudulent transaction does take place, first contact your
                credit or debit card company so they can protect your card and
                reimburse you. Then let us know at customerservice@example.com
                and we will work with your card company to minimise any further
                inconvenience to you.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
