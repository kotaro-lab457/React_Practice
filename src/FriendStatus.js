import React, { useState, useDebugValue } from 'react'

const FriendStatus = () => {
    const [isOnline,setIsOnline] = useState(null)
    useDebugValue(isOnline ? 'Online' : 'Offline')
    return(
        isOnline
    ) 
    
}

export default FriendStatus