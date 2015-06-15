import { element } from 'deku';
import StyleSheet from 'stilr';

const styles = StyleSheet.create({
  base: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function render (component) {
  const { props, state } = component;
  return (
    <div class={ styles.base }>
      { props.children }
    </div>
  );
}

export default { render };
