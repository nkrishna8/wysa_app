import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './login';
import Chat from './chat';
import { useDispatch, useSelector } from 'react-redux';
import { bgColorChangeActionCreator, nameActionCreator, themeFlagChangeActionCreator } from './reducers/userReducer';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginSuccess from './sucessfulLogin';

function App() {

  const globalData = useSelector(state => state);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)');
  const [themeFlag, setThemeFlag] = useState(false);


  useEffect(() => {
    console.log("themeflag==>>", themeFlag);
  }, [backgroundColor, themeFlag]);

  // const handleColorChange = (color) => {
  //   setBgColor(color);
  //   dispatch(bgColorChangeActionCreator(color));
  // };

  const gradientStyle = {
    // background: 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
    background: backgroundColor,
    height: "100vh",
    margin: "0"
  };

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
    dispatch(bgColorChangeActionCreator(event.target.value));

  };

  const changeTheme = () => {
    console.log("PPPPPP+++");
    let color=backgroundColor == "linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)"? "black":"linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)"
    setBackgroundColor(color);
    dispatch(bgColorChangeActionCreator(color));

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
  let text_color = globalData.backgroundColor !== 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)' ? '#FFFFFF' : 'black';
  return (
    <>
      <div className="App" style={gradientStyle}>

        <div className='Color-change'>
          {/* <input
            type="color"
            value={backgroundColor}
            onChange={handleColorChange}
          /> */}
          
          {/* <i class="bi bi-moon-stars" style={{ fontSize: "45px", color:"white" }}></i> */}
          <label style={{color:text_color}}>{backgroundColor!=="black"?" Light  ":" Dark  "}</label>
          <i class={backgroundColor!=="black"?"bi bi-brightness-high-fill":"bi bi-moon-stars"} style={{ fontSize: "45px", color:backgroundColor=="black"? "white":"black" }} onClick={changeTheme} ></i>
        </div>

        {/* <input 
        type="text" 
        placeholder="Or enter color (e.g., green, red, #123456)" 
        onChange={handleColorChange} 
      /> */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/proiledashboard' element={<LoginSuccess />} />
          </Routes>
        </BrowserRouter>

        {/* <Login /> */}

        {/* <h2>DATA:{globalData.name}</h2>
      <input type='text' onChange={e => setName(e.target.value)} />
      <Button variant="outline-primary" onClick={() => dispatch(nameActionCreator(name))}>Send Name </Button> */}

      </div>
    </>


  );
}

export default App;
