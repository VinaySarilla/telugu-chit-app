import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";
import Image from "next/image";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        <Tabs />
      </div>
    </div>
  );
}
