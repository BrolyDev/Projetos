let log = new Log(document.querySelector('.log'));


const char = new Knight('Herói');
const monster = new BigMonster();

const stage = new Stage(
    char,
    monster,
    document.getElementById('char'),
    document.getElementById('monster'),
    log
);

stage.start();