import React, { Component } from 'react';
import logo from './logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
import './components/Global/base.css';
import './App.css';
import Header from  './components/Header/Header';
import LookupForm from './components/LookupForm/LookupForm';
import Button from './components/Button/Button.jsx';


class App extends Component {
  mapdemo = function () {
    console.log('here');
  };

  render() {
    this.mapdemo();
    return (
      <div className="App">
        <CssBaseline />
        <Header>Where2Vote</Header>
        <LookupForm />
        <Button />
        {/* <p>Integer quis tristique purus. Fusce id urna sit amet lorem accumsan vestibulum. Nullam odio magna, finibus sit amet ipsum sed, aliquet posuere tortor. Quisque ac accumsan magna. Nunc eu dui a sem molestie cursus. Suspendisse eget quam in eros condimentum bibendum. Aliquam laoreet semper dui, a faucibus tortor laoreet in.</p>

        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis viverra, magna sit amet congue pharetra, orci justo bibendum metus, eget ultrices turpis sapien id sapien. Curabitur magna dui, aliquam sit amet mi cursus, feugiat tincidunt libero. Praesent mollis non metus eu viverra. Duis posuere, dolor nec hendrerit hendrerit, eros massa imperdiet velit, vitae efficitur dolor odio id purus. Suspendisse potenti. Maecenas et odio dui. Maecenas id quam imperdiet, luctus sapien eu, ornare metus. Mauris sed tincidunt lectus. Sed pharetra ante at lacus congue, et mattis velit luctus. Praesent posuere, sem eu porttitor tristique, ante tortor ullamcorper lacus, nec faucibus ligula nisl a metus. Donec eget orci magna. Nunc vulputate venenatis sapien at consequat. Pellentesque vestibulum consequat luctus. Ut ut mollis augue. Sed congue scelerisque pretium.</p>

        <p>Praesent et eros mauris. Ut at sem nunc. In in commodo mauris. Mauris sollicitudin, augue eu malesuada laoreet, diam velit posuere risus, ut efficitur eros tellus sit amet eros. Pellentesque molestie volutpat nisi non tristique. Sed malesuada congue purus nec faucibus. Fusce fermentum ullamcorper ipsum et congue.</p>

        <p>Morbi est massa, sollicitudin id metus ac, mattis convallis eros. Morbi sit amet pulvinar felis. Duis lacinia dignissim sem ut venenatis. Praesent quis lectus eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam lacinia nibh vitae ex tincidunt, sed luctus dui eleifend. Pellentesque in ullamcorper est. Donec cursus, purus eget ultricies pretium, dolor felis iaculis nulla, ac faucibus eros sem vitae massa.</p>

        <p>Vestibulum interdum eros in neque pellentesque, vitae maximus augue commodo. Ut scelerisque quis est ut rhoncus. Cras facilisis dui vel arcu lobortis, vel dignissim quam iaculis. Nam ligula ex, convallis non turpis at, consequat hendrerit turpis. Integer et molestie enim. Curabitur luctus arcu et felis ullamcorper, at vulputate eros dignissim. Nunc consectetur leo quis lorem vulputate, eu ornare urna tincidunt. Phasellus vehicula sem sit amet lectus cursus, non tempus nisi aliquet. Nullam ac facilisis magna. Quisque quis dui mattis nibh porttitor suscipit. Praesent nunc lectus, consequat eget efficitur a, lacinia in mauris. Etiam pellentesque lectus urna, sit amet scelerisque eros tincidunt in. Sed fermentum vitae lectus vulputate rhoncus. Sed magna mi, tempus in tortor et, aliquet ultrices dolor. Mauris rhoncus non mi nec ultrices. Curabitur varius, nisi vitae mattis suscipit, lacus nisl auctor ante, a ultrices purus metus nec lacus.</p> */}

      </div>
    );
  }
}

export default App;
