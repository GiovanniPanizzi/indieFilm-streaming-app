//import components

//import styles
import './Main.css';

function Main({ className }: { className?: string }) {
    return (
        <main className={className}>
            <div className="hero__content">
                <div className="video__dark__overlay"></div>
                <video src="/public/videos/ModernTimesNCProduction.mp4" className="hero__video__background" autoPlay loop muted>
                </video>
                <div className="title__and__explenation__text">
                    <h1>INDIE FILMS</h1>
                    <p>Watch, share, connect</p>
                </div>
            </div>
            <div className="main__content">
                <h2>INDIE FILMS is a platform where you can: </h2>
                <ul className="vision__list">
                    <li className="vision__list__li">Whatch the best indipendent films, shorts and series</li>
                    <li className="vision__list__li">Publish your masterpieces and present your work to fellow creators</li>
                    <li className="vision__list__li">Connect with film creatives, explore their work, and collaborate</li>
                </ul>
            </div>
        </main>
    );
}

export default Main;
