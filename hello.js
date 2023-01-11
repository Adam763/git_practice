const randnum = Math.floor(Math.random()*5)
console.log(randnum)
switch(randnum) {
        case 1: console.log('you win')
        break;

        case 2: console.log('you lose')
        break;

        case 3: console.log('you are a big loser')
        break;

        case 4: console.log('you are amazing')
        break;

        default: console.log('what do I know?')
    }