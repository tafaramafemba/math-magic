import renderer from 'react-test-renderer'
import Quote from "./Quote";

describe(' Quote Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Quote />)
    expect(tree).toMatchSnapshot();
  });
})