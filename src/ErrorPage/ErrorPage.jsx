import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex-1 justify-center mt-32  lg:mt-52">
            <h1 className="text-center text-8xl font-bold text-red-900">404</h1>
            <h2 className="text-center font-bold">Page Not Found</h2>
            <div className="flex justify-center">
            <Link to='/'><button className=" bg-blue-500 text-white mt-1 p-1 px-3 rounded-md">Go To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;