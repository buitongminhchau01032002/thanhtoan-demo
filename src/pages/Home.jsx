import { Link } from 'react-router-dom';

export default function HomePage({ user }) {
    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            <div>
                <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                    <label htmlFor="otp" className="font-bold text-4xl text-white text-center">
                        Wellcome!
                    </label>
                    <label htmlFor="otp" className="font-bold text-xl text-white text-center">
                        {user}
                    </label>

                    <Link
                        to={'/otp'}
                        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    >
                        <span>Make a transaction</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
