let theUrl = 'https://jsonplaceholder.typicode.com/photos';
async function getInfo(url){
    const response = await fetch(url);
    const items = await response.json();
    const theBody = document.getElementById('theBody');
    const popupContainer = document.getElementById('popupContainer');
    
    for (let item of items) {
            const img = item.thumbnailUrl;
            const title = item.title;
            const image = document.createElement('img');
            const theTitle = document.createElement('div');
            const theDiv = document.createElement('div');
            image.src = img;
            theTitle.innerHTML = title;
            theTitle.classList.add('theTitle');
            image.classList.add('theImage');
            theDiv.classList.add('theDiv');
            theBody.appendChild(theDiv);
            theDiv.appendChild(image);
            theDiv.appendChild(theTitle);
            theDiv.addEventListener('click', () => {
                console.log('clicked');
                popupContainer.style.display = "block";
                const popupImg = item.url;
                const description = document.createElement('div');
                description.setAttribute('id', 'description');
                description.innerHTML = `photo-ID: ${item.id},\n
                Description: ${item.title}`;
                const popup = document.createElement('div');
                popup.classList.add('active');
                const popupImage = document.createElement('img');
                const close = document.createElement('button');
                close.innerHTML = '&times';
                close.classList.add('close');
                popupImage.classList.add('popupImage');
                popupImage.src = popupImg;
                popup.appendChild(close);
                popup.appendChild(popupImage);
                popup.appendChild(description);
                popupContainer.appendChild(popup);
                theBody.classList.add('inactive');
                popupContainer.addEventListener('click', () =>{
                    popupContainer.style.display = "none";
                    console.log('close');
                    popup.remove();
                });
            });
        }
}
getInfo(theUrl);