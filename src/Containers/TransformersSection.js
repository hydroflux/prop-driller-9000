import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {

  state = {
    index: 0
  }

  listTransformers = () => this.props.proptimusii.map( transformer => {
    return <Transformer
            handleClick={this.handleClick}
            key={transformer.id}
            transformer={transformer}/>
  })

  displayTransformer = () => {
    return this.listTransformers()[this.state.index]
  }

  handleClick = () => {
    this.state.index < this.listTransformers().length - 1 ?
    this.setState({ index: this.state.index + 1 })
    : this.setState({ index: 0 })
  }

  render() {
    return (
      <section className = "transformers-section">
       {this.displayTransformer()}
      </section>
    );
  }
}

export default TransformersSection;
