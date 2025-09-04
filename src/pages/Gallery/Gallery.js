import { Layout, theme, Card, Image, Col, Row, Typography, Flex } from 'antd';
import Header from '../../components/Header/Header';
import Footer from  '../../components/Footer/Footer';

import canvaces1 from '../../images/canvaces1.jpg';
import canvaces2 from '../../images/canvaces2.JPG';
import canvaces3 from '../../images/canvaces3.jpg';
import canvaces4 from '../../images/canvaces4.jpg';
import canvaces5 from '../../images/canvaces5.png';
import canvaces6 from '../../images/canvaces6.png';
import canvaces7 from '../../images/canvaces7.png';

import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg'; 
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';
import image10 from '../../images/IMG_1743.PNG';
import image11 from '../../images/IMG_1590.PNG';
import image12 from '../../images/IMG_2983.PNG';


const { Content } = Layout;

const ImageWithCaption = (src,name, description) => (
    <Card
        hoverable
        style={{ width: 240 }}
        cover={
        <Image
            width={240}
            height={300}
            style={{padding:'5%'}}
            src={src}
            preview={{
            toolbarRender: (
                                        _,
                                        ) => (
                                        <div style={{ color: 'white', padding: '10px' }}>
                                            <div style={{ fontWeight: 'bold' }}>{name}</div>
                                            <div>{description}</div>
                                        </div>
                                        ),
                                    }}
                                />
                                }
                            >
                                <Card.Meta title={name} description={description} />
                            </Card>
  );

export default () => {
    return (
        <Layout >
            <Header />
                <Content
                    style={{
                        padding: '2% 48px',
                        height: '900%'
                    }}
                >
                    <Flex 
                        wrap
                        vertical
                        gap="large"
                    >
                         <Card title="Canvases 2024" bordered={false}>
                            <Flex gap="middle" wrap="wrap">
                                {ImageWithCaption(canvaces3, "TEKKEN 28", 'Category: Graphic Art / Mix art (Spray Paint, Acrilic Markers, Squeezers) Gdańsk 2024')}
                                {ImageWithCaption(image11, "Indigo concrete", 'Category: Graphic Art / Mix art (Spray Paint, Acrilic Markers, Squeezers) Gdańsk 2024')}
                                {ImageWithCaption(canvaces4, "No chance", 'Category: Graphic Art / Mix art (Spray Paint, Acrilic Markers, Squeezers) Gdańsk 2024')}
                                {ImageWithCaption(canvaces6, "CC Night", 'Category: Graphic Art / Mix art (Spray Paint, Acrilic Markers, Squeezers) Gdańsk 2024')}
                            </Flex>
                        </Card>
                        <Card title="Canvases 2023" bordered={false}>
                            <Flex gap="middle" wrap="wrap">
                                {ImageWithCaption(canvaces1, "Zmiy", 'Category: Graphic Art / Mix art (Spray Paint, Acrilic Markers, Squeezers) Gdańsk 2023')}
                                {ImageWithCaption(canvaces5, "Lufen", 'Category: Graphic Art / Mix art (Spray Paint, Acrilic Markers, Squeezers) Gdańsk 2023')}
                                {ImageWithCaption(canvaces7, "Partizan", 'Category: Graphic Art / Mix art (Spray Paint, Acrilic Markers, Squeezers) Gdańsk 2023')}
                            </Flex>
                        </Card>
                        <Card title="Cover designs" bordered={false}>
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image1}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image4}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image5}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image12}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image7}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image8}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image9}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image10}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image2}
                            />
                            <Image
                                width={300}
                                height={300}
                                style={{padding:'5%'}}
                                src={image3}
                            />
                        </Card>
                    </Flex>
                </Content>
            <Footer />
      </Layout>
    )
}