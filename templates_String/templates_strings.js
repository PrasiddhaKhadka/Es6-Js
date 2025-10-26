function getMessages(){
    const date = new Date().getFullYear();

    return {
        hello: `Hello from ${date}`,
        bye: `Good bye from ${date}`
    }
}

console.log(getMessages())

