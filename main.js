const data = [{
        title: 'MacBookAir',
        img: 'macbookair.png',
        price: 999,
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
        price: 1299,
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
            size: 8,
            memory: {
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

const CreateElement = (mass) => {
    let div4
    let div = document.createElement('div')
    let p = document.createElement('p')
    let p1 = document.createElement('p')
    for (const color of mass.colors) {
        div4 = document.createElement('div')
        let div2 = document.createElement('div')
        div2.style.backgroundColor = color
        div2.classList.add('color')
        div4.append(div2)
    }
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    let p5 = document.createElement('p')
    let p6 = document.createElement('p')
    let p7 = document.createElement('p')
    let p8 = document.createElement('p')
    let p9 = document.createElement('p')
    let p10 = document.createElement('p')
    let p11 = document.createElement('p')
    let p12 = document.createElement('p')
    let p13 = document.createElement('p')
    let p14 = document.createElement('p')
    let div3 = document.createElement('div')
    let a = document.createElement('a')


    div.classList.add('bloke')
    p.innerText = mass.title
    p1.innerText = mass.price
    p3.innerText = mass.specs.display.title
    p4.innerText = mass.specs.display.size
    p5.innerText = mass.specs.chip.title
    p6.innerText = mass.specs.chip.description
    p7.innerText = mass.specs.ram.title
    p8.innerText = mass.specs.ram.description
    p9.innerText = mass.specs.memory.size
    p10.innerText = mass.specs.memory.type
    p11.innerText = mass.specs.battery
    p12.innerText = mass.specs.camera.title
    p13.innerText = mass.specs.camera.description
    p14.innerText = mass.specs.weight
    a.innerText = 'learn more'
    a.setAttribute('href', `file:///D:/Prog/hm14/index/${mass.title}.html`)
    for (const items of mass.specs.other) {
        let p2 = document.createElement('p')
        p2.innerText = items
        div.append(p2)
    }
    div3.append(p9, p10)
    div.append(p, p1, div4, p3, p4, p5, p6, p7, p8, div3, p11, p12, p13, p14, a)
    sec.append(div)
}


const serch = () => {
    let local = window.location
    local = local.href.split('/')
    sec.innerHTML = ' '
    for (const item of data) {
        if (`${item.title}.html` == local[local.length - 1]) {
            CreateElement(item)
            return
        }  else if ('index.html' == local[local.length - 1]) {
            CreateElement(item)
        }
    }
}
serch()
