while (true) {
    let d = new Date();
    let time = d.toLocaleTimeString();
    setTimeout(() => {console.log(time)}, 1000);
}