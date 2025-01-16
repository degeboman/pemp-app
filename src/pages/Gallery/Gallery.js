import { Layout, theme, Card, Image, Col, Row, Typography, Flex } from 'antd';
import Header from '../../components/Header/Header';
import Footer from  '../../components/Footer/Footer';

import canvaces1 from '../../images/canvaces1.jpg';
import canvaces2 from '../../images/canvaces2.JPG';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg'; 
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';

const { Content } = Layout;

const { Paragraph, Title } = Typography;
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

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
                            <Image
                                width={240}
                                height={300}
                                style={{padding:'5%'}}
                                src={canvaces1}
                            />
                             <Image
                                width={240}
                                height={300}
                                style={{padding:'5%'}}
                                src={canvaces2}
                            />
                        </Card>
                        <Card title="Canvases 2023" bordered={false}>
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
                        <Card title="Cover designs" bordered={false}>
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
                                src={image6}
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
                        </Card>
                    </Flex>
                </Content>
            <Footer />
      </Layout>
    )
}