import {useState} from 'react';

const MyInput = () => {

    const [user, setUser] = useState("Escriba su nombre");
    const [password, setPassword] = useState("Esciba su contraseña");
    const validate = () => {
        if(password === "252525"){
            return true;
        }
        return false;
    }


    return (
        <>
        <h2>User</h2>
        <h3>Usted esta escribiendo {user}</h3>
        <input onChange={(e) => setUser(e.target.value) }/>
        <h2>Password</h2>
        <h3>Usted esta escribiendo {password}</h3>
        <input onChange={(e) => setPassword(e.target.value) }/>
        <button onClick={() => {
            if(validate()){
                alert("Contraseña correcta");
            }else{
                alert("Contraseña incorrecta")
            }
        } }>
            Entrar
        </button>

        </>
    );
}

export default MyInput;