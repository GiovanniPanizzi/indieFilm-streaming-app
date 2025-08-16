//import components

//import styles
import './Main.css';

function Main({ className }: { className?: string }) {
    return (
        <main className={className}>
            <div className="main-content">
                <h1>Welcome to INDIE FILMS</h1>
                <p>Watch, share, and connect: indie films and film crew networking in one app</p>
            </div>
        </main>
    );
}

export default Main;
