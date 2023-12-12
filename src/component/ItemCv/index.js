import styles from './ItemCv.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

function ItemCv({title , children}) {
    return ( 
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>{title}</h1>
            {children}
        </div>

     );
}

export default ItemCv;