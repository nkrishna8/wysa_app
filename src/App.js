import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './login';
import Chat from './chat';
import ThemeCycler from './ThemeCycler';
import { useDispatch, useSelector } from 'react-redux';
import { bgColorChangeActionCreator, nameActionCreator, themeFlagChangeActionCreator } from './reducers/userReducer';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {

  const globalData = useSelector(state => state);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [name, setName] = useState("");

  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)');
  const [themeFlag, setThemeFlag] = useState(false);

  // console.log(name, "<=====");

  useEffect(() => {
    console.log("themeflag==>>", themeFlag);
  }, [backgroundColor, themeFlag]);

  // const handleColorChange = (color) => {
  //   setBgColor(color);
  //   dispatch(bgColorChangeActionCreator(color));
  // };

  const gradientStyle = {
    // background: 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
    // background: globalData.appThemeFlag ? setBackgroundColor("black") : backgroundColor,
    background: backgroundColor,
    height: "100vh",
    margin: "0"
  };

  const transparentButton = {
    border: 'none',
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: globalData.backgroundColor == 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)' ? '#FFFFFF' : 'black',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }


  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
    dispatch(bgColorChangeActionCreator(event.target.value));

  };

  const switchComponent = () => {
    
    console.log("Switch+++++");
    // navigate('/chat');

    // console.log("Before ThemeFlag:", themeFlag);
    // setThemeFlag(!themeFlag);
    // // setThemeFlag(themeFlag => !themeFlag);

    // console.log("After ThemeFlag:", themeFlag);

    // if (themeFlag === true) {
    //   setBackgroundColor("black");
    //   dispatch(bgColorChangeActionCreator("black"));
    // }

    // else if (themeFlag === false) {
    //   setBackgroundColor("linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)");
    //   dispatch(bgColorChangeActionCreator("linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)"));
    // }

    // dispatch(themeFlagChangeActionCreator(themeFlag));
  }

  return (
    <>
      <div className="App" style={gradientStyle}>
        <div className='Color-change'>
          <input
            type="color"
            value={backgroundColor}
            onChange={handleColorChange}
          />

          <button style={transparentButton} onClick={() => switchComponent()}> Switch Component </button>

        </div>

        {/* <input 
        type="text" 
        placeholder="Or enter color (e.g., green, red, #123456)" 
        onChange={handleColorChange} 
      /> */}
        {/* </div> */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </BrowserRouter>

        {/* <Login /> */}
        {/* <ThemeCycler /> */}

        {/* <h2>DATA:{globalData.name}</h2>
      <input type='text' onChange={e => setName(e.target.value)} />
      <Button variant="outline-primary" onClick={() => dispatch(nameActionCreator(name))}>Send Name </Button> */}
      </div>
    </>


  );
}

export default App;
