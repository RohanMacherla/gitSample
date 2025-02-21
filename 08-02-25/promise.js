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
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
console.log("Fetching data...");
