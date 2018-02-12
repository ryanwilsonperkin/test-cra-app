import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem elit, imperdiet in ultricies a, congue vitae augue. Cras ac ullamcorper nisl. Morbi luctus felis eu molestie sollicitudin. Sed eget eros ullamcorper, dapibus arcu pretium, euismod est. Proin leo eros, aliquam in sapien in, viverra scelerisque lorem. Sed sollicitudin tristique justo tempor venenatis. Phasellus malesuada condimentum porttitor. Sed cursus interdum pulvinar. Curabitur et pharetra purus, vitae condimentum ante. Nulla eu orci eget neque ullamcorper vestibulum. Aliquam erat volutpat. Morbi vitae porta dui, ac blandit lacus. Integer fermentum nunc ut nisi mattis faucibus.

Nam et vehicula massa. Cras ultricies dictum ligula vitae ornare. Mauris cursus eget quam vitae varius. Praesent id luctus ante. Nulla consequat enim erat, sit amet convallis nisi efficitur ut. Maecenas pulvinar, nunc in laoreet ultricies, lacus ipsum suscipit sapien, nec auctor lacus nisl quis nisi. Vivamus nec rutrum diam. Suspendisse ante lacus, tincidunt ut congue vitae, auctor ut diam. Etiam ut luctus neque. Morbi luctus sodales diam sed auctor. Sed ullamcorper posuere nunc et pulvinar. Phasellus dapibus augue non eleifend blandit.

Etiam sagittis ex metus, id accumsan enim tempus a. Vestibulum malesuada, lectus eu pharetra vulputate, nisi sapien congue nisi, eu faucibus ex ipsum ac felis. Vivamus id mi nec ligula facilisis ultricies. Nam semper rutrum sagittis. Suspendisse potenti. Nam efficitur dolor a posuere euismod. Aliquam erat volutpat. Mauris mattis suscipit mauris imperdiet maximus. Vestibulum pharetra odio ac augue aliquam, vel maximus arcu semper. Pellentesque finibus nunc sed turpis posuere bibendum.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ultricies sit amet sem sit amet porta. Integer eu fringilla nunc, id tristique turpis. Curabitur nec convallis dolor. Aliquam a sagittis quam. Etiam sit amet varius est. Nullam ornare ac velit faucibus sagittis. Nullam a aliquam tortor. Aliquam ac quam blandit, aliquet diam sit amet, consectetur tellus. Fusce justo massa, sodales sed nulla sit amet, aliquam consectetur neque. Curabitur interdum sapien eu eros posuere, non sodales ipsum suscipit. Nulla id semper diam, a ultrices odio. Morbi lacinia mollis justo, non blandit libero commodo in. Nulla sapien velit, sollicitudin ac mollis vitae, tempus quis lectus. Fusce iaculis mauris sit amet purus dictum, vitae dignissim ex dignissim.

      Curabitur augue ligula, suscipit nec ex ornare, mollis vehicula nunc. Etiam sit amet rutrum lectus. Donec libero justo, consequat in vulputate sit amet, accumsan a metus. Quisque sit amet massa sit amet mi scelerisque ultrices. Sed in est ut libero bibendum tempor. Praesent mattis dignissim mi. Ut in nunc volutpat, fermentum ex nec, maximus ipsum. Nulla non vehicula ante. Pellentesque arcu turpis, ornare ut lacus ut, viverra malesuada ante. Vestibulum rutrum tortor ac ante tempus accumsan. Etiam faucibus elit pretium, tristique diam quis, bibendum nibh. Nam in leo in neque posuere ornare.
    `;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My test app!</h1>
        </header>
        <p>{lorem}</p>
      </div>
    );
  }
}

export default App;
