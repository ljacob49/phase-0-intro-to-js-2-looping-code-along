const names = ["Lisa", "Kaitlin", "Jan"];

const writeCards = (names) => {
    let newArray = [];
    for(let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return newArray;
}

const countDown = (num) => {
    while(num >= 0) {
    console.log(num)
    num --;
    }
}