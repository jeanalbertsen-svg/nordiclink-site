import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div className="footerBrand">© {year} NORDICLINK CONSULTING</div>
          <div className="footerBrand">CVR no. 46136152</div>
        </div>
        </div>
    </footer>
  )
}
