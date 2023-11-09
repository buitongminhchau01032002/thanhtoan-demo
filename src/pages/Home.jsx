import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function HomePage() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    function logOut() {
        setUser(null);
        navigate('/signin');
    }

    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            <div>
                <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                    <div htmlFor="otp" className="font-bold text-4xl text-white text-center">
                        Wellcome!
                    </div>
                    <div htmlFor="otp" className="font-bold text-xl text-white text-center">
                        {user?.phone}
                    </div>

                    <Link
                        to={'/otp'}
                        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    >
                        <span>Make a transaction</span>
                    </Link>
                    <button
                        onClick={logOut}
                        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </section>
    );
}
