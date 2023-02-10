import { View, Text } from 'react-native'
import React from 'react'
import {scale} from 'react-native-size-matters'

export default function Gap({height}:{height:number}) {
  return (
    <View style={{height:scale(height)}}/>
  )
}