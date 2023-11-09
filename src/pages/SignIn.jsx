import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useContext, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import toast from 'react-hot-toast';

export default function SignInPage() {
    const { user, setUser } = useContext(UserContext);
    const [ph, setPh] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function signIn() {
        const usersRef = collection(db, 'users');
        const q = query(
            usersRef,
            where('phone', '==', '+' + ph),
            where('password', '==', password)
        );

        const querySnapshot = await getDocs(q);
        const result = querySnapshot.docs;
        if (result.length > 0) {
            setUser(result[0].data());
            navigate('/home');
        } else {
            toast.error('Login failed');
        }
    }
    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            <div>
                <div className="w-[330px] flex flex-col gap-4 rounded-lg p-4">
                    <div htmlFor="otp" className="font-bold text-4xl text-white text-center">
                        Sign In
                    </div>
                    <div className="mt-3">
                        <PhoneInput country={'vn'} value={ph} onChange={setPh} />
                        <input
                            type="password"
                            className="mt-2 rounded-sm py-1.5 px-3 outline-none w-full"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={signIn}
                        className="bg-emerald-600 w-full flex items-center justify-center py-2.5 text-white rounded"
                    >
                        <span>Sign In</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
