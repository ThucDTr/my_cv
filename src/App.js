import { faFacebook, faGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import images from './assets/images';
import Button from './component/Button';
import Dots from './component/Dots';
import ItemCv from './component/ItemCv';
import { faCalendar, faMap, faUser } from '@fortawesome/free-regular-svg-icons';
function App() {
  return ( 
        <div className='wrapper'>
            <div className='left'>
              <div className='wrapperAvatar'>
                <img className='avatar' src={images.avatar} alt='' />
              </div>
              <ItemCv title={'TRUYỀN THÔNG'}>
                <Button primary middle leftIcon={<FontAwesomeIcon icon={faEnvelope} />}>
                  nguyenhongthuctk@gmail.com</Button>
                <Button href={'https://s.net.vn/nJgv'} primary middle leftIcon={<FontAwesomeIcon icon={faFacebook} />}>https://s.net.vn/nJgv</Button>
                <Button href={'https://s.net.vn/FVUe'} primary middle leftIcon={<FontAwesomeIcon icon={faSquareInstagram} />}>https://s.net.vn/FVUe</Button>
                <Button href={'https://github.com/ThucDTr'} primary middle leftIcon={<FontAwesomeIcon icon={faGithub} />}>https://github.com/ThucDTr</Button>
              </ItemCv>
              <ItemCv title={'CÁC KỸ NĂNG'}>
                <Dots label='html css' score={4} />
                <Dots label='js' score={4} />
                <Dots label='Reactjs' score={4} />
                <Dots label='MySql' score={4} />
                <Dots label='java' score={4} />
                <Dots label='Spring boot' score={3} />
              </ItemCv>    
              <ItemCv title={'SỞ THÍCH'}>
                <div className='hobby'>
                    <Button text small >
                        Nghe Nhạc  
                    </Button>
                    <Button text small >
                        Xem Phim  
                    </Button>  
                    <Button text small >
                       Đọc sách 
                    </Button>
                    <Button text small >
                       Code 
                    </Button>        
                </div>
              </ItemCv>                  
            </div>
            <div className='right'>
              <div className='header'>
                <h1 className='itemHeader'>NGUYỄN HỒNG THỨC</h1>
                <h2 className='itemHeader2'>DEVELOPER</h2>
              </div>
              <div className='aboutMe'>
                <Button outline>
                    AUBOUT ME
                </Button>
                <div className='wrapperAboutme'>
                  <Button middle leftIcon={<FontAwesomeIcon icon={faUser} />}>
                  nam</Button>
                  <Button middle leftIcon={<FontAwesomeIcon icon={faCalendar} />}>
                 26/09/2002</Button>
                  <Button middle leftIcon={<FontAwesomeIcon icon={faMobileScreen} />}>
                  0563923570</Button>
                  <Button middle leftIcon={<FontAwesomeIcon icon={faMap} />}>
                  354/7 Trần Cao vân, Thanh Khê, Đà Nẵng</Button>
                </div>
                <p className='content'>Là sinh viên tốt nghiệp tại trường Đại Học Sư Phạm - Đại Học Đà Nẵng chuyên ngành công nghệ thông tin
                 web developer, mong muốn tìm kiếm một môi trường làm việc
                có thể học hỏi được nhiều kinh nghiệm, nâng cao giá trị bản
                thân, đồng thời với kỹ năng, kiến thức và kinh nghiệm hiện có
                của mình tôi mong muốn có thể làm việc hết mình và mang lại
                nhiều giá trị cho công ty. 
                </p>
              </div>
              <div className=''>
                <Button outline>
                  HỌC VẤN
                </Button>
                <h5 className='item'>Sinh viên năm cuối Đại Học Sư Phạm - Đại Học Đà Nẵng  </h5>
                <div className='content'>
                    <p>Chuyên Ngành: Công nghệ thông tin</p>
                    <div className='item1'>
                      <p>(full-stack web developer)</p>
                      <p>2020 - 2024</p>
                    </div>
                </div>
              </div>                          
              <div className='Language'>
                <Button outline>
                  NGOẠI NGỮ
                </Button>
                <p className='content'>
                  Tiếng Anh B1
                </p>
              </div>
              
              <Button outline>
                 KINH NGHIỆM
              </Button>
            </div>
        </div>
  );
}
export default App;
