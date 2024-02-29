import { Card, Col, Container, Row } from "react-bootstrap";
import { useCharacters } from "./useCharacters";
import { Link } from "react-router-dom";

const CharactersPage: React.FC = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>      
      <h1>Characters page, won't deploy since it doesn't pass the tests</h1>
      <Row>
        {data.characters.results.map((character: any) => {
          return (
            <Col>
              <Link to={`/${character.id}`}>
                <Card id={character.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CharactersPage;