        function openArt(imgUrl) {
        document.getElementById("fullImg").src = imgUrl;
        document.getElementById("artModal").style.display = "block";
}
        function closeArt() {   
        document.getElementById("artModal").style.display = "none";
}





function rollGacha() {
    const box = document.getElementById('gachaBox');
    if(box.classList.contains('rolling')) return; // ป้องกันการกดรัวๆ

    // --- คลังรูปภาพและระดับความหายาก (แก้ไข URL ตรงนี้ได้เลย) ---
    const pool = {
        god: [
            { img: 'https://media1.tenor.com/m/u6002ayqdi4AAAAC/good-morning.gif', rarity: 'GOD' }
        ],
        legend: [
            { img: 'https://media1.tenor.com/m/8WbfUnK_A9sAAAAd/larry-larry-baby.gif', rarity: 'LEGEND' }
        ],
        epic: [
            { img: 'https://media1.tenor.com/m/3BDYvd6R2YUAAAAC/tung-tung-tung-sahur.gif', rarity: 'EPIC' }
        ],
        rare: [
            { img: 'https://media1.tenor.com/m/TTEW3CwQDdkAAAAC/linkin-park-jamcat.gif', rarity: 'RARE' }
        ]
    };

    box.classList.add('rolling');

    setTimeout(() => {
        const luck = Math.random() * 100;
        let selected;

        
        if (luck < 10) {
            selected = pool.god[Math.floor(Math.random() * pool.god.length)];
            showResult(selected, 'god');
        } else if (luck < 30) {
            selected = pool.legend[Math.floor(Math.random() * pool.legend.length)];
            showResult(selected, 'legend');
        } else if (luck < 60) {
            selected = pool.epic[Math.floor(Math.random() * pool.epic.length)];
            showResult(selected, 'epic');
        } else {
            selected = pool.rare[Math.floor(Math.random() * pool.rare.length)];
            showResult(selected, 'rare');
        }

        box.classList.remove('rolling');
    }, 800);
}

function showResult(item, className) {
    const modal = document.getElementById('gachaModal');
    const img = document.getElementById('gachaResultImg');
    const tag = document.getElementById('rarityTag');

    img.src = item.img;
    tag.innerText = item.rarity;
    tag.className = className; // เปลี่ยนสีตามระดับ

    modal.style.display = "block";
}

function closeGacha() {
    document.getElementById('gachaModal').style.display = "none";
}



