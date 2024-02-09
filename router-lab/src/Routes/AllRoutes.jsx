import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

function AllRoutes() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    );
};

export default AllRoutes;