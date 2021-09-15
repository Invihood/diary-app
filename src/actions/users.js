import axios from "axios";

export const registration = async (name, surname, email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/registration", {
            name,
            surname,
            email,
            password
        });
        
        alert(response.data.message);
    } catch (e) {
        alert(e.response.data.message);
    }
}