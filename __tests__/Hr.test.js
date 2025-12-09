import React from 'react';
import renderer from 'react-test-renderer';
import Hr from '../src/index';

describe('Hr Component', () => {
  it('renders a solid line without text', () => {
    const tree = renderer.create(<Hr />).toJSON();
    expect(tree).toBeTruthy();
    expect(tree.type).toBe('View');
    expect(tree.props.style).toMatchObject({
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 8,
      marginRight: 8,
    });
  });

  it('renders with custom margins', () => {
    const tree = renderer.create(<Hr marginLeft={50} marginRight={20} />).toJSON();
    expect(tree.props.style).toMatchObject({
      marginLeft: 50,
      marginRight: 20,
    });
  });

  it('renders with text', () => {
    const tree = renderer.create(<Hr text="react-native" />).toJSON();
    expect(tree).toBeTruthy();
    // When text is present, it should have three children (line, text, line)
    expect(tree.children).toHaveLength(3);
  });

  it('renders with custom text style', () => {
    const textStyle = { color: 'red', fontSize: 20 };
    const tree = renderer.create(
      <Hr text="styled text" textStyle={textStyle} />
    ).toJSON();
    expect(tree).toBeTruthy();
    expect(tree.children).toHaveLength(3);
    // Check that middle child contains text
    const textElement = tree.children[1];
    expect(textElement.type).toBe('View');
  });

  it('renders with custom line style', () => {
    const lineStyle = { backgroundColor: 'blue', height: 4 };
    const tree = renderer.create(
      <Hr lineStyle={lineStyle} />
    ).toJSON();
    expect(tree).toBeTruthy();
  });

  it('renders with both line and text styles', () => {
    const lineStyle = { backgroundColor: 'blue', height: 2 };
    const textStyle = { color: 'green', fontSize: 20 };
    const tree = renderer.create(
      <Hr
        text="styled"
        lineStyle={lineStyle}
        textStyle={textStyle}
      />
    ).toJSON();
    expect(tree).toBeTruthy();
    expect(tree.children).toHaveLength(3);
  });

  it('uses default margins when not specified', () => {
    const tree = renderer.create(<Hr />).toJSON();
    expect(tree.props.style.marginLeft).toBe(8);
    expect(tree.props.style.marginRight).toBe(8);
  });

  it('renders correctly without text (single line)', () => {
    const tree = renderer.create(<Hr />).toJSON();
    // Without text, should render a single line
    expect(tree.children.length).toBeGreaterThanOrEqual(1);
  });
});
