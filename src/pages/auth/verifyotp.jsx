import Footer from "../../components/footer";
import Header1 from "../../components/header2";
import Footer1 from "../../components/footer2";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const VerifyOtp = ({ data }) => {
  const [loading, Setloading] = useState(false);

  // OTP boxes
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // 🔑 IMPORTANT: expiredAt as STATE (not const)
  const [expiredAt, setExpiredAt] = useState(data.expired_at);

  // Timer & resend
  const [timeLeft, setTimeLeft] = useState(0);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef([]);

  const email = data.email;

  // ⏳ Countdown timer (runs again when expiredAt changes)
  useEffect(() => {
    if (!expiredAt) return;

    const expiryTime = new Date(expiredAt).getTime();

    const interval = setInterval(() => {
      const diff = Math.floor((expiryTime - Date.now()) / 1000);

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        setCanResend(true);
      } else {
        setTimeLeft(diff);
        setCanResend(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiredAt]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  // OTP change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Backspace handling
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Verify OTP
  const handleOtp = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");

    if (finalOtp.length < 6) {
      toast.error("Please enter complete OTP");
      return;
    }

    try {
      Setloading(true);

      await axios.post("http://127.0.0.1:5000/auth/verifyotp", {
        type: data.type,
        email,
        otp: finalOtp,
      });

      toast.success("OTP verified");
      window.location.href = "/";
    } catch (error) {
      toast.error(error?.response?.data?.message || "Invalid OTP");
    } finally {
      Setloading(false);
    }
  };

  // 🔁 Resend OTP (FIXED)
  const handleResendOtp = async () => {
    try {
      setCanResend(false);
      toast.loading("Resending OTP...");

      const res = await axios.post(
        "http://127.0.0.1:5000/auth/resendotp",
        {
          email,
          type: data.type,
        }
      );

      toast.dismiss();
      toast.success("OTP resent successfully");

      // ✅ VERY IMPORTANT: update expiredAt from backend
      setExpiredAt(res.data.data.data.expired_at);

      // reset OTP boxes
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0].focus();

    } catch (error) {
      toast.dismiss();
      toast.error("Failed to resend OTP");
      setCanResend(true);
    }
  };

  return (
    <>
      <Header1 />

      <div className="w-full cn3">
        <div className="flex justify-center lg:py-24 py-20">
          <div className="w-full max-w-2xl lg:py-16 pt-10 px-6 text-center">
            <h1 className="font-[Playfair_Display] lg:text-[2.5rem] text-[1.9rem] tracking-[0.05em] text-[#6f6f6f]">
              Verify OTP
            </h1>

            <form className="space-y-8" onSubmit={handleOtp}>
              {/* OTP BOX INPUT */}
              <div className="w-full flex justify-center gap-3 mt-8 mb-5">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="lg:w-12 w-full h-12 border border-gray-400 rounded-md text-center text-lg text-gray-700 outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-400 transition"
                  />
                ))}
              </div>

              <p className="text-gray-600 mt-2 mb-4">
                Your 6-Digit OTP is sent on :  {email}
              </p>

              {/* Timer */}
              <p className="text-sm text-gray-500 mb-3">
                {timeLeft > 0 ? (
                  <>
                    OTP expires in{" "}
                    <span className="font-medium text-gray-700">
                      {formatTime(timeLeft)}
                    </span>
                  </>
                ) : (
                  <span className="text-red-600">OTP expired</span>
                )}
              </p>

              {/* Resend */}
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={!canResend}
                className={`text-sm underline ${
                  canResend
                    ? "text-gray-600 hover:text-gray-800"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                Resend OTP
              </button>

              {/* Submit */}
              <div className="lg:px-50 px-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-12 py-3 bg-[#ad2132] text-white text-lg tracking-wide disabled:opacity-60"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
