function main() {
    console.log("main");
    try {
        console.log("try");
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}
main();
