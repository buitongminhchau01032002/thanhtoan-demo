import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";

function SignUp() {
    const [loading, setLoading] = useState(false);

    const showSuccessNoti = () => toast.success("Thêm thành công!");
    const showErorrNoti = () => toast.error("Có lỗi xảy ra!");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [progress, setProgress] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const handlePassword = (passwordValue) => {
        const strengthChecks = {
            length: 0,
            hasUpperCase: false,
            hasLowerCase: false,
            hasDigit: false,
            hasSpecialChar: false,
        };

        strengthChecks.length = passwordValue.length >= 8 ? true : false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
        strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
        strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

        let verifiedList = Object.values(strengthChecks).filter((value) => value);

        let strength = verifiedList.length == 5 ? "Strong" : verifiedList.length >= 2 ? "Medium" : "Weak";

        setPassword(passwordValue);
        setProgress(`${(verifiedList.length / 5) * 100}%`);
        setMessage(strength);

        console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
    };

    const getActiveColor = (type) => {
        if (type === "Strong") return "#8BC926";
        if (type === "Medium") return "#FEBD01";
        return "#FF0054";
    };

    return (
        <>
            <div>
                <ToastContainer hideProgressBar />
                <section className=" ">
                    <div className=" mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                        <div className=" w-[600px] rounded-[24px]  justify-center gap-4 flex  z-10  justify items-center  border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                            <div className="space-y-4 p-8 w-[400px]">
                                <h1 className="text-center text-2xl font-semibold text-gray-900">Đăng ký tài khoản</h1>
                                <form
                                    onSubmit={() => {
                                        console.log("submit");
                                    }}
                                >
                                    <div className="flex flex-col w-full">
                                        <div className="flex w-full">
                                            <div className="flex flex-col w-full justify-between">
                                                <div className="mb-2">
                                                    <label htmlFor="name" className="block font-medium text-gray-900 ">
                                                        Họ và tên
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300  p-2.5 pr-0 text-gray-900    sm:text-sm"
                                                        value={name}
                                                        onChange={({ target }) => {
                                                            setName(target.value);
                                                        }}
                                                        placeholder="Tên người dùng"
                                                    />
                                                </div>
                                                <div className="mb-2">
                                                    <label
                                                        htmlFor="name"
                                                        className="mb-2 select-none  font-semibold text-gray-900  "
                                                    >
                                                        Số điện thoại
                                                    </label>
                                                    <PhoneInput country={"vn"} value={phone} onChange={setPhone} />
                                                </div>
                                                <div className="mb-2">
                                                    <label
                                                        htmlFor="password"
                                                        className="mb-2 block font-medium text-gray-900 "
                                                    >
                                                        Mật khẩu
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        value={password}
                                                        onChange={({ target }) => {
                                                            handlePassword(target.value);
                                                        }}
                                                        placeholder="Nhập mật khẩu của bạn"
                                                        className="text-input w-full py-2"
                                                    />
                                                    <div className="progress-bg">
                                                        <div
                                                            className="progress"
                                                            style={{
                                                                width: progress,
                                                                backgroundColor: getActiveColor(message),
                                                            }}
                                                        ></div>
                                                    </div>
                                                    {password.length !== 0 ? (
                                                        <p
                                                            className="message"
                                                            style={{ color: getActiveColor(message) }}
                                                        >
                                                            Your password is {message}
                                                        </p>
                                                    ) : null}
                                                </div>
                                                <div className="mb-2">
                                                    <label
                                                        htmlFor="confirmPassword"
                                                        className="mb-2 block font-medium text-gray-900 "
                                                    >
                                                        Nhập lại mật khẩu
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        id="confirmPassword"
                                                        value={confirmPassword}
                                                        onChange={({ target }) => {
                                                            setConfirmPassword(target.value);
                                                        }}
                                                        placeholder="Nhập lại mật khẩu của bạn"
                                                        className="text-input w-full py-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-blue btn-md mt-4 w-full"
                                        disabled={loading}
                                    >
                                        {!loading ? (
                                            <span>Đăng ký</span>
                                        ) : (
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4 animate-spin"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                                    />
                                                </svg>
                                                <span className="ml-1">Đang đăng ký</span>
                                            </div>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SignUp;
