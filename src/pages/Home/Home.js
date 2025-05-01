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
                    <Col 
                    style={{
                        padding: '0 1%',
                    }}
                     xl={12}
                     xs={24}
                     >
                        <Title>About Me</Title>
                        <Paragraph style={{ textAlign: 'justify' }}>
                            Hi! My name is Mikita Pemb. I’m originally from Vitebsk, Belarus, but now I live in Gdańsk, Poland. For over ten years, graffiti has been my passion and my way of self-expression. Since 2020, I’ve been channeling the energy of the streets onto canvases and creating unique cover designs for music releases. My work is a genuine reflection of my journey—a blend of the vibrant chaos of street art with a desire to push boundaries and explore new creative horizons.
                        </Paragraph>
                        <Paragraph style={{ textAlign: 'justify' }}>
                            In my technique, I combine the boldness of spray paint with the versatility of acrylics, adding fine details using squeezers and markers. Every piece I create is a celebration of the style I discovered on the streets, transformed into something that resonates with a broader audience.
                        </Paragraph>
                        <Paragraph style={{ textAlign: 'justify' }}>
                            I’ve had the privilege of participating in various exhibitions and constantly strive to promote my unique artistic vision. My dream is to collaborate with galleries and establish myself in larger, more ambitious art spaces, as I believe my style has the potential to reach far beyond the world of street art.
                        </Paragraph>
                        <Paragraph style={{ textAlign: 'justify' }}>
                            On this platform, you’ll only see my art projects, but I’m happy to share my graffiti work with anyone who’s interested. In addition to speaking Polish at a conversational level, I’m also learning English, which opens new opportunities to showcase my art and connect with an international audience. Art isn’t just something I do—it’s who I am.
                        </Paragraph>
                        <Paragraph style={{ textAlign: 'justify' }}>
                            Let’s create something extraordinary together!
                        </Paragraph>
                        <Button value="default"><Link to="/gallery">Gallery</Link></Button>
                    </Col>
                    <Col 
                        xl={12}
                        xs={24}
                        >
                        <Carousel />
                    </Col>
                </Row>
            </div>
            <Footer />
        </Layout>
    )
}

// cсылки на блог