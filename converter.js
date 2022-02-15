import prompt from "prompt";

prompt.start();

prompt.get(["kilometers"], (err, res) => {
    if (err) {
        throw err;
    }
    const miles = res.kilometers / 1.6;

    console.log(res.kilometers + " kilometer are the same as " + miles + " miles");
});