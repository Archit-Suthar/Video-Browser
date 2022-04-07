import React from "react";

class SearchBar extends React.Component {

    state = { term : "" };

    onSearchInput = (e) => {
        this.setState({ term : e.target.value });
    }
    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);   //TODO : use callback from parent component to access what is searched
        
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSearchSubmit}>
                    <div className="ui field">
                        <h4>Video Browser</h4>
                        <input value={this.state.term} onChange={this.onSearchInput} type="text" placeholder="Search Videos" />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;