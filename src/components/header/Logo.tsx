
function Logo({ className }: { className?: string }) {
    return (
        <div className={className}>
        <a href="/" className="logo__link">
            <img src="/logo.png" alt="Logo" className="logo__image" />
        </a>
        </div>
    );
}

export default Logo;