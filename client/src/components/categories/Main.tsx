//import components

//import styles
import './Main.css';

function Main({ className }: { className?: string }) {
    return (
        <main className={className}>
            <div className="main__container">
                <h2>Categories</h2>
                <ul className="categories__list">
                    <li><h3>Action</h3></li>
                    <li><h3>Romance</h3></li>
                    <li><h3>Documentary</h3></li>
                    <li><h3>Science fiction</h3></li>
                    <li><h3>Horror</h3></li>
                    <li><h3>Comedy</h3></li>
                    <li><h3>Animation</h3></li>
                    <li><h3>Thriller</h3></li>
                    <li><h3>Adventure</h3></li>
                    <li><h3>Fantasy</h3></li>
                </ul>
            </div>
        </main>
    );
}

export default Main;
