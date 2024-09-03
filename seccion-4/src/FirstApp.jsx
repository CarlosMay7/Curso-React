import PropTypes from 'prop-types';

function FirstApp({title, subtitle}) {

    if(!title) {
        throw new Error('El titulo no existe');
    }

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}

export default FirstApp;