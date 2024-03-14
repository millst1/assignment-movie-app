import GridCard from './GridCard';

function GridCardFactory() {
    var cards = [];
    var noCards = 7;

    for(var i = 0; i < noCards; i++) {
        cards.push(<GridCard />);
    }

    return (
        <div className="container-fluid">
            <div className="row" class="d-flex justify-content-center">
                {cards}
            </div>
        </div>
    )
}

export default GridCardFactory;