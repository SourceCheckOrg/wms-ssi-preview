import styles from './preview.module.css'
import utilStyles from '../styles/utils.module.css'

export const siteTitle = 'SourceCheck Preview'

export default function Preview({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <>
          <h2 className={utilStyles.headingLg}>
              <a className={utilStyles.colorInherit}>SourceCheck Preview</a>
          </h2>
        </>
      </header>
      <main>{children}</main>
    </div>
  )
}
