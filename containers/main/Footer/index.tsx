import { IconEnvelop, IconFacebook, IconInstagram } from '@/assets/icongroup';
import Link from 'next/link';
import styles from './index.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-wrapper']}>
        <p>@Schedo - 2024</p>
        <div className={styles['links']}>
          <Link href='/'>Privacy Policy</Link>
          <Link href='/'>FAQ</Link>
        </div>
        <div className={styles['socials']}>
          <Link href='/'>
            <IconEnvelop className={styles['envelop']} />
          </Link>
          <a href='https://instagram.com' target='_blank'>
            <IconInstagram className={styles['instagram']} />
          </a>
          <a href='https://facebook.com' target='_blank'>
            <IconFacebook className={styles['facebook']} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;