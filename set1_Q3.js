function primeNumber() {
    let number = prompt("Enter number: ")
    num = 2
    f = 0
    while (num <= number / 2) {
        if (number % num == 0) {
            f = 1
            break
        }

        num++

        if (f == 0) {
            console.log("number is prime")
        }
        else {
            console.log("number is not prime")
        }
    }
}
