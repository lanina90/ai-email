import React from 'react';
import Container from "@/Components/Container/Container";
import styles from "@/app/components/GetStarted/GetStarted.module.scss";
import Typography from "@/Components/Typography/Typography";
import {useCardEllipseAnimation} from "@/hooks/useCardEllipseAnimation";
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import {useCombinedRefs} from "@/hooks/useCombinedRefs";

const Streamline = () => {
  const {componentRef, transformStyle} = useCardEllipseAnimation()
  const animateClass = `${styles.fadeIn}`
  const RefForLayout = useObserverAnimation({
    amount: "one",
    classes: `.${styles['layout-component']}`,
    animateClass,
    threshold: 0.2
  })
  const combinedRef = useCombinedRefs(componentRef, RefForLayout);

  return (
    <Container component='section' ref={combinedRef}>
      <div className={styles['layout-component']}>
        <div className={styles['image-wrapper']}>
          <div className={styles['feature-circle']} style={transformStyle}/>
          <div className={styles["layout-image-block"]}>
            <img
              src="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794b4d46e364072786c9_Frame_3.jpg"
              loading="lazy" width="574"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 89vw, (max-width: 991px) 42vw, (max-width: 1439px) 41vw, 590px"
              alt="Frame"
              srcSet="https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794b4d46e364072786c9_Frame_3-p-500.jpg 500w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794b4d46e364072786c9_Frame_3-p-800.jpg 800w, https://assets-global.website-files.com/656f1d3d61238bb5e4dfada3/6578794b4d46e364072786c9_Frame_3.jpg 1232w"
              />
          </div>
        </div>
        <div className={styles['section-content']}>
          <Typography component='h3' variant='h2' className={styles['personalize-title']}>Streamline workflows
            with <span>Robust Plan</span>
          </Typography>
          <Typography component='p' variant='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.
          </Typography>
        </div>

      </div>

    </Container>
  );
};

export default Streamline;