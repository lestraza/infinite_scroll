const data = [];
const fish = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`.split(' ');

const r = (length) => {
    return Math.floor(Math.random() * length)
}

const generatePhoneNumber = () => {
    return `(${r(9)}${r(9)}${r(9)}) ${r(9)}${r(9)}${r(9)}-${r(9)}${r(9)}-${r(9)}${r(9)}`
}

for (let i = 0; i < 100; i++) {
    const customerName = `${fish[r(fish.length)]} ${fish[r(fish.length)]}`
    data.push({
        customerName,
        products: r(50),
        phoneNumber: generatePhoneNumber(),
        orders: r(15)
    })
}

module.exports = { data }