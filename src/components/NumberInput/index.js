import './index.css';

export default function NumberInput({label, id, defaultValue = 0, setValueState, unit}) {

    const onInputChange = (e) => {
        var n = parseInt((e.target.value).replace(/\D/g,''),10);  
        setValueState(n);
        e.target.value = n.toLocaleString();
    }

    return (
        <>
            <label className={"numberInputLabel"}>
                {label}
                <div className={"inputWithUnit"}>
                    <input
                        className={"numberInput"}
                        id={id}
                        placeholder={`Input ${label}`}
                        defaultValue={defaultValue || 0}
                        onChange={onInputChange}
                    />
                    {
                        unit && <span className={"unit"}>{unit}</span>
                    }
                </div>

            </label>
            <br/>
        </>
    );
}