//import components

//import styles
import './Footer.css';

function Footer({ className }: { className?: string }) {
    return (
        <footer className={className}>
            <div className="footer-content">
                <p>&copy; 2025 Your Company</p>
            </div>
        </footer>
    );
}

export default Footer;