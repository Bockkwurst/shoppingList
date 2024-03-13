import styles from "./List.module.css"
function Checkbox({name, checked, onChange}){
    return(
        <div className="checkbox">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                />
            <label htmlFor={name}>{name}</label>
        </div>
    );
}
export default Checkbox