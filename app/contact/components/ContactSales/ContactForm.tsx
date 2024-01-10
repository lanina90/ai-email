'use client'

import React from 'react';
import {useObserverAnimation} from "@/hooks/useObserverAnimation";
import Container from "@/Components/Container/Container";
import styles from "./ContactSales.module.scss";
import Input from "@/app/contact/components/ContactSales/Input";
import SelectTopic from "@/app/contact/components/ContactSales/SelectTopic";
import classNames from "classnames";
import Button from "@/Components/UI/Button/Button";


const ContactForm = () => {
  const animateClass = `${styles.fadeIn}`
  const refForComponent = useObserverAnimation({
    amount: "one",
    classes: `.${styles['contact-form']}`,
    animateClass,
    threshold: 0.1
  })

  return (
    <Container component='section' ref={refForComponent}>
      <form className={styles['contact-form']}>
        <div className={styles['form-field-2col']}>
          <Input name="Contact-First-Name" id="Contact-First-Name" label='First name'/>
          <Input name="Contact-Last-Name" id="Contact-Last-Name" label='Last name'/>
        </div>
        <div className={styles['form-field-2col']}>
          <Input name="Email" id="Email" label='Email'/>
          <Input name="Phone" id="Phone" label='Phone Number'/>
        </div>
        <SelectTopic/>
        <div className={styles["form-field-wrapper"]}>
          <label htmlFor="Contact-Message">Message</label>
          <textarea id="Contact-Message"
                    name="Contact-Message"
                    maxLength={500}
                    placeholder="Type your message..."
                    required
                    className={classNames(styles['form-input'], styles['text-input'])}>

          </textarea>
        </div>
        <div className={styles["form-field-wrapper"]}>
          <label id="Contact-Checkbox" className={styles['form-checkbox']}>

            <input id="Contact-Checkbox-Box"
                   type="checkbox"
                   name="Contact-2-Checkbox"
                   required
            />
            <div className={styles['checkbox-input']}/>
            <span>
              I accept the <a
              href="/policies/terms-and-condition">Terms and Conditions</a></span>
          </label>
        </div>

        <Button  variant='filled' component='button'>Submit</Button>
      </form>
    </Container>
  );
};

export default ContactForm;