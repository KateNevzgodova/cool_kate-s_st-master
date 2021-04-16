const dataStories = [{
        name: 'moments,just moments',
        fandom: 'exo',
        type: 'OOC',
        cover: 'img/fairy_tale_fantasy_foggy_forest_haunted_house_light_beam_mist-948848.jpg',
        coverAlt: 'Story: Moments'
    },
    {
        name: 'demons, Potter',
        fandom: 'Harry Potter',
        type: 'OOC',
        cover: 'img/zamok-klyuch-svet-dver.jpg',
        coverAlt: 'Story: Potter'
    },
    {
        name: 'moments,just moments',
        fandom: 'exo',
        type: 'OOC',
        cover: 'img/fairy_tale_fantasy_foggy_forest_haunted_house_light_beam_mist-948848.jpg',
        coverAlt: 'Story: Moments',
    },
    {
        name: 'demons, Potter',
        fandom: 'Harry Potter',
        type: 'OOC',
        cover: 'img/zamok-klyuch-svet-dver.jpg',
        coverAlt: 'Story: Potter'
    },

    {
        name: 'moments,just moments',
        fandom: 'exo',
        type: 'OOC',
        cover: 'img/fairy_tale_fantasy_foggy_forest_haunted_house_light_beam_mist-948848.jpg',
        coverAlt: 'Story: Moments'
    },
    {
        name: 'demons, Potter',
        fandom: 'Harry Potter',
        type: 'OOC',
        cover: 'img/zamok-klyuch-svet-dver.jpg',
        coverAlt: 'Story: Potter'
    }
]
window.onload = function(e) {

    const container = document.getElementById('main_articles');
    if (container) {
        for (let index = 0; index < dataStories.length; index++) {
            const item = dataStories[index];
            // console.log(item);

            const newArticle = document.createElement("article");
            const div = document.createElement("div")
            div.className = 'blockImg'

            const img = document.createElement("img")
            img.src = item.cover
            img.alt = item.coverAlt
            div.appendChild(img)
            const divBlockText = document.createElement('div')
            divBlockText.className = 'blockText'
            const divText = document.createElement('div')
            divText.className = 'text'
            const span = document.createElement('span')
            const link = document.createElement('a')
            link.className = "text"
            link.href = '#'
            link.innerText = item.name
            const divTags = document.createElement('div')
            divTags.className = "tags"
            const span1 = document.createElement('span')
            span1.innerText = item.fandom
            const span2 = document.createElement('span')
            span2.innerText = item.type
            divTags.appendChild(span1)
            divTags.appendChild(span2)
            span.appendChild(link)
            divText.appendChild(span)
            divText.appendChild(divTags)
            divBlockText.appendChild(divText)
            newArticle.appendChild(div)
            newArticle.appendChild(divBlockText)
            container.appendChild(newArticle)
        }
        const search = document.getElementById('')
    }

}

function onSerch(event) {
    event.preventDefault()

    const form = new FormData(event.target);
    const search = form.get("search").toLowerCase();


    const container = document.getElementById('main_articles');
    const childs = container.querySelectorAll('article')

    console.log(childs)

    let countVisible = 0;
    for (let index = 0; index < dataStories.length; index++) {
        const item = dataStories[index];
        if (!item.name.toLowerCase().includes(search)) {
            console.log(childs[index])

            childs[index].style.display = 'none'
        } else {
            childs[index].style.display = 'block'
            countVisible++;
        }
    }
    let notFound = container.querySelector('.not-found')
    if (countVisible == 0) {
        if (!notFound) {
            notFound = document.createElement('span')
            notFound.className = 'not-found'
            notFound.innerText = 'There is nothing we can show you. Sorry. Try again'
            container.appendChild(notFound)
        }
    } else {
        if (notFound) {
            container.removeChild(notFound)
        }
    }

}
// не хочет коммит