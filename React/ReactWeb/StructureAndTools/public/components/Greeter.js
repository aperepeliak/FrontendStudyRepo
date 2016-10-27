function greeter() {
    document.write('From greeter function');
}

// anybody who requires this file will have access to this function
module.exports = greeter();