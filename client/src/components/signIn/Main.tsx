//import components
import ServerData from "./../../apis/userApi";

//import styles
import './Main.css';

function Main({ className }: { className?: string }) {
    return (
        <main className={className}>
            <ServerData />
        </main>
    );
}

export default Main;