import React from "react"
import Wrapper from "./../src/components/Wrapper"
import Mushroom from "./../src/components/Mushroom"
import Woodear from "./../src/components/Woodear"
import Shrimp from "./../src/components/Shrimp"
import Meat from "./../src/components/Meat"

export const baseTonIng = {
    "wrapper": 8,
    "mushroom": 0.5,
    "woodear": 0.75,
    "shrimp": 0.25,
    "meat": 4.5
  }

export const tonIngInfo = {
    "wrapper": {
        name: '雲吞皮',
        img: <Wrapper/>,
    },
    "mushroom": {
        name: '香菇',
        img: <Mushroom/>,
    },
    "woodear": {
        name: '木耳',
        img: <Woodear/>,
    },
    "shrimp": {
        name: '蝦',
        img: <Shrimp/>,
    },
    "meat": {
        name: '豬肉',
        img: <Meat/>,
    }
}