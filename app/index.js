import Button from './button';
import App from './app';
import StyleSheet from 'stilr';
import { element, tree, render } from 'deku';

const root = tree(
  <App>
    <Button type='primary'>Click Me!</Button>
  </App>
);

// Create our style tag for the css
const style = document.createElement('style');

// Render our stylesheet and insert it into our styletag
style.textContent = StyleSheet.render();

// Append styles
document.head.appendChild(style);

// Render doku app
render( root, document.getElementById('root') );
