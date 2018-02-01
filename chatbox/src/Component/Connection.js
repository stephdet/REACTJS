import React, { Component } from 'react';

export default class Connection extends Component {
    render() {
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required />
                    <button type="submit">{this.props.jesaispas}</button>
                </form>
            </div>
        );
    }
}
