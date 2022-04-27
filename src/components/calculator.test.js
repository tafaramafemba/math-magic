import renderer from 'react-test-renderer'
import Calculator from "./calculator";

describe(' Calculator Component Rendering ', () =>{
    it('renders correctly', () => {
        const tree = renderer
            .create(<Calculator />)
        expect(tree).toMatchSnapshot();
    });
})
