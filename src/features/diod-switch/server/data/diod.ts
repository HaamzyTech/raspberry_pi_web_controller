export async function getStatus(){
    try{
        const response = await fetch(`${process.env.CONTROLLER_BASE_URL}/status`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return {
            error: false,
            message: "Status fetched successfully",
            status: data.status,
        };
    } catch(error){
        console.log((error as Error).message)
        return { 
            error: true, 
            message: "Error communicating with controll box",
            status: false,
        };
    }
}