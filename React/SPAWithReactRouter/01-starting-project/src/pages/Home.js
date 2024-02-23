import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/products");
    }
    return <>
        <h1>Home Page</h1>
        <p>
            <button onClick={navigateHandler}>
                Navigate
            </button>
        </p>
    </>
}
export default HomePage;