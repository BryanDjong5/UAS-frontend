"use client";

import styles from "./booking.module.css";
import { useState, type FormEvent } from "react";


export default function booking (){
    const [nama, setName] = useState("");
    const [noTelp, setNoTelp] = useState("");
    const [email, setEmail] = useState("");
    const [tanggal, setTanggal] = useState(""); 
    const [jumlahOrang, setJumlahOrang] = useState(1);
    const [acara, setAcara] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Data reservasi:", { nama, noTelp, email, tanggal, jumlahOrang, acara });
    };

    return (
        <div className={styles.booking}>
            
            <h1>Booking restoran</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input value={nama} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nama" />
              <input value={noTelp} onChange={(e) => setNoTelp(e.target.value)} type="text" placeholder="No Telepon" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
              <input value={tanggal} onChange={(e) => setTanggal(e.target.value)} type="date" placeholder="Tanggal Reservasi" />
              <input type="number" min={1} value={jumlahOrang} onChange={(e) => setJumlahOrang(Number(e.target.value))} placeholder="Jumlah Orang" />
              <input type="text" value={acara} onChange={(e) => setAcara(e.target.value)} placeholder="Acara (opsional)" />
              <button className={styles.submit}>Booking</button>
            </form>
        </div>
    );
}
