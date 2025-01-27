import { Layout, theme, Card, Flex, Typography, Image, Row, Col } from 'antd';
import Header from '../../components/Header/Header';
import Footer from  '../../components/Footer/Footer';

import vitebsk from '../../images/vitebsk.JPG'
// import vitebsk_festival from '../../images/vitebsk_festival.jpg'

const { Content } = Layout;
const { Paragraph, Title } = Typography;

export default () => {
     const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
    return (
        <Layout >
            <Header />
                <Content
                    style={{
                        padding: '2% 48px',
                        height: '900%'
                    }}
                >
                    <Flex>
                        <Paragraph>
                            Welcome to my blog
                        </Paragraph>
                    </Flex>
                    <Flex 
                        wrap
                        vertical
                        gap="large"
                    >
                        <Card title="My exhibitions" bordered={false}>
                            <Row>
                                <Col xl={12} xs={24}>
                                    <Paragraph>House of contemporary art in Vitebsk-2020</Paragraph>
                                    <Paragraph>The Slavic Bazaar in Vitebsk is the largest and most popular festival of arts and culture in Belarus-2021
                                    </Paragraph>
                                    <Paragraph>Turnus na Wolskiej, Galeria sztuki -2023</Paragraph>
                                    <Paragraph>Gallery lay up in Gdansk (Poland)-2024</Paragraph>
                                </Col>
                                <Col xl={12} xs={24}>
                                        <Image
                                        width={250}
                                        height={350}
                                        style={{padding:'5%'}}
                                        src={vitebsk}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Flex>
                </Content>
            <Footer />
      </Layout>
    )
}