"use client";
import React from 'react';
import Image from "next/image";
import Header from "@/app/Header/Header";
import ButtonRegirter from "@/app/Button/ButtonRegister";
export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <Header />
                <div className="">
                    <Image
                        src="/maksim.jpg"
                        alt="Vercel Logo"
                        width={72}
                        height={16}
                    />
                </div>
            </div>
            <div className="buttonregister">
                <ButtonRegirter/>
            </div>
        </div>
    );
}