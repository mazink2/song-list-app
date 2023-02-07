/*
    Spinner:
    Component that renders loading spinner.
*/
import { ImSpinner } from "react-icons/im";
import styles from "./Spinner.module.scss";

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <ImSpinner />
        </div>
    );
};

export default Spinner;
