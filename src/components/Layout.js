import React from "react";
import Topnav from "./Topnav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Topnav />
      <main className="container pt-3">{children}</main>
    </>
  );
}
