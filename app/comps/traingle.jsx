"use client";
import { useState } from "react";



export default function Traingle(q,a){
    const [open , isopen] = useState(false)

    const content = () => {
        if (open) {
            return (
                <div className="text-h3">hi</div>
            )
        }
    }
    return (
        <div className="flex">
            
            <button onClick={isopen(!open)}>معلومات اخري...</button>
        {}
        <h1 className="text-h4">معلومات اخري</h1></div>
    )

}