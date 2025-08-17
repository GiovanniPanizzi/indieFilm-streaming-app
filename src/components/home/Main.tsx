//import components

//import styles
import './Main.css';

function Main({ className }: { className?: string }) {
    return (
        <main className={className}>
            <div className="hero__content">
                <video src="/public/videos/ModernTimesNCProduction.mp4" className="hero__video__background" autoPlay loop muted>
                </video>
                <div className="title__and__explenation__text">
                    <h1>Welcome to INDIE FILMS</h1>
                    <p>Watch, share, and connect: indie films and film crew networking in one app</p>
                </div>
            </div>
            <div className="main__content">
                <h2>INDIE FILMS is a platform where you can: </h2>
                <ul className="vision__list">
                    <li className="vision__list__li">Whatch the best indipendent films</li>
                    <li className="vision__list__li">Publish your masterpieces</li>
                    <li className="vision__list__li">Make connection with creatives in the films, watch their contents and collaborate</li>
                </ul>
            </div>
        </main>
    );
}

export default Main;
