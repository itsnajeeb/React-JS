import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const param = useParams()

    return (
        <h1>{param.id} Course Details</h1>
    )
}

export default CourseDetails