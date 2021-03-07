import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };//Lo inicializamos vacio

    onInputChange = (event) => {
        //Cada vez que el texto dentro del input cambia actualizamos el estado
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();//Para que el formulario no envie automaticamente

        //TODO: Asegurarnos de que llamamos el callback desde el componente padre
    };

    render () {
        return (
            /* Usaremos Semantic UI como CSS Framework */
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;