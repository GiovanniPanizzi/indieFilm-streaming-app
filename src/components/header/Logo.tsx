//import styles
import './Logo.css'

function Logo({ className }: { className?: string }) {
    return (
        <div className={className}>
            <a href="/" className="logo__link">
                <img src="./../../../public/favicon.png" alt="Logo" className="logo__image" />
            </a>
        </div>
    );
}

//export component
export default Logo;