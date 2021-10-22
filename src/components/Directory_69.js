import React, { useState } from 'react';
import Menultem_69 from '../components/MenuItem_69';
import './Directory_69.scss'
import items from './menu-item-data'


const Directory_69 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div className="directory-menu">
            {menuItems.map((item) => {
                const { id, name, remoteUrl, size } = item;
                return (
                    <Menultem_69
                        id={id} name={name}
                        remoteUrl={remoteUrl}
                        size={size} />


                );
            })}
        </div>



    );
};

export default Directory_69;
