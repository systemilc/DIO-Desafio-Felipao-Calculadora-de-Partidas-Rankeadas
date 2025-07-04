const ranking = [
    {rank: 'Ferro', minWins: 0, maxWins: 9},
    {rank: 'Bronze', minWins: 10, maxWins: 20},
    {rank: 'Prata', minWins: 21, maxWins: 50},
    {rank: 'Ouro', minWins: 51, maxWins: 80},
    {rank: 'Diamante', minWins: 81, maxWins: 90 },
    {rank: 'Lendário', minWins: 91, maxWins: 100},
    {rank: 'Imortal', minWins: 101, maxWins: Infinity}

]
let match = getRank(0, 20)

console.log( win = `O Herói tem de saldo de ${match.totalWins} está no nível de ${match.rank}`);

function getRank(win, lose){
    const totalWins = win - lose;
    for (let i = 0; i < ranking.length; i++) {
        const {rank, minWins, maxWins} = ranking[i];
        if (totalWins >= minWins && totalWins <= maxWins) {
            return {totalWins, rank };
        }else if(totalWins < 0){
            return {totalWins, rank:"Ferro" };
        }
    }
}
