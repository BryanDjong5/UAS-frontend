"use client";

import { useState, type FormEvent } from "react";
import styles from "./reservasi.module.css";

export default function Reservasi() {
    const [tujuan, setTujuan] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [jam, setJam] = useState("");
    const [jumlahOrang, setJumlahOrang] = useState(1);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Data reservasi:", { tujuan, tanggal, jam, jumlahOrang });
    };

    return (
        <div className={styles.page}>
        <div className={styles.card}>
            <h1 className={styles.title}>Reservasi</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" value={tujuan} onChange={(e) => setTujuan(e.target.value)} placeholder="Tujuan reservasi" />
                <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                <input type="time" value={jam} onChange={(e) => setJam(e.target.value)} />
                <input type="number" min={1} value={jumlahOrang} onChange={(e) => setJumlahOrang(Number(e.target.value))} />
                <button className={styles.submit}>Reservasi</button>
            </form>
        </div>
        </div>
    );
}