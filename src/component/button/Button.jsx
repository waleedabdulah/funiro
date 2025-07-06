import './Button.scss';
export default function Button({ text , handleClick = () => '' }){

    return (
        <button 
            className='button'
            onClick={handleClick}
        >
            <b>{text}</b>
        </button>
    ); 
}    