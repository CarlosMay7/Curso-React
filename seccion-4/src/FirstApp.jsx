import PropTypes from 'prop-types';

function FirstApp({title, subtitle}) {

    if(!title) {
        throw new Error('El titulo no existe');
    }

    return (
        <>
            <h1>{title}</h1>
            <p>Using a Fragment {subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}

export default FirstApp;