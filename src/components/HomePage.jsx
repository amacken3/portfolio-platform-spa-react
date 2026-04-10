import React, { useState } from 'react'

function HomePage ({ projects, onAddProject }) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSerachChange(e) {
        setSearchTerm(e.target.value);
    }

}