import { element } from 'deku';
import StyleSheet from 'stilr';

const styles = StyleSheet.create({
  base: {
    transition: [
      'background-color .5s',
      'box-shadow .5s',
      'transform .5s'
    ],
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    fontSize: '1.5em',
    fontWeight: 300,
    height: '2em',
    padding: '.25em 1em',
    borderRadius: 2,
    boxShadow: '0 .05em 0 rgba(0, 0, 0, 0.3)',
    ':hover': {
      boxShadow: '0 .2em .15em rgba(0, 0, 0, 0.1)',
      transform: 'scale(1.1)'
    }
  },
  primary: {
    backgroundColor: 'tomato',
    ':hover': { backgroundColor: 'red' }
  },
  active: {
    backgroundColor: 'papayawhip',
    color: 'tomato'
  }
});

function toggleActive(event, component, updateState) {
  updateState({
    active: !component.state.active
  });
}

function render (component) {
  const { props, state } = component;
  const classes = [
    styles.base,
    state.active
      ? styles.active
      : styles[props.type] || styles.primary
  ].join(' ');

  return (
    <button class={ classes } onClick={ toggleActive }>
      { props.children }
    </button>
  );
}

export default { render };
