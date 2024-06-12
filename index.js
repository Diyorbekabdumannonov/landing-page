const btns = document.querySelectorAll('.btn-primary')
const pagination = document.querySelectorAll('.dot')
const container = document.querySelector('.btn-container')
const code = document.querySelectorAll('code')

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btns.forEach(e => e.classList.add('hidden'))
        pagination[1].classList.add('dot-active')
        pagination[0].classList.remove('dot-active')
        if (e.target.textContent == 'Frontend') {
            ['html/css', 'bootstrap/tailwind', 'react/nextjs', 'angular'].map(e => {
                const el = document.createElement('button')
                el.className = 'btn-primary second-tab'
                el.textContent = e
                code.forEach(e => e.classList.add('!hidden'))
                code[1].classList.remove('!hidden')
                return container.appendChild(el)
            })
        }
        else if (e.target.textContent == 'Backend') {
            ['nodejs', 'php', 'mongodb'].map(e => {
                const el = document.createElement('button')
                code.forEach(e => e.classList.add('!hidden'))
                code[2].classList.remove('!hidden')
                el.className = 'btn-primary second-tab'
                el.textContent = e
                return container.appendChild(el)
            })
        }
    })
})

pagination[0].addEventListener('click', () => {
    btns.forEach(e => e.classList.remove('hidden'))
    document.querySelectorAll('.second-tab').forEach(e => {
        e.classList.add('hidden')
    })
    code.forEach(e => e.classList.add('!hidden'))
    code[0].classList.remove('!hidden')
    pagination[0].classList.add('dot-active')
    pagination[1].classList.remove('dot-active')
})







const links = document.querySelectorAll('ul button')
const dropdown = document.querySelector('.dropdown')
const overlay = document.querySelector('.overlay')
const mobileOverlay = document.querySelector('.overlay-mobile')
const searchBtn = document.querySelector('.search-btn')
const searchIcon = document.querySelector('.search-animation')
const searchbar = document.querySelector('.searchbar')
const menuBtn = document.querySelector('.menu-btn')
const mobileDropdown = document.querySelector('.mobile-dropdown')
const accordions = document.querySelectorAll('.nav > div')
const accordionContent = document.querySelectorAll('.accordion')
const ul = document.querySelector('nav ul')
const dropdownCont = document.querySelector('.dropdown-cont')
const heroImg = document.querySelector('.hero')
const overlayMobile = document.querySelector('.overlay-nav-mobile')

const showDropdown = (data, dir, isAnimated) => {
    if (dir) {
        if (dir == "right") {
            dropdown.classList.add('animate-right')
        }
        else {
            dropdown.classList.add('animate-left')
        }
        setTimeout(() => {
            dropdown.classList.remove('animate-left')
            dropdown.classList.remove('animate-right')
        }, 300);
    }
    dropdownCont.classList.add('h-[500px]')
    dropdownCont.classList.remove('h-0')
    dropdown.innerHTML = ''
    data = JSON.parse(JSON.stringify(data))
    dropdown.classList.remove('hidden')
    JSON.parse(data).forEach(col => {
        const div = document.createElement('div')
        div.className = 'col'
        col.forEach(link => {
            const a = document.createElement('a')
            a.href = link.url
            if (!dir && isAnimated !== false) {
                a.className = 'fadeIn'
            }
            if (link.type == 'text') {
                a.textContent = link.content
            }
            else {
                const img = document.createElement('img')
                img.className = 'img'
                img.src = link.content
                a.append(img)
            }
            return div.append(a)
        })
        dropdown.appendChild(div)
    })
    overlay.classList.remove('-translate-y-[110%]')
    overlay.classList.replace('opacity-0', 'opacity-100')
    searchbar.classList.add('-translate-y-[200px]')
    searchIcon.classList.remove('rotate-45')
    heroImg.classList.add('mt-20')

}

