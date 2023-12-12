import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ href,middle,aboutMe , small,children,primary,text, outline, className, leftIcon, rightIcon, onClick, ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (href) {
        props.href = href;
        Comp = 'a';
    }  
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        aboutMe,
        text,
        small,
        middle,
        outline,
    });
    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span> 
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;