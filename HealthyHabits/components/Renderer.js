import React from 'react'
import { Text, View } from 'react-native'
import Card from './Card'

export default function Renderer() {
const array = Array(100).fill(1).map((n, i) => n + i)
    const data = array
    const key = array.keys()
return (
    data.map((card, key) =>
        <Card card={card} key={key}/>
    )
)}