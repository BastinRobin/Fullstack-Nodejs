

const first = () => {
    console.log("First call");
}

const second = () => {

    setTimeout(() => {
        console.log("Second call");
    }, 2000);
}

const thrid = () => {
    console.log("Thrid call");
}


first();
second();
thrid();