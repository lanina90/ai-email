import React from 'react';
import Container from "@/Components/Container/Container";
import Typography from "@/Components/Typography/Typography";
import styles from './Solutions.module.scss'
import Button from "@/Components/UI/Button/Button";

const Solutions = () => {
  return (
    <Container component='section'>
      <div className={styles['solution-title']}>
        <Typography component='h2' variant='h2'>All in One<span> Solutions</span></Typography>
        <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      </div>

        <div className={styles['layout-wrapper']}>
          <div className={styles['card-item']}>
            <div className={styles['image-wrapper-1']}>
              <div className={styles['icon-wrapper']}>
                <div className={styles.icon}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c067e4439f33782047b3_Integration_Icon_2.png"
                    loading="lazy" alt="Icon"/>
                </div>
                <div className={styles.icon}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c067251a3b5b974f34dd_Integration_Icon_8.png"
                    loading="lazy" alt="Icon"/>
                </div>
                <div className={styles.icon}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c067748b0481b1e460f0_Integration_Icon_6.png"
                    loading="lazy" alt="Icon"/>
                </div>
                <div className={styles.icon}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c06746fa9d4b505bc679_Integration_Icon_5.png"
                    loading="lazy" alt="Icon"/>
                </div>
              </div>
              <div className={styles['icon-wrapper']}>
                <div className={styles.icon}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c067bc0c28ebed7335e1_Integration_Icon_1.png"
                    loading="lazy" alt="Icon"/>
                </div>
                <div className={styles.icon}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c066f2a3ed8823f9ecee_Integration_Icon_3.png"
                    loading="lazy" alt="Icon"/>
                </div>
                <div className={styles.icon}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c06771567b1a6e79cc2b_Integration_Icon_7.png"
                    loading="lazy" alt="Icon"/>
                </div>
                <div className={styles.icon}>
                  <img
                    src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6576c066bc0c28ebed733580_Integration_Icon_4.png"
                    loading="lazy" alt="Icon"/>
                </div>
              </div>
            </div>
            <div className={styles['card-content']}>
              <Typography component='h3' variant='h5'>Integration</Typography>
              <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.</Typography>
              <Button variant='text' component='link' href='/intergation'>View All</Button>
            </div>
          </div>
          <div className={styles['card-item']}>
            <div className={styles['image-wrapper']}>
              <img
                src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794caaedf9d2fe0b608c_Service_Frame_1.png"
                loading="lazy" width="243" alt="Frame"/>
            </div>
            <div className={styles['card-content']}>
              <Typography component='h3' variant='h5'>Products</Typography>
              <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.</Typography>
              <Button variant='text' component='link' href='/products'>View All</Button>
            </div>
          </div>
          <div></div>
        </div>
    </Container>
  );
};

export default Solutions;