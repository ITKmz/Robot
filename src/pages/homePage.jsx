import '../App.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function HomePage() {
    return (
        <Container className='px-5'>
            <Row>
                <Col>
                    <div className='agendar'></div>
                </Col>
            </Row>
            <Row className='slide'>
                <Carousel touch={true} controls={false} fade indicators={true}>
                    <Carousel.Item className='mx-auto'>
                        <Image  src="./img/slide1.jpg" fluid />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./img/slide2.jpg" fluid />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./img/slide3.jpg" fluid />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./img/slide4.jpg" fluid />
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className='my-3'>
                <Col>
                    <Button className='w-100' variant="outline-success" size="lg">
                        <Image className='maxHimg' src="./img/fteacher.png" fluid />
                        Find Teacher
                    </Button>{' '}
                </Col>
                <Col>
                    <Button className='w-100' variant="outline-success" size="lg">
                        <Image className='maxHimg' src="./img/flearner.png" fluid />
                        Find Learner
                    </Button>{' '}
                </Col>
            </Row>
            <Row className='my-3'>
                <Col>
                    <Button className='w-100' variant="outline-success" size="lg">
                    <Image className='maxHimg' src="./img/tool.png" fluid />
                    Tools for education
                    </Button>{' '}
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage