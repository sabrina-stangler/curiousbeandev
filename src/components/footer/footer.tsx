import Icon from '../../assets/curiousbean-icon-color.svg'
import './footer.css'

export function Footer() {
  return (
    <div className="footer">
      <img src={Icon} alt="curiousbean-icon" height="100vh" />
      <p>
        <a className="email-link" href="mailto:sabstangler@gmail.com">Email me</a> if you'd like to work together.
      </p>
    </div>
  )
}