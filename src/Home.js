import {Button, Card, Container, Row, Col,} from "react-bootstrap";
import {Notification} from "./Listener";

const Home = () => {

    return (
        <div>
            <Notification />
            <Container fluid>
                <Row className="bg-info">
                    <Col>
                        <h2>{process.env.REACT_APP_URL}</h2>
                        <h2>{process.env.REACT_APP_URL_SECOND}</h2>
                        <h2>{process.env.REACT_APP_URL_THIRD}</h2>
                    </Col>
                    <Col>test</Col>
                </Row>
                <Row className="bg-success">
                    <Col>
                        <p>{process.env.REACT_APP_URL}</p>
                    </Col>
                </Row>
                <Row className="bg-secondary">
                    <Col>
                        <p>{process.env.REACT_APP_URL_THIRD}</p>
                    </Col>
                </Row>
            </Container>
            {/*<Container className="m-2">*/}
            {/*    <Card>*/}
            {/*        <Card.Body>*/}
            {/*            <Card.Title>Card Title</Card.Title>*/}
            {/*            <Card.Text>*/}
            {/*                Some quick example text to build on the card title and make up the*/}
            {/*                bulk of the card's content.*/}
            {/*            </Card.Text>*/}
            {/*            <Button variant="primary">Go somewhere</Button>*/}
            {/*        </Card.Body>*/}
            {/*    </Card>*/}
            {/*</Container>*/}
            {/*<h2>Home Page</h2>*/}

            {/*<Card style={{ width: '18rem' }}>*/}
            {/*    <Card.Img variant="top" src="holder.js/100px180" />*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Title>Card Title</Card.Title>*/}
            {/*        <Card.Text>*/}
            {/*            Some quick example text to build on the card title and make up the*/}
            {/*            bulk of the card's content.*/}
            {/*        </Card.Text>*/}
            {/*        <Button variant="primary">Go somewhere</Button>*/}
            {/*    </Card.Body>*/}
            {/*</Card>*/}
            {/*<Button href={process.env.REACT_APP_URL}>{process.env.REACT_APP_URL}</Button>*/}
            {/*<Button href="/profile">Ke Profile</Button>*/}
        </div>
    )
}

export default Home