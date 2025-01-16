import { Layout, theme } from 'antd';
import Header from '../../components/Header/Header';
import Footer from  '../../components/Footer/Footer';

const { Content } = Layout;

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
                    <input />
                    <button>Отправить</button>
                </div>
                </Content>
            <Footer />
      </Layout>
    )
}