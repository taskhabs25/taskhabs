'use client';
import React from 'react';

export default function ResetPasswordPage() {
  // token & email will be populated client-side (useEffect) to avoid
  // Next.js prerender-time useSearchParams() errors.
  const [token, setToken] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      // Only runs in the browser
      const sp = new URLSearchParams(window.location.search);
      setToken(sp.get('token'));
      setEmail(sp.get('email'));
    } catch (e) {
      // ignore in non-browser environments
      setToken(null);
      setEmail(null);
    }
  }, []);

  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // UI: show/hide password
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // UI: real-time confirm validation (before submit)
  const [liveConfirmError, setLiveConfirmError] = React.useState<string>('');

  // min 8 chars, at least one lowercase, one uppercase, one number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  // Real-time confirm mismatch error
  React.useEffect(() => {
    // Only show mismatch after user starts typing confirm
    if (!confirm) {
      setLiveConfirmError('');
      return;
    }
    if (password !== confirm) setLiveConfirmError('Passwords do not match');
    else setLiveConfirmError('');
  }, [password, confirm]);

  function validate() {
    const errs: Record<string, string> = {};
    if (!password) errs.password = 'Password is required';

    if (password && !re.test(password)) {
      errs.password = 'Must be 8+ chars with uppercase, lowercase & number';
    }
    if (password !== confirm) errs.confirm = 'Passwords do not match';
    return errs;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    if (!token || !email) {
      setMessage({ type: 'error', text: 'Invalid reset link. Token or email is missing.' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://api.imeer.com.au/user/auth/reset-password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, email, password })
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const errText = data?.message || data?.error || `HTTP ${res.status}`;
        setMessage({ type: 'error', text: `Reset failed: ${errText}` });
      } else {
        setMessage({ type: 'success', text: 'Password reset successful. You may now return to the app and sign in.' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err?.message || 'Network error — please try again.' });
    } finally {
      setLoading(false);
    }
  }

  // Inline eye icon (no extra deps)
  const EyeIcon = ({ open }: { open: boolean }) =>
    open ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M10.2 6.3A9.3 9.3 0 0 1 12 6c6 0 9.5 6 9.5 6a16 16 0 0 1-3.1 4.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M6.5 7.6C3.7 9.9 2.5 12 2.5 12s3.5 7 9.5 7c1.1 0 2.1-.2 3.1-.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M9.9 9.9a3.5 3.5 0 0 0 4.2 4.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1E3A] px-6">
      <div className="w-full max-w-md rounded-2xl bg-[#132B50] p-8 shadow-xl">
        <h1 className="text-2xl font-semibold text-white mb-2">Reset Password</h1>
        <p className="text-blue-200 text-sm mb-6">Enter a new password for your account.</p>

        <form onSubmit={onSubmit} className="space-y-5">
          {/* PASSWORD */}
          <div>
            <label className="block text-sm text-blue-200 mb-1">New Password</label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full rounded-lg bg-[#0F2344] border px-3 py-2 text-white placeholder-blue-300 outline-none pr-11
                  ${errors.password ? 'border-red-500' : 'border-blue-500/40 focus:border-blue-400'}`}
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-200/80 hover:text-blue-100"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon open={showPassword} />
              </button>
            </div>

            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            <p className="text-xs text-blue-200/70 mt-2">
              Password must be at least 8 characters and include uppercase, lowercase and a number.
            </p>
          </div>

          {/* CONFIRM */}
          <div>
            <label className="block text-sm text-blue-200 mb-1">Confirm Password</label>

            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className={`w-full rounded-lg bg-[#0F2344] border px-3 py-2 text-white placeholder-blue-300 outline-none pr-11
                  ${errors.confirm || liveConfirmError ? 'border-red-500' : 'border-blue-500/40 focus:border-blue-400'}`}
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-200/80 hover:text-blue-100"
                aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
              >
                <EyeIcon open={showConfirm} />
              </button>
            </div>

            {/* Real-time validation error BEFORE submit */}
            {!errors.confirm && liveConfirmError && <p className="text-red-400 text-xs mt-1">{liveConfirmError}</p>}

            {/* Submit-time error (kept original behavior) */}
            {errors.confirm && <p className="text-red-400 text-xs mt-1">{errors.confirm}</p>}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#F28C28] hover:bg-[#ff9f3f] text-white font-medium py-2.5 transition disabled:opacity-60"
          >
            {loading ? 'Saving' : 'Save'}
          </button>
        </form>

        {/* MESSAGE */}
        {message && (
          <div
            className={`mt-6 text-sm rounded-lg px-4 py-3 ${
              message.type === 'success'
                ? 'bg-green-500/15 text-green-300 border border-green-400/30'
                : 'bg-red-500/15 text-red-300 border border-red-400/30'
            }`}
            role="status"
          >
            {message.text}
          </div>
        )}
      </div>
    </main>
  );
}