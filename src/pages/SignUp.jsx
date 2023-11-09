import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

const validationSchema = Yup.object({
    username: Yup.string().required("Vui lòng nhập tên tài khoản!"),
    phone: Yup.string().required("Vui lòng nhập số điện thoại!"),
    address: Yup.string().required("Vui lòng nhập địa chỉ!"),
    password: Yup.string()
        .required("Vui lòng nhập nhập mật khẩu!")
        .min(6, "Mật khẩu quá ngắn! mật khẩu phải có ít nhất 6 kí tự"),
    confirmPassword: Yup.string()
        .required("Vui lòng nhập nhập lại mật khẩu!")
        .oneOf([Yup.ref("password"), null], "Nhập lại mật khẩu không đúng"),
});

function SignUp() {
    const [loading, setLoading] = useState(false);

    const showSuccessNoti = () => toast.success("Thêm thành công!");
    const showErorrNoti = () => toast.error("Có lỗi xảy ra!");

    const form = useFormik({
        initialValues: {
            name: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: handleFormsubmit,
    });
    //

    function handleFormsubmit(values) {
        setLoading(true);
        fetch("http://localhost:5000/api/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.success) {
                    setLoading(false);
                    showSuccessNoti();
                    form.resetForm();
                    form.values.confirmPassword = "";
                } else {
                    setLoading(false);
                    console.log(values);
                    showErorrNoti();
                }
            })
            .catch(() => {
                setLoading(false);
                console.log(values);
                showErorrNoti();
            });
    }
    //

    return (
        <>
            <div>
                <ToastContainer hideProgressBar />
                <section className=" ">
                    <div className=" mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                        <div className=" w-[600px] rounded-[24px]  justify-center gap-4 flex  z-10  justify items-center  border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                            <div className="space-y-4 p-8 w-[400px]">
                                <h1 className="text-center text-2xl font-semibold text-gray-900">Đăng ký tài khoản</h1>

                                <form onSubmit={form.handleSubmit}>
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
                                                        className={clsx(
                                                            "focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300  p-2.5 pr-0 text-gray-900    sm:text-sm",
                                                            {
                                                                invalid: form.touched.name && form.errors.name,
                                                            }
                                                        )}
                                                        onChange={form.handleChange}
                                                        onBlur={form.handleBlur}
                                                        value={form.values.name}
                                                        placeholder="Tên người dùng"
                                                    />
                                                    <span
                                                        className={clsx("text-sm text-red-500 opacity-0", {
                                                            "opacity-100": form.touched.name && form.errors.name,
                                                        })}
                                                    >
                                                        {form.errors.name || "No message"}
                                                    </span>
                                                </div>
                                                <div className="mb-2">
                                                    <label
                                                        htmlFor="name"
                                                        className="mb-2 select-none  font-semibold text-gray-900  "
                                                    >
                                                        Số điện thoại
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        id="phone"
                                                        className={clsx(
                                                            "focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300  p-2.5 pr-0 text-gray-900    sm:text-sm",
                                                            {
                                                                invalid: form.touched.phone && form.errors.phone,
                                                            }
                                                        )}
                                                        onChange={form.handleChange}
                                                        onBlur={form.handleBlur}
                                                        value={form.values.phone}
                                                        placeholder="Số điện thoại"
                                                    />
                                                    <span
                                                        className={clsx("text-sm text-red-500 opacity-0", {
                                                            "opacity-100": form.touched.phone && form.errors.phone,
                                                        })}
                                                    >
                                                        {form.errors.phone || "No message"}
                                                    </span>
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
                                                        onChange={form.handleChange}
                                                        onBlur={form.handleBlur}
                                                        value={form.values.password}
                                                        placeholder="Nhập mật khẩu của bạn"
                                                        className={clsx("text-input w-full py-2", {
                                                            invalid: form.touched.password && form.errors.password,
                                                        })}
                                                    />
                                                    <span
                                                        className={clsx("text-sm text-red-500 opacity-0", {
                                                            "opacity-100":
                                                                form.touched.password && form.errors.password,
                                                        })}
                                                    >
                                                        {form.errors.password || "No message"}
                                                    </span>
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
                                                        onChange={form.handleChange}
                                                        onBlur={form.handleBlur}
                                                        value={form.values.confirmPassword}
                                                        placeholder="Nhập lại mật khẩu của bạn"
                                                        className={clsx("text-input w-full py-2", {
                                                            invalid:
                                                                form.touched.confirmPassword &&
                                                                form.errors.confirmPassword,
                                                        })}
                                                    />
                                                    <span
                                                        className={clsx("text-sm text-red-500 opacity-0", {
                                                            "opacity-100":
                                                                form.touched.confirmPassword &&
                                                                form.errors.confirmPassword,
                                                        })}
                                                    >
                                                        {form.errors.confirmPassword || "No message"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-blue btn-md mt-4 w-full"
                                        disabled={!form.dirty || loading}
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
