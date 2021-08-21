import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import './styles.scss'

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};
function AlbumList({ AlbumList }) {
    return (
        <ul className="album-list"> 
            {AlbumList.map((album) => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
))}
        </ul>
    );
}

export default AlbumList;
