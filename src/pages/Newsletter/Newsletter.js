import { Layout,Col, Button, Checkbox, Input, Typography, Row, theme, Image, Form } from 'antd';
import Header from '../../components/Header/Header';
import Footer from  '../../components/Footer/Footer';

import  image1 from '../../images/IMG_3822.PNG';

const { Content } = Layout;
const { Paragraph, Title } = Typography;

const onFinish = async (values) => {
    try {
        const response = await fetch('https://formspree.io/manqbydz', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },        
            body: JSON.stringify({
                chat_id: 670052995,
                text: "На вас подписался " + values.Name + ". Его email - "+ values.email,
              }),
          });

      if (response.ok) {
        console.log('Сообщение успешно отправлено');
      } else {
        console.error('Ошибка при отправке сообщения');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

export default () => {
     const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
    return (
        <Layout >
            <Header />
                <Content
                style={{
                    padding: '0 48px',
                    height: '100%'
                }}
                >
                <div
                    style={{
                    padding: 24,
                    minHeight: 380,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    }}
                >
                    <Row>
                        <Col 
                            xl={12}
                            xs={24}
                        >
                            <Title>Artist Newsletter</Title>
                            <Paragraph>
                                Let’s connect on Newsletter!
                            </Paragraph>
                            <Paragraph>
                            Get exclusive content that I only share with email subscribers. Sign up for the latest news from Pemb about events, original work, or products.
                            </Paragraph>
                            <Form
                                name="basic"
                                labelCol={{
                                span: 8,
                                }}
                                wrapperCol={{
                                span: 16,
                                }}
                                style={{
                                maxWidth: 600,
                                }}
                                initialValues={{
                                remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                label="Name"
                                name="Name"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your Name!',
                                    },
                                ]}
                                >
                                <Input />
                                </Form.Item>

                                <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your Email!',
                                    },
                                ]}
                                >
                                <Input />
                                </Form.Item>

                                <Form.Item label={null}>
                                <Button type="primary" htmlType="submit">
                                    Subcribe
                                </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col
                            xl={12}
                            xs={24}
                        >
                                <Image
                                width={400}
                                height={600}
                                style={{padding:'5%'}}
                                src={image1}
                            />
                        </Col>
                    </Row>
                </div>
                </Content>
            <Footer />
      </Layout>
    )
}