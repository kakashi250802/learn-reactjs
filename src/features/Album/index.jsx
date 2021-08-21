import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";
AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const ablumList  = [
        {
            id: 1,
            title: "Mixtape Áng Mây Vô Tình (Remix)",
            thumbnailUrl: "https://photo-playlist-zmp3.zadn.vn/s1/mixtape?src=HavwqN7EYmrDGr6VBegSG044G8Dtry4B0GHNZ6sBm0aCLm-FD8l51ra4Me0tZCS9255HZZ2CpWvUE56DDENA3biuLeaikOXULtu4WcVxmMrTTG6fOUoD8nfaJEKc_P5wJ3a6vIRhop18CWQr9xtBF4bc0RiZlfyyIp1KldVicpvBDWtgJUoMQ2Gq2UXBvv5sU7nOv0srcZqwDMl_2hcjEt5e8UX7zUegRJ5qjGtrwZnYUdE-MgFkR31_9kmAykazQtiZj06fw39f87BWK_-3OJuj5UDNzu9ZFZ96em3xn34jTHBrLgIUXeuXLnQQ2LlVuxGssveBMyUjYDLVfWOMXeV4cXhyMqtQm9BPM7q&cv=1&size=thumb/240_240",
        },
        {
            id: 2,
            title: "Mixtape Em Bằng Lòng Làm Người Bình Thường Ở Bên Cạnh Anh",
            thumbnailUrl: "https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDyymDP0L0H9tsdNrbu0NKpSRjFMMr4CI8a-qOC1NWyRr3I6r0PQNKhLBToK0bOR6DvcdjqnN10TzM29aNyR0L2v9vZHFL4IKEadpj5j7q58x7ETW3qP4qgx8vdNFXj6JhTsce8sIa4Rio2Ur2qJ1Hs_PipVPb5CBgHXmEXW6X5aiooCht5Q12waBDwl95fMPAKpZgaWMbDaeJEE_tG9LMByPjp-BWjLOQqmtVakNXWzxc3HltnDNscuDexbJG952HpX7ydBcBYaoQyqAZKrV-cb8lE1fPgZidpZ2jzWr8bHXEMaJzK7qey2VjYQB0TnzpOmkXfdq_3QlwfQ6cVHdPQZyGPTCJeoVG&cv=1&size=thumb/240_240",
        },   {
            id: 3,
            title: "Mixtape Mang Chủng (Cover)",
            thumbnailUrl: "https://photo-playlist-zmp3.zadn.vn/s2/v3/radio?src=HavwqN7EYmrDGr6VBegUMHOLKPiyqSa4NHLIcsNHoXC9MrV0DeB0HbrR3yKpWPP1MLa9bpJNmXzPMLlEPj7R54zTLuWqsf1M1cvTWp7nba5A81gIVBtHK0fkK8PyiD4E2cCPYskmWrXHQqdGERJN1W9h7OG-veSCKZnAZsZWXba69KAPEEp02mrk0D0BzyS7EcXBZK7WYajzUGlC2_6AJNr_2yf7fS0SBojOc1VunXqeSWcTIVYM678bNfr8-i5CA2DSqXkubK1kSK-LJ-x37pH83C4AW-4PijFenumORZIwXQNsoamdPEVU-R6S3sLy&cv=1&size=thumb/240_240",
        },   
        {
            id: 4,
            title: "Mixtape Từng Cho Nhau (Remix)",
            thumbnailUrl: "https://photo-playlist-zmp3.zadn.vn/s3/mixtape?src=HavwqN7EYmrDGr6VBegSG044GDy-m8f0KGGTtswBXLO00nlGEzc0Kb07IzexszDRMWSPtZI9ZruCMXIFUzlAM00SHeGmcODh6njAipRItY4CLWRq9yw7Tr531lHkdibr0KDVes2Ra7485bkYCvl38rWIMwTYmS8c24i9oM2JaKi9IGRFP9M65KqP2easXi516qzLqnP5GCWXoSux44r0nI77crLGVb28OEtN6dq&cv=1&size=thumb/240_240",
        },
        {
            id: 5,
            title: "Mixtape Lên Xe Đi Em Ơi (Remix)",
            thumbnailUrl: "https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDyzmDX01mH4tplPYLq01XRTRTc0NGq37DbcZeG82L19ZZRPXGqD1qgAUeQKNG51684nnDrk2qeTgZVJaI1CMr3cSCBHOmOVKBLmmT4m7qnAuYEHWcORGXdW9vs6CKX54U1pdOqsI4GLjYRDYYWLLaEwO9-1OrSVSA5daxPb748wjYhVyNHS0d2dAjln9bm6FAGqt_5n2rTezJ2EyN8CLcppCTwdSri5El8nZAmc2qbevZM0wdGO3ZomOz-mJFcUSDpu4FweCP9mNGLP64qrafwl2HHPPtdTs_LKJmKWBvwPxG&cv=1&size=thumb/240_240",
        },

    ];
    return (
        <div>
            <h2>có thể bạn sẽ thích đấy</h2>
            <AlbumList AlbumList={ablumList}/>
        </div>
    );
}

export default AlbumFeature;
