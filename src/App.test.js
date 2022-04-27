import renderer from 'react-test-renderer'
import App from "./App";

describe(' App Component Rendering ', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<App />)
        expect(tree).toMatchSnapshot();
    });
})
