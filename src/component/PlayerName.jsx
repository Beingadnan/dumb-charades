import { useNavigate } from "react-router-dom";
import styles from './PlayerName.module.css'
export default function PlayerName({name,setName,err,setErr}) {

    const navigate = useNavigate();

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleClick = () => {
        if (!name) {
            setErr("Please add your name.");
            return;
        }
        localStorage.setItem("userDetails", JSON.stringify({ name }));
        navigate('/welcome')
    };

    return (
        <div>
            <label htmlFor='Name'>Player Name: </label>
            <input type='text' placeholder='Enter your Name' onChange={handleChange}  />
            <div className={styles.err}>
               {err && <p>{err}</p>}
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}
