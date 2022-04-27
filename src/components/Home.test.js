import renderer from 'react-test-renderer'
import Home from "./Home";

describe(' Home Component Rendering ', () =>{
    it('renders correctly', () => {
        const tree = renderer
            .create(<Home />)
        expect(tree).toMatchSnapshot();
    });
})