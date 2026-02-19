import styles from './Navbar.module.css';

function Navbar() {
    return (
        <center>
        <nav className={styles.body}>
            <h2>Am Project</h2>
            <button>Login</button>
        </nav>
        </center>
    );
}
export default Navbar;