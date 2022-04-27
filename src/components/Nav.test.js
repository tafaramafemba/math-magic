import renderer from 'react-test-renderer'
import Nav from "./Nav";
import { BrowserRouter}  from 'react-router-dom';

describe(' Nav Component Rendering ', () =>{
    it('renders correctly', () => {
        const tree = renderer
            .create( <BrowserRouter><Nav /></BrowserRouter>)
        expect(tree).toMatchSnapshot();
    });
})
