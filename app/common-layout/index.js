"use client";

import UserState from "@/context/UserContext";


export default function CommonLayout({ children }) {

  return <UserState>{children}</UserState>;
}
