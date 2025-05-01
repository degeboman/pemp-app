import { Carousel, Image } from 'antd';

import live1 from '../../images/live1.JPG';
import live2 from '../../images/live2.JPG';
import live3 from '../../images/live3.JPG';

const contentStyle = {
    height: '100%',
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    padding:'3%',
  };

  // 210
  // 297

export default () => {
    return  (
        <Carousel 
            arrows
            autoplay
            infinite={true}
            adaptiveHeight={true}
        >
            <div>
                <h3 style={contentStyle}>
                    <Image
                        src={live1}
                    />
                </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                    <Image
                        src={live2}
                    />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <Image
                        src={live3}                      
                    />
                </h3>
            </div>
        </Carousel>
    )
}