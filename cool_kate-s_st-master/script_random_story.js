const dataRandomStories = {
    name: 'Moments,just moments',
    fandom: 'Fandom: EXO',
    type: 'Warnings: OOC',
    discription: 'This is not their whole story. These are moments, just moments of their life ...',
    likes: 100,
    dislikes: 50
}


const drawRandomStory = (e) => {
    const container = document.getElementById('random_story_container')
    console.log("drawRandomStory")
    if (container) {
            const newSection = document.createElement('section');
            const div = document.createElement('div');
            div.className = 'container';
            div.id = 'random_story_container';
            const divTitle = document.createElement('div');
            divTitle.className = 'title';
            const h2 = document.createElement('h2');
            h2.innerText = 'A New Random Story:';
            const divStoryBody = document.createElement('div');
            divStoryBody.className = 'story-body';
            const link = document.createElement('a');
            link.href='#';
            link.className = 'link';
            link.innerText = dataRandomStories.name;

            
            const divDetail = document.createElement('div');
            divDetail.className = 'like';
            const buttonLike = document.createElement('button');
            buttonLike.className = 'buttonLike'
            const imgLike = document.createElement('img');
            imgLike.src = 'img/pulse.svg';
            imgLike.className = 'heart_like';
            imgLike.alt = 'like';
            const spanLikes = document.createElement('span');
            spanLikes.id = 'like';
            spanLikes.innerText = dataRandomStories.likes;
            
            const buttonDislike = document.createElement('button');
            buttonDislike.className = 'buttonDislike';
            const imgDislike = document.createElement('img');
            imgDislike.className = 'dislike';
            imgDislike.src = 'img/broken-heart.svg';
            const spanDisLikes = document.createElement('span');
            spanDisLikes.id = 'spanDisLikes';
            spanDisLikes.innerText = dataRandomStories.dislikes;
            const divDescription = document.createElement('div');
            divDescription.className = 'description';
            const spanFandom = document.createElement('span');
            spanFandom.innerText = dataRandomStories.fandom;
            const spanWarnings = document.createElement('span');
            spanWarnings.innerText = dataRandomStories.type;
            const spanDiscription = document.createElement('span');
            spanDiscription.innerText = 'Discription:';
            spanDiscription.className = 'discription';
            const p = document.createElement('p');
            p.innerText = dataRandomStories.discription;
            divTitle.appendChild(h2);
            divTitle.appendChild(link);
            divDescription.appendChild(spanFandom);
            divDescription.appendChild(spanWarnings);
            divDescription.appendChild(spanDiscription);
            divDescription.appendChild(p);
            divDetail.appendChild(buttonLike);
            buttonLike.appendChild(imgLike);
            divDetail.appendChild(spanLikes);
            divDetail.appendChild(buttonDislike);
            buttonDislike.appendChild(imgDislike);
            divDetail.appendChild(spanDisLikes);
            div.appendChild(divTitle);
            div.appendChild(divStoryBody);
            divStoryBody.appendChild(divDetail);
            divStoryBody.appendChild(divDescription);
            newSection.appendChild(div);
            container.appendChild(newSection);
    }
    let heart = document.querySelector('.buttonLike');
            let likesNumber = document.querySelector('#like');
            let counter = 100;
            heart.onclick = function() {
            if (heart.classList.contains('added')) {
            counter-=1;
            document.querySelector('.buttonDislike').disabled = false;
            } else {
            counter+=1;
            document.querySelector('.buttonDislike').disabled = true;
            }
            likesNumber.textContent = counter;
            heart.classList.toggle('added');
            }
    let brokenHeart = document.querySelector('.buttonDislike');
            let dislikesNumber = document.querySelector('#spanDisLikes');
            let counterDislikes = 50;
            brokenHeart.onclick = function func() {
            if (brokenHeart.classList.contains('added')) {
            counterDislikes-=1;
            document.querySelector('.buttonLike').disabled = false;
            } else {
            counterDislikes+=1;
            document.querySelector('.buttonLike').disabled = true;
            }
            dislikesNumber.textContent = counterDislikes;
            brokenHeart.classList.toggle('added');
            }
}


document.getElementById('random_story_container').addEventListener("load", drawRandomStory() )
