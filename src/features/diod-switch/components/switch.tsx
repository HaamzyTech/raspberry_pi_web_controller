"use client"

import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toggleDiod } from "../server/actions/diod";

type Props = {
    status: boolean
}

export default function SwitchToogle({ status}: Props) {
    const [checked, setChecked] = useState<boolean>(status)

    const handleChange = async() => {
        
        const response = await toggleDiod(!checked)
        
        if(response.error){
            alert(response.message)
            return
        }
        
        setChecked(!checked)


    }


    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center  space-y-3">
                <Switch 
                    checked={checked}
                    onCheckedChange={handleChange}
                    className="px-8 py-16 rounded-sm  bg-blue-200 hover:bg-blue-300 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-100 data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-black"
                />
                {
                    checked ?
                    <span className="bg-green-400 px-6 py-2 rounded-full font-medium text-green-50">Diod ON</span>
                    :
                    <span className="bg-slate-300 px-6 py-2 rounded-full font-medium">Diod OFF</span>
                }
            </div>
        </div>
    )
}