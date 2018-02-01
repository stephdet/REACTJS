import React from 'react';

export default class TodoForm extends React.Component {
  test() {
    return 'bonjour';
  }


render(){
  return (
      <div className="liste">
    <form>
        <input type="text" />
        <button>Ajouter</button>
    </form>
</div>
);
}
