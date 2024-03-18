import GridCard from './GridCard';

function cardsToRows(cards) {
    return (
    <div className="row" class="d-flex justify-content-center">
        {cards}
    </div>)
}

const GridCardFactory = ({movies}) => {
    var rows = [];
    var currentRow = [];
    var cards = movies.map((movie) => {
        return <GridCard imageUrl={movie.Poster} title={movie.Title} year={movie.Year} />
    }
    );

    console.log(cards);

    for(var i = 0; i < cards.length; i++) {
        if (i%3==0 && currentRow.length != 0) {
            rows.push(cardsToRows(currentRow));
            currentRow = [];
        }
        currentRow.push(cards[i]);
    }

    rows.push(cardsToRows(currentRow));

    return (
        <div className="container-fluid">
            {rows}
        </div>
    )
}

export default GridCardFactory;