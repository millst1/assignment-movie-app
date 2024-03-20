import Alert from 'react-bootstrap/Alert';

function AlertDismissibleExample({failedQuery}) {

    return (
      <Alert variant="danger" className="d-flex align-items-center flex-column">
        <Alert.Heading>Oh snap - we couldn't find any films!</Alert.Heading>
        <p>
          We were unable to find any films that relate to "{failedQuery}". Please try a different search.
        </p>
      </Alert>
    );
}

export default AlertDismissibleExample;