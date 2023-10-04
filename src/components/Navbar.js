import { Box, Button, Slider } from "@mui/material";
import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { DataContext } from "../Context/Context";

export default function Navbar() {
  let {
    handleSearch,
    Btncolor,
    BtnCategory,
    handleCateg,
    handleColor,
    handleChange,
    value,
  } = useContext(DataContext);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
          </li>

          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>

          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>

          <li>
            <NavLink to={"/testimonials"}>Testimonials</NavLink>
          </li>
        </ul>

        <div className="second_line">
          <div className="input_box_in_navbar ">
            <form>
              <input type="text" placeholder="Search" onInput={handleSearch} />
              <button>search</button>
            </form>
          </div>

          <div className="button_box_in_navbar border_div">
            {BtnCategory.map((btn, index) => {
              return (
                <Button
                  key={index}
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleCateg(btn)}
                >
                  {btn.length > 0 ? btn : "All"}
                </Button>
              );
            })}
          </div>

          <div className="button_box_in_navbar border_div">
            {Btncolor.map((btn, index) => {
              return (
                <Button
                  key={index}
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleColor(btn)}
                >
                  {btn.length > 0 ? btn : "All"}
                </Button>
              );
            })}
          </div>
        </div>
        {/* <br />
        <br />
        <br />

        <div className="range_box_in_navbar">
          <Box sx={{ width: 300 }}>
            <Slider
              value={value}
              onChange={(e) => handleChange(e)}
              valueLabelDisplay="auto"
              max={1500}
            />
          </Box>
        </div> */}
      </nav>
      <Outlet />
    </>
  );
}
