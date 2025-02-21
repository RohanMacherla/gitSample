function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data..."); 

    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData();