let x = 0
let active = 0
let activeLink = 0
let init = true

const hideDropdown = () => {
    dropdown.classList.add('hidden')
    dropdown.classList.replace('translate-y-0', '-translate-y-[110%]')
    overlay.classList.replace('opacity-100', 'opacity-0')
    overlay.classList.replace('duration-400', 'duration-100')
    searchIcon.classList.remove('rotate-45')
    dropdown.classList.add('a')
    dropdown.innerHTML = ''
    dropdownCont.classList.remove('h-[500px]')
    dropdownCont.classList.add('h-0')
    heroImg.classList.remove('mt-20')
}

dropdown.addEventListener('mouseenter', () => {
    showDropdown(links[activeLink].getAttribute('data-dropdown'), null, false)
    x = active
})
dropdown.addEventListener('mouseleave', () => {
    hideDropdown()
})

function coordinate(event) {
    let cx = event.clientX;
    active = cx
}

ul.addEventListener('mouseleave', () => {
    hideDropdown()
    init = true
    x = ''
})

links.forEach((link, index) => {
    if (index == 0) {
        link.setAttribute('data-dropdown', JSON.stringify([
            [
                { type: 'text', content: `Our research`, url: '#' },
                { type: 'text', content: 'Overview', url: '#' },
                { type: 'text', content: 'Index', url: '#' }
            ],
            [
                { type: 'text', content: 'Latest advancements', url: '#' },
                { type: 'text', content: 'GPT-4o', url: '#' },
                { type: 'text', content: 'DALL·E 3', url: '#' },
                { type: 'text', content: 'Sora', url: '#' }
            ],
            [
                { type: 'img', content: 'https://images.ctfassets.net/kftzwdyauwt9/51cvGC9YL1Fy2Iflb3KkDb/a8a9db1572e0bb7009f09a9b39aeafe9/GPT-4o-Video_Card.png?w=1920&q=90&fm=webp', url: '#' },
                { type: 'text', content: 'Hello GPT-4o', url: '#' },
            ]
        ]))
    }
    if (index == 1) {
        link.setAttribute('data-dropdown', JSON.stringify([
            [
                { type: 'text', content: `ChatGPT`, url: '#' },
                { type: 'text', content: 'For Everyone', url: '#' },
                { type: 'text', content: 'For Teams', url: '#' },
                { type: 'text', content: 'For Enterprises', url: '#' },
                { type: 'text', content: 'For Education', url: '#' },
                { type: 'text', content: 'Pricing', url: '#' },
                { type: 'text', content: 'ChatGPT Login', url: '#' },
            ],
            [
                { type: 'text', content: 'API', url: '#' },
                { type: 'text', content: 'Platform overview', url: '#' },
                { type: 'text', content: 'Pricing', url: '#' },
                { type: 'text', content: 'Documentation(opens in a new window)', url: '#' },
                { type: 'text', content: 'API login(opens in a new window)', url: '#' },
            ],
            [
                { type: 'text', content: 'Explore more', url: '#' },
                { type: 'text', content: 'OpenAI for business', url: '#' },
                { type: 'text', content: ' Stories', url: '#' },
            ]
        ]))
    }
    if (index == 2) {
        link.setAttribute('data-dropdown', JSON.stringify([
            [
                { type: 'text', content: `Safety overview`, url: '#' },
                { type: 'text', content: 'Safety overview', url: '#' },
                { type: 'text', content: 'Safety standards', url: '#' }
            ],
            [
                { type: 'text', content: 'Teams', url: '#' },
                { type: 'text', content: 'Safety Systems', url: '#' },
                { type: 'text', content: 'Preparedness', url: '#' },
                { type: 'text', content: 'Superalignment', url: '#' }
            ]
        ]))
    }
    if (index == 3) {
        link.setAttribute('data-dropdown', JSON.stringify([
            [
                { type: 'text', content: `About us`, url: '#' },
                { type: 'text', content: 'News', url: '#' },
                { type: 'text', content: 'Our Charter', url: '#' }
            ],
            [
                { type: 'text', content: 'Security', url: '#' },
                { type: 'text', content: 'Residency', url: '#' },
                { type: 'text', content: 'Careers', url: '#' },
            ],
        ]))
    }

    link.addEventListener('mouseenter', () => {
        setTimeout(() => {
            if (init) {
                showDropdown(link.getAttribute('data-dropdown'), undefined)
            }
            else if (x > active) {
                showDropdown(link.getAttribute('data-dropdown'), 'left')
            }
            else {
                showDropdown(link.getAttribute('data-dropdown'), 'right')
            }
            searchbar.classList.add('hidden')
            searchbar.classList.add('-translate-y-[200px]')
            activeLink = Array.from(ul.children).indexOf(link.parentElement)
            x = active
            init = false
        }, 300);
    })
})

