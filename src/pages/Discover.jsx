import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { MdOutlinePlaylistPlay } from "react-icons/md";


const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong , isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetTopChartsQuery(); 

  // check music data
  //console.log(data);

  if (isFetching) return <Loader title="Loading Songs..."/>;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="flex font-bold text-3xl text-white text-left items-center">  
        <MdOutlinePlaylistPlay />Playlist
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data.map((song,index)=>
                <SongCard
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    i={index}
                />
            )}
      </div>

    </div>
  );
};

export default Discover;