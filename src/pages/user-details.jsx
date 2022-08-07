import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { userService } from "../services/user.service"

export const UserDetails = ({ history }) => {

    const [user, setUser] = useState({})
    const { userId } = useParams()

    useEffect(() => {
        (async () => {
            try {
                const userToDisplay = await userService.getById(userId)
                if (!userToDisplay) history.push('/user')
                setUser(userToDisplay)
            } catch (err) {
                console.error(err)
            }
        })();
    }, [])

    const goBack = () => {
        history.push('/user')
    }
    return <React.Fragment>
        <div className="user-details-page flex">
            <div className="img-container">
                <img src={user.imgUrl} />
            </div>
            <div className="user-details">
                <h1>{user.name}</h1>
                <h3>{user.email}</h3>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum recusandae est fugit dignissimos quidem nesciunt assumenda iusto perspiciatis dolore praesentium ipsam magni officia doloribus, hic expedita eveniet iste! A, obcaecati.</p>
        <button className="go-back-btn" onClick={goBack}>Go Back</button>
    </React.Fragment>
}