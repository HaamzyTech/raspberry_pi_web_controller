"use server"

export async function toggleDiod(status: boolean) {
    try{
        const response = await fetch(`${process.env.CONTROLLER_BASE_URL}/switch`, {
            method: "POST",
            body: JSON.stringify({
                status
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        const data = await response.json();
        
        return {
            error: false,
            message: "Diod toggled successfully",
            status: data.status,
        };
    }catch(error){
        console.log(error)
        return { 
            error: true, 
            message: "Error communicating with controll box",
        };
    }
}