searchBtn.addEventListener('click', () => {
    searchbar.classList.remove('hidden')
    setTimeout(() => {
        if (searchIcon.className.includes('rotate-45')) {
            searchIcon.classList.remove('rotate-45')
            searchbar.classList.add('-translate-y-[200px]')
            searchbar.classList.remove('translate-y-0')
            mobileOverlay.classList.add('-translate-y-[100%]')
            mobileOverlay.classList.replace('opacity-100', 'opacity-0')
            mobileOverlay.classList.replace('duration-300', 'duration-200')
            hideDropdown()
            heroImg.classList.remove('mt-20')
        }
        else {
            searchbar.classList.remove('-translate-y-[200px]')
            searchbar.classList.add('translate-y-0')
            mobileOverlay.classList.replace('opacity-0', 'opacity-100')
            searchIcon.classList.add('rotate-45')
            mobileOverlay.classList.remove('-translate-y-[100%]')
            heroImg.classList.add('mt-20')
        }
    }, 0)
})

menuBtn.addEventListener('click', () => {
    if (!mobileDropdown.className.includes('h-0')) {
        searchBtn.classList.remove('hidden')
        menuBtn.children[0].classList.remove('rotate-45', 'translate-y-[0.3125rem]')
        menuBtn.children[1].classList.remove('opacity-0')
        menuBtn.children[2].classList.remove('-rotate-45', '-translate-y-[0.3125rem]')
        mobileDropdown.classList.add('h-0')
        mobileDropdown.classList.remove('h-full')
        overlayMobile.classList.replace('opacity-100', 'opacity-0')
        heroImg.classList.remove('mt-20')
    }
    else {
        searchBtn.classList.add('hidden')
        menuBtn.children[0].classList.add('rotate-45', 'translate-y-[0.3125rem]')
        menuBtn.children[1].classList.add('opacity-0')
        menuBtn.children[2].classList.add('-rotate-45', '-translate-y-[0.3125rem]')
        mobileDropdown.classList.remove('h-0')
        overlayMobile.classList.replace('opacity-0', 'opacity-100')
        mobileDropdown.classList.add('h-full')
        heroImg.classList.add('mt-20')
    }
})

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        if (accordion.querySelector('.accordion').className.includes('h-0')) {
            accordionContent.forEach(e => {
                e.classList.remove('active')
                e.classList.add('h-0')
                accordion.querySelector('.accordion').classList.add('h-0')
            })
            document.querySelectorAll('.arrow').forEach(e => {
                e.classList.add('hidden')
            })
            accordion.querySelector('.accordion').classList.add('active')
            accordion.querySelector('.accordion').classList.remove('h-0')
            accordion.querySelector('.arrow').classList.remove('hidden')
        }
        else {
            accordionContent.forEach(e => {
                e.classList.remove('active')
                e.classList.add('h-0')
            })
            document.querySelectorAll('.arrow').forEach(e => {
                e.classList.add('hidden')
            })
        }
    })
})
