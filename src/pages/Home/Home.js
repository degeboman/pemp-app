import {Col, Row, theme, Layout, Typography, Button } from 'antd';
import { Link, } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from  '../../components/Footer/Footer';
import Carousel from  '../../components/Carousel/Carousel';

const { Paragraph, Title } = Typography;

export default () => {    
    return (
        <Layout >
            <Header />
            <div
                style={{
                    padding: '0 10%',
                }}
            >
                <Row>
                    <Col span={12}>
                        <Title>About Me</Title>
                        <Paragraph>
                            Hello, I'm Nikita, a multifaceted artist currently based in Gdańsk, Poland. Born in Vitebsk, Belarus, my artistic journey has been shaped by a deep-rooted passion for creativity and a profound appreciation for freedom.
                        </Paragraph>
                        <Paragraph>
                            My work spans various mediums, including vibrant graffiti murals that bring urban landscapes to life, intricate canvas paintings that explore the depths of human emotion, and captivating album covers for musicians that visually complement their auditory artistry. Each piece I create is a reflection of my personal experiences and the boundless inspiration I draw from the world around me.
                        </Paragraph>
                        <Paragraph>
                            Freedom is a central theme in my art. It represents not just physical liberty, but also the freedom of thought, expression, and the pursuit of one's dreams. Through my art, I aim to inspire others to embrace their own freedoms and to find beauty in the everyday moments of life.
                        </Paragraph>
                        <Paragraph>
                            Thank you for visiting my website and exploring my artistic journey. I hope my work resonates with you and brings a touch of inspiration to your day.
                        </Paragraph>
                        <Button value="default"><Link to="/gallery">Gallery</Link></Button>
                    </Col>
                    <Col span={12}>
                        <Carousel />
                    </Col>
                </Row>
            </div>
            <Footer />
        </Layout>
    )
}

// cсылки на блог