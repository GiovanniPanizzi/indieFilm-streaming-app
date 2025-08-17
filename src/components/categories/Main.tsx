//import components

//import styles
import './Main.css';

function Main({ className }: { className?: string }) {
    return (
        <main className={className}>
            <h2>Categories</h2>
            <div className="categories__list">
                <div className="category">
                    <h3>Action</h3>
                    <p>Explore thrilling action films that keep you on the edge of your seat.</p>
                </div>
                <div className="category">
                    <h3>Drama</h3>
                    <p>Dive into emotional stories that resonate with the human experience.</p>
                </div>
                <div className="category">
                    <h3>Comedy</h3>
                    <p>Enjoy a collection of films that will make you laugh out loud.</p>
                </div>
                <div className="category">
                    <h3>Documentary</h3>
                    <p>Learn and discover through insightful documentaries.</p>
                </div>
            </div>
        </main>
    );
}

export default Main;
