import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises            
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  )
}

export default Home