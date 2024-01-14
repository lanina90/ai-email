import React from 'react';
import styles from "./AuthForm.module.scss";
import Button from "@/Components/UI/Button/Button";
import {Facebook} from "lucide-react";
import Typography from "@/Components/Typography/Typography";
import Link from "next/link";

const AuthForm = ({page}: {page: "signup" | "signin"}) => {
  return (
    <form className={styles['sign-up-form']}>
      <input className={styles['form-input']} name="Sign-Up-Form-Email" placeholder="Email" type="email"
             id="Sign-Up-Form-Email" required/>
      <input className={styles['form-input']} name="Sign-Up-Form-Password"
             placeholder="Password" type="password" id="Sign-Up-Form-Password"
             required/>
      <Button variant='filled' component='button'>{page === "signup" ? "Sign Up" : "Log In"}</Button>
      <div className={styles['divider']}>
        <div className={styles["line-divider"]}/>
      </div>
      <div className={styles['form-buttons-wrapper']}>
        <Button component='link' href="https://google.com"
                variant='text'>
          <svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.5 11.79C21.5 15.94 19.29 21 12.63 21C7.62461 21.0332 3.53852 17.0053 3.5 12C3.53852 6.99461 7.62461 2.9667 12.63 2.99996C14.7007 3.00764 16.7085 3.71213 18.33 4.99996C18.442 5.09149 18.5109 5.22557 18.52 5.36996C18.5206 5.51605 18.463 5.65637 18.36 5.75996C17.709 6.35516 17.0882 6.98261 16.5 7.63996C16.3289 7.82826 16.0422 7.85432 15.84 7.69996C14.9161 7.01624 13.7888 6.66394 12.64 6.69996C9.68528 6.69996 7.29 9.09524 7.29 12.05C7.29 15.0047 9.68528 17.4 12.64 17.4C15.64 17.4 16.91 16.12 17.57 13.85H13C12.7239 13.85 12.5 13.6261 12.5 13.35V10.7C12.5 10.4238 12.7239 10.2 13 10.2H21C21.2302 10.1985 21.4244 10.3711 21.45 10.6C21.4871 10.9955 21.5038 11.3927 21.5 11.79Z"
              fill="currentColor"></path>
          </svg>
          {page === "signup" ? "Sign up" : "Log in"} with Google
        </Button>
        <Button component='link' href="https://facebook.com"
                variant='text'>
          <Facebook/>
          {page === "signup" ? "Sign up" : "Log in"} with Facebook
        </Button>
        <Button component='link' href="https://apple.com"
                variant='text'>
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M11.3462 6.56481C11.4594 6.66462 11.6104 6.7103 11.76 6.68997C12.7611 6.50537 13.6566 5.95234 14.27 5.13997C14.8664 4.38728 15.2156 3.46873 15.27 2.50997C15.2745 2.35109 15.2046 2.19921 15.0811 2.09921C14.9576 1.9992 14.7945 1.96251 14.64 1.99997C13.6751 2.25193 12.8121 2.79697 12.17 3.55997C11.5599 4.29704 11.2086 5.21395 11.17 6.16997C11.1686 6.32091 11.2329 6.465 11.3462 6.56481ZM18.7025 9.22549C18.1109 9.78066 17.18 10.6542 17.18 12.51C17.1661 14.1669 18.076 15.6938 19.54 16.47C19.7211 16.5518 19.8382 16.7313 19.84 16.93C19.84 17 17.74 22 15.22 22C14.6683 22 14.3006 21.8261 13.8979 21.6357C13.41 21.405 12.8705 21.15 11.89 21.15C10.9236 21.15 10.3828 21.3977 9.88507 21.6257C9.46094 21.82 9.06815 22 8.47001 22C6.15001 22 3.00001 17.14 3.00001 12.75C2.96015 11.51 3.26846 10.2837 3.89001 9.20997C4.76661 7.7243 6.32762 6.77494 8.05001 6.67997C8.86168 6.67997 9.52612 6.91887 10.1546 7.14484C10.7186 7.34761 11.2536 7.53997 11.84 7.53997C12.3999 7.53997 12.8517 7.36465 13.3473 7.17233C13.9495 6.9387 14.6163 6.67997 15.62 6.67997C17.45 6.67997 19.18 7.99997 19.18 8.58997C19.18 8.77744 18.9781 8.96693 18.7025 9.22549Z"
                  fill="currentColor"></path>
          </svg>
          {page === "signup" ? "Sign up" : "Log in"} with Apple
        </Button>
      </div>
      <div className={styles['form-log-in']}>
        <Typography component='p' variant='p'>{page === "signup" ? "Already have an account?" : "Have no an account?"}</Typography>
        <Link href={page === "signup" ? "/log-in" : "/sign-up"}>{page === "signup" ? "Log In" : "Sign Up"}</Link>
      </div>
    </form>
  );
};

export default AuthForm;