function solve (cards) {


    let result = [];

    for (let card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);


 
        try {
            const card = createCard(face, suit);
            result.push(card);
        } catch (err) {
            result = ['Invalid card: ' + card];
        }


    }

    console.log(result.join(' '));

    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',];

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };
    
    
        if (faces.includes(face) == false) {
            throw new Error('Invalid face: ' + face);
        }
        if (suits[suit] == 'undefined') {
            throw new Error('Invalid suit: ' + face);
        }
    

        const result = {
            face, 
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    
        return result;
    
    }
}


console.log(solve(['5S', '10D', 'KH', 'AS']))
console.log(solve(['5S', '3X', 'QD', '1S']))
console.log(solve(['KS', '9D', 'KH', 'AC']))
console.log(solve(['AS', '10D', 'KH', '2C']))