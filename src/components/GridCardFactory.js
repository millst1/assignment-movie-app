import GridCard from './GridCard';

function cardsToRows(cards) {
    return (
    <div className="row" class="d-flex justify-content-center">
        {cards}
    </div>)
}

function GridCardFactory() {
    var rows = [];
    var cards = [];
    var noCards = 7;

    for(var i = 0; i < noCards; i++) {
        if (i == 3) {
            rows.push(cardsToRows(cards));
            cards = [];
        }
        cards.push(<GridCard />);
    }

    rows.push(cardsToRows(cards));

    return (
        <div className="container-fluid">
            {rows}
        </div>
    )
}

export default GridCardFactory;