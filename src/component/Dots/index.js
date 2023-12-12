import classNames from 'classnames/bind';
import styles from './Dots.module.scss';

const cx = classNames.bind(styles);
function Dots({label , score}) {
    const arrs = [1,2,3,4,5]
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('label')}>
                {label}
            </div>
            <div className={cx('dots')}>
            {
                arrs.map((item)=>{
                    return (
                    <>
                    {
                        item > score ? (
                        <span className={cx('number1')}></span>
                        ) : (
                        <span className={cx('number2')}></span>
                        )
                    }
                    </>
                    )
                })
            }
            </div>
        </div>
     );
}

export default Dots;
