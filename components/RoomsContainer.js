import React, { useContext } from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer, RoomContext } from '../context'
import Loading from './Loading'

function RoomsContainer(props){
    const context = useContext(RoomContext);
    console.log(context)
    const {loading,sortedRooms,rooms} = context;
    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default RoomsContainer;

// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//         {
//             (value) => {
//                 const {loading,sortedRooms,rooms} = value
//                 if (loading) {
//                     return <Loading/>
//                 }
//                 return (
//                     <div>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 )
//             }
//         }
//         </RoomConsumer>
//     )
// }
