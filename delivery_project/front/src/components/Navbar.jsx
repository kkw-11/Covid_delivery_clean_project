import React, { Component } from 'react'
import styled from 'styled-components';
import { Menu, Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

const Navbar = () => {

    const history = useHistory();
    
    return (
        <div>
          <Menu pointing secondary>
            <Menu.Item onClick={() => {history.push('/')}} >
                <Font1>클린한끼</Font1>
                <Button 
                    icon="utensils" 
                    style={{ 
                        backgroundColor: "transparent", 
                        padding: "0"
                    }}
                />
            </Menu.Item>
            <Menu.Item onClick={() => {history.push('/menu')}} >
                <Font2>Menu</Font2>
            </Menu.Item>
            <Menu.Item onClick={() => {history.push('/cleanMap')}} >
                <Font2>Clean Map</Font2>
            </Menu.Item>
            <Menu.Item onClick={() => {history.push('/storeDetail')}} >
                <Font2>Clean Store</Font2>
            </Menu.Item>
            <Menu.Item onClick={() => {history.push('/about')}} >
                <Font2>About</Font2>
            </Menu.Item>
          </Menu>
        </div>
      )
}

export default Navbar;

const Font1 = styled.p`
    font-family: "Elice Digital Baeum",sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: #8B4513;
`

const Font2 = styled.p`
    font-family: "Elice Digital Baeum",sans-serif;
    font-size: 16px;
    color: #8B4513;
`
