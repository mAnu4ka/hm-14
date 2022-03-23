const data = [{
        title: 'MacBookAir',
        img: './img/macbookair.png',
        price: 999,
        proz: 'm1',
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBookPro13',
        img: './img/macbook13.png',
        price: 1299,
        proz: 'm1',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBookAirpro',
        img: './img/macbookpro.png',
        proz: 'intel',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let sec = document.querySelector('section')
let title = document.querySelector('title')
let a = document.createElement('a')

const CreateElement = (mass,itemcount) => {
    let div4
    let div = document.createElement('div')
    let title = document.createElement('p')
    let price = document.createElement('p')

    let display = document.createElement('p')
    let display1 = document.createElement('p')
    let chip = document.createElement('p')
    let chip1 = document.createElement('p')
    let ram = document.createElement('p')
    let ram1 = document.createElement('p')
    let memoryTEXT = document.createElement('p')
    let memoryTEXT1 = document.createElement('p')
    let batteryTEXT = document.createElement('p')
    let camera1 = document.createElement('p')
    let camera = document.createElement('p')
    let weight = document.createElement('p')
    let div3 = document.createElement('div')
    let macbook = document.createElement('img')
    let battery = document.createElement('img')
    let Intel = document.createElement('img')
    let memory = document.createElement('img')
    let video = document.createElement('img')
    let memoriblok = document.createElement('div')
    let line = document.createElement('div')
    let line2 = document.createElement('div')
    a = document.createElement('a')

    for (const color of mass.colors) {
        div4 = document.createElement('div')
        let div2 = document.createElement('div')
        div2.style.backgroundColor = color
        div2.classList.add('color')
        div4.append(div2)
    }
    memoriblok.classList.add('bloke')
    line.classList.add('line')
    line2.classList.add('line')
    div.classList.add('bloke')
    title.innerText = mass.title
    title.classList.add('bold__bold')
    price.innerText = mass.price
    display.innerText = mass.specs.display.title
    display1.innerText = mass.specs.display.size
    display1.classList.add('bold')
    chip.innerText = mass.specs.chip.title
    chip1.innerText = mass.specs.chip.description
    ram.innerText = mass.specs.ram.title
    ram1.innerText = mass.specs.ram.description
    memoryTEXT.innerText = mass.specs.memory.size
    memoryTEXT1.innerText = mass.specs.memory.type
    batteryTEXT.innerText = mass.specs.battery
    camera1.innerText = mass.specs.camera.title
    camera.innerText = mass.specs.camera.description
    weight.innerText = mass.specs.weight
    weight.classList.add('bold')
    a.innerText = 'learn more'
    a.setAttribute('href', `./index/${mass.title}.html`)
    if (itemcount == 1) {
        macbook.setAttribute('src', `.${mass.img}`)
        battery.setAttribute('src', '../img/battery.png')
        if (mass.proz == 'm1') Intel.setAttribute('src', '../img/m1.png')
        else Intel.setAttribute('src', '../img/intel.png')
        if (mass.specs.memory.size == 8) memory.setAttribute('src', '../img/memory2.png')
        else memory.setAttribute('src', '../img/memory.png')
        video.setAttribute('src', '../img/video.png')
    }else{
        macbook.setAttribute('src', mass.img)
        battery.setAttribute('src', './img/battery.png')
        if (mass.proz == 'm1') Intel.setAttribute('src', './img/m1.png')
        else Intel.setAttribute('src', './img/intel.png')
        if (mass.specs.memory.size == 8) memory.setAttribute('src', './img/memory2.png')
        else memory.setAttribute('src', './img/memory.png')
        video.setAttribute('src', './img/video.png')
    }
        
    

    div3.append(ram, ram1)


    memoriblok.append(memoryTEXT, memoryTEXT1)
    div.append(macbook,title, price, line2, display1, display, Intel, chip, chip1, div3, memory, memoriblok, battery, batteryTEXT, video, camera1, camera, weight)
    for (const items of mass.specs.other) {
        let p2 = document.createElement('p')
        p2.innerText = items
        div.append(p2)
    }
    div.append(line, a)
    sec.append(div)
}


const serch = () => {
    let local = window.location
    local = local.href.split('/')
    sec.innerHTML = ' '
    for (const item of data) {
        if (`${item.title}.html` == local[local.length - 1]) {
            CreateElement(item, 1)
            title.innerText = item.title
            a.setAttribute('href', `../index.html`)
            local.pop()
            local.pop()
            return
        } else if ('index.html' == local[local.length - 1]) CreateElement(item)

    }
}
serch()