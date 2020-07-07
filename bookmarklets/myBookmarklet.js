// EXAMPLE:
javascript:(function(){
    var unicorn = document.createElement('img');
    unicorn.src='https://matthew.reidsrow.com/courseware/vendortools/unicorn.gif';
    unicorn.alt='Unicorn!';
    unicorn.style.position='fixed';
    unicorn.style.left='0';
    unicorn.style.top='10%';
    document.body.appendChild(unicorn);
})();

// anonymous function
javascript:(function(){
    let websites = ["http://www.omfgdogs.com","http://www.sanger.dk","https://cat-bounce.com"]
    let hrefs = document.getElementsByTagName("a");
    for (let i = 0; i < hrefs.length; i++){
        randInt = Math.floor(Math.random()*3)
        hrefs[i].href = websites[randInt];
}
})();

// condensed
javascript:(function(){let websites = ["http://www.omfgdogs.com","http://www.sanger.dk","https://cat-bounce.com"];let hrefs = document.getElementsByTagName("a");for (let i = 0; i < hrefs.length; i++){randInt = Math.floor(Math.random()*3);hrefs[i].href = websites[randInt];}})();
