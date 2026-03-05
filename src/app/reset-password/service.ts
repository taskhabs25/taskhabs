export async function verifyResetToken(token: string, email: string) {
  const res = await fetch("/api/verify-reset-token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, email }),
  });

  return res.json();
}

// export async function resetPassword(
//   token: string,
//   email: string,
//   password: string
// ) {
//   const res = await fetch("/api/reset-password", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ token, email, password }),
//   });

//   return {
//     ok: res.ok,
//     data: await res.json().catch(() => null),
//     status: res.status,
//   };
// }

export async function resetPassword(token: string, email: string, password: string) {
  const res = await fetch(
    "https://api.imeer.com.au/user/auth/reset-password",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token, email, password })
    }
  );

  return {
    ok: res.ok,
    status: res.status,
    data: await res.json().catch(() => null)
  };
}