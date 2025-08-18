//import components

//import styles
import './Main.css';

function Main({ className }: { className?: string }) {
    return (
        <main className={className}>
            <div className="main__container">
                <h2>Categories</h2>
                <ul className="categories__list">
                    <li>Action</li>
                    <li>Romance</li>
                    <li>Documentary</li>
                    <li>Science fiction</li>
                    <li>Horror</li>
                    <li>Comedy</li>
                    <li>Animation</li>
                    <li>Thriller</li>
                    <li>Adventure</li>
                    <li>Fantasy</li>
                </ul>
            </div>
        </main>
    );
}

export default Main;
