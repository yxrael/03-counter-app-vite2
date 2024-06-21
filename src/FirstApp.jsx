// rafce
import PropTypes from 'prop-types';


export const FirstApp = ( {
    title,
    subTitle
} ) => {

    if ( !title ) {
        throw new Error('El title no exite');
    }

    return (
        <>
            <h1>{ title}</h1>
            <p>{subTitle}</p>
        </>
        
    )
    
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

// DEPRECADO - DEFAULTS EN EL COMPONENTE!!!
FirstApp.defaultProps =  {
    title: 'No hay titulo',
    subTitle: 135
}