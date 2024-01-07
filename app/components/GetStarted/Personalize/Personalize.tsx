import React, {useEffect, useState} from 'react';
import Typography from "@/Components/Typography/Typography";
import styles from "@/app/components/GetStarted/GetStarted.module.scss";
import Container from "@/Components/Container/Container";
import {useCardEllipseAnimation} from "@/hooks/useCardEllipseAnimation";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import {useCombinedRefs} from "@/hooks/useCombinedRefs";

const Personalize = () => {
  const {componentRef, transformStyle} = useCardEllipseAnimation()
  const animateClass = `${styles.fadeIn}`
  const RefForLayout = useObserverAnimation({
    amount: "one",
    classes: `.${styles['layout-component']}`,
    animateClass,
    threshold: 0.1
  })
  const combinedRef = useCombinedRefs(componentRef, RefForLayout);

  return (
    <Container component='section' ref={combinedRef}>
      <div className={styles['layout-component']}>
        <div className={styles['section-content']}>
          <Typography component='h3' variant='h2' className={styles['personalize-title']}>Personalize
            your <span>experience</span>
          </Typography>
          <Typography component='p' variant='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.
          </Typography>
        </div>
        <div className={styles['image-wrapper']}>
          <div className={styles['feature-circle']} style={transformStyle}/>
          <div className={styles["layout-image-block"]}>
            <img
              src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794be386e39e2da297f7_Frame_2.jpg"
              loading="lazy" width="574"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 89vw, (max-width: 991px) 42vw, (max-width: 1439px) 41vw, 590px"
              alt="Frame"
              srcSet="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794be386e39e2da297f7_Frame_2-p-500.jpg 500w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794be386e39e2da297f7_Frame_2-p-800.jpg 800w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794be386e39e2da297f7_Frame_2-p-1080.jpg 1080w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794be386e39e2da297f7_Frame_2.jpg 1232w"
            />
          </div>
        </div>
      </div>

    </Container>
  );
};

export default Personalize;